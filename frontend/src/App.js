import React from "react";
import "./App.css";
import { Reset } from "styled-reset";
import { useSelector } from "react-redux";

// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import LocationMain from "./components/pages/location/LocationMain";
import LoginMain from "./components/pages/login/LoginMain";
import AdminMain from "./components/pages/admin/AdminMain";

const App = () => {
  // state取得
  const auth = useSelector((state) => state.auth);

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
                <>
                <LoginMain />
                </>
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
