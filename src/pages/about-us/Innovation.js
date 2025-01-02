import React from "react";
import { Box, Text, chakra } from "@chakra-ui/react";

const Innovation = ({ animation, aboutUs, about }) => {
  const { Rotate, Slidee, Zoom, Fade } = animation;
  const { about1 } = about;
  return (
    <Box as="section" bg="brand.black" overflow="hidden">
      <Fade>
        <Box
          display={["block", "block", "block", "flex", "flex"]}
          bg={`linear-gradient(to right, #101114de,#101114d9),url(${about1})`}
          backgroundPosition="left"
          backgroundRepeat="no-repeat"
          backgroundSize={["200%", "200%", "100%", "50%", "50%"]}
          py={["18", "18", "18", "0", "0"]}
          backgroundColor="brand.black"
          overflow-y="hidden"
          h={["100%","100%","100%","40vh"]}
        >
          <Box
            flex="2"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Rotate>
              <Zoom>
                <Text
                  as="h2"
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  alignItems="center"
                  textAlign="center"
                  fontSize={["2xl", "3xl", "4xl", "6xl", "6xl"]}
                  color="yellow.400"
                  fontFamily="Raleway"
                  fontWeight="ultrabold"
                  flex="2"
                  mb="4"
                >
                  {" "}
                  {aboutUs.ABOUTUS_PAGE_INNOVATION}{" "}
                </Text>{" "}
              </Zoom>
            </Rotate>
          </Box>
          <Box
            alignItems="center"
            textAlign="Left"
            fontSize="xl"
            color="brand.white"
            fontFamily="Raleway"
            display="flex"
            justifyContent="center"
            px={["4", "4", "4", "20", "20"]}
            flex="3"
          >
            <Slidee right>
              <Fade big>
                <Text
                  fontFamily="Raleway"
                  lineHeight={6}
                  fontSize={["md", "md", "xl", "xl", "xl"]}
                >
                  {" "}
                  <chakra.span
                    color="yellow.400"
                    fontSize={["3xl", "3xl", "4xl", "6xl", "6xl"]}
                    fontFamily="Raleway"
                    fontWeight="ultrabold"
                  >
                    W{" "}
                  </chakra.span>{" "}
                  {aboutUs.INNOVATION}
                </Text>{" "}
              </Fade>
            </Slidee>
          </Box>{" "}
        </Box>
      </Fade>
    </Box>
  );
};

export default Innovation;
