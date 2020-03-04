import { AppSettingsState } from "./Store";
import { Answer, Question, Difficulty } from "../constants";

type ResetQuizStateAction = ["RESET_QUIZ_STATE"];
type AnswerQuestionAction = ["ANSWER_QUESTION", Answer];

type UpdateDifficultyAction = ["UPDATE_DIFFICULTY", Difficulty];
type UpdateQuestionCountAction = ["UPDATE_QUESTION_COUNT", number];

type UpdateSettingsAction = ["UPDATE_SETTINGS", Partial<AppSettingsState>];

type FetchQuestionsAction = ["FETCH_QUESTIONS"];
type FetchQuestionsSuccessAction = ["FETCH_QUESTIONS_SUCCESS", Question[]];
type FetchQuestionsErrorAction = ["FETCH_QUESTIONS_ERROR", string];

export type Action =
  | ResetQuizStateAction
  | AnswerQuestionAction
  | UpdateDifficultyAction
  | UpdateQuestionCountAction
  | FetchQuestionsAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction
  | UpdateSettingsAction;
