import React from "react";
import Link from "next/link";
import { Box, Text, Button, Flex, Icon, chakra } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

function ContactUsButton() {
  return (
    <>
      <Link href="/contact-us">
        <a>
          <Button
            title="Contact Us"
            border="solid 2px #faae01"
            background="secondary.600"
            borderRadius="500"
            P="2"
            bg="gray.500"
            mt="2"
            boxShadow={"0 0 20px  rgba(255, 174, 0, 0.4)"}
            transition="all 0.2s"
            _hover={{
              border: "solid 3px #faae01",
              transform: "scale(1.05)",
              opacity: 1,
              boxShadow: "0 0 20px #ffae00",
              background: "rgb(11, 11, 13)",
            }}
            _focus={{
              outline: "none",
              background: "gray.500",
            }}
            _active={{
              outline: "none",
              background: "gray.500",
              border: "none",
            }}
          >
            <Text
              fontSize={"lg"}
              variant="gradient"
              fontWeight="800"
              textTransform="none"
            >
              <Flex alignItems="center">
                Contact Us
                <Text ml="2">
                  <FaLongArrowAltRight color="#faae12" />
                </Text>
              </Flex>
            </Text>
          </Button>
        </a>
      </Link>
    </>
  );
}

export default ContactUsButton;
