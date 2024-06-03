import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const filteredCountries = (region) => {
    const url = region
      ? `https://restcountries.com/v3.1/region/${region}`
      : "https://restcountries.com/v3.1/all";
    return url;
  };

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(filteredCountries());
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, [filteredCountries]);
  useEffect(() => {
    console.log(fetchCountryData());
  }, []);
  console.log(countries);
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
