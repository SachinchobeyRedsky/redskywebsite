import React from "react";
import { Box, Text } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { home } from "../../constants/constants";

const responsive = {
  0: { items: 3 },
  990: { items: 3 },
  1024: { items: 3 },
  1200: { items: 4 },
};

function OurCertifications({ tech }) {
  return (
    <Box
      display="flex"
      flexDirection={["column", "column", "row", "row", "row"]}
      alignItems="center"
      justifyContent="center"
    >
      <Box w={["100%", "100%", "30%", "32%", "30%"]}>
        <Box textAlign="center">
          <Box>
            <Text
              // as="h4"
              color="white"
              fontSize={["1.8rem", "4xl", "3xl", "3xl", "3xl"]}
              textTransform="uppercase"
              fontWeight="extrabold"
              p="0"
              m="0"
            >
              {home.OUR}
            </Text>
            <Text
              // as="h4"
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              fontSize={["1.8rem", "4xl", "3xl", "3xl", "3xl"]}
              fontWeight="extrabold"
              textTransform="uppercase"
              mt={[0, 0, 0, 0, "-4"]}
            >
              {home.CERTIFICATIONS}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        w={["100%", "100%", "70%", "70%", "70%"]}
        pl={["0", "0", "10", "10", "10"]}
      >
        <AliceCarousel
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={3000}
          infinite={true}
          slideBy={2}
          disableButtonsControls={true}
          disableDotsControls={true}
        >
          {tech.map((tec, index) => {
            return (
              <Box className="slidee" p="2" key={index} width="100%">
                <Image
                  src={tec.images}
                  width={"100px"}
                  height={"100px"}
                  objectFit="contain"
                  alt="servicesLogo"
                  decoding="async"
                />
              </Box>
            );
          })}
        </AliceCarousel>
      </Box>
    </Box>
  );
}

export default OurCertifications;
