import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mapReducer from "./mapSlice";
import listReducer from "./listSlice";
import coordinatesReducer from "./coordinatesSlice";

let sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    map: mapReducer,
    list: listReducer,
    coordinates: coordinatesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
