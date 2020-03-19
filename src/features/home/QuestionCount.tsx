import React, { useContext } from "react";
import { Flex, Button, Box, Text } from "rebass";

import { store } from "../../common/state/Store";
import { MAX_QUESTION_COUNT } from "../../common/constants";
import { colors } from "../../common/theme";

export const QuestionCount = () => {
  const { state, dispatch } = useContext(store);
  const { questionCount } = state;

  const size = 140;
  const offset = size / 5;

  return (
    <Flex justifyContent="center" alignItems="center" my={2}>
      <Button
        onClick={() => dispatch(["DECREASE_QUESTION_COUNT"])}
        sx={{
          position: "relative",
          backgroundColor: "background",
          right: -offset,
          zIndex: 1,
        }}
      >
        <Text fontWeight="bold" fontSize={3}>
          -
        </Text>
      </Button>
      <Box sx={{ position: "relative", height: size, width: size }}>
        <Box flex={1}>
          <Ring count={questionCount} total={MAX_QUESTION_COUNT} />
        </Box>
        <Flex
          sx={{
            alignItems: "center",
            bottom: 0,
            flex: 1,
            justifyContent: "center",
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
          }}
        >
          <Text fontFamily="body" fontSize={6} color="primary">
            {questionCount}
          </Text>
        </Flex>
      </Box>
      <Button
        onClick={() => dispatch(["INCREASE_QUESTION_COUNT"])}
        sx={{
          position: "relative",
          backgroundColor: "background",
          left: -offset,
          zIndex: 1,
        }}
      >
        <Text fontWeight="bold" fontSize={3}>
          +
        </Text>
      </Button>
    </Flex>
  );
};

type RingProps = {
  count: number;
  total: number;
  thickness?: number;
};

const Ring: React.FC<RingProps> = ({ count, total, thickness = 4 }) => {
  const percent = count / total;

  const size = 100;
  const radius = size / 2;
  const normalizedRadius = radius - thickness * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - percent * circumference;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: "rotate(-180deg)" }}
    >
      <circle
        stroke={colors.faded}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeWidth={thickness}
        fill="transparent"
        r={normalizedRadius}
        cx="50%"
        cy="50%"
      />
      <circle
        stroke={colors.primary}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset: offset,
        }}
        strokeWidth={thickness}
        fill="transparent"
        r={normalizedRadius}
        cx="50%"
        cy="50%"
      />
    </svg>
  );
};
