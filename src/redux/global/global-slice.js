import { createSlice } from "@reduxjs/toolkit";
import {
  allTransactions,
  totalBalance,
  getSummary,
  getCategories,
  addTransaction,
} from "redux/finance/finance-operation";
import { logOut } from "redux/session/auth-operation";

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleModalAddTransaction: (state) => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
    toggleModalLogout: (state) => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: {
    [logOut.fulfilled]: (state) => {
      state.isModalAddTransactionOpen = false;
      state.isModalLogoutOpen = false;
      state.isLoading = false;
    },
    [allTransactions.pending]: (state) => {
      state.isLoading = true;
    },
    [allTransactions.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [allTransactions.rejected]: (state) => {
      state.isLoading = false;
    },
    // [getSummary.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [getSummary.fulfilled]: (state) => {
    //   state.isLoading = false;
    // },
    // [getSummary.rejected]: (state) => {
    //   state.isLoading = false;
    // },
  },
});

export const {
  toggleModalAddTransaction,
  toggleModalLogout,
  toggleIsLoading,
  resetGlobal,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
