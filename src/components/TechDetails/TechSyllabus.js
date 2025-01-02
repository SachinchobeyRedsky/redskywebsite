import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaLocationArrow } from "react-icons/fa";
import {
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  Icon,
  ListItem,
  UnorderedList,
  Collapse,
} from "@chakra-ui/react";

function TechSyllabus({ syllabus, heading, techText }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <Box
      display="flex"
      px={["10", "10", "20", "20", "20"]}
      flexDirection="column"
      alignItems="center"
      mb="10"
      justifyContent="center"
    >
      <Box textAlign="Center" mb="10" w={["100%", "100%", "80%", "80%", "80%"]}>
        <Heading
          color="white"
          textAlign="center"
          as="h3"
          fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
          display={["block", "block", "block", "inline", "inline"]}
        >
          {heading}
        </Heading>
        <Text
          fontSize={["sm", "sm", "md", "md", "md"]}
          color="brand.white"
          textAlign="center"
          fontFamily="Raleway"
          fontWeight="medium"
          mt="4"
        >
          {techText}
        </Text>
      </Box>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={6}
        w={"100%"}
      >
        {syllabus?.map((faq, index) => (
          <Box key={index} pt="6px">
            <Flex
              bg={openIndex === index ? "rgba(248, 215, 7, 0.1)" : ""}
              border={
                openIndex === index ? "solid 2px #faae01" : "solid .1px #F8D707"
              }
              boxShadow={
                openIndex === index ? "0 0 20px  rgba(255, 174, 0, 0.4)" : ""
              }
              transition="all 0.1s"
              marginBottom="10px"
              px="10px"
              py="10px"
              justifyContent="space-between"
            >
              <Text
                fontWeight="bold"
                color={openIndex === index ? "#faae01" : "#fff"}
              >
                {faq.question}
              </Text>
              <Icon
                as={openIndex === index ? FaChevronUp : FaChevronDown}
                w={4}
                h={4}
                color="#faae12"
                marginLeft={2}
                marginTop={1}
                cursor="pointer"
                onClick={() => handleToggle(index)}
              />
            </Flex>
            <Collapse in={openIndex === index}>
              <Box bg="#101114" textAlign="justify" fontSize="11px" p="5px">
                <UnorderedList
                  listStyleType={["none", "none", "none", "none", "none"]}
                  textAlign={["left", "left", "left", , "left"]}
                  color="white"
                >
                  {faq?.textList?.map((listItem, key) => (
                    <ListItem
                      key={`whyl${key}`}
                      fontSize={["medium", "sm", ",sm"]}
                      fontWeight="regular"
                    >
                      <Flex>
                        <Icon
                          as={FaLocationArrow}
                          w={3}
                          h={3}
                          color="#faae12"
                          mt={1}
                          marginRight={2}
                          style={{ transform: "rotate(45deg)" }}
                        />{" "}
                        <Text> {listItem}</Text>
                      </Flex>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Collapse>
            {/* )} */}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default TechSyllabus;
