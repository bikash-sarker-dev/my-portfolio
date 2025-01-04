import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-3">
        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center bg-[#38343F] rounded-lg text-white text-xl shadow-xl"
            to=""
          >
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center bg-[#38343F] rounded-lg text-white text-xl shadow-xl"
            to=""
          >
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center bg-[#38343F] rounded-lg text-white text-xl shadow-xl"
            to=""
          >
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            className="w-10 h-10  flex justify-center items-center bg-[#38343F] rounded-lg text-white text-xl shadow-xl"
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
