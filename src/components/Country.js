import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Country = () => {
  const [data, setData] = useState([]);
  const [radioChoise, setRadioChoise] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const radios = ["Africa", "Americas", "Asia", "Oceania", "Europe"];
  const [rangeValue, setRangeValue] = useState(35);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries-container">
      <ul className="radio-container">
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continents"
              onChange={(e) => setRadioChoise(e.target.id)}
              checked={continent === radioChoise}
            />
            <label htmlFor={continent}> {continent}</label>
          </li>
        ))}
      </ul>
      <button
        style={{ visibility: radioChoise ? "visible" : "hidden" }}
        onClick={() => setRadioChoise("")}
      >
        Annuler recherche
      </button>
      <div className="search">
        <span>{parseInt(rangeValue) + 1}</span>
        <input
          className="range"
          type="range"
          max="249"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recherche"
          onChange={(e) => setNameSearch(e.target.value)}
          className="recherche"
        />{" "}
      </div>
      <div className="countries">
        {data
          .filter((country) => country.region.includes(radioChoise))
          .filter((country) => country.name.toLowerCase().includes(nameSearch))
          .sort((a, b) => b.population - a.population)
          .filter((country, index) => index <= rangeValue)
          .map((country) => (
            <Card key={country.name} country={country} />
          ))}
      </div>
    </div>
  );
};

export default Country;
