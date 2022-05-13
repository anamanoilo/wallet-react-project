import { createSlice } from "@reduxjs/toolkit";
import { allTransactions, totalBalance } from "./finance-operation";
import {
  // getTransactions,
  // getUserBalance,
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
  reducers: {
    resetFinance: () => {
      return initialState;
    },
  },
  extraReducers: {
    [allTransactions.fulfilled]: (state, {payload}) => {
      state.data = payload;
    },
    [allTransactions.rejected]: (state, {payload}) => {
      state.error = payload;
    },
    [totalBalance.fulfilled]: (state, { payload }) => {
      state.totalBalance = payload;
    },
    [totalBalance.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  
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
  }
});

// export const {} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
