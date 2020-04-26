import React, { ReactNode } from "react";
import { Box, Flex, Heading } from "rebass";

type HeaderProps = {
  title?: ReactNode;
  button?: ReactNode;
  children?: ReactNode;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  button,
  children,
}: HeaderProps) => (
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
      <Box flex={1} />
      <Box flex={4}>
        <Heading fontSize={3} textAlign="center" mb={2} color="primary">
          {title}
        </Heading>
      </Box>
      <Box flex={1}>{button}</Box>
    </Flex>
    <Box flex={1}>{children}</Box>
  </Flex>
);
