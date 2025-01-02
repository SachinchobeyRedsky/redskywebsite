import React from "react";
import { Box, Text, chakra, Flex } from "@chakra-ui/react";
import "react-alice-carousel/lib/alice-carousel.css";
import Marquee from "react-fast-marquee";

const Services = ({
  Servicelogo,
  tech,
  animation,
  toolsUsing,
  tooslUsingGradient,
}) => {
  const { Fade, Zoom } = animation;
  return (
    <Box
      as="section"
      overflow="hidden"
      pt="50px"
      pb="25px"
      minH={["auto", "auto", "auto", "auto", "40vh"]}
    >
      <Fade bottom>
        <Box overflow="hidden">
          <Box textAlign="center">
            <Box>
              <Zoom>
                <Fade big>
                  <Text
                    textAlign="center"
                    color="brand.white"
                    textTransform="uppercase"
                    fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
                    fontFamily="Raleway"
                    fontWeight="extrabold"
                    px={["10", "10", "0", "0", "0"]}
                    ml={2}
                    mb="10"
                  >
                    {toolsUsing || "Technology We"}
                    <chakra.span
                      bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                      bgClip="text"
                      fontFamily="Raleway"
                      fontWeight="extrabold"
                      ml="2"
                    >
                      {tooslUsingGradient || "are using"}
                    </chakra.span>{" "}
                  </Text>
                </Fade>
              </Zoom>
            </Box>
          </Box>
          <Box>

            <Marquee speed={200} direction="left" loop={0} >
                <Flex  h='220' >
                  {tech?.map((tec, index) => {
                    return (
                      <Box key={index} m="4">
                        <Servicelogo image={tec.images} />
                      </Box>
                    );
                  })}
                  </Flex>
              </Marquee>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Services;
