import React, { createContext, useReducer, useState } from "react";

export const CounterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
        opCount: state.opCount + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload,
        opCount: state.opCount + 1,
      };
    case "RESET":
      return { counter: 0, opCount: 0 };
    default:
      return state;
  }
}

function CounterProvider({ children }) {
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { counter: 0, opCount: 0 });

  return (
    <CounterContext value={{ state, dispatch }}>{children}</CounterContext>
  );
}

export default CounterProvider;
