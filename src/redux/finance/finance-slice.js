import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  totalBalance: null,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {},
});

// export const {} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
