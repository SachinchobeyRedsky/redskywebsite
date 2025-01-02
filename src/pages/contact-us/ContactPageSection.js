import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ModalForm from "../../components/Forms/ModalForm";
import AddressSection from "./AddressSection";

function ContactPageSection() {
  return (
    <Box
      mx={["0", "0", "10", "10", "10"]}
      mt="10"
      mb={["20", "20", "40", "40", "40"]}
      py="10"
      px={["10", "10", "10", "10", "10"]}
      bgGradient="linear(to-r, #ff914d, #f8cb2e)"
      borderRadius="16"
    >
      <Flex flexDirection={["column", "column", "column", "row", "row"]}>
        <Box width={["100%", "100%", "100%", "50%", "50%"]}>
          <Box
            borderRadius="13px"
            boxShadow="0 0 10px #1c1e23"
            transition="all 0.1s"
            p={["4", "4", "4", "4", "4"]}
            // h={["", "", "70vh", "70vh", "70vh"]}
            alignSelf="center"
            bg="gray.800"
          >
            <Box>
              <ModalForm massage="Request A Quote" />
            </Box>
          </Box>
        </Box>
        <Box
          mt={["10", "10", "10", "0", "0"]}
          width={["100%", "100%", "100%", "50%", "50%"]}
        >
          <AddressSection />
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactPageSection;
