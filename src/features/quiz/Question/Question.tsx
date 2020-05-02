import React, { useContext } from "react";
import { Flex, Button, Box, Text } from "rebass";
import { useHistory } from "react-router-dom";

import { FalseButton, TrueButton } from "../AnswerButton/AnswerButton";
import {
  Html,
  Progress,
  Header,
  Footer,
  IconButton,
} from "../../../common/components";
import { store } from "../../../common/state/Store";

export const Question: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { currentQuestion: current, questions } = state;

  const { category, question } = questions[current];
  const total = questions.length;

  const history = useHistory();

  return (
    <Flex flexDirection="column" flex={1}>
      <Header
        title={category}
        button={<IconButton icon="home" onClick={() => history.push("/")} />}
      >
        <Progress
          current={current}
          total={total}
          children={`${current}/${total}`}
        />
      </Header>
      <Box flex={1} px={[2, 8]}>
        <Flex flex={1} m={4}>
          <Text
            sx={{
              fontFamily: "body",
              color: "primary",
              fontSize: [4, 5, 6],
              hyphens: "auto",
              overflowWrap: "break-word",
            }}
          >
            <Html html={question} />
          </Text>
        </Flex>
      </Box>
      <Footer>
        <Flex justifyContent="space-between">
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
      </Footer>
    </Flex>
  );
};
