import React, { useContext } from "react";
import { Flex, Button, Box } from "rebass";
import * as hex2rgb from "hex2rgb";

import { Result } from "./Result";
import { toResults } from "../quizUtils";
import { Header, Progress, Footer } from "../../../common/components";
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
    <>
      <Header
        title={score / total >= 0.5 ? "WELL DONE!" : "BETTER LUCK NEXT TIME!"}
      >
        <Progress current={score} total={total}>
          <>
            YOU ANSWERED{" "}
            <strong>
              {score}/{total}
            </strong>{" "}
            QUESTIONS CORRECTLY
          </>
        </Progress>
      </Header>

      <Flex
        flexDirection="column"
        overflowY="scroll"
        px={[4, 4, 8]}
        sx={{
          position: "relative",
        }}
      >
        <Fade />
        <Flex flexDirection="column" overflowY="scroll" py={[2, 2, 6]}>
          {results.map((result: QuestionResult, i: number) => (
            <Result key={i} {...result} />
          ))}
        </Flex>
        <Fade flip />
      </Flex>

      <Footer>
        <Button onClick={() => dispatch(["RESET_QUIZ_STATE"])} p={5}>
          Play Again?
        </Button>
      </Footer>
    </>
  );
};

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
      top: flip ? "initial" : 0,
      bottom: flip ? 0 : "initial",
      left: 0,
      right: 0,
      height: [48, 48, 80],
      position: "absolute",
      flex: 1,
      width: "100%",
    }}
  />
);
