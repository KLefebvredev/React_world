import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div>
      <h1>ERREUR 404 </h1>
      <NavLink to="/">Revenir à l'accueil</NavLink>
      <Footer />
    </div>
  );
};

export default NotFound;
