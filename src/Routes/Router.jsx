import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Test from "../Components/TestPage";
import DetailsPage from "../Components/DetailsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
  );
};

export default Router;
