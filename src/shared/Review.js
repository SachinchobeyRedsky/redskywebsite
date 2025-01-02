import React from 'react';
import { Text, Box, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// animations
// import Zoom from "react-reveal/Zoom";
const ReviewStar = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon as={FaStar} key={i} w="5" h="5" color="#f5af19" />);
  }

  if (hasHalfStar) {
    stars.push(
      <Icon as={FaStarHalfAlt} key={stars.length} w="5" h="5" color="#f5af19" />
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Icon as={FaStar} key={stars.length + i} w="5" h="5" color="#f5af19" />
    );
  }
  return (
    <Box display="flex" flexDirection="row" gap="2" my="4">
      {stars}
    </Box>
  );
};

const Review =  React.memo((props) => {
  return (
    <Box bg="none" userSelect="none" bgPosition="bottom" color="brand.white" textTransform="capitalize">
      {/* <Zoom> */}
        <Box bgPosition="bottom" color="brand.white">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={[2, 2, 2, 4, 4]}
            >
              <Box
                h={["100%", "100%", "100%", "100%", "100%"]}
                w={["100%", "100%", "40%", "40%", "15%"]}
                mt="3"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems={["center", "center", "center", "center", "center"]}
              >
                <Box
                  position="relative"
                  width={["120px", "120px", "140px", "150px", "150px"]}
                  height={["120px", "120px", "140px", "150px", "150px"]}
                >
                  <Box
                    h="100%"
                    width="100%"
                    position="absolute"
                    borderRadius="5000px"
                    // display="flex"
                    // justifyContent="center"
                    // alignItems="center"
                    right={1}
                    top={1}
                    bg={"yellow.100"}
                  />
                    {/* d
                  </Box> */}
                  <Box
                    h="100%"
                    minH="100%"
                    width="100%"
                    minW="100%"
                    position="relative"
                    borderRadius="5000px"
                    overflow="hidden"
                  >
                    <Image
                      src={props.image}
                      alt={`Image of ${props?.name}`}
                      objectFit="cover"
                      layout="fill"
                      loading="lazy"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                w={["100%","100%","60%","60%","60%"]}
                h="100%"
                pt={4}
                px="4"
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                flexDirection="column"
                position="relative"
              >
                <Box
                  fontWeight="regular"
                  textAlign="center"
                >
                  <ReviewStar rating={props?.index % 2 === 0 ? 5 : 4.5} />
                  <Box fontSize={["0.8rem", "0.8rem", "0.8rem", "xl"]}>
                    <Text
                      textAlign="justify"
                      lineHeight={1.2}
                      className="add-quotes"
                    >
                      {props.desc}
                    </Text>
                  </Box>
                </Box>
                <Box my="1.5" bg="yellow.700" w="90%" minHeight="0.1rem" />
                <Box width="100%" alignItems="center">
                  <Box
                    width={"100%"}
                    textAlign={["center", "center", "center", "left", "left"]}
                  >
                    <Text
                      display={[
                        "block",
                        "inline-block",
                        "inline-block",
                        "inline-block",
                      ]}
                      fontFamily="Pacifico"
                      fontSize={[
                        "1.2rem",
                        "1.2rem",
                        "1.2rem",
                        "1.2rem",
                        "1.5rem",
                      ]}
                      textAlign={["center", "center", "left"]}
                    >
                      {props.name}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          {/* </Box> */}
        </Box>
      {/* </Zoom> */}
    </Box>
  );
});

export default Review;
