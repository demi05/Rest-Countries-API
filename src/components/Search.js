import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";
import Countries from "./Countries";
const Search = () => {
  const name = useParams();
  const [region, setRegion] = useState("");
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const regions = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  function handleRegion(region) {
    setRegion(region);
    console.log(region);
  }
  console.log(region);
  const regionss = regions.map((region, index) => {
    return (
      <li onClick={() => handleRegion(region)} key={index}>
        {region}
      </li>
    );
  });
  return (
    <>
      <div className="search">
        <div className="input-div">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="search" placeholder="Search for a country..." />
        </div>
        <div id="select">{regionss}</div>
      </div>
      <Countries region={region} />
    </>
  );
};

export default Search;
