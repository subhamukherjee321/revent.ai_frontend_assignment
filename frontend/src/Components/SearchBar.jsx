import React, { useState } from "react";
import { useProduct } from "../Store/Home";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const {
    setSearch,
    setSort,
    setMaxPriceRange,
    setMinPriceRange,
    setFilters,
    setPage,
  } = useProduct((state) => state);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setFilters({});
    setPage(1);
    setMaxPriceRange(1000);
    setMinPriceRange(0);
    setSort("");
  };
  console.log(inputValue);

  return (
    <form onSubmit={submitHandler} className="responsive-form">
      <input
        type="text"
        placeholder="Search any product"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="input-field"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
