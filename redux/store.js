import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { walterSlice } from "./walterSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [walterSlice.name]: walterSlice.reducer,
    },
    devTools: true,
  });


export const wrapper = createWrapper(makeStore);