import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Question } from "./Question";
import { Results } from "./Results";
import { store } from "../../common/state/Store";

export const Quiz: React.FC = () => {
  const { state } = useContext(store);
  const { currentQuestion, questions } = state;

  return currentQuestion === questions.length ? <Results /> : <Question />;
};
