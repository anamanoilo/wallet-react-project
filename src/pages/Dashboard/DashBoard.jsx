import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import {
  getTransactions,
  getCategories,
} from "redux/finance/finance-operations-nastya";
import Media from "react-media";
import Navigation from "components/Navigation";
import Balance from "components/Balance";
import Currency from "components/Currency";
import HomeTab from "components/HomeTab";
import DiagramTab from "components/DiagramTab";
import s from "./DashBoard.module.scss";
import Header from "components/Header";
import Container from "components/Container/Container";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTransactions());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className={s.Dashboard}>
        <Media
          queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
          }}
        >
          {(matches) => (
            <Container>
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
            </Container>
          )}
        </Media>
      </main>
    </>
  );
};
export default Dashboard;
