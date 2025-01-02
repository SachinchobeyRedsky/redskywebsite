import React from "react";
import { Flex, Box, Heading, Icon, Text, Image } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";

function TechProcessCard({ data }) {
  return (
    <Box
      p="10"
      w="100%"
      h="100%"
      bg="secondary.300"
      borderRadius="13px"
      borderWidth="1px"
      boxShadow="0 0 6px  rgba(255, 174, 0, 0.6)"
      transition="all 0.1s"
    >
      <Flex
        alignItems="center"
        gap="6"
        flexDirection={["column", "column", "row", "row", "row"]}
      >
        <Box
          borderRadius="100px"
          h={["20", "20", "20", "20", "28"]}
          w={["20", "20", "20", "20", "28"]}
          alignContent="center"
          p={["2", "2", "3", "3", "3"]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb="2"
        >
          <Box height="140px" width="100px" />
          <Image src={data?.icon} height="140px" width="100px" alt="Image not found" />
        </Box>
        <Heading fontSize="22px" color="yellow.400" mb="2">
          {data?.title}
        </Heading>
      </Flex>

      {data?.tasks &&
        data?.tasks.map((_content, index) => (
          <Flex key={index} alignItems="center" mt="4">
            <Icon
              as={FaLocationArrow}
              w={3}
              h={3}
              color="#faae12"
              marginRight={2}
              style={{ transform: "rotate(45deg)" }}
            />
            <Text fontSize="xl">{_content}</Text>
          </Flex>
        ))}
    </Box>
  );
}

export default TechProcessCard;
