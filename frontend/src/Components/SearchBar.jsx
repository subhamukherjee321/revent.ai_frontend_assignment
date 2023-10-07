import React from "react";
import { useProduct } from "../Store/Home";

function SearchBar() {
  const {search, setSearch} = useProduct(state => state);

  return (
    <input
      type="text"
      placeholder="Search any product"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="input-field"
    />
  );
}

export default SearchBar;
