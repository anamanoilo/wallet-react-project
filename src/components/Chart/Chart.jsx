import s from "./Chart.module.scss";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: [
//     "Основные расходы",
//     "Продукты",
//     "Машина",
//     "Забота о себе",
//     "Забота о детях",
//     "Товары для дома",
//     "Образование",
//     "Досуг",
//     "Другие расходы",
//   ],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [20, 20, 20, 20, 20, 20, 20, 20, 10],
//       backgroundColor: [
//         "rgba(254, 208, 87, 1)",
//         "rgba(255, 216, 208, 1)",
//         "rgba(253, 148, 152, 1)",
//         "rgba(197, 186, 255, 1)",
//         "rgba(110, 120, 232, 1)",
//         "rgba(74, 86, 226, 1)",
//         "rgba(129, 225, 255, 1)",
//         "rgba(36, 204, 167, 1)",
//         "rgba(0, 173, 132, 1)",
//       ],
//       hoverOffset: 0,
//       borderColor: [],
//       borderWidth: 0,
//     },
//   ],
// };

const Chart = ({ data }) => {
  return (
    <div className={s.wrapper__chart}>
      <h2 className={s.title}>Statistics</h2>
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
      </div>
    </div>
  );
};
export default Chart;
