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
        <Flex flex={1} backgroundColor="tomato" justifyContent="center">
          <Button
            variant="answer"
            onClick={() => dispatch(["DECREASE_QUESTION_COUNT"])}
          >
            -
          </Button>
          <Ring
            count={questionCount}
            total={MAX_QUESTION_COUNT}
            stroke={2}
            radius={120}
          />
          <Button
            variant="answer"
            onClick={() => dispatch(["INCREASE_QUESTION_COUNT"])}
          >
            +
          </Button>
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Button
          variant="answer"
          onClick={() => dispatch(["DECREASE_DIFFICULTY"])}
        >
          &lt;
        </Button>
        <Text>
          <strong>Difficulty:</strong>
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
        cx="50%"
        cy="50%"
      />
    </svg>
  );
};
