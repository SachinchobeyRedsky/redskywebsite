import React from "react";
import { Flex, Box, Heading, Text, Image, ModalHeader } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RenderCarousalNavigationButton from "../../shared/RenderCarousalNavigationButton";
import { RESPONSIVE } from "../../constants/constants";

const featuresBoxStyles = {
  height: "30vh",
  width: "full",
  px: "20px",
  display: "flex",
};

function FeaturesCards({ techFeatures, title }) {
  return (
    <Box sx={featuresBoxStyles} my="20">
      <AliceCarousel
        responsive={RESPONSIVE}
        disableDotsControls
        autoPlay={true}
        autoPlayInterval={2000}
        infinite
        renderNextButton={() => (
          <RenderCarousalNavigationButton
            move="next"
            width={10}
            height={10}
            right="-30px"
            bottom="48%"
            color="yellow.400"
          />
        )}
        renderPrevButton={() => (
          <RenderCarousalNavigationButton
            move="back"
            width={10}
            height={10}
            left="-30px"
            bottom="48%"
            color="yellow.400"
          />
        )}
      >
        {techFeatures?.map((item, idx) => (
          <Flex
            p={[3, 3, 3, 4, 4]}
            m={[1, 1, 1, 4, 4]}
            h={["240px", "230px", "230px", "210px", "210px"]}
            background="rgba(11, 11, 13, 0.712)"
            borderRadius="8px"
            boxShadow="0 0 10px  rgba(255, 174, 0, 0.6)"
            transition="all 0.1s"
            direction="column"
            key={idx + item}
          >
            <Flex
              align="center"
              mb="2"
              justify={["center", "center", "center", "left", "left"]}
            >
              <Image
                width={title === "Digital Marketing" ? "50px" : "50px"}
                height={title === "Digital Marketing" ? "50px" : "50px"}
                mr="3"
                src={
                  title === "Digital Marketing"
                    ? item.featureIcon
                    : item.featureIcon
                }
                alt="item  featureIcon"
              />
              <Text as="h6" fontSize="lg" fontWeight="semibold">
                {item.feature}
              </Text>
            </Flex>
            <Text color="#ffffff" textAlign="justify" fontSize="sm">
              {item.featureContent}
            </Text>
          </Flex>
        ))}
      </AliceCarousel>
    </Box>
  );
}

export default FeaturesCards;
