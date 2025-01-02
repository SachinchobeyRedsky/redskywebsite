import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Grid,
  Center,
  chakra,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Zoom from "react-reveal/Zoom";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import Slidee from "react-reveal/Slide";
import webimages from "../constants/images";
function ImagesTabContainer() {
  return (
    <>
      <Box alignContent="center">
        <Zoom>
          <Fade big>
            <Text
              as="h3"
              color="brand.white"
              fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
              fontFamily="Raleway"
              fontWeight="extrabold"
              textAlign="center"
              mb="10"
            >
              OUR
              <chakra.span
                bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                bgClip="text"
                fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
                fontFamily="Raleway"
                fontWeight="extrabold"
                ml={2}
              >
                CULTURE
              </chakra.span>{" "}
            </Text>
          </Fade>
        </Zoom>
        <Tabs border="none" colorScheme="tranparant">
          <Center>
            <Slidee cascade bottom>
              <TabList
                py={6}
                border="none"
                overflow="scroll"
                sx={{
                  whiteSpace: "nowrap",
                  position: "relative",
                  "scroll-snap-type": "x mandatory",
                  "-webkit-overflow-scrolling": "touch",
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                w={["90vw", "90vw", "100%", "100%", "100%"]}
              >
                <Tab
                  color="brand.white"
                  sx={{
                    borderBottom: "2px solid transparent",
                    _selected: {
                      bg: "none",
                      color: "yellow.100",
                    },
                  }}
                  _focus={{ border: "none" }}
                  _hover={{ color: "yellow.100" }}
                >
                  PEOPLE{" "}
                </Tab>
                <Tab
                  color="brand.white"
                  sx={{
                    borderBottom: "2px solid transparent",
                    _selected: {
                      borderBottomColor: "yellow.100",
                      bg: "none",
                      color: "yellow.100",
                    },
                  }}
                  ml={["0", "0", "5", "5", "5"]}
                  _hover={{ color: "yellow.100" }}
                  _focus={{ border: "none" }}
                >
                  WORKPLACES
                </Tab>
                <Tab
                  color="brand.white"
                  sx={{
                    borderBottom: "2px solid transparent",
                    _selected: {
                      borderBottomColor: "yellow.100",
                      bg: "none",
                      color: "yellow.100",
                    },
                  }}
                  ml={["0", "0", "5", "5", "5"]}
                  _focus={{ border: "none", backgroundColor: "none" }}
                  _hover={{ color: "yellow.100" }}
                >
                  AMENINTIES
                </Tab>
                <Tab
                  color="brand.white"
                  sx={{
                    borderBottom: "2px solid transparent",
                    _selected: {
                      borderBottomColor: "yellow.100",
                      bg: "none",
                      color: "yellow.100",
                    },
                  }}
                  ml={["0", "0", "5", "5", "5"]}
                  _focus={{ border: "none", backgroundColor: "none" }}
                  _hover={{ color: "yellow.100" }}
                >
                  EVENTS
                </Tab>
              </TabList>
            </Slidee>
          </Center>
          <TabPanels>
            <TabPanel>
              <Box overflow="hidden">
                <Center>
                  <Slidee right>
                    <Tada>
                      <Fade>
                        <Box
                          bg="brand.black"
                          mb="2"
                          ml={["2", "2", "4", "0", "0"]}
                          height={["240px", "240px", "240px", "280px", "280px"]}
                          w={["300px", "300px", "640px", "910px", "910px"]}
                          border="5px solid #fff"
                          borderRadius="16px"
                        >
                          <Image
                            boxSize="100%"
                            h="100%"
                            src={`${webimages.aboutUs.people.image9}`}
                            alt="people image"
                            borderRadius="10px"
                            objectFit="cover"
                          />
                        </Box>
                      </Fade>
                    </Tada>
                  </Slidee>
                </Center>
              </Box>
              <Flex display={["block", "block", "block", "flex", "flex"]}>
                <Center>
                  <Slidee left cascade>
                    <SimpleGrid columns={["1", "1", "2", "2", "2"]} spacing={2}>
                      <Tada>
                        <Box
                          bg="brand.black"
                          height="240px"
                          w="300px"
                          border="5px solid #fff"
                          borderRadius="16px"
                          color="brand.white"
                        >
                          {" "}
                          <Image
                            boxSize="100%"
                            h="100%"
                            src={`${webimages.aboutUs.people.image6}`}
                            alt="people image"
                            borderRadius="10px"
                            objectFit="cover"
                          />
                        </Box>
                      </Tada>
                      <Tada>
                        <Box
                          bg="brand.black"
                          height="240px"
                          w="300px"
                          border="5px solid #fff"
                          borderRadius="16px"
                        >
                          <Image
                            boxSize="100%"
                            h="100%"
                            src={`${webimages.aboutUs.people.image8}`}
                            alt="people image"
                            borderRadius="10px"
                            objectFit="cover"
                          />
                        </Box>
                      </Tada>
                      <Tada>
                        <Box
                          bg="brand.black"
                          height="240px"
                          w="300px"
                          border="5px solid #fff"
                          borderRadius="16px"
                        >
                          <Image
                            boxSize="100%"
                            h="100%"
                            src={`${webimages.aboutUs.people.image2}`}
                            alt="people image"
                            borderRadius="10px"
                            objectFit="cover"
                          />
                        </Box>
                      </Tada>

                      <Tada>
                        <Box
                          bg="brand.black"
                          height="240px"
                          w="300px"
                          border="5px solid #fff"
                          borderRadius="16px"
                        >
                          <Image
                            boxSize="100%"
                            h="100%"
                            src={`${webimages.aboutUs.people.image4}`}
                            alt="people image"
                            borderRadius="10"
                            objectFit="cover"
                          />
                        </Box>
                      </Tada>
                    </SimpleGrid>
                  </Slidee>
                </Center>

                <Box overflow="hidden">
                  <Center>
                    <Slidee right>
                      <Tada>
                        <Fade>
                          <Box
                            bg="brand.black"
                            mt={["2", "2", "2", "0", "0"]}
                            ml={["2", "2", "0", "2", "2"]}
                            height={[
                              "240px",
                              "240px",
                              "420px",
                              "480px",
                              "480px",
                            ]}
                            w={["300px", "300px", "640px", "300px", "300px"]}
                            border="5px solid #fff"
                            borderRadius="16px"
                          >
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.people.image5}`}
                              alt="people image"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Fade>
                      </Tada>
                    </Slidee>
                  </Center>
                </Box>
              </Flex>
              {/* <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap={10}
                mt={10}
                ml={["6", "6", "0", "0", "0"]}
              >
                <Tada>
                  <Box
                    bg="brand.black"
                    height="240px"
                    w="300px"
                    border="5px solid #fff"
                    borderRadius="16px"
                    color="brand.white"
                  >
                    {" "}
                    <Image
                      boxSize="100%"
                      h="100%"
                      src={`${webimages.aboutUs.people.image1}`}
                      alt="people image"
                      borderRadius="10px"
                      objectFit="cover"
                    />
                  </Box>
                </Tada>
                <Tada>
                  <Box
                    bg="brand.black"
                    height="240px"
                    w="300px"
                    border="5px solid #fff"
                    borderRadius="16px"
                    color="brand.white"
                  >
                    {" "}
                    <Image
                      boxSize="100%"
                      h="100%"
                      src={`${webimages.aboutUs.people.image1}`}
                      alt="people image"
                      borderRadius="10px"
                      objectFit="cover"
                    />
                  </Box>
                </Tada>
                <Tada>
                  <Box
                    bg="brand.black"
                    height="240px"
                    w="300px"
                    border="5px solid #fff"
                    borderRadius="16px"
                    color="brand.white"
                  >
                    {" "}
                    <Image
                      boxSize="100%"
                      h="100%"
                      src={`${webimages.aboutUs.people.image1}`}
                      alt="people image"
                      borderRadius="10px"
                      objectFit="cover"
                    />
                  </Box>
                </Tada>
              </Grid> */}
            </TabPanel>

            <TabPanel>
              <Flex display={["block", "block", "block", "flex", "flex"]}>
                <Center>
                  <Fade big>
                    <Slidee left cascade>
                      <SimpleGrid
                        columns={["1", "1", "2", "2", "2"]}
                        spacing={2}
                      >
                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                              color="brand.white"
                            >
                              {" "}
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.workPlaces.image1}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>
                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                            >
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.workPlaces.image6}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>

                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                            >
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.workPlaces.image3}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>

                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                            >
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.workPlaces.image8}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>
                      </SimpleGrid>
                      {/* end of left */}
                    </Slidee>
                  </Fade>
                </Center>
                {/* start of right */}
                <Box overflow="hidden">
                  <Center>
                    <Slidee right>
                      <Fade big>
                        <Tada>
                          <Box
                            bg="brand.black"
                            mt={["2", "2", "2", "0", "0"]}
                            ml={["2", "2", "0", "2", "2"]}
                            height={[
                              "240px",
                              "240px",
                              "420px",
                              "490px",
                              "490px",
                            ]}
                            w={["300px", "300px", "640px", "300px", "300px"]}
                            border="5px solid #fff"
                            borderRadius="16px"
                          >
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.workPlaces.image5}`}
                              alt="workPlaces"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Tada>
                      </Fade>
                    </Slidee>
                  </Center>
                </Box>
              </Flex>

              <Center>
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  gap={2}
                  mt={2}
                  ml={["2", "2", "0", "0", "0"]}
                >
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.people.image1}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.workPlaces.image9}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.workPlaces.image7}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                </Grid>
              </Center>
            </TabPanel>

            <TabPanel>
              <Flex display={["block", "block", "block", "flex", "flex"]}>
                <Center>
                  <Slidee left cascade>
                    <SimpleGrid columns={["1", "1", "2", "2", "2"]} spacing={2}>
                      <Fade big>
                        <Tada>
                          <Box
                            bg="brand.black"
                            height="240px"
                            w="300px"
                            border="5px solid #fff"
                            borderRadius="16px"
                            color="brand.white"
                          >
                            {" "}
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.ameninties.image6}`}
                              alt="workPlaces"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Tada>
                      </Fade>

                      <Fade>
                        <Tada>
                          <Box
                            bg="brand.black"
                            height="240px"
                            w="300px"
                            border="5px solid #fff"
                            borderRadius="16px"
                          >
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.ameninties.image2}`}
                              alt="workPlaces"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Tada>
                      </Fade>

                      <Fade>
                        <Tada>
                          <Box
                            bg="brand.black"
                            height="240px"
                            w="300px"
                            border="5px solid #fff"
                            borderRadius="16px"
                          >
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.ameninties.image3}`}
                              alt="workPlaces"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Tada>
                      </Fade>

                      <Fade big>
                        <Tada>
                          <Box
                            bg="brand.black"
                            height="240px"
                            w="300px"
                            border="5px solid #fff"
                            borderRadius="16px"
                          >
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.ameninties.image5}`}
                              alt="workPlaces"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Tada>
                      </Fade>
                    </SimpleGrid>
                  </Slidee>
                </Center>
                <Box overflow="hidden">
                  <Center>
                    <Slidee right>
                      <Fade big>
                        <Tada>
                          <Box
                            bg="brand.black"
                            mt={["2", "2", "2", "0", "0"]}
                            ml={["2", "2", "0", "2", "2"]}
                            height={[
                              "240px",
                              "240px",
                              "420px",
                              "490px",
                              "490px",
                            ]}
                            w={["300px", "300px", "640px", "300px", "300px"]}
                            border="5px solid #fff"
                            borderRadius="16px"
                          >
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.ameninties.image1}`}
                              alt="workPlaces"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Tada>
                      </Fade>
                    </Slidee>
                  </Center>
                </Box>
              </Flex>
              <Center>
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  gap={2}
                  mt={2}
                  ml={["2", "2", "0", "0", "0"]}
                >
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.ameninties.image4}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.ameninties.image7}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.ameninties.image8}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                </Grid>
              </Center>
            </TabPanel>

            <TabPanel>
              <Flex display={["block", "block", "block", "flex", "flex"]}>
                <Center>
                  <Fade big>
                    <Slidee left cascade>
                      <SimpleGrid
                        columns={["1", "1", "2", "2", "2"]}
                        spacing={2}
                      >
                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                              color="brand.white"
                            >
                              {" "}
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.events.image5}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>
                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                            >
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.events.image2}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>

                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                            >
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.events.image3}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>

                        <Tada>
                          <Fade big>
                            <Box
                              bg="brand.black"
                              height="240px"
                              w="300px"
                              border="5px solid #fff"
                              borderRadius="16px"
                            >
                              <Image
                                boxSize="100%"
                                h="100%"
                                src={`${webimages.aboutUs.events.image4}`}
                                alt="workPlaces"
                                borderRadius="10px"
                                objectFit="cover"
                              />
                            </Box>
                          </Fade>
                        </Tada>
                      </SimpleGrid>
                      {/* end of left */}
                    </Slidee>
                  </Fade>
                </Center>
                {/* start of right */}
                <Box overflow="hidden">
                  <Center>
                    <Slidee right>
                      <Fade big>
                        <Tada>
                          <Box
                            bg="brand.black"
                            mt={["2", "2", "2", "0", "0"]}
                            ml={["2", "2", "0", "2", "2"]}
                            height={[
                              "240px",
                              "240px",
                              "420px",
                              "490px",
                              "490px",
                            ]}
                            w={["300px", "300px", "640px", "300px", "300px"]}
                            border="5px solid #fff"
                            borderRadius="16px"
                          >
                            <Image
                              boxSize="100%"
                              h="100%"
                              src={`${webimages.aboutUs.events.image1}`}
                              alt="workPlaces"
                              borderRadius="10px"
                              objectFit="cover"
                            />
                          </Box>
                        </Tada>
                      </Fade>
                    </Slidee>
                  </Center>
                </Box>
              </Flex>
              <Center>
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  gap={2}
                  mt={2}
                  ml={["2", "2", "0", "0", "0"]}
                >
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.events.image6}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.events.image7}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                  <Tada>
                    <Box
                      bg="brand.black"
                      height="240px"
                      w="300px"
                      border="5px solid #fff"
                      borderRadius="16px"
                      color="brand.white"
                    >
                      {" "}
                      <Image
                        boxSize="100%"
                        h="100%"
                        src={`${webimages.aboutUs.events.image8}`}
                        alt="people image"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Box>
                  </Tada>
                </Grid>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
export default ImagesTabContainer;
