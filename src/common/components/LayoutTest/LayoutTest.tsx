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
        margin: [0, 100],
        maxHeight: 900,
        maxWidth: 1080,
        minHeight: 568,
        minWidth: 320,
      }}
    >
      <Flex
        as="header"
        sx={{
          alignItems: "stretch",
          flexDirection: "column",
          justifyContent: "center",
          p: 3,
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
          alignItems: "center",
          backgroundColor: "#ddd",
          flex: 1,
          justifyContent: "center",
          p: 3,
        }}
      >
        CONTENT
      </Flex>
      <Flex
        as="footer"
        sx={{
          p: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            alignSelf: "center",
            backgroundColor: "tomato",
            margin: "auto",
            maxWidth: ["initial", 420],
          }}
        >
          <Button variant="primary">PLAY!</Button>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);
