import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Header />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;
