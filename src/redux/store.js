import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mapReducer from "./mapSlice";
import listReducer from "./listSlice";

let sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    map: mapReducer,
    list: listReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
