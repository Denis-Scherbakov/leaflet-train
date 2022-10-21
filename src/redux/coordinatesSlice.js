import { createSlice } from "@reduxjs/toolkit";

// const initialState = [[51.50071473765912, -0.12469324682543981], []];

const initialState = {
  centerMap: [51.50071473765912, -0.12469324682543981],
  start: null,
  end: null,
};

export const coordinatesSlice = createSlice({
  name: "coordinates",
  initialState,
  reducers: {
    increments: (state) => {
      state.value += 1;
    },
    decrements: (state) => {
      state.value -= 1;
    },
    incrementByAmounts: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increments, decrements, incrementByAmounts } =
  coordinatesSlice.actions;

export default coordinatesSlice.reducer;
