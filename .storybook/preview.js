import React from "react";
import { Box } from "rebass";
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter as Router } from "react-router-dom";
import { withA11y } from "@storybook/addon-a11y";
import "@storybook/addon-console";

import { StoreProvider } from "../src/common/state/Store";
import { theme } from "../src/common/theme";

addDecorator((storyFn) => (
  <Router>
    <StoreProvider useMocks>
      <ThemeProvider theme={theme}>
        <Box p={5}>{storyFn()}</Box>
      </ThemeProvider>
    </StoreProvider>
  </Router>
));

addDecorator(withA11y);
