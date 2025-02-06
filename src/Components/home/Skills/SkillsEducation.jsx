import React from "react";
import {
  FaCcStripe,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaLinode,
  FaNodeJs,
  FaReact,
  FaStarOfLife,
} from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReacthookform } from "react-icons/si";

import {
  SiExpress,
  SiMaterialdesign,
  SiMongodb,
  SiReactrouter,
} from "react-icons/si";

const SkillsEducation = () => {
  return (
    <section
      id="skills"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
      className="mb-24 mt-16 bg-p-info py-24 bg-blend-overlay bg-no-repeat bg-cover bg-fixed"
    >
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">Skills / Eduction</h2>
        </div>
        <div className="">
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-P-cardColor p-10 rounded-md"
            >
              <div>
                <div className="divider divider-horizontal"></div>
              </div>
              <ul className="flex flex-wrap gap-16 text-center justify-center items-center">
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaHtml5 className="text-4xl text-[#f97316]" />
                  <h4 className="text-xl font-semibold">HTML</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaCss3Alt className="text-4xl text-[#2563eb]" />
                  <h4 className="text-xl font-semibold">Css</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <RiTailwindCssFill className="text-4xl text-[#38bdf8]" />
                  <h4 className="text-xl font-semibold">Tailwind Css</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <SiMaterialdesign className="text-4xl text-[#3476e0]" />
                  <h4 className="text-xl font-semibold">Material Css UI</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaJs className="text-4xl text-[#facc15]" />
                  <h4 className="text-xl font-semibold">Javascript</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaReact className="text-4xl text-[#22d3ee]" />
                  <h4 className="text-xl font-semibold">React js</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <SiReactrouter className="text-4xl text-[#ca8a04]" />
                  <h4 className="text-xl font-semibold">React Rouder Dom</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaGalacticRepublic className="text-4xl text-[#f8a932]" />
                  <h4 className="text-xl font-semibold">TanStack Query</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <SiReacthookform className="text-4xl text-[#f8a932]" />
                  <h4 className="text-xl font-semibold"> React Hook Form</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaNodeJs className="text-4xl text-[#84cc16]" />
                  <h4 className="text-xl font-semibold">Node js</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <SiMongodb className="text-4xl text-[#84cc16]" />
                  <h4 className="text-xl font-semibold">MongoDb</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaStarOfLife className="text-4xl text-[#9333ea]" />
                  <h4 className="text-xl font-semibold">Json Web Token</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaLinode className="text-4xl text-[#22d3ee]" />
                  <h4 className="text-xl font-semibold">NodeMailer</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <MdOutlineAlternateEmail className="text-4xl text-[#f3723f]" />
                  <h4 className="text-xl font-semibold">Mailgun</h4>
                </li>

                <li className=" flex flex-col text-center justify-center items-center">
                  <SiExpress className="text-4xl" />
                  <h4 className="text-xl font-semibold">Express js</h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <FaCcStripe className="text-4xl text-[#1fa84d]" />
                  <h4 className="text-xl font-semibold">
                    Stripe payment method
                  </h4>
                </li>
                <li className=" flex flex-col text-center justify-center items-center">
                  <GiPayMoney className="text-4xl text-[#1f529a]" />
                  <h4 className="text-xl font-semibold">
                    {" "}
                    sslcommerz payment method
                  </h4>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-P-cardColor mt-14 p-10 rounded-xl"
            >
              <div className="flex w-full flex-col lg:flex-row">
                <div className="card  rounded-box grid  flex-grow place-items-center flex-1  ">
                  <div className="  py-8">
                    <h2 className="text-3xl font-semibold">
                      BSc in Computer Science
                    </h2>
                    <h4 className="text-lg text-gray-600 font-semibold my-2">
                      Manarat International University (2019 -2023)
                    </h4>
                    <p className=" text-gray-500 ">
                      In university life, I have done many programming clubs in
                      languages ​​and problem solving.I was able to learn from
                      the language club.When I was talking, I was using c,c++,
                      java, language.
                    </p>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal divider-accent"></div>
                <div className="card rounded-box grid  flex-grow place-items-center flex-1">
                  <div className=" ">
                    <h2 className="text-3xl font-semibold">
                      Diploma in Computer Science
                    </h2>
                    <h4 className="text-lg text-gray-600 font-semibold my-2">
                      Saic Institute of Management and Technology (2014 -2018)
                    </h4>
                    <p className=" text-gray-500 ">
                      When I was studying for my diploma, I attended a skill
                      competition in an organization and won. Here I showcased a
                      project, the name of which was Cricket Team Player Time
                      Match System.Here I achieved second place.
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
