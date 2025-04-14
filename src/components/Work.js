import { OfficeBuildingIcon, BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { work } from "../data";

export default function Work() {
  return (
    <section id="work">
      <div className="container px-5 pb-10 pt-28 h-screen mx-auto">
        <div className="text-center mb-14">
          <OfficeBuildingIcon className="w-10 inline-block mb-4 text-dark-blue dark:text-darkmode-dark-blue" />
          <h1 className="text-4xl font-abrilFatface dark:text-white mb-4">
            Work
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {work.text}
          </p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {work.companies.map((company) => (
            <div key={company.name} className="p-2 w-full">
              <div className="bg-stone-200 dark:bg-darkmode-color-second rounded flex p-4 h-full items-center">
                <BriefcaseIcon className="text-orange-700 dark:text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="font-poppins dark:text-white">
                  <b>{company.name}</b>, <span className="text-sm text-stone-700 dark:text-stone-300">{company.position}</span>
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
