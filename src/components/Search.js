import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Countries from "./Countries";

const Search = () => {
  const name = useParams();
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  const regions = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  window.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector("#search");
    search.addEventListener(() => {
      const countryNameActual = document.querySelectorAll(".country-name");
      countryNameActual.forEach(() => {
        if (name == countryName) {
          name.parentElement.style.display = "block";
        } else {
          name.parentElement.style.display = "none";
        }
      });
    });
  });
  // console.log(region);

  const regionss = regions.map((region, index) => {
    return (
      <option onClick={() => handleRegion()} key={index}>
        {region}
      </option>
    );
  });

  function handleRegion() {
    setRegion(region);
    console.log(region);
    console.log("ok");
  }
  return (
    <>
      <div className="search">
        <div className="input-div">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="search"
            placeholder="Search for a country..."
            value={countryName}
            id="search"
            onChange={(e) => setCountryName(e.target.value.toLowerCase())}
          />
          {console.log(countryName)}
        </div>
        <select id="select">{regionss}</select>
      </div>
      <Countries region={region} countryName={countryName} />
    </>
  );
};

export default Search;
