import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { toResults } from "./quizUtils";
import { Html } from "../../common/components/Html";
import { store } from "../../common/state/Store";
import { QuestionResult } from "../../common/constants";

export const Results: React.FC = () => {
  const {
    state: { questions, answers },
    dispatch,
  } = useContext(store);

  const results = toResults(questions, answers);
  const score = results.filter((result: QuestionResult) => result.is_correct)
    .length;

  return (
    <Flex flexDirection="column">
      <Heading>
        You scored {score} / {questions.length}
      </Heading>
      <Flex flexDirection="column">
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
