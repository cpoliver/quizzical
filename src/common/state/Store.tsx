import React, { createContext, useReducer } from "react";
import { propOr, evolve, append, merge, inc } from "ramda";

import { Action } from "./actions";
import { Answer, Question, Language, Theme } from "../constants";
import { questions as staticQuestions } from "../../feature/quiz/quizData";

type QuizState = {
  error: boolean;
  isLoading: boolean;
  answers: Answer[];
  questions: Question[];
  currentQuestion: number;
};

const initQuizState: QuizState = {
  error: false,
  isLoading: false,
  answers: [],
  questions: staticQuestions,
  currentQuestion: 0,
};

type SettingsState = {
  language: Language;
  theme: Theme;
  showIntroAnimations: boolean;
};

const initSettingsState: SettingsState = {
  language: "english",
  theme: "default",
  showIntroAnimations: true,
};

export type StoreState = QuizState & SettingsState;

export const initState: StoreState = {
  ...initQuizState,
  ...initSettingsState,
};

const dispatch: React.Dispatch<Action> = () => {};

export const reducer: React.Reducer<StoreState, Action> = (
  state,
  [actionType, payload],
) =>
  propOr(state, actionType, {
    RESET_QUIZ_STATE: merge(state, initQuizState),
    FETCH_QUESTIONS: merge(state, { isLoading: true }),
    FETCH_QUESTIONS_COMPLETE: merge({
      isLoading: false,
      questions: payload,
    }),
    ANSWER_QUESTION: evolve(
      { answers: append(payload), currentQuestion: inc },
      state,
    ),
  });

export const store = createContext({ state: initState, dispatch });

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
