import React from "react";
import { Link } from "react-router-dom";

const CardProject = ({ project }) => {
  return (
    <div className="card bg-base-100 rounded-none group  shadow-xl border">
      <figure className="">
        <img
          src={project?.image1}
          alt="Shoes"
          className="group-hover:scale-125 transition duration-500 "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{project?.project_title}</h2>
        <p>{project?.short_description}</p>
        <div className="card-actions mt-6">
          <Link
            target="_blank"
            to={project.website_Live_link}
            className="btn btn-accent rounded-none"
          >
            View Live Demo
          </Link>
          <Link
            to={`/details/${project.id}`}
            className="btn btn-accent btn-outline rounded-none"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
