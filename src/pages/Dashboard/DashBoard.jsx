import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";
import Navigation from "components/Navigation";
import Balance from "components/Balance";
import Currency from "components/Currency";
import HomeTab from "components/HomeTab";
import DiagramTab from "components/DiagramTab";
import s from "./DashBoard.module.scss";
import Header from "components/Header";
import Container from "components/Container/Container";
import Loader from "components/Loader"
import {
  allTransactions,
  totalBalance,
  getCategories,
} from "redux/finance/finance-operation";
import { refresh } from "redux/session/auth-operation";
import { toggleIsLoading } from "redux/global/global-slice";
import globalSelectors from 'redux/global/global-selectors';

const Dashboard = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(globalSelectors.getIsLoading);

  useEffect(() => {
    // dispatch(toggleIsLoading());
    dispatch(refresh());
    dispatch(allTransactions());
    // dispatch(totalBalance());
    dispatch(getCategories());
    // dispatch(toggleIsLoading());
  }, [dispatch]);

  return (
      isLoading ? <Loader/> : <>
      <Header />
      <main className={s.main}>
        <Media
          queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
          }}
        >
          {(matches) => (
            <Container>
              <div className={s.Dashboard}>
                {matches.small && (
                  <>
                    <Navigation />
                    <Routes>
                      <Route
                        path="*"
                        element={
                          <>
                            <Balance />
                            <HomeTab />
                          </>
                        }
                      />
                      <Route path="/currency" element={<Currency />} />
                      <Route path="/diagram" element={<DiagramTab />} />
                    </Routes>
                  </>
                )}
                {matches.medium && (
                  <>
                    <div className={s.Dashboard__left}>
                      <div className={s.Dashboard__nav}>
                        <Navigation />
                        <Balance />
                      </div>
                      <Currency />
                    </div>
                    <div className={s.Dashboard__rigth}>
                      <Routes>
                        <Route path="*" element={<HomeTab />} />
                        <Route path="/diagram" element={<DiagramTab />} />
                      </Routes>
                    </div>
                  </>
                )}
              </div>
            </Container>
          )}
        </Media>
      </main>
    </div>
  );
};
export default Dashboard;
