import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "@rebass/preset";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./common/state/Store";

import { Home } from "./feature/home/Home.view";
import { Quiz } from "./feature/quiz/Quiz.view";
import { Settings } from "./feature/settings/Settings.view";

const App: React.FC = () => (
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
