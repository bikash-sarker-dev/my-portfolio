import React from "react";

const AboutMe = () => {
  return (
    <section className="my-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">About Me</h2>
        </div>

        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="before:border-l-[12px]  before:border-t-[12px]  before:border-teal-300 before:content-['']  before:w-[180px] before:h-[330px] before:absolute  ">
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                className="max-w-md  shadow-2xl ml-3 mt-3  "
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-teal-400">
                <span>Who Am I?</span>
              </h1>
              <p className="py-3 leading-7">
                I am currently a master’s student in Applied Geoinformatics at
                the University of Salzburg, Austria. I have a keen interest in
                front-end and GIS development. My goal is to use my expertise in
                building exciting and functional user interfaces. Additionally,
                employ my geospatial analysis, modeling, and process automation
                skills to engineer innovative, customizable, and sustainable
                software solutions. The following are tech stacks that I use
                regularly: I am currently a master’s student in Applied
                Geoinformatics at the University of Salzburg, Austria. I have a
                keen interest in front-end and GIS development. My goal is to
                use my expertise in building exciting and functional user
                interfaces. Additionally, employ my geospatial analysis,
                modeling, and process automation skills to engineer innovative,
                customizable, and sustainable software solutions. The following
                are tech stacks that I use regularly:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
