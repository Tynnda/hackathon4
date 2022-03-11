import React, { useEffect, useState } from "react";

const SearchBar = ({ setSearchValue, fetchData, handleChange }) => {
  const cities = ["PRG", "BER", "WAW", "PED"];

  const [selectedCity, setSelectedCity] = useState("Prague");
  return (
    <div className="search">
      <div>
        <select
          type="search"
          id="searchBar"
          name="from"
          value={setSearchValue.from}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="">-From-</option>
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
        </select>

        <select
          type="search"
          id="searchBar"
          name="to"
          value={setSearchValue.to}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="">-To-</option>
          <option value="VLC">Valencia</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="MXP">Milano</option>
          <option value="ATH">Athens</option>
        </select>
        <button onClick={fetchData}>Search</button>
      </div>
      {/* <button onClick={fetchData}>Search</button> */}
    </div>
  );
};

export default SearchBar;
