import React from "react";

import { questions } from "./feature/quiz/quizData";
import { Home } from "./feature/home/Home.view";
import { Quiz } from "./feature/quiz/Quiz.view";
import { Results } from "./feature/results/Results.view";
import { Settings } from "./feature/settings/Settings.view";
import { useState } from "react";

type QuizState = "init" | "started" | "finished";

export type Answer = "True" | "False";

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: Answer;
  incorrect_answers: Answer[];
};

// I prefer camelCase in JS, but will stick with snake_case for consistency
export type QuestionResult = Question & {
  is_correct: boolean;
  given_answer: Answer;
};

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
        <Results
          questions={questions}
          answers={answers}
          onQuizRestarted={() => {
            setQuizState("init");
            setAnswers([]);
          }}
        />
      )}
      {false && <Settings />}
    </div>
  );
};
