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
      <Box variant="header">
        <Heading fontSize={2} textAlign="center" mb={2} color="primary">
          {category}
        </Heading>
        <Progress
          current={current}
          total={total}
          label={`${current}/${total}`}
        />
      </Box>
      <Box variant="content">
        <Flex flex={1} m={4}>
          <Text fontFamily="body" color="primary" fontSize={5}>
            <Html html={question} />
          </Text>
        </Flex>
      </Box>
      <Flex variant="footer" justifyContent="space-between">
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
