import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  centerMap: [51.50071473765912, -0.12469324682543981],
  start: null,
  end: null,
};

export const coordinatesSlice = createSlice({
  name: "coordinates",
  initialState,
  reducers: {
    incrementByAmounts: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmounts } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
