import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { DIFFICULTY } from "../../common/constants";
import { store } from "../../common/state/Store";

export const Home: React.FC = ({}) => {
  const { state, dispatch } = useContext(store);

  const [questionCount, setQuestionCount] = useState(10);

  return (
    <div>
      <h1>Welcome to Quizzical</h1>
      <h2>The Trivia Challenge</h2>
      <p>You will be presented with {questionCount} True or False questions.</p>
      <p>Can you score 100%</p>
      <input
        type="number"
        value={questionCount}
        min={5}
        max={50}
        onChange={({ currentTarget }) => setQuestionCount(+currentTarget.value)}
      />
      <select>
        {DIFFICULTY.map(d => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <Link to="/quiz">Begin</Link>
    </div>
  );
};
