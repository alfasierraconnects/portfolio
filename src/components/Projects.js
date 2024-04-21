import React from "react";
import screenshot from "../logos/Screenshot 2024-04-21 161133.jpg";

const Projects = () => {
  return (
    <div
      id="myProjects"
      className="text-gray-300 font-semibold flex flex-col items-center mt-16 my-10 mx-auto"
    >
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400">
        My Latest Work
      </h4>
      <p className="my-6">Here are few projects I worked on recently</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mx-10 sm:mx-20">
        <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-pink-400">
          <img
            src={screenshot}
            alt="project"
            className="group-hover:translate-x-10 scale-125 transition duration-700"
          />

          <div className="absolute bottom-0 w-full h-[66%] bg-pink-400 text-white p-4 overflow-hidden transition-all duration-700 translate-y-full opacity-75 group-hover:translate-y-0">
            <h3 className="mb-2">Project Title</h3>
            <p className="text-sm">Project Description</p>
          </div>
        </div>
        <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-cyan-700">
          <img
            src={screenshot}
            alt="project"
            className="group-hover:-translate-x-10 scale-125 transition duration-700"
          />

          <div className="absolute top-0 w-full h-[66%] bg-cyan-700 text-white p-4 overflow-hidden transition-all duration-700 -translate-y-full opacity-75 group-hover:translate-y-0">
            <h3 className="mb-2">Project Title</h3>
            <p className="text-sm">Project Description</p>
          </div>
        </div>
        <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-pink-400">
          <img
            src={screenshot}
            alt="project"
            className="group-hover:translate-x-10 scale-125 transition duration-700"
          />

          <div className="absolute bottom-0 w-full h-[66%] bg-pink-400 text-white p-4 overflow-hidden transition-all duration-700 translate-y-full opacity-75 group-hover:translate-y-0">
            <h3 className="mb-2">Project Title</h3>
            <p className="text-sm">Project Description</p>
          </div>
        </div>
        <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-cyan-700">
          <img
            src={screenshot}
            alt="project"
            className="group-hover:-translate-x-10 scale-125 transition duration-700"
          />

          <div className="absolute top-0 w-full h-[66%] bg-cyan-700 text-white p-4 overflow-hidden transition-all duration-700 -translate-y-full opacity-75 group-hover:translate-y-0">
            <h3 className="mb-2">Project Title</h3>
            <p className="text-sm">Project Description</p>
          </div>
        </div>
        <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-pink-400">
          <img
            src={screenshot}
            alt="project"
            className="group-hover:translate-x-10 scale-125 transition duration-700"
          />

          <div className="absolute bottom-0 w-full h-[66%] bg-pink-400 text-white p-4 overflow-hidden transition-all duration-700 translate-y-full opacity-75 group-hover:translate-y-0">
            <h3 className="mb-2">Project Title</h3>
            <p className="text-sm">Project Description</p>
          </div>
        </div>
        <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-cyan-700">
          <img
            src={screenshot}
            alt="project"
            className="group-hover:-translate-x-10 scale-125 transition duration-700"
          />

          <div className="absolute top-0 w-full h-[66%] bg-cyan-700 text-white p-4 overflow-hidden transition-all duration-700 -translate-y-full opacity-75 group-hover:translate-y-0">
            <h3 className="mb-2">Project Title</h3>
            <p className="text-sm">Project Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
