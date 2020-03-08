import { AppSettingsState } from "./Store";
import { Answer, Question, Difficulty } from "../constants";

type ResetQuizStateAction = ["RESET_QUIZ_STATE"];
type AnswerQuestionAction = ["ANSWER_QUESTION", Answer];

type IncreaseDifficultyAction = ["INCREASE_DIFFICULTY"];
type DecreaseDifficultyAction = ["DECREASE_DIFFICULTY"];
type IncreaseQuestionCountAction = ["INCREASE_QUESTION_COUNT"];
type DecreaseQuestionCountAction = ["DECREASE_QUESTION_COUNT"];

type UpdateSettingsAction = ["UPDATE_SETTINGS", Partial<AppSettingsState>];

type FetchQuestionsAction = ["FETCH_QUESTIONS"];
type FetchQuestionsSuccessAction = ["FETCH_QUESTIONS_SUCCESS", Question[]];
type FetchQuestionsErrorAction = ["FETCH_QUESTIONS_ERROR", string];

export type Action =
  | ResetQuizStateAction
  | AnswerQuestionAction
  | IncreaseDifficultyAction
  | DecreaseDifficultyAction
  | IncreaseQuestionCountAction
  | DecreaseQuestionCountAction
  | FetchQuestionsAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction
  | UpdateSettingsAction;
