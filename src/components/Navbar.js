import React from "react";
import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-50 font-abrilFatface">
      <div className="flex flex-wrap p-7 mx-16 flex-col md:flex-row items-center justify-between">
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
        <a href="#contact">Contact Me</a>
      </div>
    </header>
  );
}
