import React, { useContext } from "react";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { toResults } from "./quizUtils";
import { TrueButton, FalseButton } from "./AnswerButton";
import { Html } from "../../common/components/Html";
import { Progress } from "../../common/components/Progress";
import { QuestionResult } from "../../common/constants";
import { store } from "../../common/state/Store";

export const Results: React.FC = () => {
  const {
    state: { questions, answers },
    dispatch,
  } = useContext(store);

  const results = toResults(questions, answers);
  const score = results.filter((result: QuestionResult) => result.is_correct)
    .length;
  const total = questions.length;

  return (
    <Flex variant="wrapper">
      <Box variant="header">
        <Heading fontSize={3} textAlign="center" mb={2} color="primary">
          {score / total >= 0.5 ? "WELL DONE" : "BETTER LUCK NEXT TIME"}!
        </Heading>
        <Progress current={score} total={total}>
          <>
            YOU ANSWERED{" "}
            <strong>
              {score}/{total}
            </strong>{" "}
            QUESTIONS CORRECTLY
          </>
        </Progress>
      </Box>
      <Flex
        variant="content"
        flexDirection="column"
        overflowY="scroll"
        pt={150}
      >
        {results.map((result: QuestionResult, i: number) => (
          <Result key={i} {...result} />
        ))}
      </Flex>
      <Box variant="footer">
        <Button onClick={() => dispatch(["RESET_QUIZ_STATE"])} p={5}>
          Play Again?
        </Button>
      </Box>
    </Flex>
  );
};

const Result: React.FC<QuestionResult> = ({
  question,
  is_correct,
  given_answer,
  correct_answer,
}) => (
  <Flex p={2} m={2}>
    <Box width={32} mr={3} alignSelf="center">
      {is_correct ? <TrueButton /> : <FalseButton />}
    </Box>
    <Flex flex={1} flexDirection="column">
      <Box>
        <Text fontFamily="body" color="primary">
          <Html html={question} />
        </Text>
      </Box>
      <Box>
        <Text fontFamily="body" color="primary">
          {is_correct ? "Your" : "Correct"} Answer:{" "}
          {is_correct ? given_answer : correct_answer}
        </Text>
      </Box>
    </Flex>
  </Flex>
);
