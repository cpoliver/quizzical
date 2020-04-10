import React from "react";
import { Flex, Box } from "rebass";
import { keyframes } from "@emotion/core";

import { Ring } from "../Ring/Ring";

const ringSize = 140;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
   }
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
   }
`;

export const Spinner: React.FC<{ show?: boolean }> = () => (
  <Flex
    sx={{
      position: "absolute",
      // background: "background",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99,
      animation: `${fade} 0.25s ease-in-out`,
    }}
  >
    <Box
      css={{
        height: ringSize,
        width: ringSize,
        animation: `${spin} 1s infinite linear`,
        position: "relative",
        top: 4,
      }}
    >
      <Ring spinner />
    </Box>
  </Flex>
);
