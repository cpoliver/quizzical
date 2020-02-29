import React, { createContext, useReducer } from "react";
import { propOr, evolve, append, merge, inc } from "ramda";

import { Action } from "./actions";
import { Answer, Question, QuizState } from "../constants";
import { questions as staticQuestions } from "../../feature/quiz/quizData";

type StoreState = {
  quizState: QuizState;
  error: boolean;
  isLoading: boolean;
  answers: Answer[];
  questions: Question[];
  currentQuestionIndex: number;
};

const initState: StoreState = {
  quizState: "init",
  error: false,
  isLoading: false,
  answers: [],
  questions: staticQuestions,
  currentQuestionIndex: 0,
};

const dispatch: React.Dispatch<Action> = () => {};

const reducer: React.Reducer<StoreState, Action> = (
  state,
  [actionType, payload],
) =>
  propOr(state, actionType, {
    SET_QUIZ_STATE: merge(state, { quizState: payload }),
    FETCH_QUESTIONS: merge(state, { isLoading: true }),
    FETCH_QUESTIONS_COMPLETE: merge({
      isLoading: false,
      questions: payload,
    }),
    ANSWER_QUESTION: evolve(
      { answers: append(payload), currentQuestionIndex: inc },
      state,
    ),
    // ANSWER_QUESTION: { ...state, answers: [...state.answers, payload] },
  });

export const store = createContext({ state: initState, dispatch });

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
