import React, { useEffect, useState } from "react";
import logo from "../logos/ashutosh-sahoo-favicon-color.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen === true) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 5000);
    }
  }, [menuOpen]);

  return (
    <div className="flex justify-between items-center bg-gray-900 mx-auto">
      <div>
        <img src={logo} alt="AS" className="w-8 sm:w-10 md:w-14 m-2 mx-4" />
      </div>
      {!menuOpen && (
        <div onClick={() => setMenuOpen(true)}>
          <p className="open-menu text-cyan-800 lg:hidden mr-4">
            <ion-icon size="large" name="reorder-three-outline"></ion-icon>
          </p>
        </div>
      )}
      {menuOpen && (
        <div className="fixed z-50 top-0 right-0 menu-list flex flex-col gap-2 bg-gray-900 text-gray-300 rounded-bl-lg font-medium text-lg p-4 animate-menuSlideIn">
          <p
            onClick={() => setMenuOpen(false)}
            className="open-menu text-cyan-800 fixed top-1 right-1"
          >
            <ion-icon size="large" name="close-outline"></ion-icon>
          </p>
          <p className="hover:text-pink-200 active:text-cyan-300">
            <a href="#home">Home</a>
          </p>
          <p className="hover:text-pink-200 active:text-cyan-300">
            <a href="#aboutme">About Me</a>
          </p>
          <p className="hover:text-pink-200 active:text-cyan-300">
            <a href="#myProjects">Projects</a>
          </p>
          <p className="hover:text-pink-200 active:text-cyan-300">
            <a href="#myResume">Resume</a>
          </p>
          <button className="p-2 px-4 bg-gradient-to-br from-pink-600 to-cyan-700 rounded-md hover:ring-2 active:ring-cyan-500 ring-pink-400 ring-inset">
            <a href="#contactMe">Connect with me</a>
          </button>
        </div>
      )}
      <div className="menu-list hidden lg:flex justify-evenly items-baseline gap-8 text-gray-300 font-medium text-lg py-2 px-8">
        <p className="hover:text-pink-200 active:text-cyan-300">
          <a href="#home">Home</a>
        </p>
        <p className="hover:text-pink-200 active:text-cyan-300">
          <a href="#aboutme">About Me</a>
        </p>
        <p className="hover:text-pink-200 active:text-cyan-300">
          <a href="#myProjects">Projects</a>
        </p>
        <p className="hover:text-pink-200 active:text-cyan-300">
          <a href="#myResume">Resume</a>
        </p>
        <button className="p-2 px-4 bg-gradient-to-br from-pink-600 to-cyan-700 rounded-md hover:ring-2 active:ring-cyan-500 ring-pink-400 ring-inset">
          <a href="#contactMe">Connect with me</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
