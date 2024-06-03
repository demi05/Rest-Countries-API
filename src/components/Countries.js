import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const fetchCountryData = async () => {
    const data = await fetch(url);
    const countries = await data.json();
    setCountries(countries);
    // console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div className="country-data-div">
      {countries.map((country) => {
        const { cca3, name, population, region, capital, flags } = country;

        return (
          <div key={cca3} className="country-data">
            <Link to={`/countries/${name.common}`}>
              <img src={flags.png} alt={name.common} />
              <div className="country-data-text">
                <h3>Name: {name.common}</h3>
                <p>
                  Population: <span>{population}</span>
                </p>
                <p>
                  Region: <span>{region}</span>
                </p>
                <p>
                  Capital: <span>{capital}</span>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
