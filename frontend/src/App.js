import React from "react";
import "./App.css";
import { Reset } from "styled-reset";

// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import LocationMain from "./components/pages/location/LocationMain";
import LoginMain from "./components/pages/login/LoginMain";
import SignupMain from "./components/pages/signup/SignupMain";
import AdminMain from "./components/pages/admin/AdminMain";
import PostMain from "./components/pages/post/PostMain";
import ArchiveMain from "./components/pages/archive/ArchiveMain";
import { useAuth } from "./components/hooks/useAuth";
import Loading from "./components/pages/location/Loading";

const App = () => {
  const auth = useAuth();

  // ログイン状態にあるか確認できるまでは何もしない。
  if (auth === false) return;

  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LocationMain />} />
          <Route path={"/signup"} element={<SignupMain />} />
          <Route
            path={"/login"}
            element={auth ? <Navigate to="/admin" /> : <LoginMain />}
          />
          <Route
            path={"/admin"}
            element={auth ? <AdminMain /> : <Navigate to="/login" />}
          />
          <Route
            path={"/post"}
            element={auth ? <PostMain /> : <Navigate to="/login" />}
          />
          <Route
            path={"/archive"}
            element={auth ? <ArchiveMain /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
