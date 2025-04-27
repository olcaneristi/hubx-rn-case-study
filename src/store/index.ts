import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import questionsReducer from "./slices/questionsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;