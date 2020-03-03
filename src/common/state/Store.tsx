import React, { createContext, useReducer } from "react";
import { always, propOr, evolve, append, merge, flip, inc } from "ramda";

import { Action } from "./actions";
import { Answer, Question, Language, Theme } from "../constants";
import { questions as staticQuestions } from "../../feature/quiz/quizData";

type QuizState = {
  error: string | null;
  isLoading: boolean;
  answers: Answer[];
  questions: Question[];
  currentQuestion: number;
};

const initQuizState: QuizState = {
  error: null,
  isLoading: false,
  answers: [],
  questions: staticQuestions,
  currentQuestion: 0,
};

export type SettingsState = {
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

const mergeFlipped = flip(merge);

export const reducer: React.Reducer<StoreState, Action> = (
  state,
  [actionType, payload],
) => {
  const actionMap = {
    RESET_QUIZ_STATE: mergeFlipped(initQuizState),
    FETCH_QUESTIONS: mergeFlipped({ isLoading: true }),
    FETCH_QUESTIONS_ERROR: mergeFlipped({
      isLoading: false,
      error: payload,
    }),
    FETCH_QUESTIONS_SUCCESS: mergeFlipped({
      isLoading: false,
      error: null,
      questions: payload,
    }),
    ANSWER_QUESTION: evolve({ answers: append(payload), currentQuestion: inc }),
    SKIP_QUESTION: evolve({ answers: append(null), currentQuestion: inc }),
  };

  const actionHandler: (state: StoreState) => StoreState = propOr(
    always,
    actionType,
    actionMap,
  );

  return actionHandler(state);
};

export const store = createContext({ state: initState, dispatch });

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
