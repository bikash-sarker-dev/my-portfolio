import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/header/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
