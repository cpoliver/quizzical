import React, { useContext } from "react";
import { Flex, Button, Box, Text } from "rebass";

import { store } from "../../common/state/Store";
import { Ring } from "../../common/components/Ring";
import { MAX_QUESTION_COUNT } from "../../common/constants";

export const QuestionCount = () => {
  const { state, dispatch } = useContext(store);
  const { questionCount } = state;

  const size = 140;
  const offset = size / 5;

  return (
    <Flex justifyContent="center" alignItems="center" my={2}>
      <Button
        variant="questionCount"
        onClick={() => dispatch(["DECREASE_QUESTION_COUNT"])}
        sx={{ right: -offset }}
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
        variant="questionCount"
        sx={{ left: -offset }}
      >
        <Text fontWeight="bold" fontSize={3}>
          +
        </Text>
      </Button>
    </Flex>
  );
};
