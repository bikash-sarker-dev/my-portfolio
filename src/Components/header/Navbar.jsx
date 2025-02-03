import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";

const Navbar = ({ detailsPage }) => {
  const [scroll, setScroll] = useState(false);
  const [isNav, setIsNav] = useState(false);

  console.log(isNav);
  useEffect(() => {
    setIsNav(detailsPage);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  }, [detailsPage]);

  const links = (
    <>
      <li>
        <Link
          className={` ${
            scroll ? "text-p-text" : "text-p-primary"
          } font-medium`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Links
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
          className={` ${
            scroll ? "text-p-text" : "text-p-primary"
          } font-medium`}
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
          className={` ${
            scroll ? "text-p-text" : "text-p-primary"
          } font-medium`}
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
          className={` ${
            scroll ? "text-p-text" : "text-p-primary"
          } font-medium`}
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
          className={` ${
            scroll ? "text-p-text" : "text-p-primary"
          } font-medium`}
        >
          Contact
        </Links>
      </li>
    </>
  );
  return (
    <div
      className={`${
        scroll
          ? "sticky w-full bg-p-info border-p-primary"
          : "border-b border-p-secondary"
      }  `}
    >
      <div className="container">
        <div className="navbar  py-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-p-primary lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
            <div className="hidden sm:block">
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
              to="https://drive.google.com/file/d/10GbXKQZ6Np8NJck0zTY-GNSURCExZp1-/view?usp=sharing"
              className="btn btn-accent btn-outline btn-sm lg:btn-md"
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
