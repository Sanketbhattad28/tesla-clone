import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/carrSlice";

export const store = configureStore({
  reducer: {
    counter: carReducer,
  },
});
