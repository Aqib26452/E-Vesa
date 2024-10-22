import React from "react";
import Navbar from "./Navbar";
import FirstSection from "./FirstSection";
import Overview from "./Overview";
import Works from "./Works";
import Choose from "./Choose";
import Support from "./Support";
import Vision from "./Vision";
import Thinks from "./Thinks";
import Question from "./Question";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="bodycolbg">
        <Navbar />
        <FirstSection />
        <Overview />
        <Works />
        <Choose />
        <Support />
        <Vision />
        <Thinks />
        <Question />
        <Footer />
      </div>
    </>
  );
};

export default Home;
