import React, { useState, useEffect } from "react";
import Navlink from "./Navlink";

export default function Navbar({ onToggleDarkMode: handleToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isScrolled = () => {
      const threshold = 100;
      return window.scrollY > threshold;
    };

    const handleScroll = () => {
      if (isScrolled()) {
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

  const navLinkClasses = isMenuOpen ? "py-5 px-28 lg:py-0 lg:px-0" : "";

  return (
    <header
      className={`sticky top-0 z-40 h-20 font-abrilFatface 
        transition duration-1000 transform
        ${
          isScrolled
            ? "bg-navbar-color dark:bg-darkmode-navbar-color shadow-lg dark:shadow-stone-900 -translate-y-4"
            : "bg-transparent shadow-none translate-y-0"
        }`}
    >
      <div className="w-full h-full">
        <div
          className={`relative flex flex-wrap h-full px-12 lg:px-24 flex-row items-center justify-between
          transition-transform transform duration-1000 
            ${isScrolled ? "translate-y-2" : "translate-y-0"}
          `}
        >
          <a
            href="#about"
            className="text-4xl dark:text-white transition-colors duration-300"
          >
            Gary Huong.
          </a>
          <div
            className={`
            flex items-center z-50
            absolute flex-col top-20 right-0 bg-[rgba(255,255,255,0.8)] dark:bg-darkmode-menu-color
            rounded-[1.25rem_0_1.25rem_1.25rem] shadow-[-8px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-lg
            lg:relative lg:flex-row lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:w-auto lg:py-0 lg:gap-12
            lg:border-none lg:shadow-none lg:backdrop-blur-none
            xl:gap-14
            transition-transform transform duration-1000
            ${isScrolled ? "-translate-y-2 lg:translate-y-0" : "translate-y-0"}
            ${isMenuOpen ? "flex py-8" : "hidden lg:flex"}`}
          >
            <Navlink text="Work" href={"#work"} classes={navLinkClasses} />
            <Navlink
              text="Projects"
              href={"#projects"}
              classes={navLinkClasses}
            />
            <Navlink
              text="Education"
              href={"#education"}
              classes={navLinkClasses}
            />
            <Navlink text="Skills" href={"#skills"} classes={navLinkClasses} />
            <Navlink
              text="Contact"
              href={"#contact"}
              classes={`${navLinkClasses} sm:hidden`}
            />
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="py-3 px-6 rounded-full font-abrilFatface bg-color-second text-sm text-black
              hidden sm:block
              transition-opacity duration-300
              hover:opacity-80"
            >
              Contact
            </a>
            <i
              className="bx bx-moon dark:text-white hover:dark:text-color-main cursor-pointer hover:text-color-main transition-colors duration-300 text-lg pl-6"
              onClick={handleToggleDarkMode}
            ></i>
            <i
              className="bx bx-menu dark:text-white hover:dark:text-color-main cursor-pointer hover:text-color-main transition-colors duration-300 text-2xl pl-6 lg:hidden"
              onClick={handleHamburgerMenuClicked}
            ></i>
          </div>
        </div>
      </div>
    </header>
  );
}
