import { CodeIcon } from "@heroicons/react/solid";
import { projects, socialmedia } from "../data";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="relative mb-24">
      <div className="absolute w-full h-full -z-20 overflow-visible">
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-28 h-28 top-36 left-12"></div>
        <div className="absolute rounded-full bg-color-main w-14 h-14 bottom-[50%] left-[85%]"></div>
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second w-20 h-20 bottom-24 left-12"></div>
      </div>
      <div className="absolute w-full h-full bg-transparent -z-10 backdrop-blur-2xl dark:backdrop-blur-[50px]"></div>
      <div className="container px-5 pb-10 pt-28 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-14">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-dark-blue dark:text-darkmode-dark-blue" />
          <h1 className="text-4xl font-abrilFatface mb-4 dark:text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-poppins dark:text-white">
            Here are a few of the apps I've built. See more at{" "}
            <a
              href={socialmedia.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              {socialmedia.githubShortened}.
            </a>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, idx) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noreferrer noopener"
              className={`flex-grow self-stretch w-auto h-auto p-4
                ${idx === 0 ? "" : "sm:w-1/2"}`}
            >
              <div className="flex relative h-52 w-full overflow-hidden">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="absolute inset-0 h-full w-full shadow-inner border-4 border-color-second dark:border-darkmode-color-second"></div>
                <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-stone-400 bg-color-second dark:border-stone-700 dark:bg-stone-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xs font-poppins text-dark-blue dark:text-darkmode-dark-blue mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="font-abrilFatface text-xl dark:text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="font-poppins text-xs leading-relaxed dark:text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
