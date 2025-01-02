import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";

const Pickout = ({ service, animation, webimage, cardData2, Delivery }) => {
  const { Fade, Slidee } = animation;
  return (
    <Box as="section" bg="brand.black">
      <Fade big>
        <Box
          color="white"
          py={["10", "10", "50", "50", "100px"]}
          fontFamily="Raleway"
          minHeight="80vh"
          background={`linear-gradient(to right, #101114de,#101114d9),url(${webimage.background.service.service2.src})`}
          backgroundColor="brand.black"
          backgroundSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Slidee left>
            <Fade big>
              <Box
                mb="20"
                fontFamily="Raleway"
                textAlign={["center", "center", "center", "center", "center"]}
              >
                <Text
                  as="h3"
                  color="white"
                  fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
                  textTransform="uppercase"
                  fontWeight="extrabold"
                  display={["block", "block", "block", "inline", "inline"]}
                  pl={["0", "0", "0", "60px", "60px"]}
                >
                  {service.PICK_OUT}
                </Text>
                <Text
                  as="h3"
                  display="inline"
                  ml={["2", "4", "4", "4", "4"]}
                  bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                  bgClip="text"
                  fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
                  fontWeight="extrabold"
                  textTransform="uppercase"
                >
                  {service.YOUR_NICHE}
                </Text>
              </Box>
            </Fade>
          </Slidee>

          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            flex="1"
          >
            <Slidee left cascade>
              <Grid
                templateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3,1fr)",
                  "repeat(4,1fr)",
                ]}
                gap={10}
                placeItems="center"
                flex={1}
                px={["0", "0", "20", "20","20"]}
              >
                <Fade big>
                  {cardData2.map((card, index) => {
                    return (
                      <Delivery
                        key={index}
                        image={card.image}
                        text={card.text}
                        alt={card.text}
                      />
                    );
                  })}
                </Fade>
              </Grid>
            </Slidee>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Pickout;
