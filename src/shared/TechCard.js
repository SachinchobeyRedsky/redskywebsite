import React from "react";
import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";

const TechCard = ({ data, fromService, minheight, routePath,curserPointer }) => {
  const router = useRouter();
  const onClickHandler = (routePath) => {
    if (routePath) {
      router.push(routePath);
    }
  };
  return (
    <Box position="relative" h="100%" minH={minheight ? minheight : "35vh"}>
      <Box
        borderRadius="100px"
        h={["20", "20", "20", "20", "20"]}
        w={["20", "20", "20", "20", "20"]}
        alignContent="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="-9"
        bottom="0"
        left={["38%", "38.5%", "38.5%", "38.5%", "38.7%"]}
        zIndex="999"
        boxShadow="0 0 5px #ffae00"
      >
        <Image
          src={fromService ? data?.icon : data?.icon}
          objectFit={fromService ? "cover" : ""}
          height="100px"
          width="100px"
          loading="lazy"
          alt="Image not found"
        />
      </Box>

      <Box
        borderWidth="1px"
        borderTopWidth="2px"
        borderTopColor="yellow.400"
        position="relative"
        display="flex"
        alignItems="center"
        flexDirection="column"
        overflow="hidden"
        w="100%"
        h="100%"
        color="#fff"
        bg="secondary.300"
        borderRadius="13px"
        pt={["16", "16", "16", "16", "16"]}
        pb="10"
        transition="transfrom 0.9s"
        _hover={{
          cursor: !curserPointer &&"pointer",
          color: "black",
          "& .overlay": {
            transform: "translateY(0%)",
          },
        }}
        onClick={() => onClickHandler(routePath)}
      >
        <Heading
          fontSize="22px"
          px={["0", "0", "4", "4", "4"]}
          color="yellow.400"
          mb="4"
        >
          {data?.name}
        </Heading>
        <Text mb="2" textAlign="justify" px="4" zIndex={999}>
          {data?.description}
        </Text>

        <Box
          className="overlay"
          position="absolute"
          h="100%"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-t, #ff914d 10%, #f8cb2e)"
          transform="translateY(-100%)"
          transition="transform 0.5s"
          display="flex"
          alignItems="center"
          flexDirection="column"
          p="4"
        >
          <Heading fontSize="22px" color="black" mb="2" mt="10">
            {data?.name}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default TechCard;
