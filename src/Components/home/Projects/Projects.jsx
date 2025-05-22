import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProject from "./CardProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);
  return (
    <section id="projects" className="my-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="card bg-P-cardColor rounded-none  shadow-md shadow-p-info border border-p-info hover:shadow-xl transition-all case-in-out duration-200 hover:shadow-p-info"
            disabled
          >
            <figure className="">
              <img
                src="https://i.ibb.co.com/0yyx8S4w/up-Comming-Project-1.png"
                alt="Shoes"
                className="group-hover:scale-125 transition duration-500 min-h-60 "
              />
            </figure>
            <div className="disabled" disabled>
              <div className="card-body items-center text-center">
                <h2 className="card-title">this is a title demo</h2>
                <p>the new project overall description.</p>
                <div className="card-actions mt-6">
                  <Link
                    target="_blank"
                    to=""
                    className="btn btn-accent rounded-none"
                  >
                    View Live Demo
                  </Link>
                  <Link
                    to=""
                    className="btn btn-accent btn-outline rounded-none"
                  >
                    View More
                  </Link>
                </div>
              </div>
              <div
                className="absolute flex justify-center items-center top-0 left-0 h-full w-full bg-p-primary bg-opacity-80"
                disabled
              >
                <p className="text-2xl font-bold bg-p-secondary p-4 px-6 rounded-full">
                  Coming Soon Project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
