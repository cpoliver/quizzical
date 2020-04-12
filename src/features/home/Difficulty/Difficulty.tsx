import React, { useContext } from "react";
import { Flex, Button, Text } from "rebass";

import { store } from "../../../common/state/Store";

const buttonStyle = {
  margin: 2,
  cursor: "pointer",
};

export const Difficulty: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { difficulty } = state;

  return (
    <Flex alignItems="center">
      <Button
        onClick={() => dispatch(["DECREASE_DIFFICULTY"])}
        sx={buttonStyle}
        variant="transparent"
      >
        &#x25C0;
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
        onClick={() => dispatch(["INCREASE_DIFFICULTY"])}
        sx={buttonStyle}
        variant="transparent"
      >
        &#x25B6;
      </Button>
    </Flex>
  );
};
