import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

// Initial state
const initialState = {
  walcartState: false,
};

// Actual Slice
export const walterSlice = createSlice({
  name: "walter",
  initialState,
  reducers: {
    // Action to set the authentication status
    setWalcartState(state, action) {
      state.walcartState = action.payload;
    },
  },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.walter,
        };
      },
    },
});

export const { setWalcartState } = walterSlice.actions;

export const selectWalcartState = state => state.walter.walcartState;

export default walterSlice.reducer;