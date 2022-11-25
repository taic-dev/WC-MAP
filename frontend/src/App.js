import React, { useEffect, useState } from "react";
import "./App.css";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import LocationMain from "./components/pages/location/LocationMain";
import LoginMain from "./components/pages/login/LoginMain";
import Footer from "./components/pages/common/Footer";

// reset
import { Reset } from "styled-reset";

const App = () => {

  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LocationMain />} />
          <Route path={"/login"} element={<LoginMain />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
