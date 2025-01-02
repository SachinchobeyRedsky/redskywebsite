import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
// -----------------------images---------------------------------//
import webimage from "../../constants/images";
import { service } from "../../constants/constants";
// animations of scroll
import Slidee from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
// components
const FooterCard = dynamic(() => import("../../shared/FooterCard.js"), {});
const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), {});
const Component = dynamic(() => import("../../shared/Titles"), {});
const Delivery = dynamic(() => import("../../shared/Delivery"), {});
const Servicegive = dynamic(() => import("../../shared/Servicegive"), {});
const Servicelogo = dynamic(() => import("../../shared/Servicelogo"), {});
const Landing = dynamic(() => import("./Landing"), {});
const Engagement = dynamic(() => import("./Engagement.js"), {});
const Pickout = dynamic(() => import("./Pickout.js"), {});
const Technology = dynamic(() => import("./Technology"), {});
const Services = dynamic(() => import("./Services"), {});
const FaqSection = dynamic(() => import("../../components/FaqSection"), {});

const Service = () => {
  return (
    <>
      <Head>
        <title>
          Top-notch Custom Web and App Development Services provides Just for
          You
        </title>
        <meta
          name="title"
          content="Top-notch Custom Web and App Development Services provides Just for You"
        />
        <meta
          name="description"
          content="Looking for custom mobile app and web development services provider? Redsky Advance Solutions specializes in crafting solutions tailored to your needs. Request a quote today!"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://redskyadvancesolutions.com/services" />
      </Head>
      <Header />
      <Landing service={service} webimage={webimage} />

      <Engagement
        service={service}
        cardData={service.cardData}
        animation={{ Fade, Slidee, Zoom }}
        webimage={webimage}
        Component={Component}
      />

      <Pickout
        service={service}
        cardData2={service.cardData2}
        animation={{ Fade, Slidee, Zoom }}
        webimage={webimage}
        Delivery={Delivery}
      />

      <Technology
        service={service}
        servicesData={service.servicesData}
        animation={{ Fade, Slidee, Zoom }}
        webimage={webimage}
        Servicegive={Servicegive}
      />

      <Services
        webimage={webimage}
        animation={{ Fade, Slidee, Zoom }}
        tech={service.tech}
        Servicelogo={Servicelogo}
      />

      <FaqSection
        faqQuestions={service?.faqs}
        animation={{ Fade, Slidee, Zoom }}
      />
      {/* Footer Card */}
      <Box position="relative" mb="20" mt="20" className="noise">
        <FooterCard />
      </Box>
      <Footer />
    </>
  );
};

export default Service;
