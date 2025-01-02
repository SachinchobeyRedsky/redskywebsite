import { Box, Text, Flex, Button, Center, chakra } from "@chakra-ui/react";

function CarrierCard(props) {
  return (
    <>
      <Box
        width={["100%", "100%", "100%", "100%", "100%"]}
        bg="secondary.300"
        p={["4", "4", "10", "10", "10"]}
        borderRadius="8px"
        transition="all 0.2s"
        border="solid 2px #faae01"
        boxShadow="0 0 20px  rgba(255, 174, 0, 0.6)"
        _hover={{ border: "2px solid #faae12", transform: "scale(1.02)" }}
      >
        <Text
          bg="black.700"
          textAlign="center"
          fontSize={["2xl", "2xl", "3xl", "3xl", "3xl"]}
          fontWeight="bold"
          color="brand.white"
          borderRadius="8px"
        >
          {props.title}
        </Text>
        <Text
          textAlign="center"
          fontSize={["lg", "lg", "xl", "xl", "xl"]}
          fontStyle="italic"
          color="yellow.400"
          p={["0", "0", "4", "4", "4"]}
          mt="6"
        >
          {props.postedDate}
        </Text>
        <Flex
          p={2}
          gap="6"
          mt="6"
          flexDirection={["column", "column", "row", "row", "row"]}
        >
          <Text
            fontSize={["lg", "lg", "xl", "xl", "xl"]}
            fontWeight="ultrabold"
            color="brand.white"
          >
            {" "}
            {props.leftDesc}{" "}
          </Text>
          <Text fontSize={["lg", "lg", "xl", "xl", "xl"]} color="brand.white">
            {" "}
            {props.rightDesc}{" "}
          </Text>
        </Flex>
        <Center>
          <Button
            variant="trainingButton"
            mt={[1, 5, 5, 10]}
            p="1"
            onClick={props.onOpen}
            w={["60%", "60%", "30%", "30%"]}
            bg="gray.500"
            boxShadow={"0 0 20px  rgba(255, 174, 0, 0.4)"}
            transition="all 0.2s"
            _focus={{ border: "none", backgroundColor: "none" }}
            _active={{ border: "1px solid #faae12", bg: "none" }}
            _hover={{
              border: "solid 3px #faae01",
              transform: "scale(1.05)",
              opacity: 1,
              boxShadow: "0 0 20px #ffae00",
              background: "rgb(11, 11, 13)",
            }}
            border="2px solid #faae12"
          >
            <Text
              variant="gradient"
              textTransform="none"
              fontSize={["xl", "xl", "xl", "xl", "xl"]}
            >
              Apply now
            </Text>
          </Button>
        </Center>
      </Box>
    </>
  );
}

export default CarrierCard;
