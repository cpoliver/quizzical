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
        backgroundColor: "#666",
        flex: 1,
        flexDirection: "column",
        height: "100%",
        // maxHeight: 1080,
        // maxWidth: 1080,
        minHeight: 568,
        minWidth: 320,
      }}
    >
      <Flex
        as="header"
        sx={{
          //
          flexDirection: "column",
          p: 3,
          alignItems: "stretch",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Flex flex={1}>
          <Box flex={1}>Spacer</Box>
          <Box flex={4}>Title</Box>
          <Box flex={1}>Button</Box>
        </Flex>
        <Box flex={1}>Progress</Box>
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
