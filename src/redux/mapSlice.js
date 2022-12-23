import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    id: 1,
    name: "Westminster",
    coordinates: [51.50071473765912, -0.12469324682543981],
  },
  {
    id: 2,
    name: "Stratford",
    coordinates: [51.54745481111702, -0.008196482789115807],
  },
  {
    id: 3,
    name: "Dalston",
    coordinates: [51.54602938775272, -0.0717644481947517],
  },
  {
    id: 4,
    name: "Wanstead",
    coordinates: [51.576899394202506, 0.023217480504731696],
  },
  {
    id: 5,
    name: "Aboba",
    coordinates: [51.50071473765912, -0.12469324682543981],
  },
  {
    id: 6,
    name: "Mayfare",
    coordinates: [51.51041347115285, -0.14839012684757877],
  },
  {
    id: 7,
    name: "Paddingtone",
    coordinates: [51.516044106897404, -0.17509357850993248],
  },
  {
    id: 8,
    name: "Chelsea",
    coordinates: [51.487463873145536, -0.16882399635797354],
  },
  {
    id: 9,
    name: "Brixtone",
    coordinates: [51.46188700139966, -0.11667563057167324],
  },
  {
    id: 10,
    name: "Peckham",
    coordinates: [51.47059013302138, -0.06756439521294376],
  },
];

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
});

export default mapSlice.reducer;
