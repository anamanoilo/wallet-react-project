import s from "./DiagramTab.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Chart from "components/Chart/Chart";
import Table from "components/Table/Table";
import financeSelectors from "redux/finance/finance-selectors";
import { getSummary } from "redux/finance/finance-operation";
import { refresh } from "redux/session/auth-operation";
import { allMonths } from "assets/const";

const DiagramTab = () => {
  const [monthForState, setMonthForState] = useState("Month");
  const [yearForState, setYearForState] = useState("Year");
  const [period, setPeriod] = useState("");

  useEffect(() => {
    if (monthForState === "Month" || yearForState === "Year") {
      return;
    }
    const index = allMonths.findIndex((month) => month === monthForState) + 1;
    // if (index === 0 && yearForState === "All years") {
    //   setPeriod("");
    //   return;
    // }
    if (new Date() < new Date(`${monthForState} ${yearForState}`)) {
      return;
    }
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
  const balanceForChart = useSelector(financeSelectors.getBalanceForChart);
  const show = dataAllSummaryForChart?.datasets[0]?.data?.length ?? true;

  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>Statistics</h2>
        <div className={s.wrapper}>
          <Chart
            data={dataAllSummaryForChart}
            balanceForChart={balanceForChart}
            show={show}
          />
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
