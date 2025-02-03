import React from "react";
import SocialLinks from "../socialLink/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="footer footer-center bg-p-info text-base-content rounded p-10 ">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Me</a>
          <a className="link link-hover">Skills</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <SocialLinks />
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bikash Sarker
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
