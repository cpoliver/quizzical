import React, { useState } from "react";
import { DIFFICULTY } from "../../common/constants";

type HomeProps = {
  onQuizStarted: () => void;
  questionCount: number;
};

export const Home: React.FC<HomeProps> = ({ onQuizStarted }) => {
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
        onChange={({ currentTarget }) =>
          setQuestionCount(parseInt(currentTarget.value, 10))
        }
      />
      <select>
        {DIFFICULTY.map(d => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <button onClick={onQuizStarted}>Begin</button>
    </div>
  );
};
