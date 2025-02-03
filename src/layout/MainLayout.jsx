import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
