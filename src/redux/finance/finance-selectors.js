const getTotalBalance = (state) => state.finance.totalBalance;
const getTransactionsData = (state) => state.finance.data;
const getCategories = (state) => state.finance.categories;
const getSummary = (state) => state.finance.summary;
const getError = (state) => state.finance.error;

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
      amount,
    };
    return categories
      ? {
          ...updatedData,
          category: categories[data.categoryId],
        }
      : updatedData;
  });
}

const getPeriodForStatistic = (state) => {
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const uniqueMonths = getTransactionsData(state)
    ?.map((obj) => obj.transactionDate.slice(5, 7))
    .reduce((acc, month) => (!acc.includes(month) ? [...acc, month] : acc), []);
  if (!uniqueMonths) {
    return {};
  }
  const sortMonth = uniqueMonths
    .map((string) => Number(string))
    .sort((a, b) => a - b);

  const stringMonths = sortMonth.map((number) => allMonths[number]);

  const uniqueYears = getTransactionsData(state)
    ?.map((obj) => obj.transactionDate.slice(0, 4))
    .reduce((acc, year) => (!acc.includes(year) ? [...acc, year] : acc), []);
  const sortYears = uniqueYears
    .map((string) => Number(string))
    .sort((a, b) => a - b);

  const period = { months: stringMonths, years: sortYears };
  return period;
};

const getAllTransactionsForStat = (state) => {
  const allCategoriesWithColors = [
    {
      id: "c9d9e447-1b83-4238-8712-edc77b18b739",
      name: "Main expenses",
      type: "EXPENSE",
      backgroundColor: "rgba(254, 208, 87, 1)",
    },
    {
      id: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
      name: "Products",
      type: "EXPENSE",
      backgroundColor: "rgba(255, 216, 208, 1)",
    },
    {
      id: "3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",
      name: "Car",
      type: "EXPENSE",
      backgroundColor: "rgba(253, 148, 152, 1)",
    },
    {
      id: "bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",
      name: "Self care",
      type: "EXPENSE",
      backgroundColor: "rgba(197, 186, 255, 1)",
    },
    {
      id: "76cc875a-3b43-4eae-8fdb-f76633821a34",
      name: "Child care",
      type: "EXPENSE",
      backgroundColor: "rgba(110, 120, 232, 1)",
    },
    {
      id: "128673b5-2f9a-46ae-a428-ec48cf1effa1",
      name: "Household products",
      type: "EXPENSE",
      backgroundColor: "rgba(110, 120, 232, 1)",
    },
    {
      id: "1272fcc4-d59f-462d-ad33-a85a075e5581",
      name: "Education",
      type: "EXPENSE",
      backgroundColor: "rgba(74, 86, 226, 1)",
    },
    {
      id: "c143130f-7d1e-4011-90a4-54766d4e308e",
      name: "Leisure",
      type: "EXPENSE",
      backgroundColor: "rgba(129, 225, 255, 1)",
    },
    {
      id: "719626f1-9d23-4e99-84f5-289024e437a8",
      name: "Other expenses",
      type: "EXPENSE",
      backgroundColor: "rgba(36, 204, 167, 1)",
    },
    {
      id: "3acd0ecd-5295-4d54-8e7c-d3908f4d0402",
      name: "Entertainment",
      type: "EXPENSE",
      backgroundColor: "rgba(0, 173, 132, 1)",
    },
    {
      id: "063f1132-ba5d-42b4-951d-44011ca46262",
      name: "Income",
      type: "INCOME",
    },
  ];
  const objectSummary = getSummary(state) || {};
  const { categoriesSummary, expenseSummary, incomeSummary } = objectSummary;
  const newExpenseSummary = String(expenseSummary * -1);
  const arrayCategoriesSummary = categoriesSummary
    ?.filter((category) => category.type === "EXPENSE")
    .map((category) => {
      const color = allCategoriesWithColors?.find(
        (object) => object.name === category.name
      ).backgroundColor;
      const number = category.total * -1;
      const object = {
        ...category,
        total: String(number),
        backgroundColor: color,
      };
      return object;
    });
  return { arrayCategoriesSummary, newExpenseSummary, incomeSummary };
};

const getDataAllSummaryForChart = (state) => {
  const allCategoriesWithColors = [
    {
      id: "c9d9e447-1b83-4238-8712-edc77b18b739",
      name: "Main expenses",
      type: "EXPENSE",
      backgroundColor: "rgba(254, 208, 87, 1)",
    },
    {
      id: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
      name: "Products",
      type: "EXPENSE",
      backgroundColor: "rgba(255, 216, 208, 1)",
    },
    {
      id: "3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",
      name: "Car",
      type: "EXPENSE",
      backgroundColor: "rgba(253, 148, 152, 1)",
    },
    {
      id: "bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",
      name: "Self care",
      type: "EXPENSE",
      backgroundColor: "rgba(197, 186, 255, 1)",
    },
    {
      id: "76cc875a-3b43-4eae-8fdb-f76633821a34",
      name: "Child care",
      type: "EXPENSE",
      backgroundColor: "rgba(110, 120, 232, 1)",
    },
    {
      id: "128673b5-2f9a-46ae-a428-ec48cf1effa1",
      name: "Household products",
      type: "EXPENSE",
      backgroundColor: "rgba(110, 120, 232, 1)",
    },
    {
      id: "1272fcc4-d59f-462d-ad33-a85a075e5581",
      name: "Education",
      type: "EXPENSE",
      backgroundColor: "rgba(74, 86, 226, 1)",
    },
    {
      id: "c143130f-7d1e-4011-90a4-54766d4e308e",
      name: "Leisure",
      type: "EXPENSE",
      backgroundColor: "rgba(129, 225, 255, 1)",
    },
    {
      id: "719626f1-9d23-4e99-84f5-289024e437a8",
      name: "Other expenses",
      type: "EXPENSE",
      backgroundColor: "rgba(36, 204, 167, 1)",
    },
    {
      id: "3acd0ecd-5295-4d54-8e7c-d3908f4d0402",
      name: "Entertainment",
      type: "EXPENSE",
      backgroundColor: "rgba(0, 173, 132, 1)",
    },
    {
      id: "063f1132-ba5d-42b4-951d-44011ca46262",
      name: "Income",
      type: "INCOME",
    },
  ];
  const dataAllSummaryForChart = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [],
        hoverOffset: 0,
        borderColor: [],
        borderWidth: 0,
      },
    ],
  };
  const objectSummary = getSummary(state) || {};
  const { categoriesSummary } = objectSummary;
  categoriesSummary
    ?.filter((category) => category.type === "EXPENSE")
    .map((category) => {
      const color = allCategoriesWithColors?.find(
        (object) => object.name === category.name
      ).backgroundColor;
      const number = category.total * -1;
      dataAllSummaryForChart.labels.push(category.name);
      dataAllSummaryForChart.datasets[0].backgroundColor.push(color);
      dataAllSummaryForChart.datasets[0].data.push(number);
    });
  return dataAllSummaryForChart;
};

const financeSelectors = {
  getPeriodForStatistic,
  getAllTransactionsForStat,
  getDataAllSummaryForChart,
  getTotalBalance,
  getTransactionsData,
  getCategories,
  getFilteredData,
  getSummary,
  getError,
};

export default financeSelectors;
