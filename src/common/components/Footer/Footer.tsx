import React from "react";
import { Box, Flex, FlexProps } from "rebass";

export const Footer: React.FC<FlexProps> = ({ children, ...props }) => (
  // @ts-ignore
  <Flex as="footer" p={3} {...props}>
    <Box
      sx={{
        // flex: "1 0",
        // alignSelf: "center",
        margin: "auto",
        maxWidth: ["initial", 420],
      }}
    >
      {children}
    </Box>
  </Flex>
);
