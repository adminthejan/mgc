import React from "react";
import HeroOne from "../components/HeroOne";
import Hero from "../components/Hero";
import Leaders from "../components/Leaders";
import Directors from "../components/Directors";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div>
      <HeroOne />
      <Hero />
      <Leaders />
      <Directors />
      <Footer />
    </div>
  );
};

export default Home;
