import { Box, Text, Center } from "@chakra-ui/react";

const Landing = ({ myImage, aboutUs }) => {
  return (
    <Box
      bg={`linear-gradient(to right, #101114a1,#101114a1),url(${myImage})`}
      backgroundRepeat="no-repeat"
      fontFamily="Raleway"
      h={["90vh", "90vh", "80vh", "80vh", "80vh"]}

      backgroundPosition="center"
      backgroundColor="brand.black"
      backgroundSize={["600%", "600%", "500%", "300%", "150%"]}
      display="flex"
      flexDirection="column"
      as="main"
    >
      <Box
        className="bluer"
        h="100%"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop={["50","50","0","0","0"]}
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
          {aboutUs.ABOUTUS_PAGE_HEADING}{" "}
        </Text>{" "}
        <Center>
          <Text
            className="typewrtier2"
            color="brand.white"
            fontFamily="Raleway"
            fontWeight="medium"
            width={["100%", "100%", "100%", "90%", "90%"]}
            p={["4", "4", "4", "4", "4"]}
            textAlign="center"
            fontSize={["sm", "sm", "lg", "lg", "lg"]}
          >
            {aboutUs.ABOUTUS_PAGE_HEADING_TEXT}{" "}
          </Text>{" "}
        </Center>
      </Box>{" "}
    </Box>
  );
};

export default Landing;
