import React from "react";
import "../styles/SearchBar.css";

// parameters as searchTerm , setSearchTerm , onSearch
const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        placeholder="Search for recipes.."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="button" onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;