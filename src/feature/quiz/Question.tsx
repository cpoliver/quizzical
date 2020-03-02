import React, { useContext } from "react";

import { store } from "../../common/state/Store";
import { Html } from "../../common/components/Html";

export const Question: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { currentQuestion, questions } = state;

  const { category, question } = questions[currentQuestion];

  return (
    <div>
      <h1>{category}</h1>
      <div>
        <Html html={question} />
      </div>
      <p>
        {currentQuestion + 1} of {questions.length}
      </p>
      <div>
        <button onClick={() => dispatch(["ANSWER_QUESTION", "True"])}>
          TRUE
        </button>
        <button onClick={() => dispatch(["ANSWER_QUESTION", "False"])}>
          FALSE
        </button>
      </div>
    </div>
  );
};
