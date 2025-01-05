import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../socialLink/SocialLinks";

const Hero = () => {
  return (
    <section id="home" className="bg-base-200 min-h-[650px] flex items-center">
      <div className="container">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
            <img
              src="https://i.ibb.co.com/10ngYHM/myPic1.jpg"
              className="max-w-sm border-[10px] w-[350px] h-[350px]   border-teal-300  shadow-2xl shadow-teal-300 rounded-full"
            />
            <div>
              <h1 className="text-5xl font-bold">Frontend Developer</h1>
              <p className="py-6 max-w-md">
                I am front-end developer specializes in building engaging and
                user-friendly web pages, ensuring a seamless user experience and
                optimal functionality.
              </p>
              <SocialLinks />
              <Link
                target="_blank"
                to="https://docs.google.com/document/d/1v0LaB_9yfdi8-hh7jf39rW351YK2jRv3isZ4BWMYzyY/edit?usp=sharing"
                className="btn btn-accent btn-outline mt-8"
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
