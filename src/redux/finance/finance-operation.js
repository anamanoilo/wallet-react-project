import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://wallet.goit.ua/";

export const allTransactions = createAsyncThunk(
    "finance/transactions",
    async (_, { rejectWithValue }) => {
        try {
            const transactions = await axios.get("/api/transactions");
            return transactions.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const totalBalance = createAsyncThunk();