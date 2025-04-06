import React, { useState, useEffect } from "react";
import Navlink from "./Navlink";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isScrolled = () => {
      const threshold = 100;
      return window.scrollY > threshold;
    };

    const isScrolledToBottom = () => {
      const threshold = 10;
      // viewport height plus scrolled height equals document's height
      return (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - threshold
      );
    };

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

  const handleHamburgerMenuClicked = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-40 h-20 font-abrilFatface
        transition duration-1000 transform
        ${
          isScrolled
            ? "bg-stone-50 shadow-lg -translate-y-4"
            : "bg-transparent shadow-none translate-y-0"
        }`}
    >
      <div
        className={`relative flex flex-wrap h-full px-12 lg:px-24 flex-row items-center justify-between
          transition-transform transform duration-1000 
            ${isScrolled ? "translate-y-2" : "translate-y-0"}
          `}
      >
        <a href="#about" className="text-3xl sm:text-4xl">
          Gary Huong.
        </a>
        <div
          className={`
          flex items-center z-50
          absolute flex-col top-20 right-0 bg-[rgba(255,255,255,0.8)] w-[19rem] py-14 gap-8
          rounded-[1.25rem_0_1.25rem_1.25rem] shadow-[-8px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-lg
          lg:relative lg:flex-row lg:top-0 lg:bg-transparent lg:w-auto lg:py-0 lg:gap-12
          lg:border-none lg:shadow-none lg:backdrop-blur-none
          xl:gap-14
          transition-transform transform duration-1000
          ${isScrolled ? "-translate-y-2 lg:translate-y-0" : "translate-y-0"}
          ${isMenuOpen ? "flex" : "hidden lg:flex"}`}
        >
          <Navlink text="Work" href={"#work"} />
          <Navlink text="Projects" href={"#projects"} />
          <Navlink text="Education" href={"#education"} />
          <Navlink text="Skills" href={"#skills"} />
          <div className="sm:hidden">
            <Navlink text="Contact" href={"#contact"} />
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="#contact"
            className="py-3 px-6 rounded-full font-abrilFatface bg-color-second text-sm
              hidden sm:block
              transition-opacity duration-300
              hover:opacity-80"
          >
            Contact
          </a>
          <i className="bx bx-moon cursor-pointer hover:text-color-main transition-colors duration-300 text-lg pl-6"></i>
          <i
            className="bx bx-menu cursor-pointer hover:text-color-main transition-colors duration-300 text-2xl pl-6 lg:hidden"
            onClick={handleHamburgerMenuClicked}
          ></i>
        </div>
      </div>
    </header>
  );
}
