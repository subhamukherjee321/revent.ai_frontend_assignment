import React, { useState } from "react";
import { useProduct } from "../Store/productsStore";
import { Button, FormControl, Input } from "@chakra-ui/react";

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
    <form onSubmit={submitHandler}>
      <FormControl display="flex" alignItems="center">
        <Input
          type="text"
          placeholder="Search any product"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          _focus={{ borderColor: "blue.500", boxShadow: "none" }}
        />
        <Button
          type="submit"
          bg="blue.500"
          color="white"
          _hover={{ bg: "blue.600" }}
          _active={{ bg: "blue.700" }}
          ml={2}
        >
          Search
        </Button>
      </FormControl>
    </form>
  );
}

export default SearchBar;
