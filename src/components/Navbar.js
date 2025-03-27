import React, { useState, useEffect } from "react";
import Navlink from "./Navlink";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const isScrolled = () => {
      const threshold = 100;
      return window.scrollY > threshold;
    }

    const isScrolledToBottom = () => {
      const threshold = 10;
      // viewport height plus scrolled height equals document's height
      return (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - threshold);
    }

    const handleScroll = () => {
      if (isScrolled() && !isScrolledToBottom()) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // cleanup on unmount
    };
  }, []);

  return (
    <header
      className={`md:sticky top-0 z-50 h-20 font-abrilFatface
        transition duration-1000 transform
        ${
          isScrolled
            ? "bg-stone-50 shadow-lg -translate-y-4"
            : "bg-transparent shadow-none translate-y-0"
        }`}
    >
      <div
        className={`flex flex-wrap h-full px-24 flex-col md:flex-row items-center justify-between
          transition-transform transform duration-1000 
            ${isScrolled ? "translate-y-2" : "translate-y-0"}
          `}
      >
        <a
          href="#about"
          className="text-4xl"
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
