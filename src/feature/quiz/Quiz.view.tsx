import React, { useContext } from "react";

import { Html } from "../../common/Html";
import { store } from "../../common/state/Store";
import { Answer, Question, QuestionResult } from "../../common/constants";

const checkAnswer = (question: Question, answer: Answer): QuestionResult => ({
  ...question,
  given_answer: answer,
  is_correct: question.correct_answer === answer,
});

export const Quiz: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { currentQuestionIndex, questions } = state;
  const { question, category } = questions[currentQuestionIndex];

  return (
    <div>
      <h1>{category}</h1>
      <div>
        <Html html={question} />
      </div>
      <p>
        {currentQuestionIndex + 1} of {questions.length}
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
