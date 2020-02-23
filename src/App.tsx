import React from "react";

import { Home } from "./feature/home/Home.view";
import { Quiz } from "./feature/quiz/Quiz.view";
import { Results } from "./feature/results/Results.view";
import { useState } from "react";

type QuizState = "init" | "started" | "finished";

export type Answer = string | "True" | "False";

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: Answer;
  incorrect_answers: Answer[];
};

const questions: Question[] = [
  {
    category: "Vehicles",
    type: "boolean",
    difficulty: "hard",
    question:
      "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "hard",
    question:
      "This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "hard",
    question:
      "&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

export const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>("init");
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentQuestion = answers.length;
  const lastQuestion = questions.length - 1;

  const handleQuestionAnswered = (answer: Answer) => {
    setAnswers([...answers, answer]);

    if (currentQuestion === lastQuestion) {
      setQuizState("finished");
    }
  };

  return (
    <div>
      {quizState === "init" && (
        <Home
          onQuizStarted={() => setQuizState("started")}
          questionCount={questions.length}
        />
      )}
      {quizState === "started" && (
        <Quiz
          questions={questions}
          currentQuestion={currentQuestion}
          onQuestionAnswered={handleQuestionAnswered}
        />
      )}
      {quizState === "finished" && (
        <Results questions={questions} answers={answers} />
      )}
    </div>
  );
};
