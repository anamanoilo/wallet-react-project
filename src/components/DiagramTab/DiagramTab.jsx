import s from "./DiagramTab.module.scss";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Chart from "components/Chart/Chart";
import Table from "components/Table/Table";
import financeSelectors from "redux/finance/finance-selectors";
import { getSummary } from "redux/finance/finance-operation";
import { refresh } from "redux/session/auth-operation";

const DiagramTab = () => {
  const [monthForState, setMonthForState] = useState("Month");
  const [yearForState, setYearForState] = useState("Year");
  const [period, setPeriod] = useState("");
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

  useEffect(() => {
    if (monthForState === "Month" || yearForState === "Year") {
      return;
    }
    const index = allMonths.findIndex((month) => month === monthForState) + 1;
    setPeriod(`?month=${index}&year=${yearForState}`);
  }, [monthForState, yearForState]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
    dispatch(getSummary(period));
  }, [dispatch, period]);

  const dataAllSummaryForTabl = useSelector(
    financeSelectors.getAllTransactionsForStat
  );
  const dataAllSummaryForChart = useSelector(
    financeSelectors.getDataAllSummaryForChart
  );

  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>Statistics</h2>
        <div className={s.wrapper}>
          <Chart data={dataAllSummaryForChart} />
          <Table
            data={dataAllSummaryForTabl}
            monthForState={monthForState}
            setMonthForState={setMonthForState}
            yearForState={yearForState}
            setYearForState={setYearForState}
          />
        </div>
      </section>
    </>
  );
};
export default DiagramTab;
