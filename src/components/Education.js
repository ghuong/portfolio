import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="absolute w-full h-screen -z-20 overflow-visible">
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-28 h-28 top-36 right-12"></div>
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second w-24 h-24 bottom-28 right-[80%]"></div>
      </div>
      <div className="absolute w-full h-full bg-transparent -z-10 backdrop-blur-2xl dark:backdrop-blur-[50px]"></div>
      <div className="container px-5 pb-10 pt-28 min-h-screen mx-auto">
        <div className="text-center mb-14">
          <AcademicCapIcon className="w-10 inline-block mb-4 text-dark-blue dark:text-darkmode-dark-blue" />
          <h1 className="text-4xl font-abrilFatface dark:text-white mb-4">
            Education
          </h1>
          <p className="font-poppins leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-white">
            {education.text}
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 font-poppins">
          {education.schools.map((school) => (
            <div key={school.name} className="p-2 w-full">
              <div className="bg-stone-200 dark:bg-darkmode-color-second rounded flex p-4 h-full items-center">
                <AcademicCapIcon className="text-dark-blue dark:text-darkmode-dark-blue w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium dark:text-white">
                  <b>{school.name}</b>, {school.degree}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
