import React from "react";
import Image from "next/image";
import { GridItem, Box } from "@chakra-ui/react";
const Servicelogo = (props) => {
  return (
    <GridItem
      minW={"100%"}
      minH="200px"
      maxH="200px"
      borderRadius={"10"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      mr="20"
    >
      <Box
        w="100%"
        h="100%"
        borderRadius={"10"}
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image src={props.image} width={"160px"} height={"140px"} alt="servicesLogo"/>
 
      </Box>
    </GridItem>
  );
};

export default Servicelogo;
