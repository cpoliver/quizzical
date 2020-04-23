import React from "react";
import { Button, Box, Flex } from "rebass";

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
        minHeight: 568,
      }}
    >
      <Flex
        as="header"
        sx={{
          //
          p: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        HEADER
      </Flex>
      <Flex
        as="main"
        sx={{
          flex: 1,
          backgroundColor: "#ddd",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        CONTENT
      </Flex>
      <Flex
        as="footer"
        sx={{
          //
          p: 3,
        }}
      >
        <Button variant="primary">PLAY!</Button>
      </Flex>
    </Flex>
  </Flex>
);
