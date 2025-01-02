import { Box, Flex, Text, Heading, chakra, Image } from "@chakra-ui/react";
import React from "react";
import { contactUs } from "../../constants/constants";

function Landing() {
  return (
    <Box as="main" display="flex" justifyContent="center" px={["6","6","10","10","10"]} alignItems="center">
      <Flex
        flexDirection={["column", "column", "row", "row", "row"]}
        h={["100vh", "100vh", "100vh", "70vh", "70vh"]}
      >
        <Box
          w={["100%", "100%", "60%", "60%", "65%"]}
          // px="2"
          alignSelf="center"
          lineHeight={1.4}
        >
          <Heading
            as="h1"
            ml={["0"]}
            fontWeight="ultrabold"
            fontFamily="Raleway"
            fontSize={["3xl", "3xl", "3xl", "3xl", "3.1rem"]}
          >
            {contactUs.CONTACTUS_PAGE_HEADING}
          </Heading>
          <chakra.span
            as="h2"
            fontWeight="ultrabold"
            fontFamily="Raleway"
            fontSize={["2xl", "2xl", "4xl", "4xl", "3rem"]}
            bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
            bgClip="text"
          >
            {contactUs.CONTACTUS_PAGE_INMIND}
          </chakra.span>
          <Text
            as="h2"
            className="typewrtier2"
            fontSize={["sm", "sm", "lg", "lg", "lg"]}
            color="brand.white"
            textAlign="left"
            width={["100%", "100%", "80%", "80%", "80%"]}
            fontFamily="Raleway"
            fontWeight="medium"
            lineHeight={1.5}
            my="6"
          >
            {contactUs.CONTACTUS_PAGE_TEXT}
          </Text>
        </Box>
        <Box
          w={["100%", "100%", "40%", "40%", "35%"]}
          ml="0"
          alignSelf="center"
          mt={["6", "2", "2", "0", "0"]}
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FContactUsHelpDesk.png?alt=media&token=771b5b26-1c7c-4949-9539-d983a7b91c77"
            alt="contact Image"
            w="90%"
            h="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Landing;
