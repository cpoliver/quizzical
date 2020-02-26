import React from "react";

import { Answer, Question, QuestionResult } from "../../App";
import { toResults } from "../quiz/Quiz.view";

const Result: React.FC<QuestionResult> = ({
  question,
  correct,
  correct_answer,
}) => (
  <div>
    <p>{correct ? "✔️" : "❌"}</p>
    <p>{question}</p>
    {!correct && <p>Correct Answer: {correct_answer}</p>}
  </div>
);

type ResultsProps = {
  questions: Question[];
  answers: Answer[];
  onQuizRestarted: () => void;
};

export const Results: React.FC<ResultsProps> = ({
  answers,
  questions,
  onQuizRestarted,
}) => {
  const results = toResults(questions, answers);
  const score = results.filter(Boolean).length;

  return (
    <div>
      <h1>
        You scored {score} / {questions.length}
      </h1>
      <div>
        <ul>
          {results.map(r => (
            <Result {...r} />
          ))}
        </ul>
      </div>
      <button onClick={onQuizRestarted}>Play Again?</button>
    </div>
  );
};
