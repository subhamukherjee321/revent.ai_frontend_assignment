import { Button, ButtonProps, Flex, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useColorContext } from "../Context/ColorContext";

export default function ThemeToggleBtn(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorStatus, setColorStatus } = useColorContext();

  const handleClick = () => {
    setColorStatus(!colorStatus);
    toggleColorMode();
  };

  return (
    /**
     * Ideally, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
    <Flex
      position={"relative"}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        top={10}
        zIndex={2000}
        right={7}
        position={"fixed"}
        aria-label="Toggle Color Mode"
        onClick={handleClick}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
        {...props}
      >
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
}