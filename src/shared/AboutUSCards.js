import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function AboutUSCards({ cardData }) {
  return (
    <>
      <Box
        height="560px"
        w="100%"
        bg="secondary.300"
        borderRadius="13px"
        border= "solid 2px #faae01"
        boxShadow="0 0 20px  rgba(255, 174, 0, 0.6)"
        transition="all 0.1s"
        _hover={{  border: "solid 2px #faae01",  transform:"scale(1.05)" ,opacity:1 ,background:"rgb(11, 11, 13)"}}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign='center'
        >
          <Image
            src={cardData.image}
            alt="Picture of the author"
            width={360}
            height={280}
            objectFit="contain"
            className="imageRadius"
          />
          <Text fontSize="xl" color="yellow.400" fontWeight="bold" py="2">
            {" "}
            {cardData.title}
          </Text>

          <Text
            textAlign="justify"
            fontSize="sm"
            margin-top="12px"
            px="4"
            paddingBottom="12px"
            lineHeight="1.3"
          >
            {cardData.desc}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default AboutUSCards;
