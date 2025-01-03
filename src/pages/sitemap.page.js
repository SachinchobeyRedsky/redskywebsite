import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase.config";

// Static URLs
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

// Fetch URLs from Firebase
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

const Sitemap = ({ urls }) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
    )
    .join("\n")}
</urlset>`;

  return xml;
};

export async function getStaticProps() {
  const urls = await fetchUrls();

  return {
    props: {
      urls,
    },
  };
}

export default Sitemap;
