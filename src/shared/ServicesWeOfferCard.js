import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";

const ServicesWeOfferCard = ({
  data,
  imageSize,
  cardBackground,
  cardHeight,
  cardPadding,
  heading,
  isEven,
}) => {
  return (
    <Flex
      flexDirection="column"
      bgGradient={cardBackground}
      bg={cardBackground}
      borderRadius="13px"
      position="relative"
      boxShadow={
        isEven ? "inset 0px -2px 5px #faae12" : "inset 0 0 8px #faae12"
      }
      transition="all 0.1s"
      justifyContent="center"
      alignItems="center"
      pt={cardPadding}
      pb={isEven ? "0" : "6"}
      mb="6"
      minH={heading === "Why" ? "37vh" : "50vh"}
    >
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        position={isEven ? "absolute" : ""}
        top={isEven ? "-16" : ""}
        left={isEven ? ".7%" : ""}
      >
        <Image
          src={data?.icon}
          boxSize={heading === "Why" ? imageSize : "130px"}
          h={heading === "Why" ? imageSize : "130px"}
          w={heading === "Why" ? imageSize : "130px"}
          alt="Image not found"
        />
      </Box>
      <Box
        minH="20vh"
        borderBottomLeftRadius="13px"
        borderBottomRightRadius="13px"
        mt={isEven && heading === "Why" ? "10" : ""}
      >
        <Text
          fontSize="1xl"
          color="yellow.400"
          fontWeight="bold"
          py="2"
          textAlign="center"
          textTransform="capitalize"
        >
          {data.title}
        </Text>
        <Text textAlign="center" fontSize="sm" px="4">
          {data.paraText}
        </Text>
      </Box>
    </Flex>
    // </Box>
  );
};

export default ServicesWeOfferCard;
