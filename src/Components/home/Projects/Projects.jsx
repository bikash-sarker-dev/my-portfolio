import { useEffect, useState } from "react";
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
