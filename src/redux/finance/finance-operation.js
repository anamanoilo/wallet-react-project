import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { token } from "../session/auth-operation";

export const allTransactions = createAsyncThunk(
  "transactions",
  async (_, { getState, rejectWithValue }) => {
    // const state = getState();
    // const localStorageToken = state.session.token;

    // if (localStorageToken === null) return rejectWithValue();

    // token.set(localStorageToken);
    try {
      const transactions = await axios.get("/api/transactions");
      return transactions.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const totalBalance = createAsyncThunk(
  "balance",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/users/current");
      return data.balance;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "add",
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/transactions", transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSummary = createAsyncThunk(
  "getSummary",
  async (period = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/transactions-summary${period}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/transaction-categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
