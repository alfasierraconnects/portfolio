import React from "react";
import profileImg from "../logos/profileImg.png";

const Header = () => {
  return (
    <div className="container my-10 px-5 mx-auto">
      <div className="text-gray-300 flex flex-col gap-4 items-center">
        <img
          src={profileImg}
          alt="Ashutosh"
          className=" bg-cyan-900 rounded-full w-[40%] sm:w-[20%] sm:my-5"
        />

        <h2 className=" text-3xl sm:text-4xl text-center font-semibold">
          <span
            className="text-gradient"
            style={{
              backgroundImage: "linear-gradient(to top,#06b6d4,#22d3ee)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Namaste! I'm Ashutosh Sahoo,
            <br />
          </span>
          frontend developer based in India.
        </h2>
        <h4 className="text-center text-lg sm:text-xl sm:px-10">
          I craft user-friendly & visually appealing web applications providing
          seamless user experience across all devices.
        </h4>
        <div className="flex flex-col sm:flex-row gap-4 text-lg sm:text-xl mt-4">
          <button className="p-2 px-4 bg-gradient-to-br from-pink-600 to-cyan-700 rounded-md hover:ring-2 active:ring-cyan-500 shadow-md ring-pink-400 ring-inset">
            Connect with me
          </button>
          <button className="p-2 px-4 rounded-md ring-2 ring-gray-300 active:ring-cyan-500 hover:ring-pink-400 shadow-md ring-inset">
            My resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
