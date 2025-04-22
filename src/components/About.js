import { about, socialmedia } from "../data";
import React, { useState } from "react";

export default function About() {
  const [restartAnimation, setRestartAnimation] = useState(false);

  const handleRestartClick = () => {
    setRestartAnimation(!restartAnimation);
  };

  return (
    <section
      id="about"
      key={restartAnimation}
      className="relative h-screen -translate-y-20"
    >
      <div className="absolute w-full h-screen -z-20">
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-44 h-44"></div>
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-28 h-28 top-36 right-28"></div>
        <div className="absolute rounded-full bg-color-main w-12 h-12 bottom-24 left-[60%]"></div>
      </div>
      <div className="absolute w-full h-full bg-transparent -z-10 backdrop-blur-2xl dark:backdrop-blur-[50px]"></div>
      <div
        className="h-full w-full px-10 mt-6
        flex flex-col items-center justify-center 
        md:flex-row-reverse md:justify-evenly md:mt-0
      "
      >
        <div
          className="relative
          before:absolute before:h-[18rem] before:w-[17rem] before:md:h-[24rem] before:md:w-[23rem] before:border-2 before:border-color-second
          before:rounded-[46%_54%_34%_66%_/_54%_61%_39%_46%] before:top-1/2 before:-translate-y-1/2 before:-right-2
          dark:before:border-stone-300 transition-colors duration-300 animate-fade-left animation-delay-200 opacity-0"
        >
          <div
            className="h-[17rem] w-[16rem] md:h-[23rem] md:w-[22rem] bg-stone-200 flex items-center justify-center
            rounded-[46%_54%_34%_66%_/_54%_61%_39%_46%] overflow-hidden dark:bg-stone-300 transition-colors duration-300"
          >
            <img
              className="translate-y-2 scale-125"
              alt="face"
              src="./images/hero.png"
            />
          </div>
        </div>
        <div className="md:w-[28rem] flex flex-col items-start md:text-left md:mr-8">
          <div className="mb-6 md:mb-8 dark:text-white transition-colors duration-300 animate-fade-right animation-delay-200 opacity-0">
            <div className="text-5xl font-abrilFatface mb-3 hidden md:block">
              Hi, I'm Gary,
            </div>
            <div className="text-[2.5rem] leading-[2.75rem] font-abrilFatface mb-3 md:hidden">
              I'm a
            </div>
            <div
              className="font-abrilFatface
              text-4xl
              md:text-[2.25rem] md:leading-[2.75rem]
              lg:text-[2.75rem] lg:leading-[3.5rem]"
            >
              Software{" "}
              <span className="text-dark-blue dark:text-darkmode-dark-blue transition-colors duration-300">
                Developer
              </span>
            </div>
          </div>
          <p className="mb-8 leading-relaxed font-poppins dark:text-white transition-colors duration-300 animate-fade-right animation-delay-400 opacity-0">
            <span className="md:hidden">{about.textLong}</span>
            <span className="hidden md:inline">{about.text}</span>
          </p>
          <div className="flex justify-center gap-5 animate-fade-right animation-delay-600 opacity-0">
            <a href="#work" className="flex items-center gap-2 rounded-full bg-color-main shadow-main text-white px-5 py-3 font-poppins">
              Résumé Tour
              <i className="bx bxs-chevrons-down"></i>
            </a>
            <button className="w-12 rounded-full bg-color-second shadow-second dark:shadow-darkModeSecond transition-shadow duration-300">
              <i
                className="bx bx-play text-2xl"
                onClick={handleRestartClick}
              ></i>
            </button>
          </div>
          <div className="relative md:absolute flex flex-row gap-12 md:bottom-20 text-2xl mt-14">
            <a
              href={socialmedia.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i
                className="bx bxl-linkedin-square dark:text-white hover:dark:text-color-main transition-colors duration-300 hover:text-color-main animate-fade-down opacity-0"
                style={{ "--icon-count": "-20px" }}
              />
            </a>
            <a href="#contact">
              <i
                className="bx bxs-envelope dark:text-white hover:dark:text-color-main transition-colors duration-300 hover:text-color-main animate-fade-down opacity-0 animation-delay-200"
                style={{ "--icon-count": "-50px" }}
              />
            </a>
            <a
              href={socialmedia.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i
                className="bx bxl-github dark:text-white hover:dark:text-color-main transition-colors duration-300 hover:text-color-main animate-fade-down opacity-0 animation-delay-400"
                style={{ "--icon-count": "-80px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
