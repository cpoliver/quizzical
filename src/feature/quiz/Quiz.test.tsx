import { take } from "ramda";

import { Answer } from "../../App";
import { questions as allQuestions } from "./quizData";
import { toResults } from "./Quiz.view";

const questions = take(3, allQuestions);

const answers = {
  allCorrect: ["True", "False", "True"],
  someCorrect: ["True", "True", "False"],
  noneCorrect: ["False", "True", "False"],
};

describe("toResults", () => {
  it("should score correctly when all answers are correct", () => {
    const actual = toResults(questions, answers.allCorrect as Answer[]);

    expect(actual).toEqual([
      {
        correct: true,
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        correct: true,
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        correct: true,
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
    ]);
  });

  it("should score correctly when some answers are incorrect", () => {
    const actual = toResults(questions, answers.someCorrect as Answer[]);

    expect(actual).toEqual([
      {
        correct: true,
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        correct: false,
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        correct: false,
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
    ]);
  });

  it("should score correctly when no answers are correct", () => {
    const actual = toResults(questions, answers.noneCorrect as Answer[]);

    expect(actual).toEqual([
      {
        correct: false,
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
      {
        correct: false,
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        correct: false,
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      },
    ]);
  });
});
