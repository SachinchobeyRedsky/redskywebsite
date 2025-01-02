import React from "react";
import { Box, Text } from "@chakra-ui/react";

function BlogDetailCards({ data }) {
  const blogDetail = data.newObj.replace(/<img[^>]*>/g, "");
  return (
    <>
      <Box
        p="4"
        borderRadius="16px"
        boxShadow="0 2px 5px 1px rgb(64 60 67 / 16%)"
      >
        <Text fontSize="lg" fontWeight="extrabold">
          {data?.title}
        </Text>
        <Box
          width="100%"
          noOfLines={[1, 3]}
          dangerouslySetInnerHTML={{ __html: blogDetail }}
          fontSize="12px"
        />
      </Box>
    </>
  );
}

export default BlogDetailCards;
