import React from "react";
import SocialLinks from "../socialLink/SocialLinks";

const Hero = () => {
  return (
    <section className="bg-base-200 min-h-[650px] flex items-center">
      <div className="container">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
            <img
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Frontend Developer</h1>
              <p className="py-6 max-w-md">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <SocialLinks />
              <button className="btn btn-accent btn-outline mt-8">
                Resume Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
