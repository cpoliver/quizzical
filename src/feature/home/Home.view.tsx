import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../../common/state/Store";

import { Difficulty, DIFFICULTY } from "../../common/constants";

export const Home: React.FC = () => {
  const { state, dispatch } = useContext(store);

  if (state.questions.length) dispatch(["RESET_QUIZ_STATE"]);

  const { questionCount, difficulty } = state;

  return (
    <div>
      <h1>Welcome to Quizzical</h1>
      <h2>The Trivia Challenge</h2>
      <p>
        You will be presented with {questionCount} {difficulty} True or False
        questions.
      </p>
      <p>Can you score 100%</p>
      <input
        type="number"
        value={questionCount}
        min={5}
        max={50}
        onChange={({ currentTarget }) =>
          dispatch(["UPDATE_QUESTION_COUNT", +currentTarget.value])
        }
      />
      <select
        onChange={({ currentTarget }) =>
          dispatch(["UPDATE_DIFFICULTY", currentTarget.value as Difficulty])
        }
      >
        {DIFFICULTY.map((d: Difficulty) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <Link to="/quiz">Begin</Link>
    </div>
  );
};
