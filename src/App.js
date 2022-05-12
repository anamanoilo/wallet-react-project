import React, { useEffect } from "react";
import PublicRoute from "components/PublicRoute/PublicRoute";
import Registration from "pages/Registration/Registration";
import Login from "pages/Login/Login";
import { Route, Routes } from "react-router-dom";

import { refresh } from "redux/session/auth-operation";
import { useDispatch } from "react-redux";
import Header from "components/Header";
import Navigation from "components/Navigation";
import DiagramTab from "components/DiagramTab/DiagramTab";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/signUp"
          element={
            <PublicRoute restricted>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
      <Header />
      <Navigation />
      <DiagramTab />
    </div>
  );
}

export default App;
