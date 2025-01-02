import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Cardport from "./Cardport";
import { portfolioConstants } from "../constants/constants";

const PlateFormsCards = ({ data, content, heading, location }) => {
  const [copycard, setCopyCard] = useState([]);
  const [currentIndex, setCurrentIndex] = useState("");
  let tabCardData = [];
  if (location === "services") {
    tabCardData = data;
  } else if (location === "web" || "native" || "hybrid") {
    tabCardData = data.techWeUse;
  }
  useEffect(() => {
    setCopyCard(
      portfolioConstants.cardData.filter((card) =>
        card?.tech?.includes(tabCardData[0].tech.toLowerCase())
      )
    );
  }, []);
  useEffect(() => { }, []);

  return (
    <>
      <Box
        p="10"
        as="section"
        color="white"
        fontFamily="Raleway"
        minHeight="100vh"
        backgroundColor="brand.black"
        backgroundSize="cover"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        background={`linear-gradient(to right, #101114de,#101114d9)`}
      >
        <Box mb="30px" fontFamily="Raleway" textAlign="center">
          <Zoom>
            <Fade big>
              <>
                <Box>
                  <Text
                    as="h2"
                    color="white"
                    fontSize={["3xl", "3xl", "5xl", "5xl", "6xl"]}
                    textTransform="uppercase"
                    fontWeight="extrabold"
                    display="inline"
                  >
                    {heading.start}
                  </Text>
                  <Text
                    as="h2"
                    display="inline"
                    ml={["2", "4", "4", "4", "4"]}
                    bgGradient="linear(to-r, yellow.200, yellow.300)"
                    bgClip="text"
                    fontSize={["3xl", "3xl", "5xl", "5xl", "6xl"]}
                    fontWeight="extrabold"
                    textTransform="uppercase"
                  >
                    {heading.end}
                  </Text>
                </Box>
                {content && (
                  <Box
                    m="0 auto"
                    width={["90vw", "90vw", "60vw", "60vw"]}
                    p={[1.5, 1.5, 3, 3]}
                  >
                    <Text textAlign="center">{content}</Text>
                  </Box>
                )}
              </>
            </Fade>
          </Zoom>
        </Box>
        <Box w="100%">
          <Tabs
            textAlign="center"
            variant="soft-rounded"
            onChange={(index) => {
              setCurrentIndex(tabCardData[index].tech.toLowerCase());
              setCopyCard(
                portfolioConstants.cardData.filter((card) =>
                  card?.tech?.includes(tabCardData[index].tech.toLowerCase())
                )
              );
            }}
          >
            <TabList
              h="200px"
              justifyContent={["flex-start", "flex-start", "center", "center"]}
              overflow={["scroll", "scroll", "unset", "unset"]}
              width={["80vw", "80vw", "100vw", "95vw"]}
              sx={{
                whiteSpace: "nowrap",
                position: "relative",
                "scroll-snap-type": "x mandatory",
                WebkitOverflowScrolling: "touch",
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Grid
                templateColumns={[
                  `repeat(${tabCardData.length}, 1fr)`,
                  `repeat(${tabCardData.length}, 1fr)`,
                  `repeat(${tabCardData.length}, 1fr)`,
                  `repeat(${tabCardData.length}, 1fr)`,
                ]}
                gap={["0", "0", "0", "10", "20"]}
              >
                {tabCardData.map((el, id) => (
                  <Tab
                    key={id}
                    color="yellow.400"
                    filter="grayscale(100%)"
                    transform="scale(1)"
                    transition="all 0.2s ease-in-out"
                    _selected={{
                      filter: "grayscale(0%)",
                      transform: "scale(1)",
                    }}
                    _hover={{
                      filter: "grayscale(0%)",
                      transform: "scale(1.05)",
                    }}
                  >
                    <GridItem w="120px" h="120px">
                      <Flex
                        as="button"
                        flexDir="column"
                        align="center"
                        justify="center"
                      >
                        <Flex flexDir="column" align="center" justify="center">
                          <Image
                            src={el.icon.src}
                            w="100px"
                            h="100px"
                            objectFit="contain"
                            alt="element icons"
                          />
                          <Text mt={2}>
                            {location === "services" ? el.name : el.tech}
                          </Text>
                        </Flex>
                      </Flex>{" "}
                    </GridItem>
                  </Tab>
                ))}
              </Grid>
            </TabList>

            <TabPanels>
              {tabCardData.map((el, idx) => (
                <TabPanel key={idx}>
                  <Flex
                    role="button"
                    justifyContent={[
                      "space-evenly",
                      "space-evenly",
                      "space-around",
                      "center",
                      "center",
                    ]}
                    gap="10"
                    alignItems={[
                      "center",
                      "flex-start",
                      "center",
                      "center",
                      "center",
                    ]}
                    p={["4", "3", "4", "10"]}
                    color="white"
                    flexDirection={["column", "column", "column", "row", "row"]}
                    width={["100%", "100%", "100%", "100%", "100%"]}
                    flexWrap={[null, "wrap", "wrap", "wrap", "wrap"]}
                  >
                    {copycard.map((projCard, index) =>
                      projCard.tech.includes("illustrator") &&
                        currentIndex === "illustrator" ? (
                        <Cardport
                          key={index}
                          image={projCard.images}
                          alt={projCard.alt}
                          text={projCard.text}
                        />
                      ) : projCard.tech === "photoshop" &&
                        currentIndex === "photoshop" ? (
                        <Cardport
                          key={index}
                          image={projCard.images}
                          alt={projCard.alt}
                          text={projCard.text}
                        />
                      ) : (
                        <Link
                          key={index}
                          href={{
                            pathname: "/services/[platform]/[project]",
                            query: {
                              platform:
                                location === "services"
                                  ? projCard?.key
                                  : location,
                              ...(location !== "services"),
                              project: projCard?.key?.name,
                            },
                          }}
                        >
                          <a>
                            <Cardport
                              image={projCard.images}
                              alt={projCard.alt}
                              text={projCard.text}
                            />
                          </a>
                        </Link>
                      )
                    )}
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default PlateFormsCards;
