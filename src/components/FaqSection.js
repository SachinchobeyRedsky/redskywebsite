import React from "react";
import { Box, Text, Button, Flex, Icon,chakra } from "@chakra-ui/react";
import FaqQuestionCard from "../shared/FaqQuestionCard";
import Image from "next/image";
import ContactUsButton from "../shared/ContactUsButton";
import webimages from "../constants/images";

function FaqSection({ animation, faqQuestions }) {
  const { Fade, Zoom } = animation;
  return (
    <Box
      display="flex"
      flexDirection={["column", "column", "column", "row", "row"]}
      justifyContent="center"
      alignItems="center"
      minH={["auto", "auto", "auto", "auto", "40vh"]}
      bgImage={`url(${webimages.background.faqSectionBg})`}
      bgRepeat="no-repeat"
      bgSize={"cover"}
      bgPosition="center"
      backgroundPosition={["bottom", "bottom", "bottom", "center"]}
      backgroundRepeat="no-repeat"
      overflow="hidden"
      px={["10", "10", "10", "20", "20"]}
      pb="100px"
      pt="100px"
    >
      <Box
        w={["100%", "100%", "100%", "50%", "50%"]}
        mb={["4", "4", "0", "0", "0"]}
      >
        <Box>
          <Zoom>
            <Fade big>
              <Text
                color="white"
                fontSize={["1xl", "1xl", "2xl", "2xl", "3xl"]}
                textTransform="uppercase"
                fontWeight="extrabold"
                p="0"
              >
                You have Questions
              </Text>
              <Flex>
                <Box w={["90%", "90%", "70%", "70%", "70%"]}>
                  <chakra.span
                   bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                    bgClip="text"
                    fontSize={["1xl", "1xl", "2xl", "2xl", "3xl"]}
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    mb="4"
                  >
                    We have Answers
                  </chakra.span>
                  <Text textAlign="justify" mb="4" pr="10">
                    Do you have a question about our service? Feel free to give
                    us a call and also take a look at our list of frequently
                    asked questions!
                  </Text>
                  <ContactUsButton/>
                </Box>
                <Box w="20%" ml="-2">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2F240_F_585701665_cM7U03nzL5HmHxvdFUPWQQMRR5pmqWA8%201.png?alt=media&token=ec19b942-2b1a-4dd2-9752-99b7e4f1277a"
                    alt="questionimg"
                    height="450px"
                    width="250px"
                    decoding="async"
                  />
                </Box>
              </Flex>

             
            </Fade>
          </Zoom>
        </Box>
      </Box>
      <Box w={["100%", "100%", "100%", "50%", "50%"]} mt="10">
        <FaqQuestionCard faqQuestions={faqQuestions} animation={animation} />
      </Box>
    </Box>
  );
}

export default FaqSection;
