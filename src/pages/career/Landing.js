import { Box, Text } from "@chakra-ui/react";

const Landing = ({ carrier, myImage }) => {
  return (
    <Box
      bg={`linear-gradient(to right, #101114a0,#101114a0),url(${myImage})`}
      backgroundRepeat="no-repeat"
      fontFamily="Raleway"
      h="80vh"
      justifyContent="center"
      alignItems="center"
      backgroundPosition="center"
      backgroundColor="brand.black"
      backgroundSize={["600%", "600%", "100%", "300%", "150%"]}
      display="flex"
      flexDirection="column"
      overflow="hidden"
      as="main"
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
        {carrier.CARRIER_HEADING}{" "}
      </Text>{" "}
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
        {carrier.HEADING_CONTENT}
      </Text>
    </Box>
  );
};

export default Landing;
