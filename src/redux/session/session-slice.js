import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  token: null,
  user: {
    name: null,
  },
  error: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    loggedIn: (state, { payload }) => {
      state.isAuth = true;
      state.token = payload;
    },
    loggedOut: () => {
      return initialState;
    },
  },
});

export const { loggedIn, loggedOff } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
