import { SettingsState } from "./Store";
import { Answer, Question } from "../constants";

type ResetQuizStateAction = ["RESET_QUIZ_STATE"];

type FetchQuestionsAction = ["FETCH_QUESTIONS"];

type FetchQuestionsSuccessAction = ["FETCH_QUESTIONS_SUCCESS", Question[]];

type FetchQuestionsErrorAction = ["FETCH_QUESTIONS_ERROR", string];

type AnswerQuestionAction = ["ANSWER_QUESTION", Answer];

type SkipQuestionAction = ["SKIP_QUESTION"];

type UpdateSettingsAction = ["UPDATE_SETTINGS", Partial<SettingsState>];

export type Action =
  | ResetQuizStateAction
  | FetchQuestionsAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction
  | AnswerQuestionAction
  | SkipQuestionAction
  | UpdateSettingsAction;
