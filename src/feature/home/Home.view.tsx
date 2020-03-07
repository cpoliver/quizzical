import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box, Text, Heading } from "rebass";

import { store } from "../../common/state/Store";
import { Difficulty, DIFFICULTY } from "../../common/constants";

export const Home: React.FC = () => {
  const { state, dispatch } = useContext(store);

  if (state.questions.length) dispatch(["RESET_QUIZ_STATE"]);

  const { questionCount, difficulty } = state;

  return (
    <Flex flexDirection="column">
      <Heading fontWeight="bold">LET'S GET</Heading>
      <Heading fontWeight="bold" fontSize={6}>
        QUiZZ!CAL
      </Heading>
      <Text>
        You will be presented with {questionCount} {difficulty} True or False
        questions.
      </Text>
      <Text>Can you score 100%</Text>
      <input
        type="number"
        value={questionCount}
        min={5}
        max={50}
        onChange={({ currentTarget }) =>
          dispatch(["UPDATE_QUESTION_COUNT", +currentTarget.value])
        }
      />
      <select
        onChange={({ currentTarget }) =>
          dispatch(["UPDATE_DIFFICULTY", currentTarget.value as Difficulty])
        }
      >
        {DIFFICULTY.map((d: Difficulty) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <Link to="/quiz">
        <Button variant="default">PLAY!</Button>
      </Link>
    </Flex>
  );
};
