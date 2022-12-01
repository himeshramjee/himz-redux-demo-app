import React from "react";
import { useSelector, useDispatch } from "react-redux";

export function Counter() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "INC" });
  };

  const decrementCounter = () => {
    dispatch({ type: "DEC" });
  };

  const addTen = () => {
    dispatch({ type: "INC", payload: 10 });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <p>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
        <button onClick={addTen}>+10</button>
      </p>
    </div>
  );
}
