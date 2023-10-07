import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="responsive-form">
      <input
        type="text"
        placeholder="Search any product"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input-field"
      />
    </form>
  );
}

export default SearchBar;