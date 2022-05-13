import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { token } from "../session/auth-operation";

export const addTransaction = createAsyncThunk(
  "finance/add",
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/transactions", transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserBalance = createAsyncThunk(
  "finance/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/users/current");
      return data.balance;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  "finance/get",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localStorageToken = state.session.token;

    if (localStorageToken === null) return rejectWithValue();

    token.set(localStorageToken);
    try {
      const { data } = await axios.get("/api/transactions");
      console.log("~ data", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSummary = createAsyncThunk(
  "finance/getSummary",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/transactions-summary");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "finance/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/transaction-categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
