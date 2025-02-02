import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-3">
        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center  transition duration-500 ease-in-out   bg-p-secondary hover:bg-p-primary hover:text-p-background hover:shadow-xl hover:shadow-p-info  rounded-lg text-white text-xl shadow-xl"
            to="https://www.linkedin.com/in/bikash-sarker-dev"
          >
            <FaLinkedin />
          </Link>
        </li>

        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center  transition duration-500 ease-in-out bg-p-secondary hover:bg-p-primary hover:text-p-background hover:shadow-xl hover:shadow-p-info  rounded-lg text-white text-xl shadow-xl"
            to="https://github.com/bikash-sarker-dev"
          >
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center  transition duration-500 ease-in-out bg-p-secondary hover:bg-p-primary hover:text-p-background hover:shadow-xl hover:shadow-p-info  rounded-lg text-white text-xl shadow-xl"
            to=""
          >
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center  transition duration-500 ease-in-out bg-p-secondary hover:bg-p-primary hover:text-p-background hover:shadow-xl hover:shadow-p-info  rounded-lg text-white text-xl shadow-xl"
            to=""
          >
            <FaFacebookF />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
