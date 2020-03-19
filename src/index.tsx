import React from "react";
import ReactDOM from "react-dom";
import { Flex } from "rebass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";

import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./common/state/Store";
import { theme } from "./common/theme";

import { Home } from "./features/home/Home.view";
import { Quiz } from "./features/quiz/Quiz.view";
import { Settings } from "./features/settings/Settings.view";

ReactDOM.render(
  <Flex
    backgroundColor="rgba(0,0,0,0.25)"
    margin="0 auto"
    flex="1"
    maxWidth="52em"
  >
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Router>
          <Switch>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </StoreProvider>
    </ThemeProvider>
  </Flex>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
