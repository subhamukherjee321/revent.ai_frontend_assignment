import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useProduct } from "../Store/Home";

const Pagination = () => {
  const { page, setPage } = useProduct((state) => state);

  return (
    <Flex justify={"center"} align={"center"} my={6} gap={4}>
      <Button
        bg={"gray.900"}
        color={"white"}
        onClick={() => setPage(page - 1)}
        isDisabled={page === 1}
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.800" }}
      >
        Previous
      </Button>
      <Button
        bg={"gray.900"}
        _hover={{ bg: "gray.900" }}
        color={"white"}
        isDisabled
      >
        {page}
      </Button>
      <Button
        bg={"gray.900"}
        color={"white"}
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.800" }}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
