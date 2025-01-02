import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Heading, Flex, Text, Icon, Divider } from "@chakra-ui/react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FiHome, FiPhone, FiMail } from "react-icons/fi";
import { footer, HEADER } from "../../constants/constants";
import Slidee from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import RoundButton from "../../shared/Button";
import webimages from "../../constants/images";
import SocialMediaLinksComponent from "../../shared/SocialMediaLinksComponent";

export const config = {
  unstable_runtimeJs: false,
};

function Footer() {
  const router = useRouter();
  const visits = [
    " (+91) 9878788723, 9878788729",
    "info@redskyadvancesolutions.com",
    "#607, D-107, Phase-7, Industrial Area",
    " Mohali Punjab (India)",
  ];

  return (
    <Box as="footer" bg="brand.black" overflowY="hidden">
      <Fade big>
        <Slidee bottom>
          <Box
            bgGradient="linear(to-t, rgba(255, 174, 0, 0.3) , #101114a4)"
            w="100%"
            pl={["5", "5", "0", "0", "5"]}
            py={[8, 10, 4, 4, 4]}
            color="white"
            height={["full", "full", "full", "50vh", "50vh"]}
            display="flex"
            flexDirection={["column", "column", "column"]}
            justifyContent="center"
          >
            <Box
              display="flex"
              flexDirection={["column", "column", "column", "row", "row"]}
              p={["5px", "30px", "30px", "30px", "10px"]}
              px={["10px", "40px", "80px"]}
            >
              <Box w="100%" pl={["0", "0", "0", "5rem", "5rem"]} color="white">
                <Image
                  src={`${webimages.headerLogo.logomain}`}
                  alt="Redsky logo"
                  width="200px"
                  height="60px"
                  loading="lazy"
                  decoding="async"
                />
                <Flex direction="column">
                  <Text fontSize="xl" mb="6" w="80%">
                    As one of India's leading app development agencies, with
                    in-house app developers, designers and mobile strategists,
                    we help you turn mobile concepts into reliable and robust
                    app solutions.
                  </Text>
                  <SocialMediaLinksComponent />
                </Flex>
              </Box>

              <Box
                w={["100%", "100%", "40%", "43%", "43%"]}
                color="white"
                mt={["10", "10", "10", "0"]}
                h="full"
                px={["0", "0", 0, "1rem", "1rem"]}
                textAlign="left"
              >
                <Heading
                  // as="h5"
                  fontSize={"2xl"}
                  fontFamily="Raleway,100,200,300,400,500,600,700,800"
                  fontWeight={700}
                >
                  {footer.FOOTER_PAGE_HEADING_EXPLORE}{" "}
                </Heading>
                {/* <Divider borderColor="white" borderWidth="1.5px" /> */}
                <Box
                  as="nav"
                  pt={5}
                  color="white"
                  display="flex"
                  flexDirection="column"
                  h={["200px", "200px", "full", "full", "full"]}
                >
                  <Box display={["none", "none", "block", "block", "block"]}>
                    {HEADER.map((_f, i) => (
                      <Box mb={2} key={i + "footer"}>
                        <Text
                          key={i + "footer"}
                          fontFamily="Raleway"
                          fontSize={["md", "md", "md", "md", "md"]}
                          fontWeight="bold"
                          className={
                            router.pathname === _f.path ? "activeFooter" : ""
                          }
                          display="inline"
                          _hover={{ color: "yellow.100" }}
                        >
                          <Link href={_f.path}>
                            <a>{_f.name.toUpperCase()}</a>
                          </Link>
                        </Text>
                      </Box>
                    ))}
                  </Box>

                  <Box display={["block", "block", "none", "none", "none"]}>
                    <Flex direction="row" gap="16">
                      <Box mr={{ base: 0, md: 4 }}>
                        {HEADER.slice(0, 4).map((_f, i) => (
                          <Box mb={2} key={i + "footer"}>
                            <Text
                              key={i + "footer"}
                              fontFamily="Raleway"
                              fontSize={["md", "md", "md", "md", "md"]}
                              fontWeight="bold"
                              className={
                                router.pathname === _f.path ? "active" : ""
                              }
                              display="inline"
                              _hover={{ color: "black" }}
                            >
                              <Link href={_f.path}>
                                <a>{_f.name.toUpperCase()}</a>
                              </Link>
                            </Text>
                          </Box>
                        ))}
                      </Box>
                      <Box>
                        {HEADER.slice(4, 8).map((_f, i) => (
                          <Box mb={2} key={i + "footer"}>
                            <Text
                              key={i + "footer"}
                              fontFamily="Raleway"
                              fontSize={["md", "md", "md", "md", "md"]}
                              className={
                                router.pathname === _f.path
                                  ? "activeFooter"
                                  : ""
                              }
                              display="inline"
                              _hover={{ color: "black" }}
                            >
                              <Link href={_f.path}>
                                <a>{_f.name.toUpperCase()}</a>
                              </Link>
                            </Text>
                          </Box>
                        ))}
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>

              <Box
                w="100%"
                pl={["0", "0", "0", "8rem", "8rem"]}
                color="white"
                h="full"
              >
                <Heading
                  // as="h6"
                  fontSize={"2xl"}
                  fontFamily="Raleway,100,200,300,400,500,600,700,800"
                  fontWeight={700}
                >
                  {" "}
                  {footer.FOOTER_PAGE_HEADING_SOCIAL}{" "}
                </Heading>
                <Box w="100%" pt={5} color="white" h="full">
                  <Box
                    w="100%"
                    pt={0}
                    color="white"
                    h="full"
                    mr={["", "4rem", "30px", ""]}
                  >
                    {visits.map((visit, key) => (
                      <Box
                        width="100%"
                        display="flex"
                        alignItems="center"
                        flexWrap="wrap"
                        justifyContent="center"
                      >
                        <Text
                          mb={3}
                          width="100%"
                          key={`visitl${key}`}
                          fontFamily="Raleway"
                          fontSize={["lg", "lg", "lg", "lg", "md"]}
                          fontWeight="bold"
                          display="flex"
                          alignItems="center"
                        >
                          {" "}
                          {key == 0 && (
                            <FiPhone style={{ marginRight: "0.8rem" }} />
                          )}
                          {key == 1 && (
                            <FiMail style={{ marginRight: "0.8rem" }} />
                          )}
                          {key == 2 && (
                            <FiHome style={{ marginRight: "0.8rem" }} />
                          )}
                          {visit}
                        </Text>
                      </Box>
                    ))}

                    <Text
                      mt={8}
                      fontSize={["lg", "lg", "xl", "xl", "1rem"]}
                      fontWeight="bold"
                      fontFamily="Raleway"
                    >
                      © Redsky Advance Solutions 2024
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Slidee>
      </Fade>
    </Box>
  );
}

export default Footer;
