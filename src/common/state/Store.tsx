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

import { initQuizState, initState, mockState, StoreState } from "./storeState";
import { Action } from "./actions";
import {
  Difficulty,
  DIFFICULTY,
  MAX_QUESTION_COUNT,
  QUESTION_COUNT_INCREMENT,
  MIN_QUESTION_COUNT,
} from "../constants";

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
