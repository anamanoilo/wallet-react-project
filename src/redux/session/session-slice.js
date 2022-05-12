import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refresh } from "./auth-operation";

const initialState = {
  isAuth: false,
  token: null,
  currentUser: null,
  user: {
    username: "",
    email: "",
    password: "",
  },
  error: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [logOut.fulfilled](state) {
      state.user = { username: "", email: "", password: "" };
      state.token = null;
      state.isAuth = false;
    },
    [refresh.pending](state) {
      state.fetchCurrentUser = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuth = true;
      state.fetchCurrentUser = false;
    },
    [refresh.rejected](state) {
      state.fetchCurrentUser = false;
    },

    // loggedIn: (state, { payload }) => {
    //   state.isAuth = true;
    //   state.token = payload;
    // },
    // loggedOut: () => {
    //   return initialState;
    // },
  },
});

export const { loggedIn, loggedOut } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
