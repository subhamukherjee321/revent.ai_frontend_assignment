import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Filters from "../Components/Filters";
import SortBy from "../Components/SortBy";
import axios from "axios";
import SliderCard from "../Components/SliderCard";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getAllProducts = async (page = 1) => {
    let data = await axios.get(
      `http://localhost:8080/products?_page=${page}&_limit=8`
    );
    setProducts(data.data);
  };

  const changePage = (val) => {
    setPage(page + val);
  }

  useEffect(() => {
    getAllProducts(page);
  }, [page]);

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

      {/* All Products Listing */}
      <Grid
        my={"2.4rem"}
        px={"5rem"}
        templateColumns="repeat(4, 1fr)"
        gap={"2rem 0.5rem"}
      >
        {products?.map((item) => (
          <SliderCard key={item.id} item={item} />
        ))}
      </Grid>

      {/* Pagianation */}
      <Pagination page={page} changePage={changePage} />
    </Box>
  );
};

export default AllProducts;
