import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  });

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Links
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          to="about"
        >
          About Me
        </Links>
      </li>
      <li>
        <Links
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          to="skills"
        >
          Skills
        </Links>
      </li>
      <li>
        <Links
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          to="projects"
        >
          Projects
        </Links>
      </li>
      <li>
        <Links
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          to="contact"
        >
          Contact
        </Links>
      </li>
    </>
  );
  return (
    <div className={`${scroll ? "sticky w-full bg-blue-50 " : ""}`}>
      <div className="container">
        <div className="navbar  py-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div>
              <img
                className="w-36"
                src="https://i.ibb.co.com/Qnd1hFd/myLogo.png"
                alt="my logo not support"
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link
              target="_blank"
              to="https://docs.google.com/document/d/1v0LaB_9yfdi8-hh7jf39rW351YK2jRv3isZ4BWMYzyY/edit?usp=sharing"
              className="btn btn-accent btn-outline"
            >
              Resume Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
