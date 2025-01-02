import { Box, Text, Flex, Heading, Grid ,GridItem} from "@chakra-ui/react";

const Whyus = ({
  animation,
  webimages,
  trainingConstants,
  cardData,
  Component,
}) => {
  const { Slidee, Fade } = animation;
  return (
    <Box
      as="section"
      color="white"
      py={["10", "10", "50", "50", "100px"]}
      fontFamily="Raleway"
      minHeight={["90vh", "90vh", "80vh", "70vh", "90vh"]}
      background={`linear-gradient(to right, #10111433,#101114d9),url(${webimages.background.service.cardimage.src})`}
      backgroundColor="brand.black"
      backgroundSize="100%"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
    >
      <Slidee left>
        <Fade big>
          <Box>
            <Box
              mb="10"
              fontFamily="Raleway"
              textAlign={["center", "center", "center", "center", "center"]}
            >
              <Text
                as="h2"
                color="white"
                textTransform="uppercase"
                fontWeight="extrabold"
                fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
                display={["block", "block", "block", "inline", "inline"]}
                pl={["0", "5", "5 ", "60px", "60px"]}
                mb={["4", "4", "4", "0", "0"]}
              >
                {trainingConstants.WHY_TRAINING}
              </Text>
              <Text
                as="h2"
                display={["inline", "inline", "inline", "inline", "inline"]}
                ml={["2", "4", "4", "4", "4"]}
                bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                bgClip="text"
                fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
                fontWeight="extrabold"
                textTransform="uppercase"
              >
                {trainingConstants.AT_REDSKY}
              </Text>

              <Text
                fontSize={["sm", "sm", "lg", "lg", "lg"]}
                pl={["0", "5", "5 ", "60px", "60px"]}
                color="brand.white"
                textAlign="center"
                fontFamily="Raleway"
                fontWeight="medium"
                p={[4]}
              >
                {trainingConstants.WHY_TRAINING_CONTENT}
              </Text>
            </Box>
          </Box>
        </Fade>
      </Slidee>
      <Fade big>
        <Slidee bottom>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={10}
            px={["2", "2", "10", "20", "20"]}
          >
            {cardData.map((card) => {
              return (
                <GridItem width={["100%", "100%", "100%", "100%"]}>
                <Component
                  key={card.key}
                  cardtitle={card.text}
                  cardpara={card.para}
                  cardData={cardData}
                  images={card.images}
                  cardHeight="540px"
                  alt={card.alt}
                />
                </GridItem>
              );
            })}
          </Grid>
        </Slidee>
      </Fade>
    </Box>
  );
};

export default Whyus;
