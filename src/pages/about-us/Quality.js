import { Box, Text, chakra } from "@chakra-ui/react";

const Quality = ({ animation, about, aboutUs }) => {
  const { Fade, Zoom, Rotate, Slidee } = animation;
  const { about3 } = about;
  return (
    <Box as="section" bg="brand.black" overflow="hidden">
      <Fade big>
        <Box
          display={["block", "block", "block", "flex", "flex"]}
          bg={`linear-gradient(to right, #101114de,#101114d9),url(${about3})`}
          backgroundPosition="left"
          backgroundRepeat="no-repeat"
          backgroundSize={["250%", "250%", "100%", "50%", "50%"]}
          backgroundColor="brand.black"
          h={["100%","100%","100%","40vh"]}
          py={["18", "18", "18", "0", "0"]}
        >
          <Box
            flex="2"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Zoom>
              <Rotate>
                <Text
                  as="h2"
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  alignItems="center"
                  textAlign="center"
                  fontSize={["2xl", "3xl", "4xl", "6xl", "6xl"]}
                  color="yellow.400"
                  fontFamily="Raleway"
                  fontWeight="ultrabold"
                  py={["4", "4", "4", "60", "60"]}
                  flex="2"
                >
                  {" "}
                  {aboutUs.ABOUTUS_PAGE_QUALITY}{" "}
                </Text>{" "}
              </Rotate>
            </Zoom>
          </Box>
          <Box
            alignItems="center"
            textAlign={["center", "center", "left", "left", "left"]}
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
                  {aboutUs.QUALITY}
                </Text>{" "}
              </Fade>
            </Slidee>
          </Box>{" "}
        </Box>
      </Fade>
    </Box>
  );
};

export default Quality;
