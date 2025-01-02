import {
  Box,
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalHeader,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import TrainingForm from "../Forms/TrainingForm";
import ContactUsButton from "../../shared/ContactUsButton";
import { useRouter } from "next/router";
import webimages from "../../constants/images";

function GroupDiscount({ title, subtitle, gredientBoxText,buttonText }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openedTech, setOpenedTech] = useState("");
  const [showShadow, setShowShadow] = useState(false);

  const onClickHandler = () => {
    if (buttonText=="Contact Us") {
      router.push("/contact-us");
    }else{
      onOpen()
    }
  };
  useEffect(() => {
    const shadowTimer = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, 800); // Toggle every 1 second

    return () => clearInterval(shadowTimer); // Cleanup on unmount
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      my="10"
      px={["10", "10", "20", "20", "20"]}
      h={["60", "60", "40", "40", "44"]}
      bgImage={`url(${webimages.background.groupDiscount})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      <Flex
        direction={["column", "column", "column", "column", "column"]}
        justifyContent="center"
        alignItems="center"
        columnGap="4"
      >
        <Box>
          {/* <Text
            fontSize={["2xl", "2xl", "2xl", "3xl", "3xl"]}
            fontWeight="extrabold"
            color="black"
          >
            Group Discount
          </Text> */}
          <Text
            fontSize={["md", "md", "md", "2xxl", "2.15vw"]}
            textAlign={["center", "center", "justify", "justify", "justify"]}
            fontWeight="extrabold"
            color="black"
          >
            {gredientBoxText ||
              `If you have Three or more people in your training we will be
            delighted to offer you a group discount`}
          </Text>
        </Box>
        <Box
          w={["100%", "100%", "30%", "30%", "100%"]}
          mt="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* <ContactUsButton /> */}
          <Button
            title="Apply now"
            className={showShadow ? "with-shadow" : ""}
            border="solid 2px #faae01"
            boxShadow="0 0 15px  rgba(255, 174, 0, 0.3)"
            transition="all 0.1s"
            background="secondary.600"
            w={["50%", "50%", "70%", "60%", "15%"]}
            borderRadius="500"
            p={[
              "0.6rem 0.8rem",
              "0.3rem 0.4rem",
              "0.3rem 0.4rem",
              "1.2rem 0.4rem",
              "1.4rem 0.8rem",
            ]}
            _hover={{
              border: "solid 3px #faae01",
              transform: "scale(1.05)",
              opacity: 1,
              boxShadow: "0 0 20px rgb(11, 11, 13)",
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
              onClick={onClickHandler}
              outline="none"
            >
              {buttonText}
            </Text>
          </Button>
          <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              backdropFilter="auto"
              backdropBlur="3px"
            />
            <ModalContent
              overflow="hidden"
              position="relative"
              maxWidth="40rem"
              bg="brand.black"
              boxShadow="0 0 20px  rgba(255, 174, 0, 0.6)"
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
                <TrainingForm selectedTech={title} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Box>
  );
}

export default GroupDiscount;
