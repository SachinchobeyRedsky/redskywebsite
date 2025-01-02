import React from "react";
import {
  Box
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import webimages from "../../constants/images";
const Landing = dynamic(() => import("./Landing"), {});
const ContactPageSection = dynamic(() => import("./ContactPageSection"), {});
const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), {});

function ContactUs() {
  return (
    <>
    <Head>
        <title>Contact Us - Redsky Advance Solutions</title>
        <meta
          name="title"
          content="Contact Us - Redsky Advance Solutions"
        />
        <meta
          name="description"
          content="Explore our diverse portfolio, featuring a range of successful projects that demonstrate the expertise and capabilities of Redsky Advance Solutions. "
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Box
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom"
        backgroundColor="brand.black"
        backgroundSize={["300%", "300%", "200%", "200%", "100%"]}
        w="100%"
        color="white"
        h={["full", "full", "full", "full", "full"]}
        userSelect="none"
      >
        <Header />
        <Box
          className="custom-scroll-bar"
          w="100%"
          px={[".5rem",".5rem","2.5rem","2.5rem","2.5rem"]}
          pt="8rem"
          color="white"
          bg={`linear-gradient(to right, #101114a0,#101114a0),url(${webimages.publicimages.carrierBack})`}
          backgroundRepeat="no-repeat"
          fontFamily="Raleway"
          backgroundPosition="center"
          backgroundSize="cover"
        >
          <Landing/>
        </Box>
        <ContactPageSection/>
        <Footer />
      </Box>
    </>
  );
}

export default ContactUs;
