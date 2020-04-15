import React, { useContext } from "react";
import { Flex, Button, Box, Heading } from "rebass";
import * as hex2rgb from "hex2rgb";

import { Result } from "./Result";
import { toResults } from "../quizUtils";
import { Progress } from "../../../common/components";
import { QuestionResult } from "../../../common/constants";
import { store } from "../../../common/state/Store";
import { colors } from "../../../common/theme";

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
      <Box variant="header" sx={{ position: "relative" }}>
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
        <Fade />
      </Box>
      <Flex flexDirection="column" overflowY="scroll" mx={[4, 4, 8]}>
        {results.map((result: QuestionResult, i: number) => (
          <Result key={i} {...result} />
        ))}
      </Flex>
      <Box variant="footer" sx={{ position: "relative" }}>
        <Fade flip />
        <Button onClick={() => dispatch(["RESET_QUIZ_STATE"])} p={5}>
          Play Again?
        </Button>
      </Box>
    </Flex>
  );
};

const FADE_HEIGHT = 50;

const toRgba = (hex: string, alpha: number): string => {
  const [r, g, b] = hex2rgb(hex).rgb;
  return `rgba(${r},${g},${b},${alpha})`;
};

const Fade: React.FC<{ flip?: boolean }> = ({ flip }) => (
  <Box
    sx={{
      background: `linear-gradient(${flip ? 180 : 0}deg, ${toRgba(
        colors.background,
        0,
      )} 0%, ${toRgba(colors.background, 1)} 100%)`,
      bottom: flip ? "initial" : -FADE_HEIGHT,
      top: flip ? -FADE_HEIGHT : "initial",
      height: FADE_HEIGHT,
      position: "absolute",
      flex: 1,
      width: "100%",
    }}
  />
);
