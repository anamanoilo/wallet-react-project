import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";
import s from "./DashBoard.module.scss";
import {
  allTransactions,
  getCategories,
} from "redux/finance/finance-operation";
import { refresh } from "redux/session/auth-operation";
import globalSelectors from "redux/global/global-selectors";
import Navigation from "components/Navigation";
import Currency from "components/Currency";
import Header from "components/Header";
import Container from "components/Container/Container";
import Loader from "components/Loader";
import ButtonAddTransactions from "components/ButtonAddTransactions";
import ModalAddTransaction from "components/ModalAddTransaction";

const HomeTab = lazy(() =>
  import("components/HomeTab" /*webpackChankName: "HomeTab" */)
);
const DiagramTab = lazy(() =>
  import("components/DiagramTab" /*webpackChankName: "DiagramTab" */)
);
const Balance = lazy(() =>
  import("components/Balance" /*webpackChankName: "Balance" */)
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(globalSelectors.getIsLoading);
  const showModal = useSelector(globalSelectors.getIsModalAddTransaction);

  useEffect(() => {
    dispatch(refresh());
    dispatch(allTransactions());
    dispatch(getCategories());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
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
                    <Suspense fallback={<Loader />}>
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
                    </Suspense>
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
                      <Suspense fallback={<Loader />}>
                        <Routes>
                          <Route
                            path="*"
                            element={
                              <>
                                <HomeTab />
                                <ButtonAddTransactions />
                              </>
                            }
                          />
                          <Route path="/diagram" element={<DiagramTab />} />
                        </Routes>
                      </Suspense>
                    </div>
                  </>
                )}
              </div>
            </Container>
          )}
        </Media>

        {showModal && <ModalAddTransaction />}
      </main>
    </>
  );
};
export default Dashboard;
