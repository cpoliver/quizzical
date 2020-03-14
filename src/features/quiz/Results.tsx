import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { toResults } from "./quizUtils";
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
    <Flex flexDirection="column" flex={1}>
      <Heading fontSize={3} textAlign="center" mb={2}>
        {score / total >= 0.5 ? "WELL DONE" : "BETTER LUCK NEXT TIME"}
      </Heading>
      <Progress
        current={score}
        total={total}
        label={`You answered ${score} / ${total} questions correctly`}
      />
      <Flex flexDirection="column" overflow="scrollY">
        {results.map((result: QuestionResult, i: number) => (
          <Result key={i} {...result} />
        ))}
      </Flex>
      <Button variant="default" onClick={() => dispatch(["RESET_QUIZ_STATE"])}>
        Play Again?
      </Button>
      <Link to="/">Main Menu</Link>
    </Flex>
  );
};

const Result: React.FC<QuestionResult> = ({
  question,
  is_correct,
  given_answer,
  correct_answer,
}) => (
  <Flex>
    <Box>{is_correct ? "✔️" : "❌"}</Box>
    <Flex flexDirection="column">
      <Box>
        <Html html={question} />
      </Box>
      <Box>
        {is_correct ? (
          <Text>Your Answer: {given_answer}</Text>
        ) : (
          <Text>Correct Answer: {correct_answer}</Text>
        )}
      </Box>
    </Flex>
  </Flex>
);
