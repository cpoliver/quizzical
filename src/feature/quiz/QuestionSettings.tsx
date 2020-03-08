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
      <Flex flex={1} justifyContent="center">
        <Button
          variant="answer"
          onClick={() => dispatch(["DECREASE_DIFFICULTY"])}
        >
          -
        </Button>
        <Box flex={1}>
          <Ring
            count={questionCount}
            total={MAX_QUESTION_COUNT}
            stroke={2}
            radius={120}
          />
        </Box>
        <Button
          variant="answer"
          onClick={() => dispatch(["INCREASE_DIFFICULTY"])}
        >
          +
        </Button>
      </Flex>
      <Box>
        <Text>
          <strong>Difficulty:</strong>
          {difficulty}
        </Text>
        <Text>
          <strong>Question Count:</strong>
          {questionCount}
        </Text>
      </Box>
    </Flex>
  );
};

type RingProps = {
  count: number;
  total: number;
  radius: number;
  stroke?: number;
};

const Ring: React.FC<RingProps> = ({ count, total, radius, stroke = 2 }) => {
  const percent = count / total;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - percent * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="white"
        stroke-dasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset: offset,
        }}
        stroke-width={stroke}
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};
