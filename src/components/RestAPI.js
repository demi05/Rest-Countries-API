import "./RestAPI.css";
import { useEffect, useState } from "react";

const RestAPI = () => {
  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const fetchCountryData = async () => {
    const data = await fetch(url);
    const countries = await data.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div className="country-data">
      {countries.map((country) => {
        const { numericCode, name, population, region, capital, flags } =
          country;

        return (
          <div key={numericCode}>
            <img src={flags.png} alt={name} />
            <h3>Name:</h3>
            <h4>
              Population: <span>{population}</span>
            </h4>
            <h4>
              Region: <span>{region}</span>
            </h4>
            <h4>
              Capital: <span>{capital}</span>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default RestAPI;
