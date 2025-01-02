import React from "react";
import {
  GridItem,
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import CarrerForm from "../components/Forms/CarrerForm";
import ourservices from "../../styles/ourservice.module.scss";

const Gridservice = (props) => {
  return (
    <>
      <GridItem
        width={["70vw", "70vw", "70vw", "70vw", 400]}
        height={["70vw", "70vw", "70vw", "70vw", 400]}
        bg="#0e0e12"
        borderRadius={["20", "20", "20", "50"]}
        position="relative"
        border="solid 2px  #f0ae12"
        overflow="hidden"
        id={ourservices.cardAnimation}
        transition="all 0.2s"
      >
        <Flex
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="#0e0e124d"
        >
          <Flex
            flexDirection="column"
            justify="center"
            align="center"
            pl={[5, 5, 5, 10]}
            pr={[5, 5, 5, 10]}
          >
            <Heading fontSize={["2rem", "3.5rem", "2.5rem"]}>
              {props.title}
            </Heading>
            <Text
              mt={[5, 5, 5, 10]}
              fontSize={["0.6rem", "1rem", "1rem", "1rem"]}
            >
              {props.text}
            </Text>
            <Button
              title="Apply now"
              variant="trainingButton"
              mt={[1, 5, 5, 10]}
              onClick={props.onOpen}
              w={["50%", "50%", "60%", "45%"]}
              _hover={{
                background: "gray.500",
              }}
              _focus={{
                outline: "none",
                background: "gray.500",
              }}
              _active={{
                outline: "none",
                background: "gray.500",
              }}
            >
              <Text
                variant="gradient"
                fontSize={["1rem", "1rem", "1rem", "1rem"]}
              >
                Apply now
              </Text>
            </Button>
          </Flex>
        </Flex>
        <Flex
          bg="#0c0c0f"
          justifyContent="center"
          position="absolute"
          top={0}
          left={0}
          height="100%"
          width="100%"
          alignItems="center"
          id={ourservices.frontCard}
          transition="all 0.4s ease-in-out"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Image src={props.logo.src} width="30%" alt="services images" />
            <Text fontSize="1.4rem" mt={10} fontWeight={200}>
              {props.title}
            </Text>
          </Flex>
        </Flex>
      </GridItem>
    </>
  );
};

export default Gridservice;
