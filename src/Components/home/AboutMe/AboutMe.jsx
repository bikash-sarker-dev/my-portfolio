import Lottie from "lottie-react";
import React from "react";
import aboutUs from "../../../assets/lottieFile/aboutUs.json";

const AboutMe = () => {
  return (
    <section id="about" className="mt-32 mb-16">
      <div className="container">
        <div className="text-center mb-7">
          <h2 className="text-5xl text-p-text font-bold">About Me</h2>
        </div>

        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row gap-10">
            {/* <div className="before:border-l-[12px]  before:border-t-[12px]  before:border-p-accent before:content-['']  before:w-[180px] before:h-[330px] before:absolute  ">
              <img
                data-aos="flip-left"
                data-aos-duration="2000"
                src="https://i.ibb.co.com/bPdD7g0/mtPic2.jpg"
                className="md:max-w-md md:h-[350px]  ml-3 mt-3 shadow-2xl shadow-p-accent"
              />
            </div> */}
            <div>
              <Lottie
                className="lg:w-[470px]"
                animationData={aboutUs}
                loop={true}
              />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className="">
              <h1 className="text-xl font-bold text-p-primary">
                <span>Who Am I?</span>
              </h1>
              <p className="py-3 leading-7">
                My name is Bikash Sarkar. I am working as a MERN Stack
                Developer. I have been working as a front-end developer for four
                years. I have done many projects which I have listed in my
                projects section. I didn't mention all the projects, I think
                it's Project Best, that's what I left. I am on my way, facing
                many challenges. And I am overcoming the challenges because I
                like to face challenges. The names of the technologies I am
                working on are: 1 . HTML 2 . CSS 3 . tailwindcss 4 . JavaScript
                5 . React 6 . react router dom 7 . firebase 8 . express.js 9 .
                Node.js . I feel very comfortable working with eggs and what
                work we do and through open barrels we can take . I am good at
                problem solving and understand mathematical terms well. I am
                good at problem solving, algorithms and data structures. I can
                do UI design with Higma and write my own logic. I can learn any
                technology in a strong way and I can apply it to any project and
                do it very well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
