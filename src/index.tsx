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
      backgroundColor: "#d0d0d0",
      flex: 1,
      height: "100vh",
      justifyContent: "center",
      width: "100vw",
    }}
  >
    <Flex
      sx={{
        background: "#fdfdfd",
        flex: 1,
        maxWidth: 900,
        height: "100%",
        padding: 10,
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
