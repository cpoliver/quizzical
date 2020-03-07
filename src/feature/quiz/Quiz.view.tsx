import React, { useContext, useEffect } from "react";
import { Flex, Box, Text, Heading } from "rebass";

import { Question } from "./Question";
import { Results } from "./Results";
import { store } from "../../common/state/Store";

export const Quiz: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { questionCount, difficulty, currentQuestion, questions } = state;

  const API_URL = `https://opentdb.com/api.php?amount=${questionCount}&difficulty=${difficulty}&type=boolean`;

  const loadQuestions = () =>
    fetch(API_URL)
      .then(res => res.json())
      .then(data => dispatch(["FETCH_QUESTIONS_SUCCESS", data.results]))
      .catch(err => dispatch(["FETCH_QUESTIONS_ERROR", err]));

  useEffect(() => {
    if (!questions.length) loadQuestions();
  });

  if (!questions.length) {
    return <Flex>loading...</Flex>;
  }

  return currentQuestion === questions.length ? <Results /> : <Question />;
};
