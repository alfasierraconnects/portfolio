import React from "react";
import leetcode from "../logos/leetcode.png";
import naukri from "../logos/Naukri-logo.png";

const SocialLinks = () => {
  return (
    <div className="text-gray-300 font-semibold flex flex-col items-center mt-16 my-10">
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400">
        Find me on
      </h4>
      <p className="mt-6">Feel free to connect with me</p>
      <div className="flex justify-around my-4 text-black gap-4">
        <div className="hover:translate-y-1 hover:scale-105 transition">
          <a
            href="https://github.com/alfasierraconnects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon size="large" name="logo-github"></ion-icon>
          </a>
        </div>

        <div className="hover:translate-y-1 hover:scale-105 transition">
          <a
            href="https://www.linkedin.com/in/ashutosh-sahoo-0a2456284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
          </a>
        </div>
        <div className="hover:translate-y-1 hover:scale-105 transition">
          <a
            href="https://leetcode.com/alfasierraconnects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leetcode} alt="leetcode" width="30" />
          </a>
        </div>
        <div className="hover:translate-y-1 hover:scale-105 transition">
          <a
            href="https://www.naukri.com/code360/profile/8cdeec2b-bf8d-4ebd-8c41-958b59da92fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={naukri} alt="leetcode" width="30" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
