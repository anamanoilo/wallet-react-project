import { createSlice } from "@reduxjs/toolkit";
import {
  allTransactions,
  getSummary,
  getCategories,
  addTransaction,
} from "./finance-operation";
import { logOut, refresh } from "redux/session/auth-operation";
import { colors } from "assets/const";

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
    [allTransactions.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [allTransactions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [allTransactions.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getSummary.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getSummary.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.summary = payload;
    },
    [getSummary.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [getCategories.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload.map((obj, i) => {
        return obj.type === "EXPANSE"
          ? { ...obj, backgroundColor: colors[i] }
          : obj;
      });
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addTransaction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = [...state.data, payload];
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logOut.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logOut.fulfilled]: (state) => {
      state.loading = false;
      state.data = null;
      state.totalBalance = null;
      state.summary = null;
      state.error = null;
      state.categories = null;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [refresh.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.totalBalance = payload.balance;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
