import React from "react";
import repositories from "../../../../public/projects.json";

const Repositories = () => {
  return (
    <div className="max-w-full min-h-screen">
      {/*
       * Build project section for every project in the database.
       */}
      {repositories.map((projectData) => {
        return (
          <div
            key={projectData.tag}
            id={projectData.tag}
            className="min-h-screen"
          >
            <hr
              className={"absolute w-1/6 h-1 sm:my-6 left-20 bg-white rounded"}
            />
            <div className="flex md:shrink-0 items-center justify-center min-h-screen flex-col sm:flex-row">
              <div className="flex flex-col bg-white m-4 rounded-lg bg-opacity-15 aspect-square w-4/6 sm:w-3/12 items-center justify-center">
                <h1 className="mb-8 w-5/6 text-2xl font-bold text-white text-center">
                  {projectData.name}
                </h1>
                <a
                  className="btn p-2 m-6 btn-black border rounded-lg border-white bg-white bg-opacity-20 hover:bg-opacity-50 text-white"
                  href={projectData.githubLink}
                >
                  visit on github
                </a>
                <div className="w-5/6 text-white text-center">
                  {"tech: " + projectData.tech}
                </div>
              </div>
              <div className="flex flex-col w-4/6 sm:w-3/12 aspect-square bg-opacity-10 bg-white items-center justify-center rounded">
                <img
                  className="mb-10 rounded-lg object-scale-down h-20 w-40"
                  src={projectData.image1}
                />
                <div className="w-5/6 text-white text-center">
                  {projectData.description}
                </div>
              </div>
              <div className="flex m-4 w-4/6 sm:w-3/12 aspect-square bg-white rounded-lg bg-opacity-10 justify-center items-center">
                <img
                  className="w-5/6 h-5/6 rounded-lg object-scale-down"
                  src={projectData.image2}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Repositories;
