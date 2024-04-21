import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Resume />
      <GetInTouch />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
