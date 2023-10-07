import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  ListItem,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  UnorderedList,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { useProduct } from "../Store/Home";

const Filters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");
  const [checkboxValues, setCheckboxValues] = useState({
    menClothing: false,
    womenClothing: false,
    electronics: false,
    jewelery: false,
  });
  const { setFilters, setMinPriceRange, setMaxPriceRange } = useProduct(
    (state) => state
  );

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setCheckboxValues((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  useEffect(() => {
    setFilters(checkboxValues);
    setMinPriceRange(min);
    setMaxPriceRange(max);
  }, [checkboxValues, min, max]);

  return (
    <>
      <Flex align="center">
        <Button
          ref={btnRef}
          onClick={onOpen}
          leftIcon={<BiFilter style={{ fontSize: "1.6rem" }} />}
          bg="transparent"
          _active={{ border: "1px solid black" }}
          _hover={{ bg: "transparent" }}
        >
          {isTabletOrSmaller ? null : "Show Filters"}
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            textAlign={"center"}
            fontSize={"1.3rem"}
            fontWeight={"bold"}
          >
            All Filters
          </DrawerHeader>

          <DrawerBody>
            <UnorderedList listStyleType={"none"}>
              <ListItem fontSize={"1.1rem"} fontWeight={500}>
                Categories
              </ListItem>
              <UnorderedList listStyleType={"none"}>
                <ListItem>
                  <Checkbox name="menClothing" onChange={handleCheckboxChange}>
                    Men's Clothing
                  </Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox
                    name="womenClothing"
                    onChange={handleCheckboxChange}
                  >
                    Women's Clothing
                  </Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox name="electronics" onChange={handleCheckboxChange}>
                    Electronics
                  </Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox name="jewelery" onChange={handleCheckboxChange}>
                    Jewelery
                  </Checkbox>
                </ListItem>
              </UnorderedList>
            </UnorderedList>
            <br />
            <br />
            <Heading fontSize={"1.1rem"} textAlign={"center"}>
              Price
            </Heading>
            <Box w="70%" margin={"auto"} mt="10px">
              <Box gap={"10px"} display={"flex"}>
                <Input
                  border={"1px solid"}
                  type="number"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
                <Input
                  border={"1px solid"}
                  type="number"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </Box>
              <Box>
                <RangeSlider
                  onChange={(val) => (setMin(val[0]), setMax(val[1]))}
                  aria-label={["min", "max"]}
                  defaultValue={[min, max]}
                  max="1000"
                >
                  <RangeSliderTrack bg="red.400">
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb bg={"red"} index={0} />
                  <RangeSliderThumb bg={"red"} index={1} />
                </RangeSlider>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Filters;
