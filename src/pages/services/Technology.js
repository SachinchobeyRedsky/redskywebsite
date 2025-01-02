import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Technology = ({
  service,
  servicesData,
  animation,
  webimage,
  Servicegive,
}) => {
  const { Fade, Zoom } = animation;
  return (
    <Box as="section" bg="brand.black">
      {/* <Fade big> */}
        <Box
          py={["10", "10", "50", "50", "40px"]}
          minHeight="220vh"
          background={`linear-gradient(to right, #101114de,#101114d9),url(${webimage.background.service.service3})`}
          backgroundColor="brand.black"
          backgroundSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          overflowX="hidden"
          display="flex"
          flexDirection="column"
        >
          <Box textAlign="center" >
            <Zoom>
              <Fade big>
                <Box mb="20">
                  <Text
                    as="h2"
                    color="white"
                    fontSize={["3xl", "3xl", "4xl", "5xl", "6xl"]}
                    textTransform="uppercase"
                    fontWeight="extrabold"
                    p="0"
                    m="0"
                    display={"inline"}
                  >
                    {service.SERVICES_WE}
                  </Text>
                  <Text
                    as="h2"
                    bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                    bgClip="text"
                    fontSize={["3xl", "3xl", "4xl", "5xl", "6xl"]}
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    display={["block", "block", "inline", "inline", "inline"]}
                    ml={["2", "2", "2", "2", "4"]}
                  >
                    {service.PROVIDE}
                  </Text>
                </Box>
              </Fade>
            </Zoom>
          </Box>
          <Box
            overflow="hidden"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            flex="1"
          >
            {servicesData?.map((services, index) => {
              return (
                <Servicegive
                  key={index}
                  main={services?.main}
                  main2={services?.main2}
                  image={services?.image}
                  servicesDatatext={services?.servicesDatatext}
                  text={services?.text}
                  buttonName={services?.buttontext}
                  buttonLink={services?.buttonLink}
                />
              );
            })}
          </Box>
        </Box>
      {/* </Fade> */}
    </Box>
  );
};

export default Technology;
