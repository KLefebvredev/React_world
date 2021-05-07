import React, { useState } from "react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Inscription from "../components/Inscription";
import Connect from "../components/Connect";

const Connexion = () => {
  const [loginPage, setLoginPage] = useState(false);

  return (
    <div className="connexion">
      <Logo />
      <Navigation />
      <h1>Connect</h1>
      <button
        style={{ background: loginPage ? null : "red" }}
        onclick={() => setLoginPage(false)}
      >
        S'inscrire
      </button>
      <button
        style={{ background: loginPage ? "red" : null }}
        onClick={() => setLoginPage(true)}
      >
        Se connecter
      </button>
      {loginPage ? <Connect /> : <Inscription />}
      <Footer />
    </div>
  );
};

export default Connexion;
