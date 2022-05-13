import s from "./Table.module.scss";
import React, { useState } from "react";
import Select from "components/Select/Select";

const answerAllTran = [
  {
    id: "55585235-f407-415c-a3f0-7e76e5a0d0fb",
    transactionDate: "2011-10-05",
    type: "INCOME",
    comment: "string",
    amount: 1000,
    balanceAfter: 1000,
    categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "910a6003-ec29-4223-883b-a5788b747c3e",
    transactionDate: "2022-10-05",
    type: "INCOME",
    comment: "string",
    amount: 1000,
    balanceAfter: 2000,
    categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "efba5883-6e98-4839-963a-e53e51ecf280",
    transactionDate: "2022-10-05",
    type: "EXPENSE",
    comment: "13hi",
    amount: -100,
    balanceAfter: 1900,
    categoryId: "c9d9e447-1b83-4238-8712-edc77b18b739",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "82d10a8b-40ad-4106-98b8-fb4da482b0fd",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -120,
    balanceAfter: 1780,
    categoryId: "27eb4b75-9a42-4991-a802-4aefe21ac3ce",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "226a7b2b-4986-4f8a-900b-1a57811beda5",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -80,
    balanceAfter: 1700,
    categoryId: "3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "b6f6e36d-6007-42ef-a92f-8b25241a9f92",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -130,
    balanceAfter: 1570,
    categoryId: "bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "dcbbec47-eb2d-4e29-be45-fd23d5cb5f81",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -130,
    balanceAfter: 1440,
    categoryId: "76cc875a-3b43-4eae-8fdb-f76633821a34",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "e00f20a1-653c-4a1a-b208-b3d81052dab1",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -230,
    balanceAfter: 1210,
    categoryId: "128673b5-2f9a-46ae-a428-ec48cf1effa1",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "e7da7aa4-2765-4728-b5aa-d2d5011ebc39",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -30,
    balanceAfter: 1180,
    categoryId: "1272fcc4-d59f-462d-ad33-a85a075e5581",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "2b19724b-0c03-4cbe-afc2-f5a94e01a1a5",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -610,
    balanceAfter: 570,
    categoryId: "c143130f-7d1e-4011-90a4-54766d4e308e",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "a08077e1-9659-4c8c-87a4-230361f1347f",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -60,
    balanceAfter: 510,
    categoryId: "719626f1-9d23-4e99-84f5-289024e437a8",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
  {
    id: "073577ed-8ac0-41fa-b0ef-36ef9b599a4e",
    transactionDate: "2022-11-05",
    type: "EXPENSE",
    comment: "11hi",
    amount: -210,
    balanceAfter: 300,
    categoryId: "3acd0ecd-5295-4d54-8e7c-d3908f4d0402",
    userId: "33b9d63b-af74-41c0-9217-94863a165f59",
  },
];

const allMonths = [
  "All months",
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
const allYears = ["All years"];

const Table = ({ data, allCategories }) => {
  const { categoriesSummary, incomeSummary, expenseSummary } = data;

  const [monthForState, setMonthForState] = useState("Month");
  const [yearForState, setYearForState] = useState("Year");

  const handleChangeMonth = (event) => {
    const { name, value } = event.target;
    setMonthForState(value);
  };
  const handleChangeYear = (event) => {
    const { name, value } = event.target;
    setYearForState(value);
  };

  console.log(new Date().getUTCMonth() + 1);
  console.log(new Date().getFullYear());
  console.log(new Date("December 2022").toISOString());
  console.log(new Date("December 2022").getUTCMonth() + 1);

  const event = new Date("05 October 2011 14:48 UTC");
  console.log(event.toISOString());
  // expected output: 2011-10-05T14:48:00.000Z

  return (
    <div className={s.expenses__wrapper}>
      <div className={s.select__wrapper}>
        <Select
          selected={monthForState}
          setSelected={setMonthForState}
          position
        />
        <Select selected={yearForState} setSelected={setYearForState} />
      </div>

      <div className={s.table__wrapper}>
        <div className={s.table__title}>
          <span>Category</span>
          <span>Amount</span>
        </div>
        <ul className={s.table__list}>
          {categoriesSummary?.map((category) => {
            const color = allCategories?.find(
              (object) => object.name === category.name
            ).backgroundColor;
            const number = category.total * -1;

            if (category.type === "EXPENSE") {
              return (
                <>
                  <li key={category.name} className={s.table__item}>
                    <div
                      style={{ backgroundColor: `${color}` }}
                      className={s.table__color}
                    ></div>
                    <div className={s.table__name}>{category.name}</div>
                    <div className={s.table__total}>{number}</div>
                  </li>
                </>
              );
            }
          })}
        </ul>
      </div>
      <ul className={s.table__foot}>
        <li className={s.table__bottom}>
          <span className={s.first}>Expenses:</span>
          <span className={s.second__expense}>{expenseSummary}</span>
        </li>
        <li className={s.table__bottom}>
          <span className={s.first}>Incomes:</span>
          <span className={s.second__income}>{incomeSummary}</span>
        </li>
      </ul>
    </div>
  );
};

export default Table;
