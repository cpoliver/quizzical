import React from "react";
import { Box, Flex } from "rebass";

export const LayoutTest: React.FC = () => (
  <Flex
    sx={{
      alignItems: "center",
      backgroundColor: "tomato",
      bottom: 0,
      flex: 1,
      justifyContent: "center",
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
    }}
  >
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "#666",
        minWidth: 320,
        minHeight: 480,
      }}
    >
      <Box as="header">HEADER</Box>
      <Box
        as="main"
        sx={{
          flex: 1,
          backgroundColor: "#ddd",
        }}
      >
        CONTENT
      </Box>
      <Box as="footer">FOOTER</Box>
    </Flex>
  </Flex>
);
