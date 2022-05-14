import s from "./Balance.module.scss";
import { useSelector } from "react-redux";
import financeSelectors from "redux/finance/finance-selectors";

const Balance = () => {
  const totalBalance = useSelector(financeSelectors.getTotalBalance);

  function total(totalBalance) {
    if (Number.isInteger(totalBalance)) {
      totalBalance.toString();
      return totalBalance.toString().concat(".00");
    } else {
      return totalBalance;
    }
  }
  let sum = total(totalBalance);

  return (
    <div className={s.balance}>
      <p className={s.balanceTitle}>Your balance</p>
      <p className={s.balanceValue}>
        <span className={s.symbol}>&#8372;</span>
        {sum}
      </p>
    </div>
  );
};

export default Balance;
