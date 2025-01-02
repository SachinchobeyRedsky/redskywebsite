import React from "react";
import { Box, Text, Flex, chakra } from "@chakra-ui/react";

const DigiCard = ({ dignitariesDetails, animation, aboutUs, Dignitaries }) => {
  const { Zoom, Fade, Slidee } = animation;
  return (
    <Box
      as="section"
      p={["4", "4", "10", "20", "20"]}
      textAlign="center"
      bg="brand.black"
    >
      <Zoom>
        <Fade big>
          <Text
            as="h3"
            fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
            fontFamily="Raleway"
            fontWeight="extrabold"
            textAlign="center"
            color="brand.white"
            mb={14}
          >
            {aboutUs.ABOUTUS_PAGE_HEADING_ODIGNITARIES}{" "}
            <chakra.span
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
              fontFamily="Raleway"
              fontWeight="extrabold"
            >
              {aboutUs.BEHIND_REDSKY}
            </chakra.span>
          </Text>
        </Fade>
      </Zoom>

      <Slidee bottom cascade>
        <Fade big>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={["column", "column", "column", "row", "row"]}
          >
            {dignitariesDetails.map((data, key) => {
              return (
                <Dignitaries
                  key={`appl${key}`}
                  image={data.image}
                  name={data.name}
                  title={data.title}
                  desc={data.desc}
                />
              );
            })}
          </Flex>
        </Fade>
      </Slidee>
    </Box>
  );
};

export default DigiCard;
