import React from "react";
import { Flex, Box, Text } from "rebass";

import { TrueButton, FalseButton } from "../AnswerButton/AnswerButton";
import { Html } from "../../../common/components";
import { QuestionResult } from "../../../common/constants";

export const Result: React.FC<QuestionResult> = ({
  question,
  is_correct,
  given_answer,
  correct_answer,
}) => (
  <Flex p={3} m="auto" width="100%">
    <Box width={32} mr={3} alignSelf="center">
      {is_correct ? <TrueButton /> : <FalseButton />}
    </Box>
    <Flex flex={1} flexDirection="column" justifyContent="space-between" my={3}>
      <Box flex={1}>
        <Text fontSize={4} fontFamily="body" color="primary">
          <Html html={question} />
        </Text>
      </Box>
      <Box mt={1}>
        <Text
          sx={{
            color: "primary",
            fontFamily: "body",
            fontSize: 0,
            textTransform: "uppercase",
          }}
        >
          {is_correct ? "Your" : "Correct"} Answer:{" "}
          <strong>{is_correct ? given_answer : correct_answer}</strong>
        </Text>
      </Box>
    </Flex>
  </Flex>
);
