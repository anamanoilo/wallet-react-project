import normalizeAmount from "services/normalizeAmount";

const getTotalBalance = (state) => state.finance.totalBalance;
const getTransactionsData = (state) => state.finance.data;
const getCategories = (state) => state.finance.categories;
const getSummary = (state) => state.finance.summary;
const getError = (state) => state.finance.error;

const getBalance = (state) => normalizeAmount(getTotalBalance(state));

const getFilteredData = (state) => {
  const sortedData = getTransactionsData(state)
    ?.map((data) => ({
      ...data,
      transactionDate: new Date(data.transactionDate),
    }))
    .sort((a, b) => b.transactionDate - a.transactionDate);

  const categories = getCategories(state)?.reduce((acc, cur) => {
    return { ...acc, [cur.id]: cur.name };
  }, {});

  return normalizeData(sortedData, categories);
};

function normalizeData(data, categories) {
  return data?.map((data) => {
    const day = data.transactionDate.getDay().toString().padStart(2, "0");
    const month = (data.transactionDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const year = data.transactionDate.getFullYear();
    const amount = data.amount < 0 ? -data.amount : data.amount;
    const updatedData = {
      ...data,
      transactionDate: `${day}.${month}.${year}`,
      amount: normalizeAmount(amount),
      balanceAfter: normalizeAmount(data.balanceAfter),
    };
    return categories
      ? {
          ...updatedData,
          category: categories[data.categoryId],
        }
      : updatedData;
  });
}

const financeSelectors = {
  getBalance,
  getTransactionsData,
  getCategories,
  getFilteredData,
  getSummary,
  getError,
};

export default financeSelectors;
