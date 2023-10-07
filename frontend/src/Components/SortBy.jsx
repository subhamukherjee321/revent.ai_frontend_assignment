import { Flex, Select, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const SortBy = () => {
  const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex align="center" gap={1}>
      {!isTabletOrSmaller && <Text w={"40%"} fontWeight={500}>Sort By :</Text>}
      <Select
        style={{ fontWeight: "bold", p: "0.5rem" }}
        placeholder="Select option"
      >
        <option value="option1">Alphabetically, A-Z</option>
        <option value="option2">Alphabetically, Z-A</option>
        <option value="option3">Price, low to high</option>
        <option value="option3">Price, high to low</option>
      </Select>
    </Flex>
  );
};

export default SortBy;
