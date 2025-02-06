import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../socialLink/SocialLinks";

const Hero = () => {
  return (
    <section id="home" className=" min-h-[650px] flex items-center lg:mt-20">
      <div className="container">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full ">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src="https://i.ibb.co.com/025k8X8/my-Pic1-removebg-preview.png"
              className="max-w-sm border-[10px] w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover bg-p-primary  border-p-accent  shadow-2xl shadow-p-accent rounded-full"
            />
            <div data-aos="zoom-in" data-aos-duration="2000">
              <h1 className="text-6xl text-p-background font-bold">
                MERN Stack Developer
              </h1>
              <p className="py-6 max-w-xl text-p-default ">
                I have been working as a MERN Stack Developer for 3 years and
                have practical experience. the web application building
                responsive, user-friendly web applications using HTML5, CSS3,
                Tailwind CSS, Bootstrap, Javascript, React.js, Next.js, Node.js
                Express.js, Jwt. UI Tools using Figma, XD Skilled in translating
                complex requirements into intuitive interfaces, optimizing
                performance, and delivering pixel-perfect designs,
                cross-functional teams to deliver high-quality.
              </p>
              <SocialLinks />
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/10GbXKQZ6Np8NJck0zTY-GNSURCExZp1-/view?usp=sharing"
                className="btn bg-p-accent hover:bg-p-primary border-none btn-outline mt-8"
              >
                Resume Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
