import React from "react";
import { Flex, Box, Text } from "rebass";

type ProgressProps = {
  current: number;
  total: number;
  label?: string;
};

export const Progress: React.FC<ProgressProps> = ({
  current,
  total,
  label,
}) => {
  return (
    <Flex flexDirection="column">
      <Flex sx={{ backgroundColor: "faded", height: 4, width: "100%" }}>
        <Box
          sx={{
            height: 4,
            backgroundColor: "primary",
          }}
          width={current / total}
        ></Box>
      </Flex>
      <Text variant="body" textAlign="right" alignSelf="flex-end">
        {label}
      </Text>
    </Flex>
  );
};
