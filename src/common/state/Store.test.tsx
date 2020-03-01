import { initState, reducer } from "./Store";

describe("set quiz state", () => {
  it("should update the quizState", () => {
    const toInit = reducer(initState, ["SET_QUIZ_STATE", "init"]);
    const toStarted = reducer(initState, ["SET_QUIZ_STATE", "started"]);
    const toFinished = reducer(initState, ["SET_QUIZ_STATE", "finished"]);

    expect(toInit).toEqual({
      ...initState,
      quizState: "init",
    });

    expect(toStarted).toEqual({
      ...initState,
      quizState: "started",
    });

    expect(toFinished).toEqual({
      ...initState,
      quizState: "finished",
    });
  });
});
