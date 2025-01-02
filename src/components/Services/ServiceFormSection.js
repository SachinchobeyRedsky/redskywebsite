import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  chakra,
  ListItem,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import ModalForm from "../Forms/ModalForm";
import { FaLocationArrow } from "react-icons/fa";

function ServiceFormSection({
  serviceFormHeading,
  serviceFormText,
  serviceFormSubHeading,
  questions,
  ansText,
  bottomText,
}) {
  return (
    <Box
      py="20"
      px={["10", "10", "20", "20", "20"]}
    >
      <Flex
        flexDirection={["column", "column", "row", "row", "row"]}
        gap="10"
        alignItems="center"
      >
        <Box w={["100%", "100%", "40%", "50%", "52.5%"]}>
          <Heading
            as="h4"
            ml={["0"]}
            mb="4"
            fontWeight="ultrabold"
            fontFamily="Raleway"
            fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
            pt={["50px", "50px", "150px", "0px", "0px"]}
          >
            {serviceFormHeading}
            <chakra.span
              ml="2"
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
            >
              {serviceFormSubHeading}
            </chakra.span>
          </Heading>
          <Text>{serviceFormText}</Text>
          <Text fontSize="1xl" fontWeight="bold" mt="2">
            {questions}
          </Text>
          <UnorderedList
            listStyleType={["none", "none", "none", "none", "none"]}
            w="85%"
            ml={["5vw", "5vw", "10px", "5px", "5px"]}
            textAlign={["left", "left", "left", , "left"]}
            color="white"
          >
            {ansText?.map((listItem, key) => (
              <ListItem key={`whyl${key}`} my={2}>
                <Flex>
                  <Icon
                    as={FaLocationArrow}
                    w={3}
                    h={3}
                    color="#faae12"
                    marginRight={2}
                    mt={1}
                    style={{ transform: "rotate(45deg)" }}
                  />{" "}
                  <Text>{listItem}</Text>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>
          <Text>{bottomText}</Text>
        </Box>
        <Box
          w={["100%", "100%", "60%", "50%", "47.5%"]}
          borderRadius="13px"
          boxShadow="0 0 20px black"
          transition="all 0.1s"
          p={["4", "4", "4", "4", "4"]}
          // h={["", "", "65vh", "65vh", "65vh"]}
          alignSelf="center"
          bg="gray.800"
        >
          <Box>
            <ModalForm massage="Request A Quote" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ServiceFormSection;
