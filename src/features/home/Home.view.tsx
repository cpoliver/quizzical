import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box, Text, Heading, BoxProps } from "rebass";

import { store } from "../../common/state/Store";
import { QuestionSettings } from "../quiz/QuestionSettings";

export const Home: React.FC = () => {
  const { state, dispatch } = useContext(store);

  if (state.questions.length) dispatch(["RESET_QUIZ_STATE"]);

  const { questionCount, difficulty } = state;

  return (
    <Flex variant="wrapper">
      <Box variant="header">
        <Heading
          color="white"
          fontSize={5}
          fontWeight="bold"
          textAlign="center"
          mb={-2}
        >
          LET'S GET
        </Heading>
        <Heading
          color="white"
          fontSize={6}
          fontWeight="bold"
          textAlign="center"
        >
          QUiZZ!CAL
        </Heading>
      </Box>
      <Flex variant="content">
        <Text fontFamily="body" my={3} textAlign="center">
          You will be presented with {questionCount} {difficulty} True or False
          questions.
        </Text>
        <QuestionSettings />
      </Flex>
      <Box variant="footer">
        <Link to="/quiz">
          <Button variant="default" width="100%" p={4}>
            PLAY!
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
