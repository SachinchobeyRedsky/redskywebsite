import { Box, Grid, Flex, Text, Icon, Collapse } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle } from "react-icons/io";


const FaqQuestionCard = ({ faqQuestions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
      ]}
      gap={4}
    >
      {faqQuestions?.map((faq, index) => (
        <Box
          key={index}
          bg={openIndex === index ? "rgba(248, 215, 7, 0.1)" : ""}
          border={
            openIndex === index ? "solid 2px #faae01" : "solid .1px #F8D707"
          }
          boxShadow={
            openIndex === index ? "0 0 20px  rgba(255, 174, 0, 0.4)" : ""
          }
          transition="all 0.1s"
          marginBottom="10px"
          pt="6px"
          onClick={() => handleToggle(index)}
          cursor="pointer"
        >
          <Flex
            borderBottom={
              openIndex === index ? "solid 2px #faae01" : "solid .1px #F8D707"
            }
            transition="all 0.1s"
            py="6px"
            px="10px"
            justifyContent="space-between"
          >
            <Text
              fontWeight="bold"
              color={openIndex === index ? "#faae01" : "#fff"}
            >
              {faq.question}
            </Text>
            <Icon
              as={openIndex === index ? IoIosArrowDropdownCircle : IoIosArrowDropdownCircle}
              w={6}
              h={6}
              color="#faae12"
              marginLeft={2}
              marginBottom={1}
              cursor="pointer"
              // onClick={() => handleToggle(index)}
            />
          </Flex>
          <Collapse in={openIndex === index}>
            <Box bg="#101114" textAlign="justify" fontSize="md" p="5px">
              {faq.answer}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Grid>
  );
};

export default FaqQuestionCard;
