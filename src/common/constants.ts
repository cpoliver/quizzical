export const DIFFICULTY = ["easy", "medium", "hard"] as const;
export type Difficulty = typeof DIFFICULTY[number];

export type Answer = "True" | "False";

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: Answer;
  incorrect_answers: Answer[];
};

export type QuestionResult = Question & {
  is_correct: boolean;
  given_answer: Answer;
};

export const QUESTION_COUNT_INCREMENT = 5;
export const MAX_QUESTION_COUNT = QUESTION_COUNT_INCREMENT * 10;
export const MIN_QUESTION_COUNT = QUESTION_COUNT_INCREMENT;
