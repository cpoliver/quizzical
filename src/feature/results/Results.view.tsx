import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { toResults } from "./resultUtils";
import { store } from "../../common/state/Store";
import { QuestionResult } from "../../common/constants";
import { Html } from "../../common/Html";

const Result: React.FC<QuestionResult> = ({
  question,
  is_correct,
  correct_answer,
  given_answer,
}) => (
  <div>
    <div>
      {is_correct ? "✔️" : "❌"} <Html html={question} />
    </div>
    <small>{!is_correct && <p>Correct Answer: {correct_answer}</p>}</small>
    <small>
      <p>Your Answer: {given_answer}</p>
    </small>
  </div>
);

export const Results: React.FC = () => {
  const { state, dispatch } = useContext(store);

  const { answers, questions } = state;

  const results = toResults(questions, answers);
  const score = results.filter(Boolean).length;

  return (
    <div>
      <h1>
        You scored {score} / {questions.length}
      </h1>
      <div>
        <ul>
          {results.map((r: QuestionResult, i: number) => (
            <Result key={i} {...r} />
          ))}
        </ul>
      </div>
      <Link to="/quiz">Play Again?</Link>
      <Link to="/">Main Menu</Link>
    </div>
  );
};
