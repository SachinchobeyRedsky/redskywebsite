import React from "react";
import TrainingForm from "../components/Forms/TrainingForm";
import Image from "next/image";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalHeader,
  Flex,
} from "@chakra-ui/react";
import image1 from "../../public/leftcorner.png";
import Link from "next/link";
import { useState } from "react";

const TrainCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [openedTech, setOpenedTech] = useState("");

  return (
    <>
      <Box
        px={["0.5", "0.5", "3", "3"]}
        width="full"
        overflow="hidden"
        position="relative"
        background="rgba(11, 11, 13, 0.712)"
        h={["350px", "350px", "250px", "250px"]}
        borderRadius={["8px", "8px", "", ""]}
      >
        <Box
          top={["-60px", "-60px", "-30px", "-30px"]}
          left="0px"
          position="absolute"
          transform="rotate(90deg)"
          display={["none", "none", "block", "block"]}
        >
          <Image
            width="110px"
            height="150px"
            src={image1.src}
            alt="leftCorner"
          />
        </Box>
        <Box
          bottom={["-35px", "-35px", "-6px", "-6px"]}
          right="-25px"
          position="absolute"
          display={["none", "none", "block", "block"]}
          transform="scaleX(-1)"
        >
          <Image
            width="150px"
            height="110px"
            src={image1.src}
            alt="leftCorner"
          />
        </Box>
        <Box p={[3, 8, 8, 8]} h="full">
          <Flex h="20%" align="center" justify="center">
            <Image
              src={props.details.logo}
              width="50px"
              height="42px"
              alt="details logo"
            />
            <Text
              ml="3"
              color="yellow.400"
              fontWeight={["600", "600", "900", "900"]}
              fontSize={["1xl", "1xl", "2xl", "2xl", "2xl"]}
            >
              {props.details.title}
            </Text>
          </Flex>
          <Flex justify="center" align="center" h="55%">
            <Text fontWeight="normal" textAlign="justify">
              {props.details.text}
            </Text>
          </Flex>
          <Flex align="center" justify="space-between" h="25%">
            <Button
              title="Apply now"
              border="solid 2px #faae01"
              background="secondary.600"
              w={["60%", "30%", "30%", "40%", "30%"]}
              borderRadius="500"
              p={[
                "0.3rem 0.4rem",
                "0.3rem 0.4rem",
                "0.3rem 0.4rem",
                "1.2rem 0.4rem",
                "1.2rem 0.4rem",
              ]}
              bg="gray.500"
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
                fontSize="xl"
                variant="gradient"
                fontWeight="800"
                textTransform="none"
                onClick={() => {
                  onOpen();
                  setOpenedTech(props.details.title);
                }}
                outline="none"
              >
                Apply now
              </Text>
            </Button>
            <Text
              position="relative"
              zIndex={1111}
              _hover={{ textDecor: "none" }}
              textDecor="underline"
              textUnderlineOffset="5px"
              color="yellow.400"
              fontWeight="bold"
            >
              <Link
                href={{
                  pathname: props.details.path,
                }}
                legacyBehavior
              >
                <a>Learn more</a>
              </Link>
            </Text>
          </Flex>
        </Box>
      </Box>
      <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
        <ModalContent
          overflow="hidden"
          position="relative"
          maxWidth="40rem"
          bg="brand.black"
          boxShadow="inset 0 0 8px #faae12"
        >
          <ModalCloseButton color="white" _focus={{ border: "none" }} />
          <ModalHeader>
            <Text
              textAlign="center"
              fontSize={["2xl", "2xl", "3xl", "2xl", "2xl"]}
              fontWeight="ultrabold"
              color="brand.white"
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
            >
              {`Apply for ${openedTech} Training`}
            </Text>
          </ModalHeader>
          <Box
            position="absolute"
            w="175px"
            h="175px"
            borderRadius="50%"
            top="-67px"
            left="-77px"
            zIndex={11}
          />
          <ModalBody>
            <TrainingForm selectedTech={props.details.title} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TrainCard;
