import React, { createContext, useReducer } from "react";
import { propOr, evolve, append, merge } from "ramda";

import { Answer, Question, QuizState } from "../constants";
import { Action } from "./actions";

type StoreState = {
  quizState: QuizState;
  error: boolean;
  isLoading: boolean;
  answers: Answer[];
  questions: Question[];
};

const initState: StoreState = {
  quizState: "init",
  error: false,
  isLoading: false,
  answers: [],
  questions: [],
};

const dispatch: React.Dispatch<Action> = () => {};

const reducer: React.Reducer<StoreState, Action> = (
  state,
  [actionType, payload],
) => {
  return propOr(state, actionType, {
    SET_QUIZ_STATE: merge(state, { quizState: payload }),
    FETCH_QUESTIONS: merge(state, { isLoading: true }),
    FETCH_QUESTIONS_COMPLETE: merge({
      isLoading: false,
      questions: payload,
    }),
    ANSWER_QUESTION: evolve({ answers: append(payload) }, state),
  });
};

export const store = createContext({ state: initState, dispatch });

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
