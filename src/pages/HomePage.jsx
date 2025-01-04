import React from "react";
import Hero from "../Components/hero/Hero";
import AboutMe from "../Components/home/AboutMe/AboutMe";
import Projects from "../Components/home/Projects/Projects";
import SkillsEducation from "../Components/home/Skills/SkillsEducation";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillsEducation />
      <Projects />
    </div>
  );
};

export default HomePage;
