import React, { useState } from "react";
import logo from "../logos/ashutosh-sahoo-favicon-color.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="fixed top-0 right-0 menu-list flex flex-col gap-2 bg-gray-900 text-white rounded-bl-lg font-semibold text-lg p-4 animate-menuSlideIn">
          <p
            onClick={() => setMenuOpen(false)}
            className="open-menu text-cyan-800 fixed top-1 right-1"
          >
            <ion-icon size="large" name="close-outline"></ion-icon>
          </p>
          <p>Home</p>
          <p>About Me</p>
          <p>Projects</p>
          <p>Resume</p>
          <button className="p-2 px-4 bg-gradient-to-br from-pink-600 to-cyan-700 rounded-md hover:ring-2 active:ring-cyan-500 ring-pink-400 ring-inset">
            Connect with me
          </button>
        </div>
      )}
      <div className="menu-list hidden lg:flex justify-evenly items-baseline gap-8 text-white font-semibold text-lg py-2 px-8">
        <p>Home</p>
        <p>About Me</p>
        <p>Projects</p>
        <p>Resume</p>
        <button className="p-2 px-4 bg-gradient-to-br from-pink-600 to-cyan-700 rounded-md hover:ring-2 active:ring-cyan-500 ring-pink-400 ring-inset">
          Connect with me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
