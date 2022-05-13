import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../session/auth-operation";

axios.defaults.baseURL = "https://wallet.goit.ua/";

export const allTransactions = createAsyncThunk(
  "finance/transactions",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localStorageToken = state.session.token;

    if (localStorageToken === null) {
      return rejectWithValue();
    }

    token.set(localStorageToken);
    try {
      const transactions = await axios.get("/api/transactions");
      return transactions.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const totalBalance = createAsyncThunk(
  "finance/balance",
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

export const getSummary = createAsyncThunk(
  "finance/getSummary",
  async (param = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/transactions-summary${param}`);
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
