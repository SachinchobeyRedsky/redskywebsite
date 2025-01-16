import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";

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

const BASE_BLOG_URL = "https://redskyadvancesolutions.com/blog/";

function generateSiteMap(staticUrls, dynamicUrls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.199">
    ${staticUrls
      .map((url) => `<url><loc>${url}</loc></url>`)
      .join("")}
    ${dynamicUrls
      .map((url) => `<url><loc>${url}</loc></url>`)
      .join("")}
  </urlset>`;
}

export default async function handler(req, res) {
  try {
    // Fetch blog data from Firestore
    const querySnapshot = await getDocs(collection(db, "blogData"));
    const dynamicUrls = querySnapshot.docs.map((doc) => {
      const { title } = doc.data();
      const slug = title.replace(/\s+/g, "-").toLowerCase();
      return `${BASE_BLOG_URL}${slug}`;
    });

    // Generate the sitemap XML
    const sitemap = generateSiteMap(STATIC_URLS, dynamicUrls);

    // Set response headers and return XML
    res.setHeader("Content-Type", "text/xml");
    res.status(200).send(sitemap);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Failed to generate sitemap");
  }
}
