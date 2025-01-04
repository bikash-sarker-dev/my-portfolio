import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiReactrouter } from "react-icons/si";

const SkillsEducation = () => {
  return (
    <section className="my-32 bg-base-200 py-24">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">Skills / Eduction</h2>
        </div>
        <div className="">
          <div>
            <div className="bg-base-100 p-10">
              <div>
                <div className="divider divider-horizontal"></div>
              </div>
              <ul className="flex gap-16 text-center justify-center items-center">
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaHtml5 className="text-4xl text-orange-500" />
                  <h4 className="text-xl font-semibold">HTML</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaCss3Alt className="text-4xl text-blue-600" />
                  <h4 className="text-xl font-semibold">Css</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <RiTailwindCssFill className="text-4xl text-sky-400" />
                  <h4 className="text-xl font-semibold">Tailwind Css</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaJs className="text-4xl text-yellow-400" />
                  <h4 className="text-xl font-semibold">Javascript</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaReact className="text-4xl text-cyan-400" />
                  <h4 className="text-xl font-semibold">React js</h4>
                </li>

                <li className=" flex flex-col text-center justify-center items-center">
                  <SiReactrouter className="text-4xl text-orange-600" />
                  <h4 className="text-xl font-semibold">React Rouder Dom</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaNodeJs className="text-4xl text-lime-500" />
                  <h4 className="text-xl font-semibold">Node js</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <SiExpress className="text-4xl" />
                  <h4 className="text-xl font-semibold">Express js</h4>
                </li>
              </ul>
            </div>
            <div className="bg-base-100 mt-14 p-10 ">
              <div className="flex w-full flex-col lg:flex-row">
                <div className="card  rounded-box grid  flex-grow place-items-center flex-1  ">
                  <div className=" bg-base-100 py-8">
                    <h2 className="text-3xl font-semibold">
                      BSc in Computer Science
                    </h2>
                    <h4 className="text-lg text-gray-600 font-semibold my-2">
                      Manarat International University (2019 -2023)
                    </h4>
                    <p className=" text-gray-500 ">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim quo neque minus? Nulla soluta cupiditate dolorem
                      nobis enim quasi, officia est saepe nesciunt,
                    </p>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal divider-accent"></div>
                <div className="card rounded-box grid  flex-grow place-items-center flex-1">
                  <div className=" bg-base-100 ">
                    <h2 className="text-3xl font-semibold">
                      Diploma in Computer Science
                    </h2>
                    <h4 className="text-lg text-gray-600 font-semibold my-2">
                      Saic Institute of Management and Technology (2014 -2018)
                    </h4>
                    <p className=" text-gray-500 ">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim quo neque minus? Nulla soluta cupiditate dolorem
                      nobis enim quasi, officia est saepe nesciunt,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
