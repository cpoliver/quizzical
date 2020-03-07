import React, { useContext } from "react";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { store } from "../../common/state/Store";
import { Html } from "../../common/components/Html";

export const Question: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { currentQuestion, questions } = state;

  const { category, question } = questions[currentQuestion];

  return (
    <Flex flexDirection="column">
      <Heading>{category}</Heading>
      <Box>
        <Html html={question} />
      </Box>
      <Text>
        {currentQuestion + 1} of {questions.length}
      </Text>
      <Flex>
        <Button
          variant="answer"
          onClick={() => dispatch(["ANSWER_QUESTION", "True"])}
        >
          ✓
        </Button>
        <Button
          variant="answer"
          onClick={() => dispatch(["ANSWER_QUESTION", "False"])}
        >
          ✘
        </Button>
      </Flex>
    </Flex>
  );
};
