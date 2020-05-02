import React, { ReactNode } from "react";
import { Box, Flex, Heading } from "rebass";

type HeaderProps = {
  title?: ReactNode;
  button?: ReactNode;
  children?: ReactNode;
};

const PADDING = 80;

export const Header: React.FC<HeaderProps> = ({
  title,
  button,
  children,
}: HeaderProps) => (
  <Flex
    as="header"
    sx={{
      alignItems: "stretch",
      borderColor: "faded",
      borderStyle: "solid",
      borderWidth: 0,
      borderBottomWidth: [0, 0, 2],
      flexDirection: "column",
      justifyContent: "center",
      p: [3, 3, 5],
      position: "relative",
      textAlign: "center",
    }}
  >
    <Flex flex={1}>
      <Box width={PADDING} />
      <Box flex={4}>
        <Heading
          sx={{
            color: "primary",
            fontSize: [2, 3],
            mb: 2,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Heading>
      </Box>
      <Box width={PADDING}>{button}</Box>
    </Flex>
    <Box flex={1}>{children}</Box>
  </Flex>
);
