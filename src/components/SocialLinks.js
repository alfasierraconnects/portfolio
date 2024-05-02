import React from "react";
import { SiCodingninjas } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

const SocialLinks = () => {
  return (
    <div className="text-gray-300 font-semibold flex flex-col items-center mt-16 my-10">
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400">
        Find me on
      </h4>
      <p className="mt-6">Feel free to connect with me</p>
      <div className="flex gap-10 my-4 text-black text-2xl">
        <div className="icon-container relative">
          <a
            href="https://github.com/alfasierraconnects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithub className="icon" />
            <span className="text text-sm">GitHub</span>
          </a>
        </div>

        <div className="icon-container relative">
          <a
            href="https://www.linkedin.com/in/ashutosh-sahoo-0a2456284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
            <span className="text text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="icon-container relative">
          <a
            href="https://leetcode.com/alfasierraconnects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="icon" />
            <span className="text text-sm">LeetCode</span>
          </a>
        </div>

        <div className="icon-container relative">
          <a
            href="https://www.naukri.com/code360/profile/8cdeec2b-bf8d-4ebd-8c41-958b59da92fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodingninjas className="icon" />
            <span className="text text-sm whitespace-nowrap">
              Coding Ninjas
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
