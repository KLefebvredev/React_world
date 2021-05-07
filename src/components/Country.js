import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      {data.map((country) => (
        <ul>
          <li>Pays : {country.name}</li>
          <li>Capital : {country.capital}</li>
          <li>
            <img src={country.flag} alt="drapeau de{country.name}" />
          </li>
          <li>Population : {country.population}</li>
        </ul>
      ))}
    </div>
  );
};

export default Country;
