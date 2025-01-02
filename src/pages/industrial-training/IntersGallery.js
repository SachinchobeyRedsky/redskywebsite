import React, { useState, useEffect, useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { EventObject } from "react-alice-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Zoom from "react-reveal/Zoom";
// import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
// import Slidee from "react-reveal/Slide";
// import webimages from "../../constants/images";
import GalleryCard from "../../shared/GalleryCard";

function IntersGallery({
  AliceCarousel,
  responsive,
  internImagesData,
  trainingConstants,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChanged = ({ item }) => {
    setCurrentIndex(item);
  };

  return (
    <>
      <Box
        as="section"
        backgroundColor="brand.black"
        color="white"
        textAlign="center"
        pt="20"
        pb={["10", "10", "50", "50", "100px"]}
        bgRepeat="no-repeat"
        bgPosition={"bottom"}
        bgSize="100%"
        bg="brand.black"
      >
        <Zoom>
          <Fade>
            <Box mb={["", "", "3rem", "3rem"]}>
              <Heading
                as="h4"
                fontFamily="Raleway"
                fontWeight="800"
                display="inline"
                fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
              >
                {trainingConstants.OUR}
              </Heading>
              <Heading
                as="h4"
                display="inline"
                bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                bgClip="text"
                fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
                fontFamily="Raleway"
                fontWeight="800"
              >
                {trainingConstants.SHINING_STAR}
              </Heading>
            </Box>
          </Fade>
        </Zoom>

        <Box overflow="hidden">
          <Box
            display={["block", "block", "block", "block", "block"]}
            width={["100%", "100%", "100%", "100%", "100%"]}
            focus={{ border: "none", outline: "none" }}
            active={{ border: "none", outline: "none" }}
            position="relative"
            px="10"
            mt={["10", "10", "0", "0", "0"]}
          >
            <AliceCarousel
              mouseTracking
              responsive={responsive}
              autoPlay={true}
              autoPlayInterval={2000}
              animationDuration={1500}
              controlsStrategy="alternate"
              infinite={true}
              renderPrevButton={() => {
                return (
                  <Box display={["none", "none", "none", "inline", "inline"]}>
                    {" "}
                    <ChevronLeftIcon
                      w={60}
                      h={60}
                      position="absolute"
                      left="-70px"
                      bottom="200px"
                      style={{
                        width: "100px",
                        height: "100px",
                        color: "gray.600",
                      }}
                    />
                  </Box>
                );
              }}
              renderNextButton={() => {
                return (
                  <Box display={["none", "none", "none", "inline", "inline"]}>
                    {" "}
                    <ChevronRightIcon
                      w={60}
                      h={60}
                      position="absolute"
                      right="-70px"
                      bottom="200px"
                      style={{
                        width: "100px",
                        height: "100px",
                        color: "gray.600",
                      }}
                    />
                  </Box>
                );
              }}
            >
              {internImagesData.map((allData, index) => {
                return (
                  <Box
                    focus={{ border: "none", outline: "none" }}
                    active={{ border: "none", outline: "none" }}
                    width={["100%", "100%", "90%", "98%", "98%"]}
                    key={index}
                    px="0rem"
                    pl={["0", "0", "8%", "3%", "3%"]}
                  >
                    <GalleryCard index={index} allData={allData} />
                  </Box>
                );
              })}
            </AliceCarousel>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default IntersGallery;
