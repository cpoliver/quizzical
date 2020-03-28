import React from "react";
import { Flex, Box, Text } from "rebass";

export const Spinner: React.FC = () => (
  <Flex
    sx={{
      position: "absolute",
      background: "rgba(255,255,255,0.25)",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99,
    }}
  >
    <Box>Loading...</Box>
  </Flex>
);
