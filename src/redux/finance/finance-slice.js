import { createSlice } from "@reduxjs/toolkit";
import {
  allTransactions,
  totalBalance,
  getSummary,
  getCategories,
  addTransaction,
} from "./finance-operation";

const initialState = {
  data: null,
  totalBalance: null,
  summary: [],
  error: null,
  categories: [],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    resetFinance: () => {
      return initialState;
    },
  },
  extraReducers: {
    [allTransactions.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [allTransactions.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [totalBalance.fulfilled]: (state, { payload }) => {
      state.totalBalance = payload;
    },
    [totalBalance.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getSummary.fulfilled]: (state, { payload }) => {
      state.summary = payload;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.data = [...state.data, payload];
    },
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
