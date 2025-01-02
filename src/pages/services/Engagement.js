import React from "react";
import { Box, Text, Flex, Grid, GridItem,chakra } from "@chakra-ui/react";

const Engagement = ({ service, cardData, animation, webimage, Component }) => {
  const { Fade, Slidee, Zoom } = animation;
  return (
    <Box as="section" bg="brand.black">
      <Fade big>
        <Box
          color="white"
          py={["10", "10", "50", "50", "100px"]}
          fontFamily="Raleway"
          minHeight="90vh"
          background={`linear-gradient(to right, #10111433,#101114d9),url(${webimage.background.service.cardimage.src})`}
          backgroundColor="brand.black"
          backgroundSize="200%"
          backgroundPosition="bottom"
          backgroundRepeat="no-repeat"
        >
          <Zoom>
            <Fade big cascade>
              <Box mb="20" fontFamily="Raleway" textAlign="center">
                <Text
                  as="h2"
                  color="white"
                  fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
                  textTransform="uppercase"
                  fontWeight="extrabold"
                >
                  {service.ENGAGEMENT_MODEL}
                </Text>
                <chakra.span
                bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                bgClip="text"
                fontSize={["2xl", "2xl", "3xl", "4xl", "4xl"]}
                fontWeight="extrabold"
                textTransform="uppercase"
              >
                  {service.WE_OFFER}
                </chakra.span>
              </Box>
            </Fade>
          </Zoom>
          <Slidee bottom>
            <Fade big cascade>
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap={10}
                px={["6", "10", "10", "20", "20"]}
                height="100%"
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
                        alt={card.text}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </Fade>
          </Slidee>
        </Box>
      </Fade>
    </Box>
  );
};

export default Engagement;
