import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux-store/rstore-with-toolkit";

export function Counter() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(actions.increment());
  };

  const decrementCounter = () => {
    dispatch(actions.decrement());
  };

  const addTen = () => {
    dispatch(actions.addTen(10));
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
