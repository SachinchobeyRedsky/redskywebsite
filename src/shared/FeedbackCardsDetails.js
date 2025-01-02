import React from "react";
import { Box, Heading, Flex, Text, SimpleGrid, Center } from "@chakra-ui/react";
import { feedbackCardsDetails } from "../constants/constants";
// slide animations
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function FeedbackCardsDetails() {
  return (
    <>
      <Box
        display="flex"
        flexDirection={["column", "column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        flexWrap={["wrap","wrap","wrap","wrap","nowrap"]}
        px={["0", "0", "0", "50", "60px"]}
        py={["0", "0", "50", "50", "80px"]}
      >
        <Box w="100%" color="brand.white" pb={10}>
          <Slide cascade left>
            <Fade cascade left>
              <Box>
                <Box>
                  <Heading
                    // as="h3"
                    fontSize={["3xl", "3xl", "4rem", "4rem", "4rem"]}
                    fontFamily="Raleway"
                    fontWeight="ultrabold"
                    pl={["5", "5", "20", "10px", "10px"]}
                  >
                    8<sup>+</sup> years of
                  </Heading>
                </Box>
                <Box>
                  <Heading
                    className="whyustext"
                    // as="h3"
                    fontSize={["3xl", "3xl", "4rem", "4rem", "4rem"]}
                    pl={["5", "5", "20", "10px", "10px"]}
                    fontFamily="Raleway"
                    fontWeight="ultrabold"
                    display="inline"
                    bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                    bgClip="text"
                  >
                    {feedbackCardsDetails.PAGE_HEADING_EXCELLENCE}{" "}
                  </Heading>
                </Box>
              </Box>
            </Fade>
          </Slide>
          <Zoom>
            <Fade>
              <Text
                mr={15}
                mt={["15px"]}
                fontSize={["xl", "xl", "1xl", "1xl", "1xl"]}
                pl={["5", "5", "20", "10px", "10px"]}
                color="brand.white"
              >
                {feedbackCardsDetails.PAGE_HEADING_TEXT}{" "}
              </Text>
            </Fade>
          </Zoom>
        </Box>
        <Box px="10">
          <Flex direction={["column", "column", "row", "row", "row"]}>
            <Slide bottom>
              <Fade big>
                <SimpleGrid rows={2} spacing={1} gap={["10","10","0","0","0"]} mr={["0", "0", "4", "4", "4"]}>
                  <Slide top>
                    <Fade>
                      <Box
                        bgImage="url('https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fbackgroundimage%2FWhatsApp%20Image%202022-06-08%20at%209.54.42%20AM.webp?alt=media&token=5810d932-e8c8-4bcd-a1cc-2815cc87a059')"
                        height="240px"
                        overflow="hidden"
                        borderRadius="16"
                        bgRepeat="no-repeat"
                        bgSize={"100%"}
                        bgColor="secondary.700"
                      >
                        <Box
                          bgColor="black.100"
                          sx={{ border: "4px solid  #facc12" }}
                          height="240px"
                          w="300px"
                          px={["2", "2", "3", "3", "6"]}
                          pt={["4", "4", "150", "150", "150"]}
                          borderRadius="16"
                          transition="all 0.2s ease-in"
                          overflow="hidden"
                          _hover={{
                            pt: "50",
                            backdropFilter: "blur(5px)",
                            bgColor: "secondary.800",
                          }}
                          lineHeight="1"
                        >
                          <Text
                            fontSize="3xl"
                            fontFamily="Raleway"
                            fontWeight="ultrabold"
                            color="yellow.600"
                          >
                            Advanced
                          </Text>
                          <Text
                            fontSize="2xl"
                            fontWeight="ultrabold"
                            fontFamily="Raleway"
                          >
                            Technology
                          </Text>
                          <Text fontSize="xl" fontFamily="Raleway" mt={3}>
                            {feedbackCardsDetails.ADVANCED_CONTENTS}
                          </Text>
                        </Box>
                      </Box>
                    </Fade>
                  </Slide>

                  <Box
                    bgImage="url('https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2FIMG_0579%20(1)%20(1)%20(1).webp?alt=media&token=85fd8292-7337-49a0-9a1b-08e08a4dfe14')"
                    height="250px"
                    overflow="hidden"
                    borderRadius="16"
                    mt={["2"]}
                    bgRepeat="no-repeat"
                    bgSize={"100%"}
                    mb="10"
                  >
                    <Box
                      bgColor="black.100"
                      sx={{ border: "4px solid  #facc12" }}
                      height="250px"
                      w="300px"
                      overflow="hidden"
                      mb={["20", "20", "10"]}
                      px={["2", "2", "3", "3", "6"]}
                      pt={["4", "4", "160", "160", "160"]}
                      borderRadius="16"
                      transition="all 0.2s ease-in"
                      _hover={{
                        pt: "50",
                        backdropFilter: "blur(5px)",
                        bgColor: "secondary.800",
                      }}
                      lineHeight="1"
                    >
                      <Text
                        fontSize="3xl"
                        fontFamily="Raleway"
                        fontWeight="ultrabold"
                        color="yellow.600"
                      >
                        100<sup>+</sup>
                      </Text>
                      <Text
                        fontSize="2xl"
                        fontFamily="Raleway"
                        fontWeight="ultrabold"
                      >
                        Happy Clients
                      </Text>
                      <Text fontSize="xl" fontFamily="Raleway" mt={3}>
                        {feedbackCardsDetails.HAPPY_CLIENTS_CONTENTS}
                      </Text>
                    </Box>
                  </Box>
                </SimpleGrid>
              </Fade>
            </Slide>
            <Box overflow="hidden">
              <Slide right>
                <Fade big>
                  <SimpleGrid
                    rows={1}
                    spacing={["0", "0", "6", "6", "6"]}
                    bgImage="url('https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2FIMG_0612%20(1)%20(1)%20(1).webp?alt=media&token=fa94810d-fed0-4c6a-95d1-295287afb25e')"
                    bgRepeat="no-repeat"
                    bgSize={"100%"}
                    backgroundPosition="center"
                    overflow="hidden"
                    height={["240px", "240px", "500px", "500px", "500px"]}
                    borderRadius="16"
                    mt={["1", "1", "0", "0", "0"]}
                  >
                    <Box
                      sx={{ border: "4px solid  #facc12" }}
                      height={["240px", "240px", "500px", "500px", "500px"]}
                      w="300px"
                      bgColor="black.100"
                      pt={["0", "0", "390", "405", "405"]}
                      px={["2", "2", "3", "3", "6"]}
                      borderRadius="16"
                      lineHeight="1"
                      transition="all 0.5s ease-in-out"
                      _hover={{
                        pt: "50",
                        backdropFilter: "blur(10px)",
                        bgColor: "secondary.800",
                      }}
                    >
                      <Text
                        fontSize={["3xl", "3xl", "6xl", "6xl", "6xl"]}
                        fontFamily="Raleway"
                        fontWeight="ultrabold"
                        color="yellow.600"
                      >
                        95<sup>+</sup>
                      </Text>
                      <Text
                        fontSize="2xl"
                        fontFamily="Raleway"
                        fontWeight="ultrabold"
                      >
                        Approval Rating
                      </Text>
                      <Text fontSize="xl" fontFamily="Raleway" mt={5}>
                        {feedbackCardsDetails.APPROVAL_RATING_CONTENTS}
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Fade>
              </Slide>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default FeedbackCardsDetails;
