import React from "react";
import { Box, Text } from "@chakra-ui/react";
import webimages from "../../constants/images";
// import { HEADER_HEIGHT } from "../../constants/constants";
const Landing = ({ heading, content, mainimage }) => {
  return (
    <Box
      bg={`linear-gradient(to right, rgba(16, 17, 20, 0.02),rgba(16, 17, 20, 0.02)) ,url(${mainimage || webimages.background.portfolio.mainimage
        })`}
      backgroundRepeat="no-repeat"
      backgroundSize={["400%", "400%", "300%", "300%", "150%"]}
      fontFamily="Raleway"
      h={["60vh", "60vh", "80vh", "80vh", "80vh"]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundPosition="center"
      backgroundColor="brand.black"
      flexDirection="column"
      as="main"
    >
      <Box
        className="bluer"
        display="flex"
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text
          as="h1"
          className={["", "", "typewriter", "typewriter"]}
          fontSize={["4xl", "4xl", "9xl", "9xl", "9xl"]}
          color="yellow.400"
          textTransform="uppercase"
          fontFamily="Raleway"
          fontWeight="ultrabold"
          overflow="hidden"
          width={"100%"}
          textAlign="center"
          lineHeight={[1, 1, "", ""]}
        >
          {heading}
        </Text>
        <Text
          className={["", "", "typewriter2", "typewriter2"]}
          fontSize={["sm", "sm", "lg", "lg", "lg"]}
          color="brand.white"
          textAlign="center"
          width={["100%", "100%", "70%", "70%", "70%"]}
          fontFamily="Raleway"
          fontWeight="medium"
          p={4}
        >
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default Landing;
