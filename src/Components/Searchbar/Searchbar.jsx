// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Searchbar.css";

// eslint-disable-next-line react/prop-types
function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="searchbar-button">Search</button>
    </div>
  );
}

export default SearchBar;
