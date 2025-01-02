import { Box, Heading } from "@chakra-ui/react";
import webimages from "../../constants/images";

const Provide = ({
  animation,
  icon,
  // webimages,
  AliceCarousel,
  trainingConstants,
  gridInfo,
  grTrainCard,
  TrainCard,
  onOpen,
  responsive,
}) => {
  const { Slidee, Fade, Zoom } = animation;
  const { ChevronLeftIcon, ChevronRightIcon } = icon;
  return (
    <Box
      backgroundColor="brand.black"
      color="white"
      textAlign="center"
      maxHeight="100vh"
      py={["10", "10", "50", "50", "80px"]}
      px={[0, 0, 0, "1rem", "2rem"]}
      bgImage={`url(${webimages.background.WhyHireUsbg})`}
      bgRepeat="no-repeat"
      bgSize={["450%", "200%", "100%", "100%", "100%"]}
      bgPosition="center"
      as="section"
    >
      <Zoom>
        <Fade>
          <Box mb="3rem">
            <Heading
              as="h3"
              fontFamily="Raleway"
              fontWeight="800"
              display="inline"
              fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
            >
              {trainingConstants.TRAINING}{" "}
            </Heading>
            <Heading
              as="h3"
              display="inline"
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
              fontFamily="Raleway"
              fontWeight="800"
            >
              {trainingConstants.WE_PROVIDE}
            </Heading>
          </Box>
        </Fade>
      </Zoom>

      <Box overflow="hidden">
        <Slidee right>
          <Fade>
            <Box
              display={["block", "block", "block", "block", "block"]}
              width={["100%", "100%", "100%", "100%", "100%"]}
              focus={{ border: "none", outline: "none" }}
              active={{ border: "none", outline: "none" }}
              position="relative"
              px="10"
            >
              <AliceCarousel
                mouseTracking
                responsive={responsive}
                autoPlay={true}
                autoPlayInterval={2000}
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
                        bottom="165px"
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
                        bottom="165px"
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
                {gridInfo.map((particular, index) => {
                  return (
                    <Box
                      key={index}
                      px={["3%", "3%", "8%", "3%", "3%"]}
                      focus={{ border: "none", outline: "none" }}
                      active={{ border: "none", outline: "none" }}
                      width="100%"
                    >
                      <TrainCard details={particular} />
                    </Box>
                  );
                })}
              </AliceCarousel>
            </Box>
          </Fade>
        </Slidee>
      </Box>

      <Box>
        <Slidee right>
          <Fade>
            <Box
              display={["none", "none", "none", "none", "none"]}
              padding={["0", "0", "0", "3rem", "0"]}
              pl={["", "", "", "5rem", "2.5rem"]}
              outline="none"
              focus={{ border: "none", outline: "none" }}
              active={{ border: "none", outline: "none" }}
            ></Box>
          </Fade>
        </Slidee>
      </Box>
    </Box>
  );
};

export default Provide;
