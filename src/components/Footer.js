import React from "react";
import logo from "../assests/logo-no-background.png";

const Footer = () => {
  return (
    <footer className="text-gray-200 mt-10 bg-transparent">
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
