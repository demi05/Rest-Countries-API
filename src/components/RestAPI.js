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
    <div className="country-data-div">
      {countries.map((country) => {
        const { numericCode, name, population, region, capital, flags } =
          country;

        return (
          <div key={numericCode} className="country-data">
            <img src={flags.png} alt={name} />
            <div className="country-data-text">
              <h3>Name:</h3>
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
          </div>
        );
      })}
    </div>
  );
};

export default RestAPI;
