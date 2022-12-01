import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 11 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addTen(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export const reduxStore = configureStore({
  reducer: counterSlice.reducer,
  devTools: process.env.NODE_ENV !== "production",
});
