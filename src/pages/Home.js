import React from "react";
import Country from "../components/Country";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <Country />
    </div>
  );
};

export default Home;
