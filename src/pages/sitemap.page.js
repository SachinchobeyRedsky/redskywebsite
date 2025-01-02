import { useEffect, useState } from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase.config";

const STATIC_URLS = [
  "https://www.redskyadvancesolutions.com/",
  "https://www.redskyadvancesolutions.com/about-us",
  "https://www.redskyadvancesolutions.com/services",
  "https://www.redskyadvancesolutions.com/industrial-training",
  "https://www.redskyadvancesolutions.com/career",
  "https://www.redskyadvancesolutions.com/portfolio",
  "https://www.redskyadvancesolutions.com/blog",
  "https://www.redskyadvancesolutions.com/contact-us",
  "https://redskyadvancesolutions.com/services/web-development",
  "https://redskyadvancesolutions.com/services/mobile-development",
  "https://redskyadvancesolutions.com/services/backend-development",
  "https://redskyadvancesolutions.com/services/graphic-design",
  "https://redskyadvancesolutions.com/services/digital-marketing",
  "https://redskyadvancesolutions.com/industrial-training/node",
  "https://redskyadvancesolutions.com/industrial-training/react",
  "https://redskyadvancesolutions.com/industrial-training/react-native",
  "https://redskyadvancesolutions.com/industrial-training/angular",
  "https://redskyadvancesolutions.com/industrial-training/vue",
  "https://redskyadvancesolutions.com/industrial-training/php",
  "https://redskyadvancesolutions.com/industrial-training/digital-marketing",
];

const fetchUrls = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blogData"));
    const BASE_BLOG_URL = "https://redskyadvancesolutions.com/blog/";

    const dynamicUrls = querySnapshot.docs.map((doc) => {
      const { title } = doc.data();
      const slug = title.replace(/\s+/g, "-");
      return `${BASE_BLOG_URL}${slug}`;
    });

    return [...STATIC_URLS, ...dynamicUrls];
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return STATIC_URLS; // Fallback to static URLs on error
  }
};

const Sitemap = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const loadUrls = async () => {
      const allUrls = await fetchUrls();
      setUrls(allUrls);
    };

    loadUrls();
  }, []);

  return (
    <Box
      as="section"
      bg="#1E1E1E"
      color="#D4D4D4"
      minHeight="100vh"
      py={10}
      px={6}
      fontFamily="monospace"
    >
      <Text as="h1" fontSize="2xl" fontWeight="bold" color="#FFFFFF" mb={4}>
        Sitemap - Redsky Advance Solutions
      </Text>

      <Box mb={2} color="#00BFFF">
        &lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
      </Box>

      <Box ml={4}>
        {urls.map((url, index) => (
          <Box key={index}>
            <Box color="#00BFFF">&lt;url&gt;</Box>
            <Box ml={4} color="#00BFFF">
              &lt;loc&gt;
              <Link
                href={url}
                isExternal
                _hover={{ color: "white", transform: "scale(1.05)" }}
                _active={{ color: "#FF6347" }}
              >
                {url}
              </Link>
              &lt;/loc&gt;
            </Box>
            <Box color="#00BFFF">&lt;/url&gt;</Box>
          </Box>
        ))}
      </Box>

      <Box mt={4} color="#00BFFF">
        &lt;/urlset&gt;
      </Box>
    </Box>
  );
};

export default Sitemap;
