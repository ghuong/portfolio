import { about, socialmedia } from "../data";
import React from "react";

export default function About() {
  return (
    <section id="about" className="relative h-screen -translate-y-20">
      <div
        className="h-full w-full px-6
        flex flex-col md:flex-row-reverse items-center justify-evenly
      "
      >
        {/* <div className="w-1/2 lg:w-2/5 lg:max-w-lg">
          <img
            className="object-cover object-center rounded-full mb-14"
            alt="face"
            src="./images/face.jpg"
          />
        </div> */}
        <div
          className="relative
          before:absolute before:h-[24rem] before:w-[23rem] before:border-2 before:border-color-second
          before:rounded-[46%_54%_34%_66%_/_54%_61%_39%_46%] before:top-1/2 before:-translate-y-1/2 before:-right-2"
        >
          <div
            className="h-[23rem] w-[22rem] bg-color-second flex items-center justify-center
            rounded-[46%_54%_34%_66%_/_54%_61%_39%_46%] overflow-hidden"
          >
            <img
              className="translate-y-2 scale-125"
              alt="face"
              src="./images/hero.png"
            />
          </div>
        </div>
        <div className="w-[28rem] flex flex-col md:items-start md:text-left items-center">
          <div className="mb-8">
            <div className="sm:text-5xl text-4xl font-abrilFatface mb-3">
              Hi, I'm Gary,
            </div>
            <div className="sm:text-[2.75rem] text-[2rem] leading-[2.75rem] sm:leading-[3.5rem] font-abrilFatface">
              Software <span className="text-dark-blue">Developer</span>
            </div>
          </div>
          <p className="mb-8 leading-relaxed font-poppins">{about.text}</p>
          <div className="flex justify-center gap-5">
            <button className="flex items-center gap-2 rounded-full bg-color-main shadow-main text-white px-5 py-3 font-poppins">
              <i className="bx bx-file"></i>
              Download CV
            </button>
            <button className="w-12 rounded-full bg-color-second shadow-second">
              <i className="bx bx-play text-2xl"></i>
            </button>
            {/* <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me!
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See What I've Built
              </a> */}
          </div>
          <div className="absolute flex flex-row gap-12 bottom-20 text-2xl">
            <a
              href={socialmedia.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="bx bxl-linkedin-square transition-colors duration-300 hover:text-color-main" />
            </a>
            <a href="#contact">
              <i className="bx bxs-envelope transition-colors duration-300 hover:text-color-main" />
            </a>
            <a
              href={socialmedia.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="bx bxl-github transition-colors duration-300 hover:text-color-main" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
