import React from "react";
import "./App.css";
import { Reset } from "styled-reset";
import { useSelector } from "react-redux";

// react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import LocationMain from "./components/pages/location/LocationMain";
import LoginMain from "./components/pages/login/LoginMain";
import SignupMain from "./components/pages/signup/SignupMain";
import AdminMain from "./components/pages/admin/AdminMain";
import PostMain from "./components/pages/post/PostMain";
import ArchiveMain from "./components/pages/archive/ArchiveMain";
import { localStorageObj } from "./components/templates/common/localStrage";

const App = () => {
  // state取得
  const stateAuth = useSelector((state) => state.auth);
  // ローカルストレージ取得
  const localStrageAuth = localStorageObj.getLocalStorage();

  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LocationMain />} />
          <Route path={"/signup"} element={<SignupMain />} />
          <Route
            path={"/login"}
            element={ stateAuth || localStrageAuth ? <Navigate to="/admin" /> : <LoginMain />}
          />
          <Route
            path={"/admin"}
            element={ stateAuth || localStrageAuth ? <AdminMain /> : <Navigate to="/login" />}
          />
          <Route
            path={"/post"}
            element={ stateAuth || localStrageAuth ? <PostMain /> : <Navigate to="/login" />}
          />
          <Route
            path={"/archive"}
            element={ stateAuth || localStrageAuth ? <ArchiveMain /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
