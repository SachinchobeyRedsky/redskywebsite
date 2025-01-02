import React from "react";
import dynamic from "next/dynamic";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { home } from "../../constants/constants";
import ContactUsButton from "../../shared/ContactUsButton";
const HomeSlider = dynamic(() => import("./HomeSlider"));

function HomeLanding() {
  return (
    <Box
      as="main"
      backgroundImage={`linear-gradient(to right,#101114a4, #101114a4) ,url("https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fbackgroundimage%2FHome_mobile.webp?alt=media&token=bcd2097f-c2c6-43b2-a992-7160fd4a402d")`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundColor="black"
      backgroundSize={"cover"}
      color="white"
      fontFamily="Raleway"
      minH={["100vh", "100vh", "100vh", "100vh", "100vh"]}
      position="relative"
      px="2"
    >
      <Flex direction={["column", "column", "column", "row", "row"]} >
        <Box
          color="white"
          display="flex"
          flexDirection="column"
          py={["4", "4", "10", "40", "40"]}
          w={["100%", "100%", "100%", "50%", "50%"]}
        >
          <Box>
            <Box>
              <Heading
                as="h1"
                ml={["0"]}
                fontWeight="ultrabold"
                fontFamily="Raleway"
                fontSize={["3xl", "3xl", "5xl", "5xl", "5xl"]}
                pt={["50px", "50px", "150px", "0px", "0px"]}
                pl={["15px", "15px", "20px", "50px", "60px"]}
              >
                <Text display="block">{home.HOME_LANDING_PAGE__HEADING}</Text>
                <Text
                  bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                  bgClip="text"
                  fontSize={["2xl", "2xl", "4xl", "4xl", "3rem"]}
                >
                  {home.HOME_LANDING_PAGE_HEADING2}
                </Text>
              </Heading>
            </Box>

            <Text
              ml={["0"]}
              fontWeight="medium"
              mt={4}
              fontSize={["1xl", "1xl", "2xl", "1xl", "1xl"]}
              w={["90%", "90%", "80%", "95%", "90%"]}
              pl={["15px", "15px", "20px", "50px", "65px"]}
            >
              {home.HOME_LANDING_PAGE__TEXT}
            </Text>
            <Box pl={["15px", "15px", "20px", "50px", "65px"]} mt="10">
              <ContactUsButton />
            </Box>
          </Box>
        </Box>
        <Box
          py="20"
          w={["100%", "100%", "100%", "50%", "50%"]}
          px={["6", "6", "40", "6", "6"]}
          // display="flex"
          // justifyContent="center"
          // alignItems="center"
        >
          <HomeSlider />
        </Box>
      </Flex>
    </Box>
  );
}

export default HomeLanding;
