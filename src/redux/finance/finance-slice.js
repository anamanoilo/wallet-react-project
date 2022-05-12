import { createSlice } from "@reduxjs/toolkit";
import { allTransactions } from "./finance-operation";
import {
  getTransactions,
  getUserBalance,
  getSummary,
  getCategories,
} from "./finance-operations-nastya";

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
  extraReducers: {
    [allTransactions.fulfilled]: (state, action) => {
      state.data = action.payload
    },
    [allTransactions.rejected]: (state, action) => {
      state.error = action.payload
    }
  reducers: {
    resetFinance: () => {
      return initialState;
    },
  },
  extraReducers: {
    // [getUserBalance.fulfilled]: (state, { payload }) => {
    //   state.totalBalance = payload;
    // },
    // [getUserBalance.rejected]: (state, { payload }) => {
    //   state.error = payload;
    // },
    // [getTransactions.fulfilled]: (state, { payload }) => {
    //   state.data = payload;
    // },
    [getSummary.fulfilled]: (state, { payload }) => {
      state.summary = payload;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

// export const {} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
