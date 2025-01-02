import React, { useState } from "react";
import { Box, Grid, Text, chakra } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query as firebaseQuery,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../../firebase.config";
import BlogContainer from "../../pages/blog/BlogContainer";
import { home } from "../../constants/constants";

function BlogSection() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const fetchLatestBlogs = async () => {
    const blogsData = [];
    let queriedBlogData;
    try {
      queriedBlogData = firebaseQuery(
        collection(db, "blogData"),
        orderBy("createdAt", "desc"),
        limit(3)
      );

      const queriedBlogsSnapshot = await getDocs(queriedBlogData);

      queriedBlogsSnapshot.forEach((doc) => {
        blogsData.push({ ...doc.data(), id: doc.id });
      });
      setBlogs([...blogsData]);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  };

  const getBlogsData = async () => {
    const blogsData = [];
    let queriedBlogData;
    queriedBlogData = firebaseQuery(
      collection(db, "blogData"),
      orderBy("createdAt", "desc"),
      limit(3)
    );
    const queriedBlogsSnapshot = await getDocs(queriedBlogData);
    // setLastBlog(
    //   queriedBlogsSnapshot.docs[queriedBlogsSnapshot.docs.length - 1]
    // );
    queriedBlogsSnapshot.forEach((doc) => {
      blogsData.push({ ...doc.data(), id: doc.id });
    });
    setBlogs([...blogsData]);
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  return (
    <Box
      as="section"
      py={["10", "10", "50", "50", "80px"]}
      color="brand.white"
      alignItems="center"
    >
      <Text
        textAlign="center"
        color="brand.white"
        textTransform="uppercase"
        fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
        fontFamily="Raleway"
        fontWeight="extrabold"
        px={["8", "8", "0", "0", "0"]}
        ml={2}
        mb="10"
      >
        {home.LATEST}
        <chakra.span
          bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
          bgClip="text"
          fontFamily="Raleway"
          fontWeight="extrabold"
          ml="2"
        >
          {home.BLOG}
        </chakra.span>{" "}
      </Text>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={4}
      >
        {" "}
        {blogs.map((data, index) => (
          <Box cursor="pointer" key={index} w="100%">
            <BlogContainer
              key={index}
              data={data}
              index={index}
              push={router.push}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default BlogSection;
