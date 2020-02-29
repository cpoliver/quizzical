import React from "react";

import { Answer, Question, QuestionResult } from "../../App";
import { toResults } from "../quiz/Quiz.view";
import { Html } from "../../common/Html";

const Result: React.FC<QuestionResult> = ({
  question,
  is_correct,
  correct_answer,
  given_answer,
}) => (
  <div>
    <p>
      {is_correct ? "✔️" : "❌"} <Html html={question} />
    </p>
    <small>{!is_correct && <p>Correct Answer: {correct_answer}</p>}</small>
    <small>
      <p>Your Answer: {given_answer}</p>
    </small>
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
          {results.map((r: QuestionResult) => (
            <Result {...r} />
          ))}
        </ul>
      </div>
      <button onClick={onQuizRestarted}>Play Again?</button>
    </div>
  );
};
