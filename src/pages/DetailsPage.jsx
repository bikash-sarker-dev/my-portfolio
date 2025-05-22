import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/header/Navbar";
import { projects } from "../pojectData";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(projects);
  let findProject = details.find((project) => project.id === parseInt(id));
  console.log(id);

  console.log(findProject);

  return (
    <>
      <Navbar detailsPage={true} />
      <section className="">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="hero min-h-screen container"
        >
          <div className="flex-col my-20">
            <img
              src={findProject.image2}
              className=" my-10 rounded-lg shadow-2xl md:min-w-[700px] lg:max-h-[700px]"
            />
            <div>
              <h1 className="text-4xl font-bold">
                {findProject?.project_title}
              </h1>
              <p className="py-6 max-w-3xl">{findProject?.description}</p>
              <div>
                <p className="text-gray-500  mt-4 font-bold">
                  Features of Points:
                </p>
                <ul>
                  {findProject?.points_feature.map((feature, i) => (
                    <li className="text-teal-500 my-4" key={i}>
                      {i + 1} . {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="max-w-2xl flex  mt-3">
                <p className="text-gray-500 flex-1 mt-2 font-medium">
                  Author: Bikash Sarker
                </p>
                <p className="text-gray-500 flex-1 mt-2 font-medium">
                  Email: bikash.webdeveloper5@gmail.com
                </p>
              </div>
              <div className="max-w-2xl flex  mt-4">
                <p className="text-gray-500 flex-1 mt-2 font-medium">
                  Project duration: {findProject?.project_duration}
                </p>
                <p className="text-gray-500 flex-1 mt-2 font-medium">
                  location: Dhaka, Bangladesh
                </p>
              </div>
              <div className="max-w-2xl flex  mt-4">
                <p className="text-gray-500 flex-1 mt-2 font-medium">
                  availability: yes
                </p>
                <p className="text-gray-500 flex-1 mt-2 font-medium">
                  ID: ({findProject?.id})
                </p>
              </div>
              <div className="text-gray-500 ">
                <p className="text-gray-500 flex-1 my-4 font-medium">
                  Technologies used:
                </p>

                <ul className="flex-col gap-4">
                  {findProject?.technologies_used.map((tech, i) => (
                    <li
                      className="font-medium text-teal-500 ml-3 my-2"
                      key={tech}
                    >
                      {i + 1} . {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-lg font-semibold mt-4">
                  Project live link:{" "}
                  <Link
                    className="text-lg font-semibold mt-2 text-blue-700 underline"
                    target="_blank"
                    to={findProject?.website_Live_link}
                  >
                    {findProject?.website_Live_link}
                  </Link>
                </p>
                <p className="text-lg font-semibold mt-2">
                  GitHub link:{" "}
                  <Link
                    className="text-lg font-semibold mt-2 text-blue-700 underline"
                    target="_blank"
                    to={findProject?.github_link}
                  >
                    {findProject?.github_link}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
