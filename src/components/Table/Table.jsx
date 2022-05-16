import s from "./Table.module.scss";
import React from "react";
import Select from "components/Select/Select";
import { useSelector } from "react-redux";
import financeSelectors from "redux/finance/finance-selectors";
import InlineLoader from "components/InlineLoader";

const Table = ({
  data,
  monthForState,
  setMonthForState,
  yearForState,
  setYearForState,
  show,
}) => {
  const { arrayCategoriesSummary, newIncomeSummary, newExpenseSummary } = data;

  const periodForSelects = useSelector(financeSelectors.getPeriodForStatistic);
  const isLoading = useSelector(financeSelectors.getLoading);
  const error = useSelector(financeSelectors.getError);
  // console.log(new Date().getUTCMonth() + 1);
  // console.log(new Date().getFullYear());
  // console.log(new Date("December 2022").toISOString());
  // console.log(new Date("December 2022").getUTCMonth() + 1);

  const event = new Date("05 January 2021 14:48 UTC");
  console.log(event.toISOString());
  // expected output: 2021-11-05T14:48:00.000Z
  if (error) {
    return null;
  }
  return (
    <div className={s.expenses__wrapper}>
      <div className={s.select__wrapper}>
        <Select
          options={periodForSelects.months}
          selected={monthForState}
          setSelected={setMonthForState}
          position
          key={"1"}
        />
        <Select
          options={periodForSelects.years}
          selected={yearForState}
          setSelected={setYearForState}
          key={"2"}
        />
      </div>

      <div className={s.table__wrapper}>
        <div className={s.table__title}>
          <span>Category</span>
          <span>Amount</span>
        </div>
        {show ? (
          <div className={s.tableScrollBox}>
            {isLoading ? (
              <InlineLoader />
            ) : (
              <ul className={s.table__list}>
                {arrayCategoriesSummary?.map((category) => {
                  return (
                    <li key={category.name} className={s.table__item}>
                      <div
                        style={{
                          backgroundColor: `${category.backgroundColor}`,
                        }}
                        className={s.table__color}
                      ></div>
                      <div className={s.table__name}>{category.name}</div>
                      <div className={s.table__total}>{category.total}</div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ) : (
          <p className={s.text__messeng}>
            You don't have expenses for this period
          </p>
        )}
      </div>
      {!isLoading && (
        <ul className={s.table__foot}>
          <li className={s.table__bottom}>
            <span className={s.first}>Expenses:</span>
            <span className={s.second__expense}>{newExpenseSummary}</span>
          </li>
          <li className={s.table__bottom}>
            <span className={s.first}>Incomes:</span>
            <span className={s.second__income}>{newIncomeSummary}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Table;
