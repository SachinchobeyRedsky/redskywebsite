import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import webimages from "../../constants/images";
import ContactUsButton from "../../shared/ContactUsButton";
// import Image from "next/image";

function Landing({ heading, landingText, landingImg }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const onClickHandler = () => {
    router.push("/contact-us");
  };
  return (
    <>
      {loading ? (
        <Box p="80">
          <Box pb="40" textAlign="center" overflow="hidden">
            <Spinner thickness="5px" speed="0.65s" color="#faae12" size="xl" />
          </Box>
        </Box>
      ) : (
        <Box
          as="main"
          bg={`linear-gradient(to right, #101114a0,#101114a0),url(${webimages.publicimages.carrierBack})`}
          backgroundRepeat="no-repeat"
          fontFamily="Raleway"
          backgroundPosition="center"
          backgroundColor="brand.black"
          display="flex"
          justifyContent="center"
          px={["10", "10", "20", "20", "20"]}
          alignItems="center"
          h={["", "", "100vh", "100vh", "85vh"]}
          mt={["20", "20", "20", "0", "0"]}
          mb="20"
        >
          <Flex
            flexDirection={["column", "column", "column", "row", "row"]}
            h={["100vh", "100vh", "100vh", "80vh", "80vh"]}
            // mt="20"
            justifyContent="space-between"
          >
            <Box
              w={["100%", "100%", "100%", "60%", "60%"]}
              px="2"
              alignSelf="center"
              lineHeight={1.2}
            >
              <Text
                as="h1"
                className="typewrtier"
                fontSize={["2xl", "2xl", "3xl", "3xl", "4xl"]}
                fontFamily="Raleway"
                fontWeight="ultrabold"
                textAlign="left"
                color="yellow.400"
                mt="6"
              >
                {heading}
              </Text>
              <Box my="4">
                <Text
                  ml={["0"]}
                  fontWeight="medium"
                  lineHeight="1.5"
                  fontFamily="Raleway"
                  fontSize={["xl", "xl", "xl", "1xl", "1.3vw"]}
                  w="100%"
                  zIndex={34}
                >
                  {landingText}
                </Text>
              </Box>
              <ContactUsButton />
            </Box>
            <Box
              w={["100%", "100%", "100%", "40%", "40%"]}
              alignSelf="center"
              display="flex"
              alignItems="flex-end"
              mt={["4", "4", "0", "0", "0"]}
            >
              <Image
                src={landingImg}
                alt="landing Img"
                ml={heading === "Web Development" ? "" : ""}
                w={heading === "Mobile Application" ? "95%" : "100%"}
                loading="lazy"
                decoding="async"
              />
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Landing;
