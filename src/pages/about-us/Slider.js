import { Box, Text } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Slider = ({ cards, animation, aboutUs }) => {
  const { Slidee } = animation;

  return (
    <Box as="section" bg="brand.black">
      <Slidee bottom>
        <Box overflow="hidden">
          <Box
            py={["1rem", "0", "40", "60", "0.4rem"]}
            bg="brand.black"
            h={["60vh", "full", "full", "100vh", "100vh"]}
          >
            <Box
              maxHeight={["60vh", "80vh", "100vh"]}
              minHeight={["60vh", "80vh", "100vh"]}
              position="relative"
            >
              <AliceCarousel
                mouseTracking
                autoPlay={true}
                autoPlayInterval={1500}
                infinite={true}
                autoPlayStrategy="none"
              >
                <Box
                  height={["55vh", "55vh", "70vh", "70vh", "100vh"]}
                  bgImage="url('https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fimagesextra%2FWhatsApp%20Image%202022-06-21%20at%204.31.18%20PM.jpeg?alt=media&token=53670097-e76f-4368-879b-5a6169f5c03f')"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize={["200%", "100%", "100%", "100%", "100%"]}
                  width="100vw"
                >
                  <Box
                    p={["5", "5", "4", "10", "3"]}
                    textAlign="center"
                    w={["100%", "100%", "100%", "100%", "100%"]}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    backgroundColor="black.200"
                  >
                    <Box
                      border="5px solid #fff"
                      width={["100%", "100%", "70%", "70%", "70%"]}
                      py={["1rem", "1rem", "5rem", "6rem", "6rem"]}
                    >
                      <Text
                        fontFamily="Raleway"
                        fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
                        fontWeight="bold"
                        color="brand.white"
                      >
                        {aboutUs.ABOUTUS_PAGE_CARD_HEADING}{" "}
                      </Text>{" "}
                      <Text
                        fontFamily="Raleway"
                        fontSize={["md", "md", "2xl", "2xl", "2xl"]}
                        color="brand.white"
                      >
                        {" "}
                        {aboutUs.ABOUTUS_PAGE_CARD_TEXT}{" "}
                      </Text>{" "}
                    </Box>
                  </Box>{" "}
                </Box>
                <Box
                  height={["55vh", "55vh", "70vh", "70vh", "100vh"]}
                  bgImage="url('https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2F20211222_1651389.jpg?alt=media&token=f4fcee21-4a01-4cb5-b810-a8dd6d874239')"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize={["200%", "100%", "100%", "100%", "100%"]}
                  width="100vw"
                >
                  <Box
                    p={["5", "5", "4", "10", "3"]}
                    textAlign="center"
                    w={["100%", "100%", "100%", "100%", "100%"]}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    backgroundColor="black.200"
                  >
                    <Box
                      border="5px solid #fff"
                      width={["100%", "100%", "70%", "70%", "70%"]}
                      py={["1rem", "1rem", "5rem", "6rem", "6rem"]}
                    >
                      <Text
                        fontFamily="Raleway"
                        fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
                        fontWeight="bold"
                        color="brand.white"
                      >
                        {aboutUs.ABOUTUS_PAGE_CARD_HEADING}{" "}
                      </Text>{" "}
                      <Text
                        fontFamily="Raleway"
                        fontSize={["md", "md", "2xl", "2xl", "2xl"]}
                        color="brand.white"
                      >
                        {" "}
                        {aboutUs.ABOUTUS_PAGE_CARD_TEXT}{" "}
                      </Text>{" "}
                    </Box>
                  </Box>{" "}
                </Box>
                <Box
                  height={["55vh", "55vh", "70vh", "70vh", "100vh"]}
                  bgImage="url('https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2Fimgpsh_fullsize_anim.jpg?alt=media&token=964dee6f-235a-48af-9a32-bb3330e6a587')"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize={["200%", "100%", "100%", "100%", "100%"]}
                  width="100vw"
                >
                  <Box
                    p={["5", "5", "4", "10", "3"]}
                    textAlign="center"
                    w={["100%", "100%", "100%", "100%", "100%"]}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    backgroundColor="black.200"
                  >
                    <Box
                      border="5px solid #fff"
                      width={["100%", "100%", "70%", "70%", "70%"]}
                      py={["1rem", "1rem", "5rem", "6rem", "6rem"]}
                    >
                      <Text
                        fontFamily="Raleway"
                        fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
                        fontWeight="bold"
                        color="brand.white"
                      >
                        {aboutUs.ABOUTUS_PAGE_CARD_HEADING}{" "}
                      </Text>{" "}
                      <Text
                        fontFamily="Raleway"
                        fontSize={["md", "md", "2xl", "2xl", "2xl"]}
                        color="brand.white"
                      >
                        {" "}
                        {aboutUs.ABOUTUS_PAGE_CARD_TEXT}{" "}
                      </Text>{" "}
                    </Box>
                  </Box>{" "}
                </Box>
              </AliceCarousel>
            </Box>
          </Box>
        </Box>
      </Slidee>
    </Box>
  );
};

export default Slider;
