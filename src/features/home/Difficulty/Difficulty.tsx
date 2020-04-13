import React, { useContext } from "react";
import { Flex, Button, Text, SxStyleProp } from "rebass";

import { store } from "../../../common/state/Store";

const buttonStyle: SxStyleProp = {
  cursor: "pointer",
  mx: 2,
  p: 0,
  position: "relative",
  top: "-2%",
};

export const Difficulty: React.FC = () => {
  const { state, dispatch } = useContext(store);
  const { difficulty } = state;

  return (
    <Flex alignItems="center" justifyContent="center">
      <Button
        onClick={() => dispatch(["DECREASE_DIFFICULTY"])}
        sx={buttonStyle}
        variant="transparent"
      >
        <Text fontSize={0}>&#x25C0;</Text>
      </Button>
      <Text
        sx={{
          color: "primary",
          fontFamily: "body",
          fontSize: 3,
          fontWeight: "bold",
          m: 0,
          p: 0,
          textAlign: "center",
          textTransform: "uppercase",
          width: "5rem",
        }}
      >
        {difficulty}
      </Text>
      <Button
        onClick={() => dispatch(["INCREASE_DIFFICULTY"])}
        sx={buttonStyle}
        variant="transparent"
      >
        <Text fontSize={0}>&#x25B6;</Text>
      </Button>
    </Flex>
  );
};
