import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box, Text, Heading, SxStyleProp } from "rebass";

import { Difficulty } from "./Difficulty/Difficulty";
import { QuestionCount } from "./QuestionCount/QuestionCount";
import { Footer } from "../../common/components";
import { store } from "../../common/state/Store";

const appNameStyles: SxStyleProp = {
  color: "primary",
  fontSize: 5,
  fontWeight: "bold",
  mb: -2,
  textAlign: "center",
  textShadow: "default",
};

const HEADER_FOOTER_HEIGHT = 150;

export const Home: React.FC = () => {
  const { state, dispatch } = useContext(store);

  if (state.questions.length) dispatch(["RESET_QUIZ_STATE"]);

  const { questionCount, difficulty } = state;

  return (
    <>
      <Flex
        height={HEADER_FOOTER_HEIGHT}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Heading sx={appNameStyles}>LET'S GET</Heading>
          <Heading sx={appNameStyles} fontSize={6}>
            QUiZZ!CAL
          </Heading>
        </Box>
      </Flex>
      <Flex
        sx={{
          flex: 1,
          flexDirection: "column",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex flex={1} alignItems="flex-end">
          <Text color="primary" fontFamily="body" fontWeight="bold">
            QUESTION SETTINGS
          </Text>
        </Flex>
        <QuestionCount />
        <Box flex={1}>
          <Difficulty />
        </Box>
        <Text
          sx={{
            fontFamily: "body",
            fontSize: 2,
            position: "absolute",
            bottom: "15%",
            textAlign: "center",
            color: "primary",
          }}
        >
          You will be presented with {questionCount}
          <br />
          {difficulty.toUpperCase()} True or False questions
        </Text>
      </Flex>
      <Footer height={HEADER_FOOTER_HEIGHT}>
        <Link to="/quiz">
          <Button alignSelf="flex-end" p={5}>
            PLAY!
          </Button>
        </Link>
      </Footer>
    </>
  );
};
