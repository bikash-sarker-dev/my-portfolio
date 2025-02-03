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
              <h1 className="text-5xl text-p-background font-bold">
                Frontend Developer
              </h1>
              <p className="py-6 max-w-md text-p-default ">
                I am front-end developer specializes in building engaging and
                user-friendly web pages, ensuring a seamless user experience and
                optimal functionality.
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
