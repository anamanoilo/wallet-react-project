// import s from "./Balance.module.scss"
import { useSelector } from 'react-redux';
import financeSelectors from 'redux/finance/finance-selectors';

const Balance = () => {
  const totalBalance = useSelector(financeSelectors.getTotalBalance);
  return <div>{totalBalance}</div>;
};

export default Balance;