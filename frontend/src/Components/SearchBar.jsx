import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorContext } from "../Context/ColorContext";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { colorStatus } = useColorContext();

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
      <Button
        _hover={{ bg: colorStatus ? "grey" : "black", color: "#F7C20A" }}
        _active={{ bg: "#4A5568", color: "white" }}
        borderRadius={"0.3rem"}
        type="submit"
        bg={"#F7C20A"}
        color={"black"}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
