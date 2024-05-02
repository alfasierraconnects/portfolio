import React from "react";
import shopper from "../logos/Shopper-screenshot.png";
import vartalap from "../logos/Vartalap-screenshot.png";
import tomato from "../logos/tomato-screenshot.png";
import expensetracker from "../logos/expense-tracker-screenshot.png";
import omnifood from "../logos/omnifood-screenshot.png";
import todos from "../logos/nextjs-todo-screenshot.png";
import { SiAppwrite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

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
        <a
          href="https://shopper-react-alfasierra.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-pink-400">
            <img
              src={shopper}
              alt="shopper"
              className="group-hover:scale-110 transition duration-700"
            />

            <div className="absolute bottom-0 w-full h-[66%] bg-pink-400 text-white p-4 overflow-hidden transition-all duration-700 translate-y-full opacity-90 group-hover:translate-y-0">
              <h3 className="mb-2 text-xl">Shopper E-Commerce App</h3>
              <p className="text-3xl flex gap-4">
                <FaReact />
                <SiAppwrite />
                <SiReactrouter />
                <SiTailwindcss />
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://vartalap-alfasierra.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-cyan-700">
            <img
              src={vartalap}
              alt="vartalap"
              className="group-hover:scale-110 transition duration-700"
            />

            <div className="absolute top-0 w-full h-[66%] bg-cyan-700 text-white p-4 overflow-hidden transition-all duration-700 -translate-y-full opacity-85 group-hover:translate-y-0">
              <h3 className="mb-2 text-xl">Vartalap Messaging App</h3>
              <p className="text-3xl flex gap-4">
                <FaReact />
                <SiAppwrite />
                <SiReactrouter />
                <SiTailwindcss />
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://tomato-react-alfasierra.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-pink-400">
            <img
              src={tomato}
              alt="tomato"
              className="group-hover:scale-110 transition duration-700"
            />

            <div className="absolute bottom-0 w-full h-[66%] bg-pink-400 text-white p-4 overflow-hidden transition-all duration-700 translate-y-full opacity-90 group-hover:translate-y-0">
              <h3 className="mb-2 text-xl">Tomato Restaurant App</h3>
              <p className="text-3xl flex gap-4">
                <FaReact />
                <SiReactrouter />
                <SiTailwindcss />
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://expense-tracker-alfasierra.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-cyan-700">
            <img
              src={expensetracker}
              alt="expense tracker"
              className="group-hover:scale-110 transition duration-700"
            />

            <div className="absolute top-0 w-full h-[66%] bg-cyan-700 text-white p-4 overflow-hidden transition-all duration-700 -translate-y-full opacity-85 group-hover:translate-y-0">
              <h3 className="mb-2 text-xl">Expense Tracking App</h3>
              <p className="text-3xl flex gap-4">
                <FaReact />
                <SiTailwindcss />
                <FaChartBar />
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://omnifood-replica-alfasierra.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-pink-400">
            <img
              src={omnifood}
              alt="omnifood"
              className="group-hover:scale-110 transition duration-700"
            />

            <div className="absolute bottom-0 w-full h-[66%] bg-pink-400 text-white p-4 overflow-hidden transition-all duration-700 translate-y-full opacity-90 group-hover:translate-y-0">
              <h3 className="mb-2 text-xl">Omnifood Food Ordering App</h3>
              <p className="text-3xl flex gap-4">
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </p>
            </div>
          </div>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="relative bg-black rounded-md overflow-hidden group hover:ring-4 ring-cyan-700">
            <img
              src={todos}
              alt="next.js todo app"
              className="group-hover:scale-110 transition duration-700"
            />

            <div className="absolute top-0 w-full h-[66%] bg-cyan-700 text-white p-4 overflow-hidden transition-all duration-700 -translate-y-full opacity-85 group-hover:translate-y-0">
              <h3 className="mb-2 text-xl">Next.js Todo App</h3>
              <p className="text-3xl flex gap-4">
                <RiNextjsLine />
                <SiMongodb />
                <FaNodeJs />
                <SiTailwindcss />
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
