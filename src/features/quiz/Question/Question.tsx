import React, { useContext } from "react";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { FalseButton, TrueButton } from "../AnswerButton/AnswerButton";
import { store } from "../../../common/state/Store";
import { Html, Progress } from "../../../common/components";

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
          children={`${current}/${total}`}
        />
      </Box>
      <Box variant="content">
        <Flex flex={1} m={4}>
          <Text
            sx={{
              fontFamily: "body",
              color: "primary",
              fontSize: [4, 5],
              hyphens: "auto",
              overflowWrap: "break-word",
            }}
          >
            <Html html={question} />
          </Text>
        </Flex>
      </Box>
      <Flex variant="footer" justifyContent="space-between">
        <Button
          variant="transparent"
          onClick={() => dispatch(["ANSWER_QUESTION", "True"])}
        >
          <Box width={80}>
            <TrueButton />
          </Box>
        </Button>
        <Button
          variant="transparent"
          onClick={() => dispatch(["ANSWER_QUESTION", "False"])}
        >
          <Box width={80}>
            <FalseButton />
          </Box>
        </Button>
      </Flex>
    </Flex>
  );
};
