import s from "./Chart.module.scss";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data, expenseSummaryChart, show }) => {
  return (
    <div className={s.wrapper__chart}>
      <h2 className={s.title}>Statistics</h2>

      {show ? (
        <div className={s.wrapper__doughnut}>
          <Doughnut
            data={data}
            options={{
              maintainAspectRatio: false,
              cutoutPercentage: 90,
              plugins: {
                legend: { display: false },
              },
            }}
          />
          <div className={s.balance__wrapper}>
            <span className={s.symbol}>&#8372;</span>
            {expenseSummaryChart}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Chart;
