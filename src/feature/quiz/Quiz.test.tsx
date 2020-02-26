import { questions } from "./quizData";
import { toResults } from "./Quiz.view";

const answers = {
  allCorrect: [
    "True",
    "False",
    "True",
    "True",
    "True",
    "True",
    "False",
    "False",
    "True",
    "True",
  ],
  someCorrect: [
    "True",
    "True",
    "True",
    "True",
    "False",
    "True",
    "False",
    "False",
    "False",
    "False",
  ],
  noneCorrect: [
    "False",
    "True",
    "False",
    "False",
    "False",
    "False",
    "True",
    "True",
    "False",
    "False",
  ],
};

describe("toResults", () => {
  it("should score correctly when all answers are correct", () => {
    const actual = toResults(questions, answers.allCorrect);

    expect(actual).toEqual([
      [questions[0], true],
      [questions[1], true],
      [questions[2], true],
      [questions[3], true],
      [questions[4], true],
      [questions[5], true],
      [questions[6], true],
      [questions[7], true],
      [questions[8], true],
      [questions[9], true],
    ]);
  });

  it("should score correctly when some answers are incorrect", () => {
    const actual = toResults(questions, answers.someCorrect);

    expect(actual).toEqual([
      [questions[0], true],
      [questions[1], false],
      [questions[2], true],
      [questions[3], true],
      [questions[4], false],
      [questions[5], true],
      [questions[6], true],
      [questions[7], true],
      [questions[8], false],
      [questions[9], false],
    ]);
  });

  it("should score correctly when no answers are correct", () => {
    const actual = toResults(questions, answers.noneCorrect);

    expect(actual).toEqual([
      [questions[0], false],
      [questions[1], false],
      [questions[2], false],
      [questions[3], false],
      [questions[4], false],
      [questions[5], false],
      [questions[6], false],
      [questions[7], false],
      [questions[8], false],
      [questions[9], false],
    ]);
  });
});
