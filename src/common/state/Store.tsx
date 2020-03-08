import React, { createContext, useReducer } from "react";
import {
  always,
  propOr,
  evolve,
  append,
  merge as unflippedMerge,
  flip,
  inc,
} from "ramda";

import { Action } from "./actions";
import {
  Answer,
  Question,
  Language,
  Theme,
  Difficulty,
  DIFFICULTY,
} from "../constants";

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
  questions: [],
  currentQuestion: 0,
};

type QuizSettingsState = {
  difficulty: Difficulty;
  questionCount: number;
};

const initQuizSettingsState: QuizSettingsState = {
  difficulty: "medium",
  questionCount: 10,
};

export type AppSettingsState = {
  language: Language;
  theme: Theme;
  showIntroAnimations: boolean;
};

const initAppSettingsState: AppSettingsState = {
  language: "english",
  theme: "default",
  showIntroAnimations: true,
};

export type StoreState = QuizState &
  QuizSettingsState & { settings: AppSettingsState };

export const initState: StoreState = {
  ...initQuizState,
  ...initQuizSettingsState,
  settings: initAppSettingsState,
};

const dispatch: React.Dispatch<Action> = () => {};

const merge = flip(unflippedMerge);

export const difficultyToNumber = (difficulty: Difficulty) =>
  DIFFICULTY.indexOf(difficulty);

export const reducer: React.Reducer<StoreState, Action> = (
  state,
  [actionType, payload],
) => {
  const actionMap = {
    // Quiz State
    RESET_QUIZ_STATE: merge(initQuizState),
    ANSWER_QUESTION: evolve({
      answers: append(payload),
      currentQuestion: inc,
    }),

    // Quiz Settings
    INCREASE_DIFFICULTY: merge({
      difficulty:
        DIFFICULTY[
          Math.min(
            difficultyToNumber(state.difficulty) + 1,
            DIFFICULTY.length - 1,
          )
        ],
    }),
    DECREASE_DIFFICULTY: merge({
      difficulty:
        DIFFICULTY[Math.max(difficultyToNumber(state.difficulty) - 1, 0)],
    }),
    UPDATE_QUESTION_COUNT: merge({ questionCount: payload }),

    // App Settings
    UPDATE_SETTINGS: evolve({ settings: merge(payload) }),

    // Fetch Questions
    FETCH_QUESTIONS: merge({ isLoading: true }),
    FETCH_QUESTIONS_ERROR: merge({
      isLoading: false,
      error: payload,
    }),
    FETCH_QUESTIONS_SUCCESS: merge({
      isLoading: false,
      error: null,
      questions: payload,
    }),
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
