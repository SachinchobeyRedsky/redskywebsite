import React from "react";
import { Box, Grid, GridItem, chakra, Text, Flex } from "@chakra-ui/react";
import TechCard from "../../shared/TechCard";

function TechServices({
  techData,
  heading,
  gradientTextServices,
  mainHeading,
}) {
  return (
    <Box
      as="section"
      py={["20", "10", "40", "40", "80px"]}
      px={["10", "10", "40", "40", "60px"]}
      color="brand.white"
      alignItems="center"
    >
      <Text
        textAlign="center"
        color="brand.white"
        fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
        fontFamily="Raleway"
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        {heading}
        <chakra.span
          bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
          bgClip="text"
          fontFamily="Raleway"
          fontWeight="extrabold"
          ml="2"
          textTransform="uppercase"
        >
          {gradientTextServices}
        </chakra.span>{" "}
      </Text>

      <Flex
        gap={10}
        flexWrap="wrap"
        flexDirection={["column", "column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        {techData?.map((data, index) => {
          return (
            <GridItem
              key={index}
              alignSelf="center"
              mt="20"
              w={["100%", "100%%", "40%", "30%", "30%"]}
              h="300px"
            >
              <TechCard
                data={data}
                minheight="45vh"
                fromService="plateForm"
                curserPointer="curserPointer"
              />
            </GridItem>
          );
        })}
      </Flex>
    </Box>
  );
}

export default TechServices;
