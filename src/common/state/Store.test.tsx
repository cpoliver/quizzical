import { evolve, take, inc, assoc } from "ramda";

import {
  initState,
  reducer,
  StoreState,
  AppSettingsState,
  difficultyToNumber,
} from "./Store";
import { Answer, MAX_QUESTION_COUNT, MIN_QUESTION_COUNT } from "../constants";
import { questions } from "../../features/quiz/quizData";

const state: { [key: string]: StoreState } = {
  init: initState,
  loading: assoc("isLoading", true, initState),
  easy: assoc("difficulty", "easy", initState),
  hard: assoc("difficulty", "hard", initState),
  inProgress: evolve(
    {
      currentQuestion: inc,
      questions: take(2),
      answers: (): Answer[] => ["True", "False"],
    },
    initState,
  ) as StoreState,
};

describe("difficulty to number", () => {
  it("should return the correct number for the given difficulty", () => {
    const easy = difficultyToNumber("easy");
    const medium = difficultyToNumber("medium");
    const hard = difficultyToNumber("hard");

    expect(easy).toEqual(0);
    expect(medium).toEqual(1);
    expect(hard).toEqual(2);
  });
});

describe("reset quiz state", () => {
  it("should update the quizState", () => {
    const actual = reducer(state.inProgress, ["RESET_QUIZ_STATE"]);

    expect(actual).toEqual(state.init);
  });
});

describe("increase difficulty", () => {
  it("should increase the difficulty, when not at the maximum", () => {
    const actual = reducer(state.init, ["INCREASE_DIFFICULTY"]);

    expect(actual).toEqual({
      ...state.init,
      difficulty: "hard",
    });
  });

  it("should loop around to the minimum difficulty, when at the maximum", () => {
    const actual = reducer(state.hard, ["INCREASE_DIFFICULTY"]);

    expect(actual).toEqual(state.easy);
  });
});

describe("decrease difficulty", () => {
  it("should decrease the difficulty, when not at the minimum", () => {
    const actual = reducer(state.init, ["DECREASE_DIFFICULTY"]);

    expect(actual).toEqual({
      ...state.init,
      difficulty: "easy",
    });
  });

  it("should loop around to the maximum difficulty, when at the minimum", () => {
    const actual = reducer(state.easy, ["DECREASE_DIFFICULTY"]);

    expect(actual).toEqual(state.hard);
  });
});

describe("increase question count", () => {
  it("should increase the question count, when not at the maximum", () => {
    const actual = reducer(state.init, ["INCREASE_QUESTION_COUNT"]);

    expect(actual).toEqual({
      ...state.init,
      questionCount: 15,
      previousQuestionCount: 10,
    });
  });

  it("should do nothing to the question count, when at the maximum", () => {
    const maxQs = { ...state.init, questionCount: MAX_QUESTION_COUNT };
    const actual = reducer(maxQs, ["INCREASE_QUESTION_COUNT"]);

    expect(actual).toEqual({
      ...maxQs,
      previousQuestionCount: MAX_QUESTION_COUNT,
    });
  });
});

describe("decrease question count", () => {
  it("should decrease the question count, when not at the minimum", () => {
    const actual = reducer(state.init, ["DECREASE_QUESTION_COUNT"]);

    expect(actual).toEqual({
      ...state.init,
      questionCount: 5,
      previousQuestionCount: 10,
    });
  });

  it("should do nothing to the question count, when at the minimum", () => {
    const minQs = { ...state.init, questionCount: MIN_QUESTION_COUNT };
    const actual = reducer(minQs, ["DECREASE_QUESTION_COUNT"]);

    expect(actual).toEqual({
      ...minQs,
      previousQuestionCount: MIN_QUESTION_COUNT,
    });
  });
});

describe("update settings", () => {
  it("should merge the app settings when changing some settings", () => {
    const theme = "g2i";
    const actual = reducer(state.init, ["UPDATE_SETTINGS", { theme }]);

    expect(actual).toEqual({
      ...state.init,
      settings: {
        theme,
        language: "english",
        showIntroAnimations: true,
      },
    });
  });

  it("should update the app settings when changing all settings", () => {
    const settings = {
      language: "spanish",
      showIntroAnimations: false,
      theme: "dark",
    };

    const actual = reducer(state.init, [
      "UPDATE_SETTINGS",
      settings as AppSettingsState,
    ]);

    expect(actual).toEqual({
      ...state.init,
      settings,
    });
  });
});

describe("fetch questions", () => {
  it("should trigger the loading state", () => {
    const actual = reducer(state.init, ["FETCH_QUESTIONS"]);

    expect(actual).toEqual(state.loading);
  });
});

describe("fetch questions error", () => {
  it("should update the quiz state", () => {
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
  it("should update the quiz state", () => {
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
