import React from "react";
import { Flex, Box, Text } from "rebass";

type ProgressProps = {
  current: number;
  total: number;
};

export const Progress: React.FC<ProgressProps> = ({
  children,
  current,
  total,
}) => (
  <Flex flexDirection="column" px={2}>
    <Flex sx={{ backgroundColor: "faded", height: 4, width: "100%" }}>
      <Box
        sx={{
          height: 4,
          backgroundColor: "primary",
        }}
        width={current / total}
      ></Box>
    </Flex>
    {children && (
      <Text
        alignSelf="flex-end"
        fontFamily="body"
        fontSize={0}
        fontWeight="semi"
        mt={2}
        textAlign="right"
        color="primary"
      >
        {children}
      </Text>
    )}
  </Flex>
);
