import React from "react";
import { Box } from "rebass";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "theme-ui";

import { StoreProvider } from "../src/common/state/Store";
import { theme } from "../src/common/theme";

addDecorator(storyFn => (
  <StoreProvider useMocks>
    <ThemeProvider theme={theme}>
      <Box p={5}>{storyFn()}</Box>
    </ThemeProvider>
  </StoreProvider>
));
