import { evolve, take, inc } from "ramda";

import { initState, reducer, StoreState } from "./Store";
import { Answer } from "../constants";
import { questions } from "../../feature/quiz/quizData";

const state: { [key: string]: StoreState } = {
  init: initState,
  loading: {
    ...initState,
    isLoading: true,
  },
  inProgress: evolve(
    {
      currentQuestion: inc,
      questions: take(2),
      answers: (): Answer[] => ["True", "False"],
    },
    initState,
  ) as StoreState,
};

describe("reset quiz state", () => {
  it("should update the quizState", () => {
    const actual = reducer(state.inProgress, ["RESET_QUIZ_STATE"]);

    expect(actual).toEqual(state.init);
  });
});

describe("fetch questions", () => {
  it("should trigger the loading state", () => {
    const actual = reducer(state.init, ["FETCH_QUESTIONS"]);

    expect(actual).toEqual({
      ...state.init,
      isLoading: true,
    });
  });
});

describe("fetch questions error", () => {
  it("should update the quizState", () => {
    const error = "loading failed";
    const actual = reducer(state.loading, ["FETCH_QUESTIONS_ERROR", error]);

    expect(actual).toEqual({
      ...state.loading,
      isLoading: false,
      error,
    });
  });
});

describe("fetch questions success", () => {
  it("should update the quizState", () => {
    const actual = reducer(state.loading, [
      "FETCH_QUESTIONS_SUCCESS",
      questions,
    ]);

    expect(actual).toEqual({
      ...state.loading,
      isLoading: false,
      error: null,
      questions,
    });
  });
});

describe("answer question", () => {
  it("should update the answers and current question", () => {
    const actual = reducer(state.inProgress, ["ANSWER_QUESTION", "True"]);

    expect(actual).toEqual({
      ...state.inProgress,
      currentQuestion: 2,
      answers: ["True", "False", "True"],
    });
  });
});

describe("skip question", () => {
  it("should update the answers and current question", () => {
    const actual = reducer(state.inProgress, ["SKIP_QUESTION"]);

    expect(actual).toEqual({
      ...state.inProgress,
      currentQuestion: 2,
      answers: ["True", "False", null],
    });
  });
});
