import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink exact to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="a-propos">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="connexion">Connexion</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
