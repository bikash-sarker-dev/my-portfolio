import React from "react";
import Hero from "../hero/Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      style={{ background: "url('./bg-1.png')", backgroundSize: "100% 100%" }}
      className="min-h-screen  "
    >
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
