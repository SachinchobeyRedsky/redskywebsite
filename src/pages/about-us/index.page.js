import { Box, Center, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { aboutUs } from "../../constants/constants";
import "react-alice-carousel/lib/alice-carousel.css";
import webimages from "../../constants/images";
import React from "react";
// scroll animation
import Slidee from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Head from "next/head";

const Landing = dynamic(() => import("./Landing"), {});
const Digicard = dynamic(() => import("./DigiCard"), {});
const Innovation = dynamic(() => import("./Innovation"), {});
const Quality = dynamic(() => import("./Quality"), {});
const Teamwork = dynamic(() => import("./TeamWork"), {});

const ImagesTabContainer = dynamic(
  () => import("../../shared/ImagesTabContainer"),
  {}
);
const Dignitaries = dynamic(() => import("../../shared/Dignitaries"), {});
const AboutUSCards = dynamic(() => import("../../shared/AboutUSCards"), {});
const FooterCard = dynamic(() => import("../../shared/FooterCard"), {});
const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), {});

function AboutUs() {
  const { about1, about2, about3 } = webimages.background.about;
  const aboutBack = webimages.publicimages.aboutBack;

  const aboutUsCards = aboutUs.aboutCardDetails;
  return (
    <>
     <Head>
        <title>About Us - Redsky Advance Solutions: Unveiling Our Mission</title>
        <meta
          name="title"
          content="About Us - Redsky Advance Solutions: Unveiling Our Mission"
        />
        <meta
          name="description"
          content="Welcome to Redsky Advance Solutions, where our mission is to drive innovation and deliver excellence in the mobile app and web development landscape."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://redskyadvancesolutions.com/about-us" />
      </Head>
    <Box
      className="mobileview"
      userSelect="none"
      fontFamily="Raleway"
      sans-serif="true"
    >
      {/* commented for seo changes, if required one can umcomment it*/}
      <Header />
      <Landing myImage={aboutBack} aboutUs={aboutUs} />

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={10}
        px={["10", "10", "10", "10", "60px"]}
        py={["10", "10", "20", "20", "20"]}
      >
        {aboutUsCards.map((cardData, index) => {
          return <AboutUSCards cardData={cardData} key={index} />;
        })}
      </Grid>
      <Box mx={["10" ,"10","60px","60px","60px"]}>
        <Innovation
          animation={{ Slidee, Fade, Zoom, Rotate }}
          aboutUs={aboutUs}
          about={{ about1 }}
        />
        <Teamwork
          animation={{ Fade, Zoom, Slidee, Rotate }}
          aboutUs={aboutUs}
          about={{ about2 }}
        />
        <Quality
          animation={{ Slidee, Fade, Zoom, Rotate }}
          aboutUs={aboutUs}
          about={{ about3 }}
        />
      </Box>
      <Box as="section"
        bgImage={`url(${webimages.background.portfolioBg})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
       py={["10", "10", "50", "50", "50px"]}>
        <Center>
          <ImagesTabContainer />
        </Center>
      </Box>
      <Digicard
        animation={{ Slidee, Fade, Zoom, Rotate }}
        aboutUs={aboutUs}
        dignitariesDetails={aboutUs.dignitariesDetails}
        Dignitaries={Dignitaries}
      />
      <Box position="relative" mb="20" mt="20" className="noise">
        <FooterCard />
      </Box>
      <Footer />
    </Box>
    </>
  );
}

export default AboutUs;
