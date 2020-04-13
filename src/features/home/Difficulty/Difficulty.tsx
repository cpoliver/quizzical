import React, { useContext } from "react";
import { Flex, Button, Text, SxStyleProp } from "rebass";

import { store } from "../../../common/state/Store";

const buttonStyle: SxStyleProp = {
  mx: 2,
  p: 0,
  position: "relative",
  top: "-5%",
  cursor: "pointer",
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
        &#x25C0;
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
        &#x25B6;
      </Button>
    </Flex>
  );
};
