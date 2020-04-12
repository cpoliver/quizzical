import React from "react";
import { Box } from "rebass";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter as Router } from "react-router-dom";

import { StoreProvider } from "../src/common/state/Store";
import { theme } from "../src/common/theme";

addDecorator(storyFn => (
  <Router>
    <StoreProvider useMocks>
      <ThemeProvider theme={theme}>
        <Box p={5}>{storyFn()}</Box>
      </ThemeProvider>
    </StoreProvider>
  </Router>
));
