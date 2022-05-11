import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://wallet.goit.ua/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    const { confirmPassword, ...userData } = user;
    try {
      const { data } = await axios.post("/api/auth/sign-up", userData);
      if (data.token) token.set(data.token);
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/sign-in", user);
      console.log("data", data);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.delete("/api/auth/sign-out");
      token.unset(data.token);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
