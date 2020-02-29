import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Answer, QuizState } from "./common/constants";
import { StoreProvider } from "./common/state/Store";
import { store } from "./common/state/Store";
import { questions } from "./feature/quiz/quizData";
import { Home } from "./feature/home/Home.view";
import { Quiz } from "./feature/quiz/Quiz.view";
import { Results } from "./feature/results/Results.view";
// import { Settings } from "./feature/settings/Settings.view";

const App: React.FC = () => {
  const { state, dispatch } = useContext(store);

  const { answers, quizState } = state;

  const setQuizState = (quizState: QuizState) =>
    dispatch(["SET_QUIZ_STATE", quizState]);

  const currentQuestion = answers.length;
  const lastQuestion = questions.length - 1;

  const handleQuestionAnswered = (answer: Answer) => {
    dispatch(["ANSWER_QUESTION", answer]);

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
          }}
        />
      )}
    </div>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
