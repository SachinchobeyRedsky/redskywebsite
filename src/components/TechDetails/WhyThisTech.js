import {
  Heading,
  Box,
  Text,
  Flex,
  ListItem,
  UnorderedList,
  Icon,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const WhyThisTech = ({
  flexDirection,
  topicContent,
  topicImg,
  title1,
  title2,
  titleContent,
  sectionTitle,
  textList,
  textHeading,
  textHeading2,
  padding,
  heights,
  title,
}) => {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
  };
  return (
    <Box
      px={["20px", "20px", "20px", "50px", "50px"]}
      mb="16"
    >
      {title1 && title2 && (
        <Box
          display="flex"
          alignItems="center"
          my={titleContent ? 0 : "10"}
          justifyContent="center"
        >
          <Box textAlign="Center" w="70%" mt="10">
            <Heading
              color="white"
              textAlign="center"
              as="h3"
              fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
              display={["block", "block", "block", "inline", "inline"]}
              mb={[2, 2, 2, "", ""]}
            >
              {title1}
            </Heading>
            <chakra.span
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              color="yellow.400"
              textAlign="center"
              as="h3"
              ml="2"
              fontWeight="800"
              bgClip="text"
              display={["block", "block", "block", "inline", "inline"]}
              fontSize={["1xl", "1xl", "3xl", "3xl", "3xl"]}
              mb={[2, 2, 2, "", ""]}
            >
              {title2}
            </chakra.span>
          </Box>
        </Box>
      )}
      {titleContent && (
        <Text fontSize="md" mb="10" textAlign="center">
          {titleContent}
        </Text>
      )}
      <Flex
        w="full"
        h={[
          "full",
          "full",
          "full",
          title === "Angular" ? heights : "50vh",
          title === "Angular" ? heights : "50vh",
        ]}
        flexDir={[
          "column",
          "column",
          "column",
          flexDirection || "row",
          flexDirection || "row",
        ]}
      >
        <Flex
          w={["full", "full", "full", "55%", "55%"]}
          pl={["", "", "", padding ? padding : "4", padding ? padding : "4"]}
          flexDir="column"
          h="full"
          justifyContent="center"
        >
          <Heading
            color="yellow.400"
            fontSize="2xl"
            mb={[1, 1, 1, 5, 5]}
            as={"h4"}
          >
            {" "}
            {sectionTitle}
          </Heading>
          {topicContent && (
            <Text
              fontSize="xl"
              textAlign={["justify", "justify", "justify", "", ""]}
              fontWeight="bold"
              w="90%"
              mb="2"
            >
              {topicContent ||
                `Lorem ipsum dolor sit amet. A voluptatem possimus qui beatae omnis et
          praesentium dolores vel dolores dolorum. Eum doloribus sint sed
          facilis nobis aut eius nostrum non accusamus modi. Vel facilis dolorem
          non quae illum sit adipisci repudiandae aut quod eligendi. Non animi
          molestiae et voluptatibus quae in Quis aperiam et soluta dolorum sit
          illo atque non deleniti dolorum 33 quaerat sint. Et molestiae pariatur
          dolor unde sit explicabo expedita ab iste neque ut excepturi
          officiis quidem ad rerum velit ut repellat tempora est ipsum aliquam. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`}
            </Text>
          )}
          {textHeading && (
            <Text
              fontSize="xl"
              textAlign={["justify", "justify", "justify", "", ""]}
              fontWeight="semibold"
              w="90%"
            >
              {textHeading}
            </Text>
          )}

          <UnorderedList
            listStyleType={["none", "none", "none", "none", "none"]}
            w="95%"
            ml={["5vw", "5vw", "10px", "5px", "5px"]}
            textAlign={["left", "left", "left", , "left"]}
            color="white"
          >
            {textList?.map((listItem, key) => (
              <ListItem
                key={`whyl${key}`}
                fontSize={["medium", "sm", ",sm"]}
                fontWeight="regular"
                my={2}
                ml={["0", "5", "5"]}
              >
                <Flex>
                  <Icon
                    as={FaLocationArrow}
                    w={3}
                    h={3}
                    color="#faae12"
                    marginRight={2}
                    mt={1}
                    style={{ transform: "rotate(45deg)" }}
                  />{" "}
                  <Text>{listItem}</Text>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>
          {textHeading2 && (
            <Text
              fontSize="md"
              textAlign={["justify", "justify", "justify", "", ""]}
            >
              {textHeading2}
            </Text>
          )}
        </Flex>
        <Flex
          justify="center"
          align="center"
          w={["full", "full", "full", "45%", "45%"]}
        >
          <Box width="100%">
            {/* {topicImg && ( */}
              <Image
                src={topicImg}
                width={"900px"}
                height={"550px"}
                style={imageStyle}
                overflow="hidden"
                alt="Dan Abramov"
                loading="lazy"
              />
            {/* )} */}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default WhyThisTech;
