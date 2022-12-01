import { createStore } from "redux";
// import rootReducer from "./reducers";

const reducerFn = (
  state = {
    counter: 0,
  },
  action
) => {
  // Limitations of Reducer Functions
  // 1. Should be synchronous and not use any async mechanisms
  // 2. Should not modify the original state
  if (action.type === "INC") {
    if (!action.payload) {
      return { counter: state.counter + 1 };
    }

    return { counter: state.counter + action.payload };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  return state;
};

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export const reduxStore = createStore(reducerFn);
