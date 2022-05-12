import { createSlice } from "@reduxjs/toolkit";
import { allTransactions } from "./finance-operation";

const initialState = {
  data: null,
  totalBalance: null,
  error: null
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
  },
});

// export const {} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
