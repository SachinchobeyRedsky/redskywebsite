import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Flex,
  Divider,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  collection,
  getDocs,
  // where,
  // orderBy,
  query as firebaseQuery,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
// import { portfolioConstants } from "../../constants/constants";

function PortfolioModal({
  isOpen,
  onOpen,
  onClose,
  projecName,
  // projecImage,
  // projecDetail,
}) {
  const [currentPorjects, setCurrentPorject] = useState([]);

  const getProjectByName = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    if (querySnapshot.empty) {
      return;
    }
    let newProjectData = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    newProjectData.push({ ...data, id: doc.id });
  });
    setCurrentPorject(newProjectData);
  };
  useEffect(() => {
    getProjectByName();
  }, []);

  const currentPorject = currentPorjects?.find(
    (proj) => proj?.projectsData.projectName === projecName
  );
  return (
    <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="dark" backdropFilter="auto" backdropBlur="3px" />
      <ModalContent
        overflow="hidden"
        position="relative"
        maxWidth="80rem"
        bg="brand.black"
        mt="10%"
        mx="10"
        boxShadow="inset 0 0 8px #faae12"
      >
        <ModalCloseButton color="white" _focus={{ border: "none" }} />
        <ModalBody>
          <Flex
            my="4"
            gap="6"
            flexDirection={["column", "column", "column", "row", "row"]}
          >
            <Box w={["100%", "100%", "100%", "50%", "50%"]}>
              <Image
                src={currentPorject?.projectsData?.imgsrc}
                height="250"
                width="600"
                objectFit="contain"
                decoding="async"
                alt="Image not found"
              />

              <Flex mt="4" gap="4">
                <Box w="100%">
                  <Text
                    as="h3"
                    fontSize={["2xl", "2xl", "2xl", "1xl", "1xl"]}
                    fontFamily="Raleway"
                    fontWeight="700"
                    color="orange"
                    mb="2"
                    textAlign="center"
                    marginBottom="0.5rem"
                  >
                    Tech Stack
                  </Text>
                  <Text textAlign="center">
                    {currentPorject?.projectsData?.projectTechStack}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box w={["100%", "100%", "100%", "50%", "50%"]}>
              <chakra.span
                as="h3"
                fontSize={["2xl", "2xl", "2xl", "2xl", "3xl"]}
                fontFamily="Raleway"
                textTransform="uppercase"
                fontWeight="700"
                bgGradient="linear(to-r, brand.yellow, brand.orange)"
                bgClip="text"
                mb="4"
                marginBottom="0.5rem"
              >
                {currentPorject?.projectsData?.projectName}
              </chakra.span>
              <Divider my="2" w="100%" borderColor="yellow.600" />
              <Text
                as="h3"
                fontSize={["xl", "xl", "xl", "xl", "xl"]}
                fontFamily="Raleway"
                fontWeight="600"
                mb="4"
                marginBottom="0.5rem"
              >
                {currentPorject?.projectsData?.projectDetails}
              </Text>

              <Flex gap="4" my="6" alignItems="center">
                <Text
                  fontSize={"1xl"}
                  fontFamily="Raleway"
                  fontWeight="600"
                  color="orange"
                >
                  Tags:
                </Text>
                <Flex gap="4" overflowX="scroll">
                {currentPorject?.projectsData?.tags?.map((topic, index) => (
                  <Box
                    key={index}
                    p="2"
                    fontSize="xl"
                    fontWeight="600"
                    border="2px solid orange"
                    mb="2"
                  >
                    {topic}
                  </Box>
                ))}
                </Flex>
              </Flex>
              <Text
                as="h3"
                fontSize={"1xl"}
                fontFamily="Raleway"
                fontWeight="600"
                mb="4"
                marginBottom="0.5rem"
              >
                Here to know about this project
              </Text>
              <Text
                as="h3"
                fontSize={["xl", "xl", "xl", "xl", "xl"]}
                fontFamily="Raleway"
                mb="4"
                marginBottom="0.5rem"
              >
                {currentPorject?.projectsData?.projectAboutDetails}
              </Text>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PortfolioModal;
