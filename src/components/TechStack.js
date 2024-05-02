import React from "react";
import { SiAppwrite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="mx-auto text-gray-300 mt-16 my-10">
      <h2 className="text-xl underline underline-offset-4 decoration-blue-400 font-semibold text-center">
        Techstack I use:
      </h2>
      <div className="grid grid-cols-2 gap-y-4  gap-2 items-center my-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[45%] mx-auto">
        <p>Laguages:</p>
        <div className="flex items-center text-3xl gap-6 h-10">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <FaJava />
        </div>

        <p>Frameworks & Libraraies:</p>
        <div className="flex items-center text-3xl gap-6 h-10">
          <FaReact />
          <SiTailwindcss />
          <RiNextjsLine />
          <SiRedux />
        </div>

        <p>Backend & Database:</p>
        <div className="flex items-center text-3xl gap-6 h-10">
          <SiAppwrite />
          <SiMongodb />
          <FaNodeJs />
        </div>

        <p>Other Tools:</p>
        <div className="flex items-center text-3xl gap-6 h-10">
          <SiPostman />
          <SiAxios />
          <SiReactrouter />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
