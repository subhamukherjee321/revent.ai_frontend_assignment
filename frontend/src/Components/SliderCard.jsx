import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillStar, AiTwotoneThunderbolt } from "react-icons/ai";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useColorContext } from "../Context/ColorContext";

function SliderCard({ item }) {
  console.log("item: ", item);
  const { colorStatus, colors } = useColorContext();

  return (
    <Box
      key={item.id}
      borderRadius={"0.7rem"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      bg={colorStatus ? "#2D3748" : "#E3E3E3"}
      mx={"15px"}
      transition={"0.3s all ease-in-out"}
      _hover={{
        transform: "scale(1.05)",
        transformOrigin: "center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Flex
        mr={"1rem"}
        justify={"center"}
        borderRadius={"0.7rem 0.7rem 0 0"}
        overflow={"hidden"}
        py={"0.5rem"}
        position={"relative"}
      >
        <Image
          minH={"200px"}
          maxH={"220px"}
          mt={"1.1rem"}
          borderRadius={"0.7rem 0.7rem 0 0"}
          alt={item.name}
          src={item.image}
          w={"70%"}
          objectFit={"cover"}
        />
        <Flex
          position={"absolute"}
          left={0}
          bg={"#F7C20A"}
          p={"0.3rem 0.5rem"}
          align={"center"}
          gap={1}
        >
          <AiTwotoneThunderbolt fontWeight={"bold"} color={"black"} />
          <Text color={"black"} fontSize={"0.7rem"} fontWeight={"800"}>
            SUPER SAVER
          </Text>
        </Flex>

        <Box position={"absolute"} cursor={"pointer"} right={3} top={4}>
          <FaHeart color={"white"} fontWeight={"bold"} fontSize={"1.5rem"} />
        </Box>
      </Flex>
      <Box
        p={"1rem"}
        borderRadius={"0.5rem"}
        w={"95%"}
        m={"auto"}
        mb={"0.5rem"}
        bg={colors.secondary}
      >
        <Heading as={"h4"} fontSize={"1.2rem"} cursor={"pointer"}>
          {item.title.substring(0, 20)}
        </Heading>
        <Flex gap={6} my={"0.7rem"} w={"70%"}>
          <Heading as={"h4"} fontSize={"1rem"}>
            ₹ {item.price}
          </Heading>
          {/* <Text color={"#38A169"}>{item.discount}% off</Text> */}
          <del style={{ fontSize: "0.8rem" }}>
            ₹ {Math.round(item.price + 50)}
          </del>
        </Flex>
        <Text fontSize={"0.9rem"}>{item.description.substring(0, 28)}</Text>
        <Flex mt={"0.2rem"} gap={2}>
          <Flex align={"center"}>
            {new Array(~~item.rating.rate).fill(0).map((ele, i) => (
              <AiFillStar color={"#38A169"} key={i} />
            ))}
          </Flex>
          <Text fontSize={"0.7rem"}>{item.rating.count}</Text>
        </Flex>
        <Box mt={"0.5rem"}>
          <Button
            _hover={{ bg: colorStatus ? "grey" : "black", color: "#F7C20A" }}
            _active={{ bg: "#4A5568", color: "white" }}
            borderRadius={"0.3rem"}
            size={"sm"}
            w={"100%"}
            bg={"#F7C20A"}
            color={"black"}
            fontWeight={"bold"}
            fontSize={"1rem"}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SliderCard;
