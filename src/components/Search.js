import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search">
      <div className="input-div">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <select id="select">
        <option value="filter">Filter by Region</option>
      </select>
    </div>
  );
};

export default Search;
