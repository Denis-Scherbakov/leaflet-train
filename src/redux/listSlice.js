import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    path: "Wesminster to Stratford",
    load: [51.50071473765912, -0.12469324682543981],
    unload: [51.54745481111702, -0.008196482789115807],
  },
  {
    id: 2,
    path: "Dalston to Wanstead",
    load: [51.54602938775272, -0.0717644481947517],
    unload: [51.576899394202506, 0.023217480504731696],
  },
  {
    id: 3,
    path: "Aboba to Mayfare",
    load: [51.50071473765912, -0.12469324682543981],
    unload: [51.51041347115285, -0.14839012684757877],
  },
  {
    id: 4,
    path: "Paddingtone to Chelsea",
    load: [51.516044106897404, -0.17509357850993248],
    unload: [51.487463873145536, -0.16882399635797354],
  },
  {
    id: 5,
    path: "Brixtone to Peckham",
    load: [51.46188700139966, -0.11667563057167324],
    unload: [51.47059013302138, -0.06756439521294376],
  },
];

export const listSlice = createSlice({
  name: "list",
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

export const { increments, decrements, incrementByAmounts } = listSlice.actions;

export default listSlice.reducer;
