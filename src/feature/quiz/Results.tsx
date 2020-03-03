import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { toResults } from "./quizUtils";
import { Html } from "../../common/components/Html";
import { store } from "../../common/state/Store";
import { QuestionResult } from "../../common/constants";

export const Results: React.FC = () => {
  const {
    state: { questions, answers },
    dispatch,
  } = useContext(store);

  const results = toResults(questions, answers);
  const score = results.filter(Boolean).length;

  return (
    <div>
      <h1>
        You scored {score} / {questions.length}
      </h1>
      <div>
        <ul>
          {results.map((result: QuestionResult, i: number) => (
            <div key={i}>
              {result.is_correct ? "✔️" : "❌"} <Html html={result.question} />
              <small>
                {result.is_correct ? (
                  <p>Your Answer: {result.given_answer}</p>
                ) : (
                  <p>Correct Answer: {result.correct_answer}</p>
                )}
              </small>
            </div>
          ))}
        </ul>
      </div>
      <button onClick={() => dispatch(["RESET_QUIZ_STATE"])}>
        Play Again?
      </button>
      <Link to="/">Main Menu</Link>
    </div>
  );
};
