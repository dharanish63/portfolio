import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainIndex from "./Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
