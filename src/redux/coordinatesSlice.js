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
    setNewCoordinates: (state, action) => {
      return {
        centerMap: action.payload.load,
        start: action.payload.load,
        end: action.payload.unload,
      };
    },
  },
});

export const { setNewCoordinates } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
