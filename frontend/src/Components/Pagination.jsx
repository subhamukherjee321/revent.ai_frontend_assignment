import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, changePage }) => {
  return (
    <Flex justify={"center"} align={"center"} my={6} gap={4}>
      <Button
        bg={"gray.900"}
        color={"white"}
        onClick={() => changePage(-1)}
        isDisabled={page === 1}
        _hover={{ bg: "gray.600" }}
        _active={{bg: "gray.800"}}
      >
        Previous
      </Button>
      <Button bg={"gray.900"} _hover={{ bg: "gray.900" }} color={"white"} isDisabled>
        {page}
      </Button>
      <Button
        bg={"gray.900"}
        color={"white"}
        _hover={{ bg: "gray.600" }}
        _active={{bg: "gray.800"}}
        onClick={() => changePage(1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
