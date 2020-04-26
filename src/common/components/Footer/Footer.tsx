import React from "react";
import { Box, Flex } from "rebass";

export const Footer: React.FC = ({ children }) => (
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
        margin: "auto",
        maxWidth: ["initial", 420],
      }}
    >
      {children}
    </Box>
  </Flex>
);
