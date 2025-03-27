import { about, socialmedia } from "../data";
import React from "react";

export default function About() {
  return (
    <section id="about" className="relative h-[calc(100vh-5rem)]">
      <div className="md:px-20 h-full">
        <div className="container mx-auto h-full flex flex-col md:flex-row-reverse items-center justify-center">
          <div className="w-1/2 lg:w-2/5 lg:max-w-lg">
            <img
              className="object-cover object-center rounded-full mb-14"
              alt="face"
              src="./images/face.jpg"
            />
          </div>
          <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="mb-8">
              <div className="sm:text-6xl text-4xl font-abrilFatface mb-5">I Am</div>
              <div className="sm:text-[2.75rem] text-3xl font-abrilFatface">
                Software <span className="text-dark-blue">Developer</span>
              </div>
            </div>
            <p className="mb-8 leading-relaxed font-poppins">
              {about.text}
            </p>
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
            <div className="flex flex-row w-full mt-8">
              <a
                href={socialmedia.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="./images/github.png"
                  alt="github-logo"
                  className="w-7"
                />
              </a>
              <a
                href={socialmedia.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="./images/linkedin.png"
                  alt="linkedin-logo"
                  className="w-7 ml-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
