import React from "react";
import { Flex } from "rebass";

export const Shell: React.FC = ({ children }) => (
  <Flex
    sx={{
      alignItems: "center",
      bottom: 0,
      flex: 1,
      justifyContent: "center",
      left: 0,
      maxHeight: "100vh",
      position: "absolute",
      right: 0,
      top: 0,
    }}
  >
    <Flex
      sx={{
        flex: 1,
        flexDirection: "column",
        height: "100%",
        margin: "auto",
        maxHeight: 1024,
        maxWidth: 960,
        minHeight: 568,
        minWidth: 320,
        p: [0, 4],
      }}
    >
      {children}
    </Flex>
  </Flex>
);
