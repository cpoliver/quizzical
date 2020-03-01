import { evolve, take, inc } from "ramda";

import { initState, reducer, StoreState } from "./Store";
import { Answer } from "../constants";

const alteredState: StoreState = evolve(
  {
    currentQuestion: inc,
    questions: take(2),
    answers: (): Answer[] => ["True", "False"],
  },
  initState,
);

describe("reset quiz state", () => {
  it("should update the quizState", () => {
    const actual = reducer(alteredState, ["RESET_QUIZ_STATE"]);

    expect(actual).toEqual(initState);
  });
});

// initialize quiz

// load questions
// loading, success, error

// update settings

// answer question

// skip question
