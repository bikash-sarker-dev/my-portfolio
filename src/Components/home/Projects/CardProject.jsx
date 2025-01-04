import React from "react";

const CardProject = () => {
  return (
    <div className="card bg-base-100 rounded-none group  shadow-xl">
      <figure className="">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="group-hover:scale-125 transition duration-500 "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions mt-6">
          <button className="btn btn-accent rounded-none">
            View Live Demo
          </button>
          <button className="btn btn-accent btn-outline rounded-none">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
