import React from "react";
import { Box, Grid, GridItem, chakra, Text, Flex } from "@chakra-ui/react";
import TechProcessCard from "../../shared/TechProcessCard";
import ServicesWeOfferCard from "../../shared/servicesWeOfferCard";

function TechProcess({
  heading,
  gradientTextProcess,
  techProcessText,
  websiteTasks,
  devData,
}) {
  return (
    <Box
      as="section"
      py={["10", "10", "50", "50", "60px"]}
      px={["10", "10", "50", "50", "20"]}
      color="brand.white"
      alignItems="center"
    >
      <Text
        textAlign="center"
        color="brand.white"
        fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
        fontFamily="Raleway"
        fontWeight="extrabold"
        mb="10"
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
          {gradientTextProcess}
        </chakra.span>{" "}
      </Text>
      <Text textAlign="center" fontSize="xl">
        {techProcessText}
      </Text>
      {websiteTasks && (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={10}
          mt="20"
          mb="10"
        >
          {websiteTasks?.map((data, index) => {
            return (
              <GridItem key={index} >
                <TechProcessCard data={data} />
              </GridItem>
            );
          })}
        </Grid>
      )}

      {devData && (
        <Flex
          gap={10}
          flexWrap="wrap"
          flexDirection={["column", "column", "column", "row", "row"]}
          justifyContent="center"
          alignItems="center"
          mt="20"
          mb="10"
        >
          {devData?.map((data, index) => {
            const isEven = index === 0 || index % 2 === 0;
            const imageSize = isEven ? "120px" : "110px";
            const cardBackground = isEven
              ? "linear(to-t, rgba(255, 174, 0, 0.3)  , #101114a4 75%)"
              : "linear(to-t,  secondary.300 ,  secondary.300)";
            const cardHeight = isEven ? "34vh" : "37vh";
            const cardPadding = isEven ? "0" : "0";
            return (
              <GridItem
                key={index}
                alignSelf="center"
                w={["100%", "100%%", "40%", "30%", "30%"]}
              >
                <ServicesWeOfferCard
                  data={data}
                  imageSize={imageSize}
                  cardBackground={cardBackground}
                  cardHeight={cardHeight}
                  cardPadding={cardPadding}
                  heading={heading}
                  isEven={isEven}
                />
              </GridItem>
            );
          })}
        </Flex>
      )}
    </Box>
  );
}

export default TechProcess;
