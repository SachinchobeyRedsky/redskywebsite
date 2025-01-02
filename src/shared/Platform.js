import { Box, Flex, Text, Image, Center } from "@chakra-ui/react";

function Platform(props) {
  return (
    <>
      <Box w="90%" p={0} color="white" ml={["0px", "0px", "0px", "0px", "0px"]}>
        <Flex
          direction={["row", "row", "row", "column", "column"]}
          justifyContent="center"
          align="center"
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            flex={1}
            width="120px"
          >
            <Image
              htmlWidth="180px"
              mb={["50px", " ", " "]}
              src={props.image}
              alt="plateForm images"
            />
          </Box>

          <Center flex={1}>
            <Text
              fontSize={["xl", "xl", "2xl", "2xl", "2xl"]}
              fontFamily="Raleway,100,200,300,400,500,600,700,800"
              fontWeight={600}
            >
              {props.title}{" "}
            </Text>
          </Center>
        </Flex>
      </Box>
    </>
  );
}
export default Platform;
