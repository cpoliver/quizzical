import React, { createContext, useReducer } from "react";
import {
  always,
  propOr,
  evolve,
  repeat,
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
  MAX_QUESTION_COUNT,
  QUESTION_COUNT_INCREMENT,
  MIN_QUESTION_COUNT,
} from "../constants";
import { questions as mockQuestions } from "../../features/quiz/quizData";

// Quiz State

type QuizState = {
  error: string | null;
  isLoading: boolean;
  answers: Answer[];
  questions: Question[];
  currentQuestion: number;
};

const questionCount = QUESTION_COUNT_INCREMENT * 2;

const initQuizState: QuizState = {
  error: null,
  isLoading: false,
  answers: [],
  questions: [],
  currentQuestion: 0,
};

const mockQuizState: QuizState = {
  error: null,
  isLoading: false,
  answers: repeat("False", questionCount) as Answer[],
  questions: mockQuestions,
  currentQuestion: 0,
};

// Quiz Settings State

type QuizSettingsState = {
  difficulty: Difficulty;
  questionCount: number;
  previousQuestionCount: number;
};

const initQuizSettingsState: QuizSettingsState = {
  difficulty: "medium",
  questionCount,
  previousQuestionCount: questionCount,
};

// App Settings State

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

// Store State

export type StoreState = QuizState &
  QuizSettingsState & { settings: AppSettingsState };

export const initState: StoreState = {
  ...initQuizState,
  ...initQuizSettingsState,
  settings: initAppSettingsState,
};

export const mockState: StoreState = {
  ...mockQuizState,
  ...initQuizSettingsState,
  settings: initAppSettingsState,
};

// Reducer

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
          difficultyToNumber(state.difficulty) + 1 < DIFFICULTY.length
            ? difficultyToNumber(state.difficulty) + 1
            : 0
        ],
    }),
    DECREASE_DIFFICULTY: merge({
      difficulty:
        DIFFICULTY[
          (difficultyToNumber(state.difficulty) > 0
            ? difficultyToNumber(state.difficulty)
            : DIFFICULTY.length) - 1
        ],
    }),
    INCREASE_QUESTION_COUNT: merge({
      questionCount: Math.min(
        state.questionCount + QUESTION_COUNT_INCREMENT,
        MAX_QUESTION_COUNT,
      ),
      previousQuestionCount: state.questionCount,
    }),
    DECREASE_QUESTION_COUNT: merge({
      questionCount: Math.max(
        state.questionCount - QUESTION_COUNT_INCREMENT,
        MIN_QUESTION_COUNT,
      ),
      previousQuestionCount: state.questionCount,
    }),

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

// Context & Provider

export const store = createContext({ state: initState, dispatch });

export const StoreProvider: React.FC<{ useMocks?: boolean }> = ({
  useMocks = false,
  children,
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    useMocks ? mockState : initState,
  );

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
