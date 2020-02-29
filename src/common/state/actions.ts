import { Answer, Question, Language, Theme, QuizState } from "../constants";

export type Action =
  | SetQuizStateAction
  | FetchQuestionsAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsFailAction
  | AnswerQuestionAction
  | SkipQuestionAction;

type SetQuizStateAction = ["SET_QUIZ_STATE", QuizState];

type FetchQuestionsAction = ["FETCH_QUESTIONS", null];

type FetchQuestionsSuccessAction = ["FETCH_QUESTIONS_SUCCESS", Question[]];

type FetchQuestionsFailAction = ["FETCH_QUESTIONS_FAIL", string];

type AnswerQuestionAction = ["ANSWER_QUESTION", Answer];

type SkipQuestionAction = ["SKIP_QUESTION", null];
