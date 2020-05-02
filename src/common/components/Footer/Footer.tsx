import React from "react";
import { Box, Flex, FlexProps } from "rebass";

export const Footer: React.FC<FlexProps> = ({ children, ...props }) => (
  // @ts-ignore
  <Flex as="footer" p={3} {...props}>
    <Box
      sx={{
        alignSelf: "flex-end",
        flex: 1,
        margin: "0 auto",
        maxWidth: ["initial", 420],
        position: "relative",
      }}
    >
      {children}
    </Box>
  </Flex>
);