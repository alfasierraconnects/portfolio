import React from "react";
import HTMLLogo from "../logos/HTML5.png";
import CSSLogo from "../logos/CSS3.png";
import Javascript from "../logos/JavaScript-logo.png";
import Java from "../logos/java-logo.png";
import reactLogo from "../logos/React-logo.png";
import routerLogo from "../logos/react-router-logo.png";
import appwriteLogo from "../logos/appwrite-logo.png";
import gitLogo from "../logos/git-logo.png";
import tailwindLogo from "../logos/tailwind-logo.png";
import axiosLogo from "../logos/axios-logo.png";
import postmanLogo from "../logos/postman-logo.png";

const TechStack = () => {
  return (
    <div className="mx-auto text-gray-300 mt-16 my-10">
      <h2 className="text-xl underline underline-offset-4 decoration-blue-400 font-semibold text-center">
        Techstack I use:
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-y-4  gap-2 items-center  my-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[45%] mx-auto">
        <p className="col-span-1">Laguages:</p>
        <div className="col-span-2 sm:col-span-1 flex gap-6 h-10">
          <img src={HTMLLogo} alt="HTML" />
          <img src={CSSLogo} alt="CSS" />
          <img src={Javascript} alt="Javascript" />
          <img src={Java} alt="Java" />
        </div>

        <p className="col-span-1">Frameworks & Libraraies:</p>
        <div className="col-span-2 sm:col-span-1 flex items-center gap-6 h-10">
          <img src={reactLogo} alt="React" className="h-8" />
          <img src={routerLogo} alt="react router" className="h-8" />
          <img src={tailwindLogo} alt="Tailwind" className="h-6" />
        </div>

        <p className="col-span-1">Backend & Database:</p>
        <div className="col-span-2 sm:col-span-1 flex items-center gap-6 h-10">
          <img src={appwriteLogo} alt="Appwrite" className="h-14" />
        </div>

        <p className="col-span-1">Other Tools:</p>
        <div className="col-span-2 sm:col-span-1 flex items-center gap-6 h-10">
          <img src={gitLogo} alt="Git" className="h-8" />
          <img src={axiosLogo} alt="Axios" className="h-4" />
          <img src={postmanLogo} alt="Axios" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
