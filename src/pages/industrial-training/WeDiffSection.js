import React from "react";
import { Box, Image } from "@chakra-ui/react";
// import { trainingtechData } from "../../constants/constants";

function WeDiffSection() {
  return (
    <Box
      // bgImage={`url(${"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2FbackgroundYPattrenWithoutHighlight.png?alt=media&token=d29e252b-c3fd-477a-bb11-527e3a87f539"})`}
      // bgRepeat="no-repeat"
      // bgSize="cover"
      // bgPosition="center"
      // py={["10", "10", "50", "50", "100px"]}
    >
      <Image
        src=
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2Fbackgrounds.png?alt=media&token=faa063e2-3e24-4e47-affe-5acf2f63086b"
        width="100%"
        alt="Image not found"
      />
      {/* <Box
        display="flex"
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <Box w={["100%", "100%", "100%", "50%", "50%"]}>
          <Box mb="6" display={["block", "block", "block", "none"]} px="6">
            <Text
              fontSize={["1xl", "1xl", "1xl", "2.6vw", "2.6vw"]}
              textAlign="center"
              color="yellow.400"
              lineHeight={1}
              fontWeight="bold"
            >
              Why Are We Different From Other
            </Text>
            <Text fontSize="xl" mt="2" textAlign="center">
              We offer the best IT training with real projects to help trainees
              kickstart their careers smoothly.
            </Text>
          </Box>
          <Grid
            templateColumns={["repeat(2, 1fr)"]}
            px={["0", "2", "10", "10", "60px"]}
          >
            {trainingtechData?.map((data, index) => {
              return (
                <GridItem key={index}>
                  <Flex alignItems="center" justifyContent="center">
                    <Image
                      src={data?.icon}
                      height="120px"
                      width="140px"
                      alt="icons"
                      objectFit="cover"
                    />
                    <Box ml={["2", "2", "2", "2", "2"]}>
                      <Text
                        fontSize={["sm", "sm", "md", "xl"]}
                        fontWeight="bold"
                      >
                        {data?.name}
                      </Text>
                    </Box>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Box
          w={["100%", "100%", "100%", "50%", "50%"]}
        >
          <Box mb="6" display={["none", "none", "none", "block"]}>
            <Text
              fontSize={["2vw", "2vw", "2vw", "2.6vw", "2.6vw"]}
              color="yellow.400"
              lineHeight={1}
              fontWeight="bold"
            >
              Why Are We Different From Other
            </Text>
            <Text fontSize="xl" mt="2">
              We offer the best IT training with real projects to help trainees
              kickstart their careers smoothly.
            </Text>
          </Box>
          <Box
            overflow="hidden"
            display={{ base: "none", lg: "block" }}
            width={["600px", "600px", "600px", "400px", "600px"]}
            h={["", "", "", "", "45vh"]}
            borderRadius="20px"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fimagesextra%2Fpeople%2FWhatsApp%20Image%202024-02-05%20at%2017.52.36%20(3).jpeg?alt=media&token=5441679b-0770-4781-8c3c-3c8c9ddbfef6"
              width="100%"
            />
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
}

export default WeDiffSection;
