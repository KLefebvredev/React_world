import React from "react";

const Card = ({ country }) => {
  const numberParser = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <ul>
      <li>Pays : {country.name}</li>
      <li>Capital : {country.capital}</li>
      <li>
        <img src={country.flag} alt={country.name} />
      </li>
      <li>Population : {numberParser(country.population)}</li>
    </ul>
  );
};

export default Card;
