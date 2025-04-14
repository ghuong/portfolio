import { OfficeBuildingIcon, BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { work } from "../data";

export default function Work() {
  return (
    <section id="work" className="relative">
      <div className="absolute w-full h-screen -z-20">
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second transition-colors duration-300 w-28 h-28 top-36 left-12"></div>
        <div className="absolute rounded-full bg-color-second dark:bg-darkmode-orb-color-second w-24 h-24 bottom-28 left-[80%]"></div>
      </div>
      <div className="absolute w-full h-full bg-transparent -z-10 backdrop-blur-2xl dark:backdrop-blur-[50px]"></div>
      <div className="container px-5 pb-10 pt-28 min-h-screen mx-auto">
        <div className="text-center mb-14">
          <OfficeBuildingIcon className="w-10 inline-block mb-4 text-dark-blue dark:text-darkmode-dark-blue" />
          <h1 className="text-4xl font-abrilFatface dark:text-white mb-4">
            Work
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {work.companies.map((company) => (
            <div key={company.name} className="p-2 w-full">
              <div className="bg-stone-200 dark:bg-darkmode-color-second rounded flex p-4 h-full items-center">
                <BriefcaseIcon className="text-dark-blue dark:text-darkmode-dark-blue w-6 h-6 flex-shrink-0 mr-4" />
                <span className="font-poppins dark:text-white">
                  <b>{company.name}</b>,{" "}
                  <span className="text-sm text-nowrap text-stone-700 dark:text-stone-300">
                    {company.position}
                  </span>
                </span>
                <span className="font-poppins text-xs text-stone-500 dark:text-stone-400 flex-grow text-right">
                  {company.dates}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
