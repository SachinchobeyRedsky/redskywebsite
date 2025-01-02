import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalHeader,
} from "@chakra-ui/react";
import Slidee from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import TrainingForm from "../Forms/TrainingForm";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";
import RenderCarousalNavigationButton from "../../shared/RenderCarousalNavigationButton";
import { RESPONSIVE } from "../../constants/constants";
import webimages from "../../constants/images";

const Landing = ({ title, font, subtitle, logoSrc, techFeatures }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openedTech, setOpenedTech] = useState("");
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const shadowTimer = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, 1000);
    return () => clearInterval(shadowTimer);
  }, []);
  return (
    <Flex
      h={["100vh", "100vh", "60vh", "60vh", "60vh"]}
      w="full"
      bg={`linear-gradient(to right, #101114a0,#101114a0),url(${webimages.publicimages.carrierBack})`}
      backgroundRepeat="no-repeat"
      fontFamily="Raleway"
      backgroundPosition="center"
      backgroundColor="brand.black"
      justify="center"
      align="center"
      flexDirection="column"
      p={["20px", "20px", "20px", "50px", "50px"]}
      as="section"
      position="relative"
    >
      <Box position="absolute" top="4" left="10">
        <Link href="/industrial-training" legacyBehavior>
          <a>
            <ArrowBackIcon w={8} h={8} color="#fff" zIndex="9999" />
          </a>
        </Link>
      </Box>
      <Flex
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
        ]}
        w="full"
        align={["center", "center", "center", "", ""]}
      >
        <Flex
          direction="column"
          justify="center"
          w={["100%", "100%", "100%", "50%", "50%"]}
          h="full"
          p="6"
        >
          <Box textAlign={["center", "center", "center", "left", "left"]}>
            <Heading
              color="yellow.400"
              as="h1"
              fontSize={[
                "2xl",
                "2xl",
                "7xl",
                title === "Digital Marketing" ? font : "7xl",
                title === "Digital Marketing" ? font : "7xl",
              ]}
            >
              {title || ""}
            </Heading>
            <Text fontWeight="semibold">{subtitle}</Text>
          </Box>
        </Flex>
        <Flex
          justify="center"
          align="center"
          position="relative"
          w="50%"
          h="full"
        >
          <Box position="absolute">
            <Image
              src={title === "Digital Marketing" ? logoSrc : logoSrc}
              width={["80px", "80px", "130px", "130px", "130px"]}
              height={["90px", "90px", "130px", "130px", "130px"]}
              objectFit="contain"
              alt="logo src"
            />
          </Box>
          <Box id="container" mr={["100px"]}>
            {techFeatures?.map((el, i) => {
              return (
                <Box
                  key={el + "circle" + i}
                  className={"item-animation-redsky"}
                >
                  {" "}
                  <Flex alignItems="center">
                    <Image
                      src={
                        title === "Digital Marketing"
                          ? el.featureIcon
                          : el.featureIcon
                      }
                      width={[
                        "20px",
                        "20px",
                        "30px",
                        title === "Digital Marketing" ? "50px" : "50px",
                        title === "Digital Marketing" ? "50px" : "50px",
                      ]}
                      height={[
                        "20px",
                        "20px",
                        "30px",
                        title === "Digital Marketing" ? "50px" : "50px",
                        title === "Digital Marketing" ? "50px" : "50px",
                      ]}
                      objectFit="cover"
                      mr="1"
                      alt="element feature icon"
                    />
                    <Text fontSize={["xs", "xs", "sm", "sm", "sm"]}>
                      {" "}
                      {el.feature}
                    </Text>
                  </Flex>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Flex>
      <Button
        title="Apply now"
        className={showShadow ? "with-shadow" : ""}
        position="fixed"
        bottom="40px"
        right="50px"
        zIndex={1111}
        transition="all 0.1s"
        w={["20%", "11%", "12%", "12%", "5.5%"]}
        h={["10%", "10%", "10%", "10%", "10%"]}
        borderRadius="100%"
        p={[
          "0.3rem 0.4rem",
          "0.3rem 0.4rem",
          "0.3rem 0.4rem",
          "1.2rem 0.4rem",
          "1.2rem 0.4rem",
        ]}
        border="solid 2px #faae01"
        boxShadow="0 0 8px #ffae00"
        background="rgb(11, 11, 13)"
        _hover={{
          background: "rgb(11, 11, 13)",
          transform: "scale(1.05)",
        }}
        _focus={{
          background: "rgb(11, 11, 13)",
        }}
        _active={{
          background: "rgb(11, 11, 13)",
        }}
      >
        <Flex direction={"column"}>
          <Text
            fontSize="xl"
            fontWeight="800"
            textTransform="none"
            onClick={() => {
              onOpen();
              setOpenedTech(title);
            }}
            outline="none"
          >
            Apply
          </Text>
          <Text
            fontSize="xl"
            fontWeight="800"
            textTransform="none"
            onClick={() => {
              onOpen();
              setOpenedTech(title);
            }}
            outline="none"
          >
            now
          </Text>
        </Flex>
      </Button>
      <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
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
    </Flex>
  );
};

export default Landing;
