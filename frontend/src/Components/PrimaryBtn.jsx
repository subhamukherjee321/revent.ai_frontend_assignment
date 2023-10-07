import { Button } from "@chakra-ui/react";
import React from "react";
import { useColorContext } from "../Context/ColorContext";

const PrimaryBtn = ({ text }) => {
  const { colorStatus } = useColorContext();
  return (
    <Button
      _hover={{ bg: colorStatus ? "grey" : "black", color: "#F7C20A" }}
      _active={{ bg: "#4A5568", color: "white" }}
      borderRadius={"0.3rem"}
      type="submit"
      bg={"#F7C20A"}
      color={"black"}
      fontSize={["0.8rem", "1rem"]} // Adjust font size for different screen sizes
    >
      {text}
    </Button>
  );
};

export default PrimaryBtn;
