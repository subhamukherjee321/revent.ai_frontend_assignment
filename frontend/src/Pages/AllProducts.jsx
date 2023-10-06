import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Filters from "../Components/Filters";
import SortBy from "../Components/SortBy";
import axios from "axios";
import SliderCard from "../Components/SliderCard";
import SearchBar from "../Components/SearchBar";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    let data = await axios.get("https://fakestoreapi.com/products?limit=8");
    setProducts(data.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box>
      <Heading mt={"12"} size={"lg"} textAlign={"center"}>
        All Products
      </Heading>
      <Flex mx={"5rem"} justify={"space-between"} mt={"10"}>
        {/* Filters */}
        <Filters />

        {/* Search Bar */}
        <SearchBar />

        {/* Sorting  */}
        <SortBy />
      </Flex>
      <Grid
        my={"2.4rem"}
        px={"5rem"}
        templateColumns="repeat(4, 1fr)"
        gap={"2rem 0.5rem"}
      >
        {products &&
          products.map((item) => <SliderCard key={item.id} item={item} />)}
      </Grid>
    </Box>
  );
};

export default AllProducts;
