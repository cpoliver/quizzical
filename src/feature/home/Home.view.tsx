import React from "react";

type HomeProps = {
  onQuizStarted: () => void;
  questionCount: number;
};

export const Home: React.FC<HomeProps> = ({ onQuizStarted, questionCount }) => {
  return (
    <div>
      <h1>Welcome to Quizzical</h1>
      <h2>The Trivia Challenge</h2>
      <p>You will be presented with {questionCount} True or False questions.</p>
      <p>Can you score 100%</p>
      <button onClick={() => console.log("goto settings")}>Settings</button>
      <button onClick={onQuizStarted}>Begin</button>
    </div>
  );
};
