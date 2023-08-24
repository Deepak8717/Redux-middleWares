import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [ThunkMiddleware],
});

export default store;
