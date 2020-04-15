import React, { useContext, useEffect } from "react";
import { Flex } from "rebass";

import { Question } from "./Question/Question";
import { Results } from "./Results/Results";
import { store } from "../../common/state/Store";
import { Spinner } from "../../common/components";

export const Quiz: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { questionCount, difficulty, currentQuestion, questions } = state;

  const loadQuestions = () =>
    fetch(
      `https://opentdb.com/api.php?amount=${questionCount}&difficulty=${difficulty}&type=boolean`,
    )
      .then(res => res.json())
      .then(data => dispatch(["FETCH_QUESTIONS_SUCCESS", data.results]))
      .catch(err => dispatch(["FETCH_QUESTIONS_ERROR", err]));

  useEffect(() => {
    if (!questions.length) loadQuestions();
  });

  if (!questions.length) return <Spinner />;

  return (
    <Flex flex={1}>
      {currentQuestion === questions.length ? <Results /> : <Question />}
    </Flex>
  );
};
