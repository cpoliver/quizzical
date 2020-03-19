import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box, Text, Heading, BoxProps } from "rebass";

import { DifficultySelector } from "./DifficultySelector";
import { QuestionCount } from "./QuestionCount";
import { store } from "../../common/state/Store";

export const Home: React.FC = () => {
  const { state, dispatch } = useContext(store);

  if (state.questions.length) dispatch(["RESET_QUIZ_STATE"]);

  const { questionCount, difficulty } = state;

  return (
    <Flex variant="wrapper">
      <Box variant="header" mt={5}>
        <Heading variant="appName">LET'S GET</Heading>
        <Heading variant="appName" fontSize={6}>
          QUiZZ!CAL
        </Heading>
      </Box>
      <Flex variant="content">
        <Text color="primary" fontFamily="body" fontWeight="bold">
          QUESTION SETTINGS
        </Text>
        <QuestionCount />
        <DifficultySelector />
      </Flex>
      <Box variant="footer">
        <Text
          fontFamily="body"
          fontSize={3}
          mx={4}
          mb={6}
          textAlign="center"
          color="primary"
        >
          You will be presented with {questionCount}
          <br />
          {difficulty} True or False questions
        </Text>
        <Link to="/quiz">
          <Button p={5}>PLAY!</Button>
        </Link>
      </Box>
    </Flex>
  );
};
