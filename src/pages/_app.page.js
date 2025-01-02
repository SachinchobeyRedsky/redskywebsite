import Head from "next/head";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import theme from "../constants/theme";
import { MAX_WIDTH } from "../constants/constants";
import "../../styles/globals.css";
import "../../styles/noise.css";
import "../../styles/slider.scss";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "../components/Header/styles.scss";
import "../components/Footer/styles.scss";
import "../../styles/myNewGalleryStyles.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
 
  return (
    <>
      <Head>
        <title>Redsky Advance Solutions</title>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow" />
      </Head>
      <ChakraProvider theme={theme}>
        <Box
          className={router.pathname == "/blog/addBlog" ? null : "noise"}
          userSelect="none"
          bg="brand.black"
          overflowX="hidden"
          maxW={MAX_WIDTH}
          position="relative"
          m="0 auto"
        >
          <Component key={router.pathname} {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
