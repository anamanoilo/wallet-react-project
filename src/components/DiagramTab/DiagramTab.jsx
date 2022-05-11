import s from "./DiagramTab.module.scss";
import Container from "components/Container/Container";
import Chart from "components/Chart/Chart";
import Table from "components/Table/Table";

const DiagramTab = () => {
  const answerMonth = {
    categoriesSummary: [
      {
        name: "Education",
        type: "EXPENSE",
        total: -30,
      },
      {
        name: "Household products",
        type: "EXPENSE",
        total: -230,
      },
      {
        name: "Products",
        type: "EXPENSE",
        total: -120,
      },
      {
        name: "Entertainment",
        type: "EXPENSE",
        total: -210,
      },
      {
        name: "Car",
        type: "EXPENSE",
        total: -80,
      },
      {
        name: "Other expenses",
        type: "EXPENSE",
        total: -60,
      },
      {
        name: "Child care",
        type: "EXPENSE",
        total: -130,
      },
      {
        name: "Self care",
        type: "EXPENSE",
        total: -130,
      },
      {
        name: "Leisure",
        type: "EXPENSE",
        total: -610,
      },
    ],
    incomeSummary: 0,
    expenseSummary: -1600,
    periodTotal: -1600,
    year: 2022,
    month: 11,
  };

  return (
    <>
      <Container>
        <section className={s.wrapper}>
          <h2 className={s.title}>Statistics</h2>
          <Chart />
          <Table data={answerMonth} />
        </section>
      </Container>
    </>
  );
};
export default DiagramTab;
