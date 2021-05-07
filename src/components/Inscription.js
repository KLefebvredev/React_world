import React, { useState } from "react";

const Inscription = () => {
  // const [pseudo, setText] = useState("");

  const handleSubmit = () => {};

  return (
    <form className="connect">
      <label htmlFor="">Pseudo</label>
      <br />
      <input type="text" />
      <br />
      <label htmlFor="">Mot de passe</label>
      <input
        type="password"
        name=""
        id=""
        // onChange={(e) => setPseudo(e.target.value)}
      />
      <br />
      <label htmlFor="">Confirmer Mot de passe</label>
      <input
        type="password"
        name=""
        id=""
        // onChange={(e) => setPseudo(e.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Inscription;
