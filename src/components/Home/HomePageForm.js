import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import webimages from "../../constants/images";
const ModalForm = dynamic(() => import("../Forms/ModalForm"));


function HomePageForm() {
  
  return (
    <Box
      py="20"
      bgImage={`url(${webimages.homepageformbg})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      px={["10", "10", "50", "50", "60px"]}
    >
      <Flex flexDirection={["column", "column", "row", "row", "row"]} gap="10">
        <Box w={["100%", "100%", "40%", "50%", "52%"]}>
          <Image
            src={webimages.contectusDoodle}
            width="1000"
            height="1000"
            alt="formImg"
          />
        </Box>
        <Box
          w={["100%", "100%", "60%", "50%", "48%"]}
          borderRadius="13px"
          boxShadow="0 0 20px black"
          transition="all 0.1s"
          p="4"
          alignSelf="center"
          bg="gray.800"
        >
          {/* <Box> */}
            <ModalForm massage="Request A Quote" />
          {/* </Box> */}
        </Box>
      </Flex>
    </Box>
  );
}

export default HomePageForm;
