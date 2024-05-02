import React from "react";
import resumeImg from "../logos/ashutosh_resume_image.jpg";

const Resume = () => {
  return (
    <div
      id="myResume"
      className="text-gray-300 mt-16 my-10 flex flex-col justify-center"
    >
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400 font-semibold text-center">
        My resume
      </h4>
      <div className="conatiner px-10 mt-6 mx-auto sm:w-[75%] lg:w-[60%]">
        <img src={resumeImg} alt="resume" />
      </div>
      <a
        href="https://drive.google.com/file/d/1NUScsgtIYdIS7gCOnm6ymxk581xklJR2/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 px-4 mx-auto mt-4 rounded-md ring-2 ring-gray-300 active:ring-cyan-500 hover:ring-pink-400 shadow-md ring-inset"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
