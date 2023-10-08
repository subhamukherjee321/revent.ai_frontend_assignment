import { Flex, Select, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useProduct } from "../Store/productsStore";

const SortBy = () => {
  const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");
  const { sort, setSort } = useProduct((state) => state);

  return (
    <Flex align="center" gap={1}>
      {!isTabletOrSmaller && (
        <Text w={"40%"} fontWeight={500}>
          Sort By :
        </Text>
      )}
      <Select
        style={{ fontWeight: "bold", p: "0.5rem" }}
        placeholder="Select option"
        onChange={(e) => setSort(e.target.value)}
        value={sort}
      >
        <optgroup label="Price">
          <option value="pasc">Price, low to high</option>
          <option value="pdesc">Price, high to low</option>
        </optgroup>
        <optgroup label="Rating">
          <option value="rasc">Rating, low to high</option>
          <option value="rdesc">Rating, high to low</option>
        </optgroup>
      </Select>
    </Flex>
  );
};

export default SortBy;
