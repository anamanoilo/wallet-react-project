import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleModalAddTransaction: (state) => !state.isModalAddTransactionOpen,
    toggleModalLogout: (state) => !state.isModalLogoutOpen,
    toggleIsLoading: (state) => !state.isLoading,
  },
});

export const { toggleModalAddTransaction, toggleModalLogout, toggleIsLoading } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
