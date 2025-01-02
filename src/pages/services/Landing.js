import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Landing = ({ service, webimage }) => {
  
  return (
        <Box
          as="main"
          fontFamily="Raleway"
          height="80vh"
          className="bluer"
          display="flex"
          alignItems="center"
          backgroundPosition="center"
          backgroundColor="brand.black"
          flexDirection="column"
          justifyContent="center"
          overflow="hidden"
          bg="brand.black"
          backgroundImage={`linear-gradient(to right, #101114a0,#101114a0),url(${webimage.background.service.mainimage})`}
          backgroundSize="cover"
        >
          <Box
            display="flex"
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              as="h1"
              className="typewrtier"
              fontSize={["6xl", "6xl", "9xl", "9xl", "9xl"]}
              color="yellow.400"
              textTransform="uppercase"
              fontFamily="Raleway"
              fontWeight="ultrabold"
              overflow="hidden"
              width={"100%"}
              textAlign="center"
            >
              {service.SERVICES_HEADING}
            </Text>

            <Text
              className="typewrtier2"
              fontSize={["sm", "sm", "lg", "lg", "lg"]}
              color="brand.white"
              textAlign="center"
              width={["100%", "100%", "70%", "70%", "70%"]}
              fontFamily="Raleway"
              fontWeight="medium"
              p={[4]}
            >
              {service.HEADING_CONTENT}
            </Text>
          </Box>
        </Box>
  );
};

export default Landing;
