import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search">
      <div className="input-div">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="search" placeholder="Search for a country..." />
      </div>
      <select id="select">
        <option value="filter">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
