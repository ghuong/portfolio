import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="absolute w-full h-screen -z-20 overflow-visible">
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-28 h-28 top-36 right-12"></div>
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second w-24 h-24 bottom-32 right-[60%]"></div>
      </div>
      <div className="absolute w-full h-full bg-transparent -z-10 backdrop-blur-2xl dark:backdrop-blur-[50px]"></div>
      <div className="container px-5 pb-10 pt-28 min-h-screen mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4 text-dark-blue dark:text-darkmode-dark-blue" />
          <h1 className="text-4xl font-abrilFatface dark:text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="font-poppins leading-relaxed dark:text-white xl:w-2/4 lg:w-3/4 mx-auto">
            In my work, I've picked up new languages and technologies quickly,
            thanks to my computer science foundations. Here are a few of the
            things I've worked with.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-stone-100 dark:bg-[#2a2a2a] rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-500 dark:text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="font-poppins dark:text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
