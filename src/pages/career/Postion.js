import { Box, Text, Flex, chakra, Grid, GridItem } from "@chakra-ui/react";
const Postion = ({
  animation,
  carrier,
  carrierCardDetails,
  CarrierCard,
  onOpen,
}) => {
  const { Fade, Zoom, Slide } = animation;
  return (
    <Box
      as="section"
      pt={["10", "10", "10", "20", "20"]}
      px={["10", "10", "10", "20", "20"]}
      pb={["10", "10", "10", "20", "20"]}
      bg="brand.black"
      h="full"
    >
      <Fade big>
        <Zoom>
          <Text
            as="h2"
            textAlign="center"
            color="brand.white"
            fontSize={["3xl", "3xl", "5xl", "6xl", "6xl"]}
            fontFamily="Raleway"
            fontWeight="extrabold"
            px={["2", "2", "0", "0", "0"]}
            ml={2}
            mb="20"
          >
            {carrier.WE_ARE}{" "}
            <chakra.span
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              fontFamily="Raleway"
              fontWeight="extrabold"
            >
              {" "}
              {carrier.HIRING_FOR}
            </chakra.span>{" "}
          </Text>
        </Zoom>
      </Fade>

      <Slide bottom cascade>
        <Flex
          gap={20}
          flexDirection={["column", "column", "column", "row", "row"]}
          alignItems="center"
          margin={[, , , "10px"]}
        >
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={10}
          >
            {carrierCardDetails.map((data, index) => {
              return (
                <GridItem key={index}>
                  <CarrierCard
                    key={index}
                    title={data.title}
                    postedDate={data.postedDate}
                    leftDesc={data.leftDesc}
                    rightDesc={data.rightDesc}
                    onOpen={onOpen}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      </Slide>
    </Box>
  );
};

export default Postion;
