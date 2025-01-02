import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Overview = ({ overviewText, overviewHeading }) => (
  <Flex
    m={["20px", "20px", "20px", "50px", "50px"]}
    overflowY="hidden"
    position="relative"
    justify="center"
    minH={["full", "full", "full", "40vh", "40vh"]}
    bg={[
      "brand.black",
      "brand.black",
      "brand.black",
      "yellow.400",
      "yellow.400",
    ]}
    as="section"
  >
    <Box
      display={["none", "none", "none", "inline-blocK", "inline-block"]}
      borderTopLeftRadius="40%"
      borderBottomRightRadius="60%"
      zIndex={1}
      top={0}
      left={0}
      bg="brand.black"
      position="absolute"
      h={["full", "full", "full", "45vh", "45vh"]}
      w="full"
    />
    <Box
      mt={["", "", "", "50px", "50px"]}
      width={["full", "full", "full", "75%", "75%"]}
      position={["static", "static", "static", "absolute", "absolute"]}
      zIndex={2}
    >
      <Heading fontSize="3xl" mb="2.5" color="yellow.400" as={"h3"}>
        {overviewHeading}
      </Heading>
      <Text textAlign={["justify", "justify", "justify", "", ""]} fontSize="md">
        {overviewText ||
          `The Lorem ipum filling text is used by graphic designers, programmers
        and printers with the aim of occupying the spaces of a website, an
        advertising product or an editorial production whose final text is not
        yet ready. This expedient serves to get an idea of the finished product
        that will soon be printed or disseminated via digital channels. In order
        to have a result that is more in keeping with the final result, the
        graphic designers, designers or typographers report the Lorem ipsum text
        in respect of two fundamental aspects, namely readability and editorial
        requirements.`}
      </Text>
    </Box>
  </Flex>
 

);

export default Overview;
