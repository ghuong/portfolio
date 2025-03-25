import React from "react";
import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-50 h-20 font-abrilFatface">
      <div className="flex flex-wrap mx-20 h-full flex-col md:flex-row items-center justify-between">
        <a
          href="#about"
          className="title-font font-medium mb-4 md:mb-0 ml-3 text-3xl"
        >
          Gary Huong.
        </a>
        <div className="flex">
          <Navlink text="Projects" href={"#projects"} />
          <Navlink text="Skills" href={"#skills"} />
          <Navlink text="Education" href={"#education"} />
          <Navlink text="Work" href={"#work"} />
        </div>
        <div className="flex items-center">
          <a
            href="#contact"
            className="py-3 px-6 rounded-full font-abrilFatface bg-color-second text-sm
              transition-opacity duration-300
              hover:opacity-80"
          >
            Contact
          </a>
          <i className="bx bx-moon text-lg pl-6"></i>
          <i className="bx bx-menu text-2xl pl-6 hidden"></i>
        </div>
      </div>
    </header>
  );
}
