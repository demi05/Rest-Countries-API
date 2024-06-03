import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountriesDetails = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const country = await response.json();
      if (country.length > 0) {
        setCountry(country);
      }
      console.log(country);
    };

    fetchCountries();
  }, []);
  return (
    <div className="countries-details-div">
      <div className="back">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back</p>
        </Link>
      </div>
      {country.map((c) => {
        const {
          cca3,
          name,
          population,
          region,
          subregion,
          capital,
          currencies,
          languages,
          flags,
          borders,
          topLevelDomain,
        } = c;

        const nativeName = name.nativeName
          ? Object.values(name.nativeName)[0].common
          : "N/A";
        const currencyNames = currencies
          ? Object.values(currencies)
              .map((currency) => currency.name)
              .join(", ")
          : "N/A";
        const languageNames = languages
          ? Object.values(languages).join(", ")
          : "N/A";

        return (
          <div className="countries-details" key={cca3}>
            <div className="countries-details-img">
              <img src={flags.png} alt={name.common} />
            </div>
            <div className="countries-details-text-div">
              <h2>{name.common}</h2>
              <div className="countries-details-text">
                <div className="countries-details-text1">
                  <p>
                    Native Name: <span>{nativeName}</span>
                  </p>
                  <p>
                    Population: <span>{population}</span>
                  </p>
                  <p>
                    Region: <span>{region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{capital}</span>
                  </p>
                </div>
                <div className="countries-details-text2">
                  <p>
                    Top Level Domain:{" "}
                    <span> {topLevelDomain ? topLevelDomain[0] : "N/A"}</span>
                  </p>
                  <p>
                    Currencies: <span> {currencyNames}</span>
                  </p>
                  <p>
                    Languages:
                    <span> {languageNames}</span>
                  </p>
                </div>
              </div>
              <div className="countries-details-border">
                <h3>Border Countries: </h3>
                <ul>
                  {borders.map((border) => (
                    <li key={border}>{border}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesDetails;
