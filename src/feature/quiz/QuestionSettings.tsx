import React, { useContext } from "react";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { store } from "../../common/state/Store";
import { MAX_QUESTION_COUNT } from "../../common/constants";

export const QuestionSettings: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { questionCount, difficulty } = state;

  const difficultyStyles = {
    easy: "orange",
    medium: "",
    hard: "",
  };

  return (
    <Flex flexDirection="column" flex={1}>
      <Flex flex={1} justifyContent="center">
        <Button
          variant="answer"
          onClick={() => dispatch(["DECREASE_DIFFICULTY"])}
        >
          -
        </Button>
        <Flex>
          <Box
            sx={{
              flex: 1,
              height: questionCount / MAX_QUESTION_COUNT,
              backgroundColor: "orange",
              width: 50,
            }}
          />
        </Flex>
        <Button
          variant="answer"
          onClick={() => dispatch(["INCREASE_DIFFICULTY"])}
        >
          +
        </Button>
      </Flex>
      <Box>
        <Text>
          <strong>Difficulty:</strong>
          {difficulty}
        </Text>
        <Text>
          <strong>Question Count:</strong>
          {questionCount}
        </Text>
      </Box>
    </Flex>
  );
};
