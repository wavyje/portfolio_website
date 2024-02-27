import React from "react";
import Link from "next/link";
import Project from "../../page";
import repositories from "../../../public/projects.json";

const Overview = () => {
  return (
    <div className="flex grid text-center lg:max-w-6xl lg:w-full lg:mb-20 lg:grid-cols-5 lg:text-center">
      {repositories.map((projectData) => {
        return (
          <div className="group flex flex-col rounded-lg border border-transparent px-5 py-4 transition-colors hover:opacity-30 items-center">
            <img
              className="h-24 w-24 group-hover:-translate-y-6"
              src={projectData.image1}
            />
            <Link href={"#" + projectData.tag}>
              <h2 className={`mb-2 text-2xl font-semibold text-white`}>
                {projectData.tag}
              </h2>
              <p className={`m-0 max-w-[35ch] text-sm opacity-50 text-white`}>
                {projectData.name}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
