import React from "react";
import Hero from "../Components/hero/Hero";
import AboutMe from "../Components/home/AboutMe/AboutMe";
import SkillsEducation from "../Components/home/Skills/SkillsEducation";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillsEducation />
    </div>
  );
};

export default HomePage;
