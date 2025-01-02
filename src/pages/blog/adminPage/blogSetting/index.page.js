import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Grid,
  Flex,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  Input,
  InputGroup,
  InputRightAddon,
  Spinner,
  Button,
  Center,
} from "@chakra-ui/react";
import { SearchIcon, EditIcon } from "@chakra-ui/icons";
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
} from "firebase/firestore";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { db } from "../../../../../firebase.config";
import BlogContainer from "../../BlogContainer";
import { BLOG_CATEGORIES } from "../../../../constants/constants";
import Pagination from "../../../../shared/Pagination";

const BLOG_PER_PAGE = 6;
const VISIBLE_PAGES = 4;

function BlogSetting() {
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
  const [allBlogCounter, setAllBlogCounter] = useState({});
  const [currentPageBlogs, setCurrentPageBlogs] = useState([]);
  // firestore collection refs
  const blogCollectionRef = collection(db, "blogData");
  const blogsCounterRef = doc(db, "blogSettings", "blogs-counter");
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const auth = getAuth();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      blogsData.push({ ...doc.data(), id: doc.id });
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

  const authChangedHandler = (authState) => {
    setCurrentUser(authState);
    if (authState && checkUser) {
    } else {
    }
  };
  useEffect(() => {
    const currentUser = auth.onAuthStateChanged(authChangedHandler);
  }, [checkUser]);
  const onClickHandler = () => {
    onOpen();
    setCheckUser(true);
  };

  useEffect(() => {
    setLoading(true);
    if (!isTabSelected) {
      getBlogsData(BLOG_PER_PAGE * VISIBLE_PAGES, null);
    }
  }, [search]);
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
  useEffect(() => {
    getBlogsCounter();
  }, []);

  return (
    <Box w="100%" ml="6">
      <Box bg="#101114">
        <Box px={["6", "6", "10", "10", "10"]}>
          <Flex
            direction="row"
            gap="20"
            mt="6"
            justifyContent={["flex-start", "flex-start", "end", "end", "end"]}
          >
            {" "}
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
          </Flex>
          <Tabs
            variant="soft-rounded"
            colorScheme="tranparant"
            index={tabIndex}
            onChange={handleTabsChange}
          >
            <TabList
              p="4"
              gap={["8", "8", "4", "4", "4"]}
              overflow="scroll"
              w={["90vw", "90vw", "90vw", "90vw", "90vw"]}
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
              {BLOG_CATEGORIES.map((_t, index) => (
                <Tab
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
                  {_t.keyword}
                </Tab>
              ))}
            </TabList>
            <TabPanels mt="2">
              {BLOG_CATEGORIES.map((_tp, index) => (
                <TabPanel fontSize="sm" key={index}>
                  <Box mx="auto" textAlign="center">
                    {loading ? (
                      <Spinner
                        color="yellow.400"
                        size="xl"
                        textAlign="centers"
                      />
                    ) : null}
                  </Box>
                  <Flex
                    flexDirection={["column", "column", "column", "row", "row"]}
                    justifyContent="center"
                  >
                    <Grid
                      templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(2, 1fr)",
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
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
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
    </Box>
  );
}
export default BlogSetting;

// click on the "All" tab, then go to the second page of the Pagination, and when you click on the "Next" tab, the second tab shows the first page of data instead of the second.
