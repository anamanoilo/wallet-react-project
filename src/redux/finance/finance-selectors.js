const getTotalBalance = (state) => state.finance.totalBalance;
const getTransactionsData = (state) => state.finance.data;
const getCategories = (state) => state.finance.categories;

const getFilteredData = (state) => {
  const sortedData = getTransactionsData(state)
    ?.map((data) => ({
      ...data,
      transactionDate: new Date(data.transactionDate),
    }))
    .sort((a, b) => b.transactionDate - a.transactionDate);
  const dataWithNormalizedtime = sortedData?.map((data) => {
    const day = data.transactionDate.getDay().toString().padStart(2, "0");
    const month = (data.transactionDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const year = data.transactionDate.getFullYear();
    return { ...data, transactionDate: `${day}.${month}.${year}` };
  });
  return dataWithNormalizedtime;
};

const financeSelectors = {
  getTotalBalance,
  getTransactionsData,
  getCategories,
  getFilteredData,
};

export default financeSelectors;
