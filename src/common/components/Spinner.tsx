import React from "react";
import { Flex, Box, Text } from "rebass";

import { Ring } from "../components/Ring";

export const Spinner: React.FC = () => (
  <Flex
    sx={{
      position: "absolute",
      background: "rgba(255,255,255,0.25)",
      // background: "background",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99,
    }}
  >
    {/* <Box height={140} width={140} mt={68.5} mr={1}> */}
    <Box height={140} width={140} mt={2}>
      <Ring />
    </Box>
  </Flex>
);
