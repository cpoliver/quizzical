export const LANGUAGE = ["english", "spanish", "shouty_english"];
export type Language = keyof typeof LANGUAGE;

export const THEME = ["dark", "light", "g2i"];
export type Theme = keyof typeof THEME;

export const DIFFICULTY = ["easy", "medium", "hard"];
export type Difficulty = keyof typeof DIFFICULTY;

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

export type QuizState = "init" | "started" | "finished";
