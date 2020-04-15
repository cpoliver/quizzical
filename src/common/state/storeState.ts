import { repeat } from "ramda";

import {
  Answer,
  Question,
  Difficulty,
  QUESTION_COUNT_INCREMENT,
} from "../constants";
import { questions as mockQuestions } from "../../features/quiz/quizData";

// Quiz State

export type QuizState = {
  error: string | null;
  isLoading: boolean;
  answers: Answer[];
  questions: Question[];
  currentQuestion: number;
};

const questionCount = QUESTION_COUNT_INCREMENT * 2;

export const initQuizState: QuizState = {
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

// Store State

export type StoreState = QuizState & QuizSettingsState;

export const initState: StoreState = {
  ...initQuizState,
  ...initQuizSettingsState,
};

export const mockState: StoreState = {
  ...mockQuizState,
  ...initQuizSettingsState,
};
