import React from "react";
import { Text, Box, Tabs, TabList, Tab } from "@chakra-ui/react";

function ContactForServices({ setDetail, detail }) {
  const setType = (e) => {
    setDetail({ ...detail, type: e.target.value });
  };
  return (
    <>
      <Text fontSize="xl" mt="2">Pick necessary services</Text>
      <Box mt={5}>
        <Tabs variant="soft-rounded" colorScheme="tranparant">
          <TabList>
            <Tab
              fontSize="xs"
              color="brand.white"
              backgroundColor="black.600"
              _selected={{
                color: "yellow.100",
                backgroundColor: "secondary.500",
                border: "solid 2px #faae01",
                boxShadow: "0 0 20px  rgba(255, 174, 0, 0.4)",
              }}
              _focus={{ border: "none", backgroundColor: "gray.700" }}
              onClick={setType}
              value="web"
            >
              Web{" "}
            </Tab>
            <Tab
              fontSize="xs"
              color="brand.white"
              backgroundColor="black.600"
              _selected={{
                color: "yellow.100",
                backgroundColor: "secondary.500",
                border: "solid 2px #faae01",
                boxShadow: "0 0 20px  rgba(255, 174, 0, 0.4)",
              }}
              ml={["2", "2", "5", "5", "5"]}
              _focus={{ border: "none", backgroundColor: "gray.700" }}
              value="ios"
              onClick={setType}
            >
              Ios
            </Tab>
            <Tab
              fontSize="xs"
              color="brand.white"
              backgroundColor="black.600"
              _selected={{
                color: "yellow.100",
                backgroundColor: "secondary.500",
                border: "solid 2px #faae01",
                boxShadow: "0 0 20px  rgba(255, 174, 0, 0.4)",
              }}
              ml={["2", "2", "5", "5", "5"]}
              _focus={{ border: "none", backgroundColor: "gray.700" }}
              value="android"
              onClick={setType}
            >
              Android
            </Tab>
            <Tab
              fontSize="xs"
              color="brand.white"
              backgroundColor="black.600"
              _selected={{
                color: "yellow.100",
                backgroundColor: "secondary.500",
                border: "solid 2px #faae01",
                boxShadow: "0 0 20px  rgba(255, 174, 0, 0.4)",
              }}
              ml={["2", "2", "5", "5", "5"]}
              _focus={{ border: "none", backgroundColor: "gray.700" }}
              value="others"
              onClick={setType}
            >
              Others
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </>
  );
}

export default ContactForServices;
