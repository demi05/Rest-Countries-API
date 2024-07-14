import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { motion } from "framer-motion";

const Countries = (prop) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(prop.region);
  const filteredCountries = (region) => {
    const url = region
      ? `https://restcountries.com/v3.1/region/${region}`
      : "https://restcountries.com/v3.1/all";
    return url;
  };

  const fetchCountryData = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(filteredCountries(prop.region));
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(
    (fetchCountryData) => {
      fetchCountryData();
    },
    [fetchCountryData]
  );
  document.body.style.backgroundColor = "hsl(207, 26%, 17%)";

  return (
    <div>
      {loading ? (
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 0.2 }}
          className="spinner"
        >
          {" "}
          <FontAwesomeIcon icon={faSpinner} />
        </motion.div>
      ) : (
        <div className="country-data-div">
          {countries.map((country) => {
            const { cca3, name, population, region, capital, flags } = country;

            return (
              <div key={cca3} className="country-data">
                <Link to={`/countries/${name.common}`}>
                  <img src={flags.png} alt={name.common} />
                  <div className="country-data-text">
                    <h3 className="country-name">Name: {name.common}</h3>
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
      )}
    </div>
  );
};
export default Countries;
