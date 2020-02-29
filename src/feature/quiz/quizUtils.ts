import { zipWith } from "ramda";

import { Answer, Question, QuestionResult } from "../../common/constants";

const checkAnswer = (question: Question, answer: Answer): QuestionResult => ({
  ...question,
  given_answer: answer,
  is_correct: question.correct_answer === answer,
});

export const toResults = (questions: Question[], answers: Answer[]) =>
  zipWith(checkAnswer, questions, answers);
