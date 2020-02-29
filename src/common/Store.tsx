import React, { createContext, useReducer } from "react";
import { propOr } from "ramda";

type ActionType = "SET_QUIZ_STATE" | string;

type Action = {
  type: ActionType;
  payload: any;
};

type StoreState = {
  message: string;
};

const initState = {
  message: "hello from ze store",
};

const dispatch: React.Dispatch<Action> = () => {};

const reducer: React.Reducer<StoreState, Action> = (state, action) =>
  propOr(state, action.type, {
    SET_QUIZ_STATE: { ...state, quizState: action.payload },
  });

export const store = createContext({ state: initState, dispatch });

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
