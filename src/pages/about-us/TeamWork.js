import React from "react";
import { Box, Text, Flex, Center, chakra } from "@chakra-ui/react";

const TeamWork = ({ animation, about, aboutUs }) => {
  const { Fade, Zoom, Slidee, Rotate } = animation;
  const { about2 } = about;

  return (
    <Box as="section" bg="brand.black" overflow="hidden">
      <Fade>
        <Box
          display={["block", "block", "block", "flex", "flex"]}
          bg={`linear-gradient(to right, #101114de,#101114d9),url(${about2})`}
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
          backgroundSize={["200%", "200%", "100%", "50%", "50%"]}
          py={["18", "18", "18", "0", "0"]}
          backgroundColor="brand.black"
          h={["100%","100%","100%","40vh"]}
        >
          <Box
            alignItems="center"
            textAlign="center"
            fontSize="xl"
            color="brand.white"
            fontFamily="Raleway"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            px={["4", "4", "4", "20", "20"]}
            flex="3"
          >
            {/* <Slidee left>
              <Fade big> */}
            {/* <Flex direction="row" > */}
            <Text
              as="h2"
              w={["100%", "100%", "100%", "100%", "100%"]}
              alignItems="center"
              fontSize={["2xl", "3xl", "4xl", "6xl", "6xl"]}
              color="yellow.400"
              fontFamily="Raleway"
              fontWeight="ultrabold"
              display={["flex", "flex", "block", "none", "none"]}
              py={["4", "4", "4", "60", "60"]}
              flex="2"
            >
              {" "}
              {aboutUs.ABOUTUS_PAGE_TEAMWORK}{" "}
            </Text>{" "}
            {/* </Flex> */}
            {/* </Fade>
            </Slidee> */}
            <Slidee left>
              <Fade>
                <Text
                  fontFamily="Raleway"
                  lineHeight={6}
                  fontSize={["md", "md", "xl", "xl", "xl"]}
                  flex="3"
                  textAlign="left"
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
                  {aboutUs.TEAMWORK}

                </Text>{" "}
              </Fade>
            </Slidee>
          </Box>{" "}
          <Box
            flex="2"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Rotate>
              <Zoom>
                <Text
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  alignItems="center"
                  textAlign="center"
                  fontSize={["3xl", "3xl", "4xl", "6xl", "6xl"]}
                  color="yellow.400"
                  fontFamily="Raleway"
                  fontWeight="ultrabold"
                  display={["none", "none", "none", "block", "block"]}
                  py={["4", "4", "4", "60", "60"]}
                  flex="2"
                >
                  {" "}
                  {aboutUs.ABOUTUS_PAGE_TEAMWORK}{" "}
                </Text>{" "}
              </Zoom>
            </Rotate>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default TeamWork;
