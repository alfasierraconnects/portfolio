import React from "react";
import resumeImg from "../logos/sampleResume.jpg";

const Resume = () => {
  const downloadResume = () => {
    const pdfPath =
      "https://drive.google.com/file/d/1_nPh85XYakJ73_yNQT0hgdsUVeEkruvo/view?usp=drive_link";

    const link = document.createElement("a");
    link.href = pdfPath;
    link.target = "_blank";
    link.download = "ashutosh-resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="text-gray-300 mt-16 my-10 flex flex-col justify-center">
      <h4 className="text-xl underline underline-offset-4 decoration-blue-400 font-semibold text-center">
        My resume
      </h4>
      <div className="conatiner px-10 mt-6 mx-auto">
        <img src={resumeImg} alt="resume" />
      </div>
      <button
        onClick={downloadResume}
        className="p-2 px-4 mx-auto mt-4 rounded-md ring-2 ring-gray-300 active:ring-cyan-500 hover:ring-pink-400 shadow-md ring-inset"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
