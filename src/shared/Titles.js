import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

const Titles = (props) => {
  return (
    <Flex
      flexDirection="column"
      marginBottom={["2rem", "2rem", 0]}
      textAlign="justify"
      opacity={[1, 1, 1, 1]}
      transition="all 0.1s"
      border="solid 2px rgba(11, 11, 13, 0.712)"
      _hover={{
        border: "solid 2px #faae01",
        transform: "scale(1.05)",
        opacity: 1,
        background: "rgb(11, 11, 13)",
      }}
      // h={props?.cardHeight ? props?.cardHeight : "600px"}
      width="100%"
s      boxShadow="0 0 10px  rgba(255, 174, 0, 0.6)"
      borderRadius="13px"
      color="brand.white"
      padding={"1.6rem"}
      alignItems="center"
      fontFamily="Raleway"
      w={["100%", "100%", "100%", "100%", "100%"]}
      h={["100%","100%","600px","600px"]}

    >
      <Box>
        <Image src={props.images} alt={props.alt} width={200} height={200} />
      </Box>
      <Heading
        fontSize={["1xl", "1xl", "2xl", "2xl", "2xl"]}
        textTransform="uppercase"
        textAlign="center"
        fontFamily="Raleway"
        fontWeight="700"
        color="orange"
        my="1.6"
        mx="2rem"
        marginBottom="0.5rem"
      >
        {props.cardtitle}
      </Heading>
      <Box>
        <Text fontSize={["md", "md", "md", "md", "md"]}>{props.cardpara}</Text>
      </Box>
    </Flex>
  );
};

export default Titles;
