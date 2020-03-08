import React, { useContext } from "react";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { store } from "../../common/state/Store";
import { MAX_QUESTION_COUNT } from "../../common/constants";

export const QuestionSettings: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { questionCount, difficulty } = state;

  const difficultyStyles = {
    easy: "orange",
    medium: "",
    hard: "",
  };

  return (
    <Flex flexDirection="column" flex={1}>
      <Flex flex={1} justifyContent="center" flexDirection="column">
        <Flex flex={1} justifyContent="center">
          <Button
            variant="answer"
            onClick={() => dispatch(["DECREASE_QUESTION_COUNT"])}
          >
            -
          </Button>
          <Box sx={{ position: "relative" }}>
            <Ring
              count={questionCount}
              total={MAX_QUESTION_COUNT}
              radius={80}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            />
            <Flex
              flex={1}
              alignItems="center"
              justifyContent="center"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontFamily="body" fontSize={6} m={0} p={0}>
                  {questionCount}
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Button
            variant="answer"
            onClick={() => dispatch(["INCREASE_QUESTION_COUNT"])}
          >
            +
          </Button>
        </Flex>
        <Flex alignItems="center">
          <Button
            variant="answer"
            onClick={() => dispatch(["DECREASE_DIFFICULTY"])}
          >
            &lt;
          </Button>
          <Text
            fontFamily="body"
            fontSize={1}
            m={0}
            p={0}
            sx={{ textTransform: "uppercase" }}
          >
            {difficulty}
          </Text>
          <Button
            variant="answer"
            onClick={() => dispatch(["INCREASE_DIFFICULTY"])}
          >
            &gt;
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

type RingProps = {
  count: number;
  total: number;
  radius: number;
  stroke?: number;
};

const Ring: React.FC<RingProps> = ({ count, total, radius, stroke = 4 }) => {
  const percent = count / total;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - percent * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      style={{ transform: "rotate(-180deg)" }}
    >
      <circle
        stroke="#92bbf8"
        stroke-dasharray={`${circumference} ${circumference}`}
        stroke-width={stroke}
        fill="transparent"
        r={normalizedRadius}
        cx="50%"
        cy="50%"
      />
      <circle
        stroke="#f8f8f8"
        stroke-dasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset: offset,
        }}
        stroke-width={stroke}
        fill="transparent"
        r={normalizedRadius}
        cx="50%"
        cy="50%"
      />
    </svg>
  );
};
