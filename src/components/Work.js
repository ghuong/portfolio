import { OfficeBuildingIcon, BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { work } from "../data";

export default function Work() {
  return (
    <section id="work">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <OfficeBuildingIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {work.text}
          </p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {work.companies.map((company) => (
            <div key={company.name} className="p-2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BriefcaseIcon className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  <b>{company.name}</b>, {company.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
