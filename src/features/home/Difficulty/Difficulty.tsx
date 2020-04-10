import React, { useContext } from "react";
import { Flex, Button, Text } from "rebass";

import { store } from "../../../common/state/Store";

export const Difficulty: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { difficulty } = state;

  return (
    <Flex alignItems="center">
      <Button
        variant="transparent"
        onClick={() => dispatch(["DECREASE_DIFFICULTY"])}
      >
        &lt;
      </Button>
      <Text
        color="primary"
        fontFamily="body"
        fontSize={3}
        fontWeight="bold"
        m={0}
        p={0}
        sx={{ textTransform: "uppercase" }}
      >
        {difficulty}
      </Text>
      <Button
        variant="transparent"
        onClick={() => dispatch(["INCREASE_DIFFICULTY"])}
      >
        &gt;
      </Button>
    </Flex>
  );
};
