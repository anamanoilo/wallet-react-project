import { createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  getUserBalance,
  getSummary,
} from "./finance-operations-nastya";

const initialState = {
  data: null,
  totalBalance: null,
  summary: [],
  error: null,
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
    [getUserBalance.fulfilled]: (state, { payload }) => {
      state.totalBalance = payload;
    },
    [getUserBalance.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [getSummary.fulfilled]: (state, { payload }) => {
      state.summary = payload;
    },
  },
});

// export const {} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
