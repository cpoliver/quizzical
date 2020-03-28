import React from "react";
import { Flex, Box } from "rebass";
import { keyframes } from "@emotion/core";

import { Ring } from "../components/Ring";

const ringSize = 140;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
   }
`;

export const Spinner: React.FC = () => (
  <Flex
    sx={{
      position: "absolute",
      background: "background",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99,
    }}
  >
    <Box
      css={{
        height: ringSize,
        width: ringSize,
        mt: 2,
        animation: `${spin} 1s infinite linear`,
      }}
    >
      <Ring spinner />
    </Box>
  </Flex>
);
