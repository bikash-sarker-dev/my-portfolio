import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Header from "../Components/header/Header";
import AboutMe from "../Components/home/AboutMe/AboutMe";
import Contacts from "../Components/home/Contact/Contacts";
import Projects from "../Components/home/Projects/Projects";
import SkillsEducation from "../Components/home/Skills/SkillsEducation";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <AboutMe />
      <SkillsEducation />
      <Projects />
      <Contacts />
    </div>
  );
};

export default HomePage;
