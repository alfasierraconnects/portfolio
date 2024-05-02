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
import ParticlesComponent from "./components/Particles";

const App = () => {
  return (
    <div className="relative">
      <ParticlesComponent id="particles" />
      <div className="relative z-10">
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
    </div>
  );
};

export default App;
