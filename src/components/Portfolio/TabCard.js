import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import Zoom from "react-reveal/Zoom";
import Tada from "react-reveal/Tada";
// import Fade from "react-reveal/Fade";
import Slidee from "react-reveal/Slide";
import Card from "../../shared/Cardport";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import webimages from "../../constants/images";

const initialDisplayCount = 6;
const loadMoreCount = 3;

const TabCard = ({ animation, cardData, heading, cardimage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Slide, Zoom, Fade } = animation;
  const [projecName, setProjectName] = useState("");
  const [device, setDevice] = useState("all");
  const [copycard, setCopyCard] = useState([cardData]);
  const [displayCountTab1, setDisplayCountTab1] = useState(initialDisplayCount);
  const [displayCountTab2, setDisplayCountTab2] = useState(initialDisplayCount);
  const [displayCountTab3, setDisplayCountTab3] = useState(initialDisplayCount);

  const handleClick = (e) => {
    setDevice(e.target.value);
  };

  const toggleDisplay = (tab) => {
    switch (tab) {
      case 1:
        setDisplayCountTab1((prevCount) =>
          prevCount === initialDisplayCount
            ? prevCount + loadMoreCount
            : initialDisplayCount
        );
        break;
      case 2:
        setDisplayCountTab2((prevCount) =>
          prevCount === initialDisplayCount
            ? prevCount + loadMoreCount
            : initialDisplayCount
        );
        break;
      case 3:
        setDisplayCountTab3((prevCount) =>
          prevCount === initialDisplayCount
            ? prevCount + loadMoreCount
            : initialDisplayCount
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (device == "all") {
      setCopyCard(copycard);
    }
    if (device === "web") {
      setCopyCard(cardData.filter((card) => card.type.includes("web")));
    }
    if (device === "hybrid") {
      setCopyCard(cardData.filter((card) => card.type.includes("hybrid")));
    }
    if (device === "graphic-design") {
      setCopyCard(() => {
        return cardData.filter((card) => card.type.includes("graphic-design"));
      });
    }
  }, [device, displayCountTab1]);

  useEffect(() => {}, [copycard]);
  const mobileWidth = ["300px", "300px", "350px", "380px"];

  return (
    <Box
      as="section"
      color="white"
      pt="100px"
      fontFamily="Raleway"
      minHeight="100vh"
      bgImage={`url(${webimages.background.portfolioBg})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box mb="20" fontFamily="Raleway" textAlign="center">
        <Zoom>
          <Fade big>
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
                bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                bgClip="text"
                fontSize={["3xl", "3xl", "5xl", "5xl", "6xl"]}
                fontWeight="extrabold"
                textTransform="uppercase"
              >
                {heading.end}
              </Text>
            </Box>
          </Fade>
        </Zoom>
      </Box>

      <Tabs variant="soft-rounded" colorScheme="tranparant" w="100%">
        <TabList
          textAlign="center"
          justifyContent="center"
          gap={["2", "6", "10", "10", "10"]}
        >
          {["ALL", "WEB", "MOBILE"].map((tab, index) => (
            <Tab
              key={index}
              fontSize={["xs", "sm", "lg", "lg", "lg"]}
              fontWeight="600"
              px={["4", "4", "10", "10", "10"]}
              color="brand.white"
              backgroundColor="black.600"
              border="1px solid transparent"
              value={tab.toLowerCase()}
              _selected={{
                color: "yellow.100",
                backgroundColor: "black.700",
                border: "solid 2px #faae01",
                boxShadow: "0 0 20px  rgba(255, 174, 0, 0.6)",
              }}
              _focus={{ border: "none", backgroundColor: "gray.700" }}
              onClick={(e) => handleClick(e)}
            >
              {tab}
            </Tab>
          ))}
          {/* <Tab
            fontSize={["xs", "sm", "lg", "lg", "lg"]}
            fontWeight="600"
            px={["4", "4", "10", "10", "10"]}
            color="brand.white"
            backgroundColor="black.600"
            border="1px solid transparent"
            value="all"
            _selected={{
              color: "yellow.100",
              backgroundColor: "black.700",
              border: "solid 2px #faae01",
              boxShadow: "0 0 20px  rgba(255, 174, 0, 0.6)",
            }}
            _focus={{ border: "none", backgroundColor: "gray.700" }}
            onClick={(e) => handleClick(e)}
          >
            ALL{" "}
          </Tab>
          <Tab
            px={["4", "4", "10", "10", "10"]}
            fontSize={["xs", "sm", "lg", "lg", "lg"]}
            fontWeight="600"
            color="brand.white"
            backgroundColor="black.600"
            value="web"
            border="1px solid transparent"
            _selected={{
              color: "yellow.100",
              backgroundColor: "black.700",
              border: "solid 2px #faae01",
              boxShadow: "0 0 20px  rgba(255, 174, 0, 0.6)",
            }}
            ml={["2", "2", "5", "5", "5"]}
            _focus={{ border: "none", backgroundColor: "gray.700" }}
            onClick={(e) => handleClick(e)}
          >
            WEB
          </Tab>

          <Tab
            px={["4", "4", "10", "10", "10"]}
            fontSize={["xs", "sm", "lg", "lg", "lg"]}
            fontWeight="600"
            color="brand.white"
            backgroundColor="black.600"
            border="1px solid transparent"
            value="hybrid"
            _selected={{
              color: "yellow.100",
              backgroundColor: "black.700",
              border: "solid 2px #faae01",
              boxShadow: "0 0 20px  rgba(255, 174, 0, 0.6)",
            }}
            ml={["2", "2", "5", "5", "5"]}
            _focus={{ border: "none", backgroundColor: "gray.700" }}
            onClick={(e) => handleClick(e)}
          >
            MOBILE
          </Tab> */}
          {/* <Tab
            px={["4", "4", "10", "10", "10"]}
            fontSize={["xs", "sm", "lg", "lg", "lg"]}
            fontWeight="600"
            color="brand.white"
            backgroundColor="black.600"
            border="1px solid transparent"
            value="hybrid"
            _selected={{
              color: "yellow.100",
              backgroundColor: "black.700",
              border: "solid 2px #faae01",
              boxShadow: "0 0 20px  rgba(255, 174, 0, 0.6)",
            }}
            ml={["2", "2", "5", "5", "5"]}
            _focus={{ border: "none", backgroundColor: "gray.700" }}
            onClick={(e) => handleClick(e)}
          >
            GRAPHIC DESIGN
          </Tab> */}
        </TabList>
        <TabPanels alignItems="center" mt="20">
          {/* all */}
          <TabPanel>
            <Box
              color="white"
              p={[2, 3, 4, "10"]}
              fontFamily="Raleway"
              minHeight="90vh"
              display="flex"
              textAlign="center"
              justifyContent="center"
            >
              <Box>
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  gap={10}
                  rowGap={20}
                  px="40"
                >
                  {cardData
                    .filter((card) => card.type.includes("all"))
                    .slice(0, displayCountTab1)
                    .map((cardy, index) => (
                      <Slidee cascade bottom>
                        <Tada>
                          <Fade>
                            <GridItem
                              cursor={"pointer"}
                              key={index}
                              onClick={() => {
                                onOpen();
                                setProjectName(cardy.projectName);
                              }}
                            >
                              <Card
                                key={cardy.key}
                                image={cardy.imgsrc}
                                text={cardy.text}
                                para={cardy.para}
                                mobileWidth={mobileWidth}
                              />
                            </GridItem>
                          </Fade>
                        </Tada>
                      </Slidee>
                    ))}
                </Grid>
                {cardData.length > initialDisplayCount && (
                  <Flex mt="8" mx="44" justify="right">
                    <Button
                      title={
                        displayCountTab1 === initialDisplayCount
                          ? "Load More"
                          : "Hide"
                      }
                      border="solid 2px #faae01"
                      background="secondary.600"
                      borderRadius="500"
                      P="2"
                      bg="gray.500"
                      mt="2"
                      boxShadow={"0 0 20px  rgba(255, 174, 0, 0.4)"}
                      transition="all 0.2s"
                      _hover={{
                        border: "solid 3px #faae01",
                        transform: "scale(1.05)",
                        opacity: 1,
                        boxShadow: "0 0 20px #ffae00",
                        background: "rgb(11, 11, 13)",
                      }}
                      _focus={{
                        outline: "none",
                        background: "gray.500",
                      }}
                      _active={{
                        outline: "none",
                        background: "gray.500",
                        border: "none",
                      }}
                      onClick={() => toggleDisplay(1)}
                    >
                      <Text
                        fontSize={"lg"}
                        variant="gradient"
                        fontWeight="800"
                        textTransform="none"
                      >
                        {displayCountTab1 === initialDisplayCount
                          ? "Load More"
                          : "Hide"}
                      </Text>
                      {/* <Text
                        fontSize="1xl"
                        variant="gradient"
                        fontWeight="800"
                        textTransform="none"
                      >
                        
                      </Text> */}
                    </Button>
                  </Flex>
                )}
              </Box>
              <PortfolioModal
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                projecName={projecName}
              />
              {/* </Slide> */}
            </Box>
          </TabPanel>
          {/* web */}
          <TabPanel>
            <Box
              color="white"
              p={[2, 3, 4, "10"]}
              fontFamily="Raleway"
              minHeight="90vh"
              display="flex"
              textAlign="center"
              justifyContent="center"
            >
              <Box>
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  rowGap={20}
                >
                  {copycard.slice(0, displayCountTab2).map((cardy, index) => (
                    <Slidee cascade bottom>
                      <Tada>
                        <Fade>
                          <GridItem
                            cursor={"pointer"}
                            key={index}
                            onClick={() => {
                              onOpen();
                              setProjectName(cardy.projectName);
                            }}
                          >
                            <Card
                              key={cardy.key}
                              image={cardy.imgsrc}
                              text={cardy.text}
                              para={cardy.para}
                            />
                          </GridItem>
                        </Fade>
                      </Tada>
                    </Slidee>
                  ))}
                </Grid>
                {cardData.length > initialDisplayCount && (
                  <Flex mt="8" mx="0" justify="right">
                    <Button
                      title={
                        displayCountTab1 === initialDisplayCount
                          ? "Load More"
                          : "Hide"
                      }
                      border="solid 2px #faae01"
                      background="secondary.600"
                      borderRadius="500"
                      P="2"
                      bg="gray.500"
                      mt="2"
                      boxShadow={"0 0 20px  rgba(255, 174, 0, 0.4)"}
                      transition="all 0.2s"
                      _hover={{
                        border: "solid 3px #faae01",
                        transform: "scale(1.05)",
                        opacity: 1,
                        boxShadow: "0 0 20px #ffae00",
                        background: "rgb(11, 11, 13)",
                      }}
                      _focus={{
                        outline: "none",
                        background: "gray.500",
                      }}
                      _active={{
                        outline: "none",
                        background: "gray.500",
                        border: "none",
                      }}
                      onClick={() => toggleDisplay(2)}
                    >
                      <Text
                        fontSize={"lg"}
                        variant="gradient"
                        fontWeight="800"
                        textTransform="none"
                      >
                        {displayCountTab2 === initialDisplayCount
                          ? "Load More"
                          : "Hide"}
                      </Text>
                    </Button>
                  </Flex>
                )}
              </Box>
              <PortfolioModal
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                projecName={projecName}
              />
              {/* </Slide> */}
            </Box>
          </TabPanel>

          {/* hybrid */}
          <TabPanel>
            <Box
              color="white"
              p={[2, 3, 4, "10"]}
              fontFamily="Raleway"
              minHeight="90vh"
              display="flex"
              textAlign="center"
              justifyContent="center"
            >
              <Box>
                <Grid
                  templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                  ]}
                  rowGap={20}
                >
                  {cardData
                    .filter((card) => card.type.includes("hybrid"))
                    .slice(0, displayCountTab1)
                    .map((cardy, index) => (
                      <Slidee cascade bottom>
                        <Tada>
                          <Fade>
                            <GridItem
                              cursor={"pointer"}
                              key={index}
                              onClick={() => {
                                onOpen();
                                setProjectName(cardy.projectName);
                              }}
                            >
                              <Card
                                key={cardy.key}
                                image={cardy.imgsrc}
                                text={cardy.text}
                                para={cardy.para}
                              />
                            </GridItem>
                          </Fade>
                        </Tada>
                      </Slidee>
                    ))}
                </Grid>
                {cardData.length > initialDisplayCount && (
                  <Flex mt="8" mx="0" justify="right">
                    <Button
                      title={
                        displayCountTab1 === initialDisplayCount
                          ? "Load More"
                          : "Hide"
                      }
                      border="solid 2px #faae01"
                      background="secondary.600"
                      borderRadius="500"
                      P="2"
                      bg="gray.500"
                      mt="2"
                      boxShadow={"0 0 20px  rgba(255, 174, 0, 0.4)"}
                      transition="all 0.2s"
                      _hover={{
                        border: "solid 3px #faae01",
                        transform: "scale(1.05)",
                        opacity: 1,
                        boxShadow: "0 0 20px #ffae00",
                        background: "rgb(11, 11, 13)",
                      }}
                      _focus={{
                        outline: "none",
                        background: "gray.500",
                      }}
                      _active={{
                        outline: "none",
                        background: "gray.500",
                        border: "none",
                      }}
                      onClick={() => toggleDisplay(3)}
                    >
                      <Text
                        fontSize={"lg"}
                        variant="gradient"
                        fontWeight="800"
                        textTransform="none"
                      >
                        {displayCountTab3 === initialDisplayCount
                          ? "Load More"
                          : "Hide"}
                      </Text>
                    </Button>
                  </Flex>
                )}
              </Box>
              <PortfolioModal
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                projecName={projecName}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabCard;
