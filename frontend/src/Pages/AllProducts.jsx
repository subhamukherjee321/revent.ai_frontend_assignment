import { Box, Flex, Grid, Heading, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import Filters from "../Components/Filters";
import Loading from "../Components/Loading";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/SearchBar";
import SliderCard from "../Components/SliderCard";
import SortBy from "../Components/SortBy";
import { useProduct } from "../Store/Home";
import productsApi from "../API/products";

const AllProducts = () => {
  const {
    products,
    setProducts,
    page,
    filters,
    minPriceRange,
    maxPriceRange,
    search,
    sort,
    loading,
    setLoading,
  } = useProduct((state) => state);
  const toast = useToast();
  const { menClothing, womenClothing, electronics, jewelery } = filters;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await productsApi.getProduct(
          page,
          filters,
          minPriceRange,
          maxPriceRange,
          search,
          sort
        );

        setProducts(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast({
          title: "Network Error",
          status: "failed",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    getData();
  }, [
    page,
    setProducts,
    menClothing,
    womenClothing,
    electronics,
    jewelery,
    minPriceRange,
    maxPriceRange,
    sort,
    search
  ]);

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
      {loading ? (
        <Loading />
      ) : (
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
      )}

      {/* Pagianation */}
      <Pagination />
    </Box>
  );
};

export default AllProducts;
