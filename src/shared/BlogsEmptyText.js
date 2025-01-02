import React from "react";
import { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";
import RoundButton from "./Button";

function BlogsEmptyText({ TitleText }) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/blog/addBlog");
  };
  return (
    <>
      <Box
        mt="60"
        mb="10"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text
          mb="6"
          fontWeight="600"
          fontSize="3xl"
          color="white"
          lineHeight="8"
        >
          {TitleText}
        </Text>
        <RoundButton onClickHandler={onClickHandler} text="Get started" />
      </Box>
    </>
  );
}

export default BlogsEmptyText;
