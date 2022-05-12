import React, { useEffect } from "react";
import PublicRoute from "components/PublicRoute/PublicRoute";
import Registration from "pages/Registration/Registration";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Login from "pages/Login/Login";
import Dashboard from "pages/Dashboard";
import { Route, Routes } from "react-router-dom";

import { refresh } from "redux/session/auth-operation";
import { useDispatch } from "react-redux";
import Header from "components/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div>
      <Header />
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
        {/* <Route
          path="*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="*"
          element={<Dashboard />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
