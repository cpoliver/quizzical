import { Answer, Question, Language, Theme } from "../constants";

export type Action =
  | ResetQuizStateAction
  | FetchQuestionsAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsFailAction
  | AnswerQuestionAction
  | SkipQuestionAction;

type ResetQuizStateAction = ["RESET_QUIZ_STATE"];

type FetchQuestionsAction = ["FETCH_QUESTIONS"];

type FetchQuestionsSuccessAction = ["FETCH_QUESTIONS_SUCCESS", Question[]];

type FetchQuestionsFailAction = ["FETCH_QUESTIONS_FAIL", string];

type AnswerQuestionAction = ["ANSWER_QUESTION", Answer];

type SkipQuestionAction = ["SKIP_QUESTION"];
