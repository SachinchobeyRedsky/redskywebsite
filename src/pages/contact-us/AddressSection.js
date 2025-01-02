import React from "react";
import Link from "next/link";
import { Box, Text, Heading, Icon, Flex } from "@chakra-ui/react";
import { GrLinkedinOption } from "react-icons/gr";
import { FiHome, FiPhone, FiMail } from "react-icons/fi";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import SocialMediaLinksComponent from "../../shared/SocialMediaLinksComponent";
import { contactUs } from "../../constants/constants";

const contactInfo = [
  {
    icon: FiHome,
    text: ["Address", "D-107, Phase-7, Industrial Area Mohali Punjab (India)"],
  },
  {
    icon: FiPhone,
    text: ["Mobile", "(+91) 9878788723,  9878788729"],
  },
  {
    icon: FiMail,
    text: ["Mail Us", "info@redskyadvancesolutions.com"],
  },
];


function AddressSection() {
  return (
    <Box w="100%" pl={["0", "0", "0", "8rem", "8rem"]} color="black" h="full">
      <Heading
        as="h6"
        fontSize={"2xxl"}
        fontFamily="Raleway,100,200,300,400,500,600,700,800"
        fontWeight="black"
        mb="2"
      >
       {contactUs.CONTACT_US_FORM_HEADING}
      </Heading>
      <Text w="90%" mb="5" fontWeight="semibold">
        {contactUs.CONTACT_US_FORM_TEXT}
      </Text>
      <Box w="100%" pt={5} color="white" h="full">
        <Box
          w="100%"
          pt={0}
          color="white"
          h="full"
          mr={["", "4rem", "30px", ""]}
        >
          {contactInfo.map((_contextText, index) => (
            <Box
              key={index}
              bg="gray.800"
              px={["2", "2", "4", "4", "4"]}
              py="4"
              borderRadius="16"
              mb="6"
            >
              <Flex alignItems="center">
                <Icon
                  as={_contextText.icon}
                  style={{ marginRight: "0.8rem" }}
                  w="6"
                  h="6"
                />
                <Box>
                  {_contextText.text.map((text, idx) => (
                    <Text
                      key={idx}
                      fontWeight={idx === 0 ? "extrabold" : "normal"}
                    >
                      {text}
                    </Text>
                  ))}
                </Box>
              </Flex>
            </Box>
          ))}
          <SocialMediaLinksComponent align="center" />
        </Box>
      </Box>
    </Box>
  );
}

export default AddressSection;
