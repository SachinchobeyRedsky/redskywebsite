import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

const Cardport = ({ image, alt, text, mobileWidth }) => {
  const WebProjWidth = mobileWidth
    ? mobileWidth
    : ["300px", "300px", "350px", "420px"];
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginBottom={["2rem", "2rem", 0]}
      marginTop={["2rem", "2rem", 0]}
      textAlign="justify"
      opacity={[1, 1, 1, 0.6]}
      border="solid 2px transparent"
      borderRadius="13px"
      color="brand.white"
      alignItems="center"
      fontFamily="Raleway"
      alignSelf="flex-start"
      justifyContent="center"
      width={WebProjWidth}
      _hover={{
        transition: "transform 0.5s",
        transform: "scale(1.07)",
        opacity: 1,
      }}
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        overflow="hidden"
        height="full"
      >
        <Image
          src={image}
          alt={alt}
          width= "100%"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Cardport;
