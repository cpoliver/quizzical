import React, { useContext } from "react";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { store } from "../../common/state/Store";
import { Html } from "../../common/components/Html";
import { Progress } from "../../common/components/Progress";

export const Question: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { currentQuestion: current, questions } = state;

  const { category, question } = questions[current];
  const total = questions.length;

  return (
    <Flex flexDirection="column" flex={1}>
      <Heading fontSize={2} textAlign="center" mb={2}>
        {category}
      </Heading>
      <Progress current={current} total={total} label={`${current}/${total}`} />
      <Flex flex={1} m={4}>
        <Text fontFamily="body">
          <Html html={question} />
        </Text>
      </Flex>
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
