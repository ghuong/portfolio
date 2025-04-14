import { CodeIcon } from "@heroicons/react/solid";
import { projects, socialmedia } from "../data";
import React from "react";

export default function Projects() {
  return (
    <section id="projects">
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
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-grow self-stretch sm:w-1/2 w-auto h-auto p-4"
            >
              <div className="flex relative h-full w-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xs font-poppins text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="font-abrilFatface text-lg dark:text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="font-poppins text-sm leading-relaxed dark:text-white">
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
