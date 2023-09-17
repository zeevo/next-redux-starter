import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { AnimalsSlice, AnimalsSliceName } from "./slices/animals";
import {
  TypedUseSelectorHook,
  useDispatch as ReduxUseDispatch,
  useSelector as ReduxUseSelector,
} from "react-redux";

const makeStore = () =>
  configureStore({
    reducer: {
      [AnimalsSliceName]: AnimalsSlice,
    },
  });

export const wrapper = createWrapper(makeStore);

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = ReduxUseDispatch;

export const useSelector: TypedUseSelectorHook<AppState> = ReduxUseSelector;
