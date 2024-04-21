import React from "react";
import logo from "../logos/logo-no-background.png"; // Replace with your logo's path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 ">
      <div className="container mx-auto px-2 sm:px-10 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-8" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Ashutosh Sahoo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
