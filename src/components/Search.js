const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search for a country..." />
      <select id="select">
        <option value="filter">Filter by Region</option>
      </select>
    </div>
  );
};

export default Search;
