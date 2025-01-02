import { Flex, Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { footer } from "../constants/constants";

const SocialMediaLinksComponent = ({ align,showPhone }) => {
  const socialMediaLinks = showPhone ? footer?.socialMediaLinksPhone : footer?.socialMediaLinks;
  return (
    <Flex pt={3} justify={align ? "center" : "left"}>
      {socialMediaLinks?.map((link, index) => (
        <Link key={index} href={link.href}>
          <a target="_blank" aria-label={link?.altText} rel="noreferrer" text={link?.altText}>
            <Box
              bg="white"
              borderRadius="100px"
              boxShadow="0 0 10px #101114"
              mr={["2", "5", "10", "5", "30"]}
              h={["12", "12", "14", "14", "10"]}
              w={["12", "12", "14", "14", "10"]}
              alignContent="center"
              p={["2", "2", "3", "3", "3"]}
              _hover={{ backgroundColor: "yellow.400" }}
              _focus={{ border: "none", backgroundColor: "none" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={link.icon} w="5" h="5" color="black" />
            </Box>
          </a>
        </Link>
      ))}
    </Flex>
  );
};

export default SocialMediaLinksComponent;
