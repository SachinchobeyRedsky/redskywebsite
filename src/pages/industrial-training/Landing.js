import { Box, Text } from "@chakra-ui/react";

const Landing = ({ trainingConstants, webimages, Header }) => {
  return (
    <Box
      bg={`linear-gradient(to right, #101114a0,#101114a0),url(${webimages.background.training.training2})`}
      backgroundRepeat="no-repeat"
      backgroundSize={["400%", "400%", "300%", "300%", "90%"]}
      fontFamily="Raleway"
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundPosition="center"
      backgroundColor="brand.black"
      overflow="hidden"
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
          {trainingConstants.TRAINING_HEADING}
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
          {trainingConstants.HEADING_CONTENT}
        </Text>
      </Box>
    </Box>
  );
};

export default Landing;
