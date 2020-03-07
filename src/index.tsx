import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Flex } from "rebass";
import { ThemeProvider } from "theme-ui";

import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./common/state/Store";
import { theme } from "./common/theme";

import { Home } from "./feature/home/Home.view";
import { Quiz } from "./feature/quiz/Quiz.view";
import { Settings } from "./feature/settings/Settings.view";

const Shell: React.FC = ({ children }) => (
  <Flex
    sx={{
      alignItems: "center",
      color: "primary",
      flex: 1,
      height: "100vh",
      justifyContent: "center",
    }}
  >
    <Flex
      sx={{
        backgroundColor: "rgba(0,0,0,0.2)",
        flex: 1,
        maxWidth: 400,
        minHeight: 480,
        minWidth: 320,
        padding: 5,
      }}
    >
      {children}
    </Flex>
  </Flex>
);

const App: React.FC = () => (
  <Shell>
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
  </Shell>
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
