import React from "react";
import {
  Box,
  Text,
  chakra,
  Button,
  GridItem,
  Image,
} from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import webimages from "../../constants/images";

const responsive = {
  0: { items: 1 },
  990: { items: 3 },
  1024: { items: 4 },
  1200: { items: 4 },
};
function WhyHireUs({ WhyHireUsHeading, WhyHireUsGradient, exploreData }) {
  return (
    <Box
      bgImage={`url(${webimages.background.WhyHireUsbg})`}
      bgRepeat="no-repeat"
      bgSize={["450%", "200%", "100%", "100%", "100%"]}
      bgPosition="center"
      px={["10", "10", "50", "50", "60px"]}
      py={["10", "10", "50", "50", "50px"]}
    >
      <Box textAlign="center" mb="6">
        <Box p={2}>
          <Text
            textAlign="center"
            color="brand.white"
            textTransform="uppercase"
            fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
            fontFamily="Raleway"
            fontWeight="extrabold"
            px={["0", "0", "0", "0", "0"]}
            ml={2}
          >
            {WhyHireUsHeading}
            <chakra.span
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              textTransform="uppercase"
              fontFamily="Raleway"
              fontWeight="extrabold"
              ml="2"
            >
              {WhyHireUsGradient}
            </chakra.span>{" "}
          </Text>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center"  >
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={2000}
          animationDuration={1500}
          controlsStrategy="alternate"
          infinite={true}
          disableButtonsControls
          disableDotsControls
        >
          {exploreData.map((data, index) => (
            <GridItem key={index} mr="4" mt="10" >
              <Box
                bg="secondary.300"
                borderRadius="13px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                h="27vh"
                border="1px  solid rgba(255, 174, 0)"
                transition="all 0.1s"
                position="relative"
              >
                <Box
                  bg="yellow.400"
                  borderRadius="100px"
                  h={["20", "20", "20", "20", "16"]}
                  w={["20", "20", "20", "20", "16"]}
                  alignContent="center"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  mb="2"
                  position="absolute"
                  top="-8"
                  bottom="0"
                  left='6'
                  zIndex="999"
                  boxShadow="0 0 10px #ffae00"
                >
                  <Image src={data?.image} alt="Image not found" height="40px" width="40px" decoding="async" />
                </Box>
                <Box py="12" px="2" h="30vh">
                <Text
                  fontSize="1xl"
                  color="yellow.400"
                  fontWeight="bold"
                  textAlign="center"
                  mb="2"
                >
                  {data.title}
                </Text>
                <Text
                  textAlign="center"
                  fontSize="sm"
                >
                  {data.description}
                </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </AliceCarousel>
      </Box>
    </Box>
  );
}

export default WhyHireUs;
