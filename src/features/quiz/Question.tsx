import React, { useContext } from "react";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { store } from "../../common/state/Store";
import { Html } from "../../common/components/Html";
import { Progress } from "../../common/components/Progress";
import { FalseButton, TrueButton } from "./AnswerButton";

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
      <Flex alignItems="flex-end">
        <Button
          backgroundColor="transparent"
          onClick={() => dispatch(["ANSWER_QUESTION", "True"])}
        >
          <TrueButton />
        </Button>
        <Button
          backgroundColor="transparent"
          onClick={() => dispatch(["ANSWER_QUESTION", "False"])}
        >
          <FalseButton />
        </Button>
      </Flex>
    </Flex>
  );
};
