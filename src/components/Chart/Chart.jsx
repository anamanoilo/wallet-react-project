import s from "./Chart.module.scss";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data, balanceForChart, show }) => {
  return (
    <div className={s.wrapper__chart}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.wrapper__doughnut}>
        {show ? (
          <>
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
              {balanceForChart}
            </div>
          </>
        ) : (
          <p className={s.text__messeng}>
            You don't have expenses for this period
          </p>
        )}
      </div>
    </div>
  );
};
export default Chart;
