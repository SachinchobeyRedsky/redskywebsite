import React from "react";
import {
  Box,
  Divider,
  Text,
  chakra,
  useDisclosure,
  Button,
  GridItem,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";


const exploreData = [
  {
    title: "Basic Frontend",
    description: "HTML | CSS | JAVASCRIPT",
    duration: "45 Days",
    dailyHours: "1:30 Hours/Day",
    practice: "Daily Practice",
    certificate: "ISO Certificate",
  },
  {
    title: "Web Development",
    description: "HTML | CSS | JAVASCRIPT",
    framework: "React / Vue / Angular / Next / Nuxt / PhP ",
    duration: "3 Months (Basic)/ 6 Months (Advance)",
    dailyHours: "1:30 Hours/Day",
    practice: "Daily Practice",
    certificate: "ISO Certificate",
  },
  {
    title: "App Development",
    description: "HTML | CSS | JAVASCRIPT",
    framework: "React-Native / Native-Script / Angular/ Vue.js/ Ionic)",
    duration: "3 Months (Basic)/ 6 Months (Advance)",
    dailyHours: "1:30 Hours/Day",
    practice: "Daily Practice",
    certificate: "ISO Certificate",
  },
  {
    title: "Backend Development",
    description: "HTML | CSS | JAVASCRIPT",
    framework: "Node + Express",
    database: "(Mongo / Sql)",
    duration: "3 Months",
    dailyHours: "1:30 Hour/Day",
    practice: "Daily Practice",
    certificate: "ISO Certificate",
  },
  {
    title: "Full Stack",
    description: "HTML | CSS | JAVASCRIPT",
    framework: "Angular / Vue / React ",
    database: " Node + Express + MongoDB",
    duration: "6 Months",
    dailyHours: "1:30 Hour/Day",
    practice: "Daily Practice",
    certificate: "ISO Certificate",
  },
  {
    title: "Digital Marketing",
    description: "SEO | SMO | PPC SMM",
    duration: "3/6 Months",
    dailyHours: "1:30 Hour/Day",
    practice: "Daily Practice",
    certificate: "ISO Certificate",
  },
  {
    title: "Graphic Designings",
    description:
      "HTML | CSS | JAVASCRIPT | BOOTSTRAP | FIGMA | PHOTOSHOP | CANVA",
    duration: "3/6 Months",
    dailyHours: "1:30 Hour/Day",
    practice: "Daily Practice",
    certificate: "ISO Certificate",
  },
];
function ExploreCourses() {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/contact-us");
  };
  return (
    <Box
      px={["10", "10", "50", "50", "60px"]}
      py={["10", "10", "50", "50", "20px"]}
    >
      <Box textAlign="center" mb="6">
        <Box p={2}>
          <Text
            textAlign="center"
            color="brand.white"
            textTransform="uppercase"
            fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
            fontFamily="Raleway"
            fontWeight="extrabold"
            px={["0", "0", "0", "0", "0"]}
            ml={2}
          >
            EXPLORE
            <chakra.span
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              textTransform="uppercase"
              fontFamily="Raleway"
              fontWeight="extrabold"
              ml="2"
            >
              Our Courses
            </chakra.span>{" "}
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Flex
          gap={4}
          flexWrap="wrap"
          flexDirection={["column", "column", "row", "row", "row"]}
          justifyContent="center"
          alignItems="center"
        >
          {exploreData.map((item, index) => {
            const isEven = index === 0 || index % 2 === 0;

            return (
              <GridItem
                key={index}
                mr="4"
                my="10"
                w={["100%", "100%", "30%", "22%", "22%"]}
                transition="all 0.1s"
                _hover={{ transform: "scale(1.05)", opacity: 1 }}
              >
                <Box
                  bgGradient={
                    isEven
                      ? "linear(to-t, rgba(255, 174, 0, 0.3)  , #101114a4 75%)"
                      : "linear(to-t,  secondary.300 ,  secondary.300)"
                  }
                  borderRadius="13px"
                  display="flex"
                  flexDirection="column"
                  pt="6"
                  pb="20"
                  h="43vh"
                  mt={["6", "6", "0", "0", "0"]}
                  alignItems="center"
                  boxShadow={
                    isEven
                      ? "inset 0px -2px 5px #faae12"
                      : "inset 0 0 8px #faae12"
                  }
                  transition="all 0.1s"
                  position="relative"
                >
                  <Box mb="2">
                    <Text
                      fontSize="xxl"
                      color="yellow.400"
                      fontWeight="extrabold"
                    >
                      {item.title}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      marginTop="2"
                      px="4"
                      lineHeight="1.5"
                      fontWeight="semibold"
                    >
                      {item?.description}
                    </Text>
                    {item?.framework && (
                      <Text
                        textAlign="center"
                        fontSize="sm"
                        marginY="2"
                        px="4"
                        // paddingBottom="2"
                        // lineHeight="1.3"
                        fontWeight="semibold"
                      >
                        {item?.framework}
                      </Text>
                    )}
                    {item?.database && (
                      <Text
                        textAlign="center"
                        fontSize="sm"
                        px="4"
                        lineHeight="1.3"
                        fontWeight="semibold"
                      >
                        {item?.database}
                      </Text>
                    )}
                    <Divider my="2" w="90%" />
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      px="4"
                      pb="2"
                      lineHeight="1.3"
                      fontWeight="bold"
                      color="yellow.400"
                    >
                      Duration:
                      <chakra.span
                        ml="2"
                        fontWeight="medium"
                        color="#FFF"
                        textAlign="center"
                      >
                        {item.duration}
                      </chakra.span>
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      px="4"
                      pb="2"
                      lineHeight="1.3"
                      fontWeight="bold"
                      color="yellow.400"
                    >
                      Class Hour:
                      <chakra.span ml="2" fontWeight="medium" color="#FFF">
                        {item.dailyHours}
                      </chakra.span>
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      px="4"
                      pb="2"
                      lineHeight="1.3"
                      fontWeight="bold"
                      color="yellow.400"
                    >
                      {item.practice}:
                      <chakra.span ml="2" fontWeight="medium" color="#FFF">
                        3-4 hour
                      </chakra.span>
                    </Text>
                    <Text
                      textAlign="center"
                      fontSize="sm"
                      px="4"
                      pb="1"
                      fontWeight="semibold"
                    >
                      {item.certificate}
                    </Text>
                  </Box>
                  <Button
                    title="Quick Enquiry"
                    position="absolute"
                    bottom="-7%"
                    border="solid 2px #faae01"
                    boxShadow="0 0 6px #ffae00"
                    borderRadius="500"
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
                    onClick={onClickHandler}
                  >
                    <Text
                      variant="gradient"
                      textTransform="none"
                      fontSize={"lg"}
                    >
                      Quick Enquiry
                    </Text>
                  </Button>
                </Box>
              </GridItem>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}

export default ExploreCourses;
