import React, { useState } from "react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  const [text, setText] = useState("Voici un texte super");
  const [editText, setEditText] = useState(false);

  return (
    <div className="about">
      <Logo />
      <Navigation />
      <h1>About</h1>
      {editText ? (
        <input type="text" onChange={(e) => setText(e.target.value)} />
      ) : (
        <h2>{text}</h2>
      )}
      <br />
      <button onClick={() => setEditText(!editText)}>Editer / Valider</button>
      <Footer />
    </div>
  );
};

export default About;
