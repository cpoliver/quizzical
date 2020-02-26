import React from "react";
import { zipWith } from "ramda";

import { Answer, Question, QuestionResult } from "../../App";

type QuizProps = {
  questions: Question[];
  currentQuestion: number;
  onQuestionAnswered: (answer: Answer) => void;
};

const checkAnswer = (question: Question, answer: Answer): QuestionResult => ({
  ...question,
  correct: question.correct_answer === answer,
});

export const toResults = (questions: Question[], answers: Answer[]) =>
  zipWith(checkAnswer, questions, answers);

export const Quiz: React.FC<QuizProps> = ({
  questions,
  currentQuestion,
  onQuestionAnswered,
}) => {
  const q = questions[currentQuestion];

  return (
    <div>
      <h1>{q.category}</h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: q.question }} />
      </div>
      <p>
        {currentQuestion + 1} of {questions.length}
      </p>
      <div>
        <button onClick={() => onQuestionAnswered("True")}>TRUE</button>
        <button onClick={() => onQuestionAnswered("False")}>FALSE</button>
      </div>
    </div>
  );
};
