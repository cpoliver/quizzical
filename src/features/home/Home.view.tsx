import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { store } from "../../common/state/Store";
import {
  Difficulty,
  DIFFICULTY,
  MAX_QUESTION_COUNT,
  MIN_QUESTION_COUNT,
} from "../../common/constants";
import { QuestionSettings } from "../quiz/QuestionSettings";

export const Home: React.FC = () => {
  const { state, dispatch } = useContext(store);

  if (state.questions.length) dispatch(["RESET_QUIZ_STATE"]);

  const { questionCount, difficulty } = state;

  return (
    <Flex flexDirection="column" flex={1}>
      <Heading fontSize={5} fontWeight="bold" textAlign="center" mb={-2}>
        LET'S GET
      </Heading>
      <Heading fontSize={6} fontWeight="bold" textAlign="center">
        QUiZZ!CAL
      </Heading>
      <Text fontFamily="body" my={3} textAlign="center">
        You will be presented with {questionCount} {difficulty} True or False
        questions.
      </Text>
      <Flex flexDirection="column" flex={1}>
        <QuestionSettings />
      </Flex>
      <Link to="/quiz">
        <Button variant="default" width="100%" p={5} mt={3}>
          PLAY!
        </Button>
      </Link>
    </Flex>
  );
};
