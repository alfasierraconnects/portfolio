import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import About from "./components/About";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
