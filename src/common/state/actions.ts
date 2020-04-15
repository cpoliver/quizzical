import { Answer, Question } from "../constants";

type ResetQuizStateAction = ["RESET_QUIZ_STATE"];
type AnswerQuestionAction = ["ANSWER_QUESTION", Answer];

type IncreaseDifficultyAction = ["INCREASE_DIFFICULTY"];
type DecreaseDifficultyAction = ["DECREASE_DIFFICULTY"];
type IncreaseQuestionCountAction = ["INCREASE_QUESTION_COUNT"];
type DecreaseQuestionCountAction = ["DECREASE_QUESTION_COUNT"];

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
  | FetchQuestionsErrorAction;
