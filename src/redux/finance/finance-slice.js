import { createSlice } from "@reduxjs/toolkit";
import {
  allTransactions,
  getSummary,
  getCategories,
  addTransaction,
} from "./finance-operation";
import { logOut, refresh } from "redux/session/auth-operation";

const initialState = {
  data: null,
  totalBalance: null,
  summary: null,
  error: null,
  categories: null,
  loading: false,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: {
    [allTransactions.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [allTransactions.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getSummary.pending]: (state) => {
      state.loading = true;
    },
    [getSummary.fulfilled]: (state, { payload }) => {
      state.summary = payload;
      state.loading = false;
    },
    [getSummary.rejected]: (state) => {
      state.loading = false;
    },

    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload];
    },
    [logOut.fulfilled]: (state) => {
      state.data = null;
      state.totalBalance = null;
      state.summary = null;
      state.error = null;
      state.categories = null;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      state.totalBalance = payload.balance;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
