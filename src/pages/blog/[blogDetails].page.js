import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Heading,
  Flex,
  Icon,
  Spinner,
  useToast,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";
import {
  collection,
  getDocs,
  where,
  orderBy,
  query as firebaseQuery,
} from "firebase/firestore";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { db } from "../../../firebase.config";
import BlogDetailCards from "../../shared/BlogDetailCards";
import Head from "next/head";

function BlogDetails() {
  const toast = useToast();
  const router = useRouter();
  const blogCollectionRef = collection(db, "blogData");
  const [blogData, setBlogData] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const titleWithoutHyphens =
    router?.query?.blogDetails?.replace(/[-–]/g, " ") || "";
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      position: "top",
      title: "Link copied to clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  const socialIcons = [
    {
      icon: FaTwitter,
      link: `https://twitter.com/share?url=${shareUrl}`,
    },
    {
      icon: FaFacebook,
      link: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
    {
      icon: FaLinkedin,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    },
    {
      icon: FaWhatsapp,
      link: `https://api.whatsapp.com/send?text=${shareUrl}`,
    },
    {
      icon: FaLink,
      onClick: handleCopyLink,
    },
  ];
  const getBlogData = async () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const queriedBlogData = await getDocs(blogCollectionRef);
    if (queriedBlogData.empty) {
      return;
    }
    let newBlog = {};
    const newData = queriedBlogData.forEach((doc) => {
      if (doc.data().title.replace(/-/g, " ") == titleWithoutHyphens) {
        newBlog = { ...doc.data(), id: doc.id };
      }
    });
    setBlogData(newBlog);
  };

  const getCatBlogs = async () => {
    const blogsData = [];
    let queriedBlogData;
    // if (router?.query?.category) {
      queriedBlogData = firebaseQuery(
        blogCollectionRef,
        // where("category", "==", router?.query?.category),
        orderBy("createdAt", "desc")
      );
      const queriedBlogsSnapshot = await getDocs(queriedBlogData);
      queriedBlogsSnapshot.forEach((doc) => {
        if (doc.data().title !== titleWithoutHyphens) {
          blogsData.push({ ...doc.data(), id: doc.id });
        }
      });
      setBlogs(blogsData);
    // }
  };
  useEffect(() => {
    getBlogData();
    getCatBlogs();
  }, [titleWithoutHyphens, router?.query?.category]);

  const createdAt = blogData?.createdAt;
  const date = createdAt ? new Date(createdAt.seconds * 1000) : null;
  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date)
    : null;

  const blogOnClick = async (blog) => {
    await router.push(`/blog/${blog?.title}`);
    const updatedBlogs = [...blogs];
    setBlogs(updatedBlogs);
  };

  const metaData = blogData?.metaTags || [];

  return (
    <>
      <Head>
        <title>{blogData?.title}</title>
        {metaData.map((metaTag, index) => (
          <meta
            key={index} // Unique key for each meta tag
            name={metaTag.name} // Set the name attribute
            content={metaTag.content} // Set the content attribute
          />
        ))}

        {/* Dynamically set the canonical URL */}
        <link
          rel="canonical"
          href={`https://redskyadvancesolutions.com/blog/${titleWithoutHyphens}`}
        />
      </Head>
      <Box bg="white" pb={["20", "20", "4", "4", "4"]} color="black">
        {loading ? (
          <Box p="80">
            <Box pb="40" textAlign="center" overflow="hidden">
              <Spinner
                thickness="5px"
                speed="0.65s"
                color="#faae12"
                size="xl"
              />
            </Box>
          </Box>
        ) : (
          <Flex direction={["column", "column", "row", "row", "row"]}>
            <Box
              w={["100%", "100%", "70%", "70%", "70%"]}
              h={["auto", "auto", "100vh", "100vh", "100vh"]}
              py={["4", "4", "10", "10", "10"]}
              px={["10", "10", "20", "20", "20"]}
              overflow="scroll"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Box>
                <Link href="/blog" legacyBehavior>
                  <a>
                    <ArrowBackIcon w={8} h={8} color="#101114" zIndex="9999" />
                  </a>
                </Link>
              </Box>
              <Box
                display="flex"
                flexDirection={["column", "column", "row", "row", "row"]}
                fontSize="14px"
                py="6"
                justifyContent="space-between"
              >
                <Flex>
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={blogData?.authImg}
                    alt="Dan Abramov"
                    objectFit="contain"
                    bg="#101114"
                  />
                  <Box>
                    <Text fontWeight="600" px="4">
                      {blogData.userName}
                    </Text>
                    <Text fontWeight="400" px="4" width="100%">
                      {formattedDate}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap="4" mt={["6", "6", "0", "0", "0"]}>
                  {socialIcons.map((item, index) => (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      <Box
                        bg="white"
                        borderRadius="100px"
                        boxShadow="0 0 10px #101114"
                        h={["12", "12", "14", "14", "10"]}
                        w={["12", "12", "14", "14", "10"]}
                        alignContent="center"
                        p={["2", "2", "3", "3", "3"]}
                        _hover={{ backgroundColor: "yellow.400" }}
                        _focus={{ border: "none", backgroundColor: "none" }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon
                          as={item.icon}
                          w={5}
                          h={5}
                          cursor="pointer"
                          onClick={item.onClick}
                        />
                      </Box>
                    </a>
                  ))}
                </Flex>
              </Box>
              <Heading as="h1" fontWeight="800" fontSize="32px" width="80%" my="2">
                {blogData?.title}
              </Heading>

              <Box
                dangerouslySetInnerHTML={{
                  __html: blogData?.newObj,
                }}
                sx={{
                  "& img": {
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                  "& h1, & h2, & h3, & h4, & h5, & h6": {
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                }}
              ></Box>
            </Box>

            <Box
              w={["100%", "100%", "30%", "30%", "30%"]}
              h={["450", "450", "650", "650", "750"]}
              textAlign="center"
              overflow="hidden"
              py={["4", "4", "10", "10", "10"]}
              px={["10", "10", "0", "0", "0"]}
              pr={["10", "10", "20", "20", "20"]}
              fontSize="14px"
              color="black"
            >
              <Box display={["none", "none", "flex", "flex", "flex"]} flexDirection="column" alignItems="center" >
              <Image
                  borderRadius="full"
                  boxSize="60px"
                  src={blogData?.authImg}
                  alt="Dan Abramov"
                  objectFit="contain"
                  bg="#101114"
                />
                <Text fontWeight="600" pt="2">
                  {blogData.userName}
                </Text>
              </Box>
              <Box
                mt="4"
                pb="8"
                h="100vh"
                px="2"
                sx={{
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                overflowY="scroll"
              >
                <Text fontSize="md" fontWeight="bold">
                  More Blogs {router?.query?.category}
                </Text>
                {blogs?.slice(0, 3).map((blog, index) => (
                  <Box
                    mt="2"
                    key={index}
                    onClick={() => {
                      blogOnClick(blog);
                    }}
                    cursor="pointer"
                  >
                    <BlogDetailCards data={blog} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default BlogDetails;
