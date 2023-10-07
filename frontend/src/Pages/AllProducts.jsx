import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Filters from "../Components/Filters";
import SortBy from "../Components/SortBy";
import axios from "axios";
import SliderCard from "../Components/SliderCard";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";
import { useProduct } from "../Store/Home";

const AllProducts = () => {
  const { products, setProducts, page } = useProduct((state) => state);

  const getAllProducts = async (page = 1) => {
    let data = await axios.get(
      `http://localhost:8080/products?_page=${page}&_limit=8`
    );
    setProducts(data.data);
  };

  useEffect(() => {
    getAllProducts(page);
  }, [page]);

  return (
    <Box>
      <Heading mt={["1rem", "1.5rem", "2rem"]} size={"lg"} textAlign={"center"}>
        All Products
      </Heading>
      <Flex mx={"5rem"} justify={"space-between"} mt={"10"}>
        {/* Filters */}
        <Filters />

        {/* Search Bar */}
        <SearchBar />

        {/* Sorting */}
        <SortBy />
      </Flex>

      {/* All Products Listing */}
      <Grid
        my={["1.5rem", "2rem", "2.4rem"]}
        px={["1rem", "1.5rem", "5rem"]}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        gap={["1rem", "1rem", "2rem 0.5rem"]}
      >
        {products?.map((item) => (
          <SliderCard key={item.id} item={item} />
        ))}
      </Grid>

      {/* Pagianation */}
      <Pagination />
    </Box>
  );
};

export default AllProducts;
