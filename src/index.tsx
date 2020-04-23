import React from "react";
import ReactDOM from "react-dom";
import { Flex, SxStyleProp } from "rebass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";

import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./common/state/Store";
import { theme } from "./common/theme";

import { Home } from "./features/home/Home.view";
import { Quiz } from "./features/quiz/Quiz.view";
import { LayoutTest } from "./common/components/LayoutTest/LayoutTest";

const styles: { [key: string]: SxStyleProp } = {
  inner: {
    flex: "1",
    height: "100%",
    m: "0 auto",
    maxHeight: "50em",
    maxWidth: ["initial", "75%", "50em"],
    minWidth: "20em",
  },
  outer: {
    alignItems: "center",
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/test">
            <LayoutTest />
          </Route>
          <Flex sx={styles.outer}>
            <Flex sx={styles.inner}>
              <Route path="/quiz">
                <Quiz />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Flex>
          </Flex>
        </Switch>
      </Router>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
