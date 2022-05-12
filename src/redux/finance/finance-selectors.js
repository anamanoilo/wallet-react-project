import { useSelector } from "react-redux";

const getTotalBalance = (state) => state.finance.totalBalance;
const getTransactionsData = (state) => state.finance.data;
const getCategories = (state) => state.finance.categories;

const financeSelectors = {
  getTotalBalance,
  getTransactionsData,
  getCategories,
};

export default financeSelectors;
