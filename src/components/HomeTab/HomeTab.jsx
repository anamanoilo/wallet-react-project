import s from "./HomeTab.module.scss";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import financeSelectors from "redux/finance/finance-selectors";

const HomeTab = () => {
  const data = useSelector(financeSelectors.getFilteredData);
  // const categories = useSelector(financeSelectors.getCategories);

  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr className={s.tableRow}>
          <th className={s.tableHeader} scope="col">
            Date
          </th>
          <th className={s.tableHeader} scope="col">
            Type
          </th>
          <th className={s.tableHeader} scope="col">
            Category
          </th>
          <th className={s.tableHeader} scope="col">
            Comment
          </th>
          <th className={s.tableHeader} scope="col">
            Amount
          </th>
          <th className={s.tableHeader} scope="col">
            Balance
          </th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {data?.map(
          ({
            id,
            balanceAfter,
            categoryId,
            amount,
            comment,
            type,
            transactionDate,
          }) => {
            return (
              <tr className={s.tableRow} key={id}>
                <td className={s.tableData}>{transactionDate}</td>
                <td className={s.tableData}>{type === "INCOME" ? "+" : "-"}</td>
                <td className={s.tableData}>{categoryId}</td>
                <td className={s.tableData}>{comment}</td>
                <td className={s.tableData}>{amount}</td>
                <td className={s.tableData}>{balanceAfter}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
export default HomeTab;
