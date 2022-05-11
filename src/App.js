import React, { useEffect } from "react";
import PublicRoute from "components/PublicRoute/PublicRoute";
import Registration from "pages/Registration/Registration";
import Login from "pages/Login/Login";
import { Route, Routes } from "react-router-dom";

import { refresh } from "redux/session/auth-operation";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute restricted>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/Login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
