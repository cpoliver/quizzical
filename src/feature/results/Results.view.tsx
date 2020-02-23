import React from "react";
import { Answer, Question } from "../../App";

type ResultsProps = {
  questions: Question[];
  answers: Answer[];
};

export const Results: React.FC<ResultsProps> = ({ answers, questions }) => {
  const score = questions.filter((q, i) => q.correct_answer === answers[i])
    .length;

  return (
    <div>
      <h1>
        You scored {score} / {questions.length}
      </h1>
      <p>Your Answers</p>
      <pre>{JSON.stringify(answers)}</pre>
      <p>Correct Answers</p>
      <pre>{JSON.stringify(questions.map(q => q.correct_answer))}</pre>
    </div>
  );
};
