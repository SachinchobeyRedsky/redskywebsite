import React, { useState } from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { FaLongArrowAltRight, FaRegCalendarAlt } from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";

function BlogCard(props) {
  const blogImage = props.info?.match(/<img[^>]*src=["']([^"']+)/)?.[1];
  const blogDetail = props.info?.replace(/<img[^>]*>/g, "");
  const [isHovered, setIsHovered] = useState(false);
  const htmlContent = ReactHtmlParser(blogDetail);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <Box
      height={["340px", "340px", "480px", "480px", "480px"]}
      overflow="hidden"
      borderRadius=".675rem"
      bg="gray.800"
      boxShadow="0 0 20px black"
      transition="all 0.1s"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        height={["160px", "160px", "200px", "250px", "200px"]}
        overflow="hidden"
        m="4"
        borderRadius=".675rem"
      >
        {blogImage ? (
          <Image
            width="400px"
            height="380px"
            objectFit="cover"
            src={blogImage}
            alt="Blog Image"
            sx={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            decoding="async"
          />
        ) : (
          <Image
            width="400px"
            height="380px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            decoding="async"
          />
        )}
      </Box>

      <Box p="4" justifyContent="center">
        <Heading
          fontWeight="700"
          fontSize="22px"
          width="100%"
          noOfLines={[1, 2]}
          color="#faae12"
        >
          {props.blogTitle}
        </Heading>
        <Box
          color="#fff"
          width="100%"
          h="auto"
          mt="4"
          noOfLines={[1, 2, 2, 2, 3]}
        >
          <Text>{htmlContent[0].props.children}</Text>
        </Box>
        <Flex justifyContent="space-between" mt="2">
          <Flex alignItems="center">
            <Text mt="3">
              <FaRegCalendarAlt color="#fff" />
            </Text>
            <Text fontWeight="400" ml="2" mt="4" color="#fff">
              {props?.createdAt &&
                new Date(props?.createdAt.seconds * 1000).toLocaleDateString()}
            </Text>
          </Flex>

          <Flex alignItems="center">
            <Text
              fontWeight="600"
              textAlign="center"
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              pt={3}
            >
              {" "}
              Read More
            </Text>
            <Text ml="1" mt={3}>
              <FaLongArrowAltRight color="#faae12" />
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default BlogCard;
