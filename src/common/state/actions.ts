import { Answer, Question, Language, Theme, QuizState } from "../constants";

const ACTION = {
  SET_QUIZ_STATE: "SET_QUIZ_STATE",
  FETCH_QUESTIONS: "FETCH_QUESTIONS",
  FETCH_QUESTIONS_COMPLETE: "FETCH_QUESTIONS_COMPLETE",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  SKIP_QUESTION: "SKIP_QUESTION",
  UPDATE_SETTINGS: "UPDATE_SETTINGS",
};

type ActionType = keyof typeof ACTION;

export type Action = {
  type: ActionType;
  payload: any;
};

export type SetQuizStateAction = {
  type: typeof ACTION.FETCH_QUESTIONS;
  payload: QuizState;
};

export type FetchQuestionsAction = {
  type: typeof ACTION.FETCH_QUESTIONS;
  payload: null;
};

export type FetchQuestionsCompleteAction = {
  type: typeof ACTION.FETCH_QUESTIONS_COMPLETE;
  payload: {
    error?: boolean | string;
    questions: Question[];
  };
};

export type AnswerQuestionAction = {
  type: typeof ACTION.ANSWER_QUESTION;
  payload: {
    id: string;
    answer: Answer;
  };
};

export type SkipQuestionAction = {
  type: typeof ACTION.SKIP_QUESTION;
  payload: {
    id: string;
  };
};

export type UpdateSettingsAction = {
  type: typeof ACTION.UPDATE_SETTINGS;
  payload: {
    language: Language;
    theme: Theme;
    quizStartAnimations: boolean;
  };
};
