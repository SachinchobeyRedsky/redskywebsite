import React from "react";
import { Box, Text, Flex, Divider, Image, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const ReviewStar = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon as={FaStar} key={i} w="3" h="3" color="#f5af19" />);
  }

  if (hasHalfStar) {
    stars.push(
      <Icon as={FaStarHalfAlt} key={stars.length} w="3" h="3" color="#f5af19" />
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Icon as={FaStar} key={stars.length + i} w="3" h="3" color="#f5af19" />
    );
  }
  return (
    <Box display="flex" flexDirection="row" gap="1" my="2">
      {stars}
    </Box>
  );
};
function GalleryCard({ allData,index }) {
  return (
    <>
      <Box
        outline="none"
        _active={{
          outline: "none",
          border: "none",
        }}
        _focus={{ border: "none", outline: "none" }}
        userSelect="none"
        p={3}
      >
        <Box
          boxShadow="0 0 20px  rgba(255, 174, 0, 0.3)"
          transition="all 0.1s"
          overflow="hidden"
          height={["510px", "500px", "350px", "350px", "300px"]}
          display="flex"
          flexDirection={["column", "column", "row", "row", "row"]}
        >
          <Box
            w={["100%", "90%", "100%", "50%", "50%"]}
            h={["50%", "80%", "100%", "100%", "100%"]}
            bg="secondary.300"
          >
            <Image
              src={allData?.image}
              w="100%"
              h="100%"
              objectFit={["contain", "contain", "contain", "contain", "fill"]}
              alt="gallery images"
            />
          </Box>
          <Box
            textAlign="left"
            p="4"
            pl={["4", "4", "8", "8", "8"]}
            w={["100%", "90%", "50%", "50%", "50%"]}
            alignItems="flex-start"
          >
            <Flex justifyContent="space-between">
              <Box>
              <Text
              fontSize={["xl", "xl", "xl", "xl", "xl"]}
              fontWeight="ultrabold"
            >
              {allData?.name}
            </Text>
            <ReviewStar rating={index % 2 === 0 ? 5 : 4.5} />
              </Box>
              <Image src="https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Flogos%2FIllustration-of-Google-icon-on-transparent-background-PNG%201.png?alt=media&token=f0b89aee-aa70-47ed-b500-200c997b12f7"
             height="30px" width="30px" alt="Image not found" />
            </Flex>
            
           
            <Divider my="2" borderColor="yellow.600" />
            <Text
              bgGradient="linear(to-r, yellow.200, yellow.300)"
              bgClip="text"
            >
              {allData.desc}
            </Text>

            {allData.placedAt && (
              <Text py="2"> Placed at : {allData.placedAt}</Text>
            )}

            {allData.review && (
              <Box
                h="100%"
                pt="2"
                bg="none"
                alignItems="left"
                position="relative"
              >
                <Box bg="none" fontWeight="regular">
                  <Box
                    fontSize={["0.8rem", "0.8rem", "0.8rem", "85%"]}
                    display="inline"
                  >
                    <Box display="inline" noOfLines={[1, 7]}>
                      {allData.review}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default GalleryCard;
