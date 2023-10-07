import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <input
        type="text"
        placeholder="Search any product"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: "0.56rem 4rem",
          border: "none",
          outline: "none",
          borderBottom: "1px solid black",
          borderRadius: "0.2rem",
          fontWeight: "bold"
        }}
      />
      <PrimaryBtn text={"Search"} />
    </form>
  );
};

export default SearchBar;


/*
Before Start Do create new branch
Is Responsive part starting
Then Responsive Product Page Branch
For Functionality Give name of functionality
For Single Product Page give name single product page
*/