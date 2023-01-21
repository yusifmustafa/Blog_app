import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import MainPage from "../Pages/MainPage";
import CreateBlog from "../Pages/CreateBlog";

const Routing = () => {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
    </>
  );
};

export default Routing;
