import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Grid,
  Flex,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query as firebaseQuery,
  startAfter,
  where,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { db } from "../../../firebase.config";
import webimages from "../../constants/images";
import { blogConstant } from "../../constants/constants";
import { BLOG_CATEGORIES } from "../../constants/constants";
import FooterCard from "../../shared/FooterCard.js";
import Head from "next/head.js";
const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), {});
const Landing = dynamic(() => import("./Landing.js"), {});
const Login = dynamic(() => import("../../components/Login/Login"), {});
const BlogContainer = dynamic(() => import("./BlogContainer"), {});
// const MenuItems = dynamic(() => import("../../shared/MenuItems"), {});
const Pagination = dynamic(() => import("../../shared/Pagination"), {});

const BLOG_PER_PAGE = 6;
const VISIBLE_PAGES = 4;

function Blog() {
  const [checkUser, setCheckUser] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [lastBlog, setLastBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const [mainLoading, setMainLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [isTabSelected, setIsTabSelected] = useState(false);
  const [selectedQueryKey, setSelectedQueryKey] = useState("");
  const [show, setShow] = useState(false);
  const [allBlogCounter, setAllBlogCounter] = useState({});
  const [currentPageBlogs, setCurrentPageBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  // firestore collection refs
  const blogCollectionRef = collection(db, "blogData");
  const blogsCounterRef = doc(db, "blogSettings", "blogs-counter");
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const auth = getAuth();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();


  useEffect(() => {
    const q = firebaseQuery(collection(db, "categories"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedCategories = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setCategories(fetchedCategories.reverse());
    });
    return unsubscribe;
  }, []);



  const getBlogsData = async (limitValue, startingPoint) => {
    const blogsData = [];
    let queriedBlogData;
    if (!startingPoint) {
      queriedBlogData = firebaseQuery(
        blogCollectionRef,
        orderBy("createdAt", "desc"),
        limit(limitValue)
      );
    } else {
      queriedBlogData = firebaseQuery(
        blogCollectionRef,
        orderBy("createdAt", "desc"),
        limit(limitValue),
        startAfter(startingPoint)
      );
    }
    const queriedBlogsSnapshot = await getDocs(queriedBlogData);
    setLastBlog(
      queriedBlogsSnapshot.docs[queriedBlogsSnapshot.docs.length - 1]
    );
    queriedBlogsSnapshot.forEach((doc) => {
      const blogData = doc.data();
      if (!blogData.hidden) {
        blogsData.push({ ...blogData, id: doc.id });
      }
      // blogsData.push({ ...doc.data(), id: doc.id });
    });
    if (!startingPoint) {
      setBlogs([...blogsData]);
    } else {
      setBlogs([...new Set([...blogs, ...blogsData])]);
    }
    setMainLoading(false);
    setLoading(false);
  };
  const getBlogsCounter = async () => {
    const blogsCounterSnap = await getDoc(blogsCounterRef);
    setAllBlogCounter({ ...blogsCounterSnap.data() });
  };

  const getCurrentPageBlogs = (data) => {
    setCurrentPageBlogs([...data]);
  };

  const getFilteredBlogData = async (limitValue, key, startingPoint) => {
    const blogsData = [];
    let queriedBlogData;
    if (!startingPoint) {
      queriedBlogData = firebaseQuery(
        blogCollectionRef,
        where("category", "==", key),
        orderBy("createdAt", "desc"),
        limit(limitValue)
      );
    } else {
      queriedBlogData = firebaseQuery(
        blogCollectionRef,
        where("category", "==", key),
        orderBy("createdAt", "desc"),
        limit(limitValue),
        startAfter(startingPoint)
      );
    }
    const queriedBlogsSnapshot = await getDocs(queriedBlogData);
    setLastBlog(
      queriedBlogsSnapshot.docs[queriedBlogsSnapshot.docs.length - 1]
    );
    queriedBlogsSnapshot.forEach((doc) => {
      blogsData.push({ ...doc.data(), id: doc.id });
    });
    if (!startingPoint) {
      setBlogs([...blogsData]);
    } else {
      setBlogs((prevBlogs) => [...new Set([...prevBlogs, ...blogsData])]);
    }
    setLoading(false);
  };

  const getSearchedBlogData = async (limitValue, searchKey, startingPoint) => {
    setBlogs([]);
    const blogsData = [];
    let queriedBlogData;
    if (!startingPoint) {
      queriedBlogData = firebaseQuery(
        blogCollectionRef,
        where("titleAsArray", "array-contains", searchKey.toLowerCase()),
        limit(limitValue)
      );
    } else {
      queriedBlogData = firebaseQuery(
        blogCollectionRef,
        orderBy("createdAt", "desc"),
        where("titleAsArray", "array-contains", searchKey.toLowerCase()),
        limit(limitValue),
        startAfter(startingPoint)
      );
    }
    const queriedBlogsSnapshot = await getDocs(queriedBlogData);
    setLastBlog(
      queriedBlogsSnapshot.docs[queriedBlogsSnapshot.docs.length - 1]
    );
    queriedBlogsSnapshot.forEach((doc) => {
      blogsData.push({ ...doc.data(), id: doc.id });
    });
    if (!startingPoint) {
      setBlogs([...blogsData]);
    } else {
      setBlogs([...new Set([...blogs, ...blogsData])]);
    }
    setMainLoading(false);
  };

  const handleSelectedTab = (e) => {
    if (e.target.value !== "all") {
      setSelectedQueryKey(e.target.value);
      setIsTabSelected(true);
      setBlogs([]);
      setCurrentPageBlogs([]);
      setLoading(true);
      setTimeout(() => {
        getFilteredBlogData(
          BLOG_PER_PAGE * VISIBLE_PAGES,
          e.target.value,
          null // set startingPoint to null to start from the beginning
        );
      }, 1000);
    } else {
      setSelectedQueryKey("");
      setIsTabSelected(false);
      setBlogs([]);
      setCurrentPageBlogs([]);
      setLoading(true);
      setTimeout(() => {
        getBlogsData(
          BLOG_PER_PAGE * VISIBLE_PAGES,
          null // set startingPoint to null to start from the beginning
        );
      }, 1000);
    }
  };

  const authChangedHandler = async (authState) => {
    if (authState) {
      const userRef = doc(db, "authUsers", authState.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists() && userDoc.data().isBlocked) {
        setCurrentUser(null);
      } else {
        setCurrentUser(authState);
        if (authState && checkUser && authState?.role === "admin") {
        } else {
          router.push("/blog");
        }
      }
    } else {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    const currentUser = auth.onAuthStateChanged(authChangedHandler);
  }, [checkUser, currentUser]);
  const onClickHandler = () => {
      router.push("/blog/adminPage");
  };

  useEffect(() => {
    setLoading(true);
    if (!isTabSelected) {
      getBlogsData(BLOG_PER_PAGE * VISIBLE_PAGES, null);
    }
  }, [search]);

  const changeNavbarColor = () => {
    if (window.scrollY >= 280) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    getBlogsCounter();
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const handleSearch = async (searchValue, limitValue, startingPoint) => {
    setMainLoading(true);
    setLoading(true);
    setBlogs([]);
    if (searchValue === "") {
      // show all blogs
      await getBlogsData(limitValue, startingPoint);
    } else {
      // search for blogs
      const blogsData = [];
      let queriedBlogData;
      if (!startingPoint) {
        queriedBlogData = firebaseQuery(
          blogCollectionRef,
          where("titleAsArray", "array-contains", searchValue.toLowerCase()),
          limit(limitValue)
        );
      } else {
        queriedBlogData = firebaseQuery(
          blogCollectionRef,
          orderBy("createdAt", "desc"),
          where("titleAsArray", "array-contains", searchValue.toLowerCase()),
          limit(limitValue),
          startAfter(startingPoint)
        );
      }
      const queriedBlogsSnapshot = await getDocs(queriedBlogData);
      setLastBlog(
        queriedBlogsSnapshot.docs[queriedBlogsSnapshot.docs.length - 1]
      );
      queriedBlogsSnapshot.forEach((doc) => {
        blogsData.push({ ...doc.data(), id: doc.id });
      });
      if (!startingPoint) {
        setBlogs([...blogsData]);
      } else {
        setBlogs([...new Set([...blogs, ...blogsData])]);
      }
    }
    setMainLoading(false);
    setLoading(false);
  };

  const handleChange = (event) => {
    const searchValue = event.target.value;
    handleSearch(searchValue);
  };

  return (
    <>
    <Head>
        <title>Redsky Advance Solutions Blog - Source for Education & Insights</title>
        <meta
          name="title"
          content="Redsky Advance Solutions Blog - Source for Education & Insights"
        />
        <meta
          name="description"
          content="Discover a wealth of knowledge and insights on IT, Mobile app development, web development, and industry trends through the Redsky Advance Solutions blog."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://redskyadvancesolutions.com/contact-us" />
      </Head>
    <Box>
      <Header />
      <Box bg="#101114">
        <Landing
          webimages={webimages}
          onClickHandler={onClickHandler}
          blogConstant={blogConstant}
          handleChange={handleChange}
        />
        <Login isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        <Box px={["6", "6", "10", "10", "10"]}>
          {/* <Flex
            direction="row"
            gap="20"
            mt="6"
            justifyContent={["flex-start", "flex-start", "end", "end", "end"]}
          >
            <Box display="flex" w={["60%", "60%", "50%", "25%", "25%"]}>
              <FormControl>
                <InputGroup>
                  <Input
                    color="brand.white"
                    variant="flushed"
                    mb="4"
                    colorScheme="#faae12"
                    borderBottom="2px solid #faae12"
                    placeholder="Search"
                    onChange={handleChange}
                  />

                  <InputRightAddon
                    bg="brand.black"
                    ml="-10"
                    borderTop="none"
                    borderRight="none"
                  >
                    <SearchIcon
                      zIndex="999"
                      w={4}
                      h={4}
                      color="white"
                      cursor="pointer"
                      onClick={() => {
                        getSearchedBlogData(
                          BLOG_PER_PAGE * VISIBLE_PAGES,
                          search,
                          null
                        );
                      }}
                    />
                  </InputRightAddon>
                </InputGroup>
              </FormControl>
            </Box>

            <Box
              position={["static", "static", "static", "absolute", "absolute"]}
              top={["0", "0", "0", "470", "470"]}
              right={["0", "0", "0", "10", "10"]}
              mb={["4", "4", "4", "0", "0"]}
              zIndex={999}
            >
              <MenuItems
                currentUser={currentUser}
                _focus={{ border: "none", backgroundColor: "brand.black" }}
              />
            </Box>
          </Flex> */}
          <Flex justifyContent="center" mt="20">
            {/* <Tabs
              variant="soft-rounded"
              colorScheme="tranparant"
              index={tabIndex}
              onChange={handleTabsChange}
            > */}
              {/* <TabList
                p="4"
                gap={["8", "8", "4", "4", "4"]}
                overflow="scroll"
                w= {["90vw","90vw","90vw","90vw","95vw"]}
                sx={{
                  whiteSpace: "nowrap",
                  position: "relative",
                  "scroll-snap-type": "x mandatory",
                  "-webkit-overflow-scrolling": "touch",
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {categories.map((_t, index) => (
                 _t.status == "active" ? <Tab
                    key={index}
                    onClick={handleSelectedTab}
                    value={_t.key}
                    fontSize="md"
                    bg="gray.200"
                    _selected={{
                      color: "#faae12",
                      bg: "gray.200",
                      border: "solid 2px #faae01",
                      boxShadow: "0 0 20px  rgba(255, 174, 0, 0.4)",
                    }}
                  >
                    {_t.name}
                  </Tab>:""
                ))}
              </TabList> */}
                {/* {BLOG_CATEGORIES.map((_tp, index) => ( */}
                    <Box mx="auto" textAlign="center">
                      {loading ? (
                        <Spinner
                          color="yellow.400"
                          size="xl"
                          textAlign="centers"
                        />
                      ) : null}
                    </Box>
                    <Grid
                      templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(3, 1fr)",
                        "repeat(3, 1fr)",
                      ]}
                      gap={10}
                    >
                      {" "}
                      {currentPageBlogs.map((data, index) => (
                        <Box cursor="pointer" key={index}>
                          <BlogContainer
                            key={index}
                            data={data}
                            currentUser={currentUser}
                            index={index}
                            push={router.push}
                          />
                        </Box>
                      ))}
                    </Grid>
                {/* ))} */}
          
          </Flex>
        </Box>
        <Box>
          <Pagination
            lastFetchedDoc={lastBlog}
            currentPageData={getCurrentPageBlogs}
            fetchDataFromDB={isTabSelected ? getFilteredBlogData : getBlogsData}
            blogsPerPage={BLOG_PER_PAGE}
            visiblePages={VISIBLE_PAGES}
            totalBlogCount={
              blogs.length > 0
                ? blogs.length
                : allBlogCounter[
                    isTabSelected ? BLOG_CATEGORIES[tabIndex].key : "all"
                  ]?.count
            }
            fetchedData={blogs}
            selectedQueryKey={selectedQueryKey}
          />
        </Box>
      </Box>
      <Box position="relative" my="20" className="noise">
        <FooterCard />
      </Box>
      <Footer />
    </Box>
    </>
  );
}
export default Blog;

