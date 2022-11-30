import React, { useEffect, useState } from "react";
import "./App.css";
import { Reset } from "styled-reset";

// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import LocationMain from "./components/pages/location/LocationMain";
import LoginMain from "./components/pages/login/LoginMain";
import AdminMain from "./components/pages/admin/AdminMain";

const App = () => {
  const loginInfo = localStorage.getItem('login');
  const [auth, setAuth] = useState(loginInfo);

  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LocationMain />} />
          <Route
            path={"/login"}
            element={
              auth ? (
                <Navigate to="/admin" />
              ) : (
                <LoginMain auth={auth} setAuth={setAuth} />
              )
            }
          />
          <Route
            path={"/admin"}
            element={
              auth ? (<AdminMain />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
