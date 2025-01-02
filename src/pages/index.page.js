import dynamic from "next/dynamic";
import Head from "next/head";
import React,{useEffect, useState} from "react";
import { Box, Text, Grid, GridItem, chakra } from "@chakra-ui/react";
import { home } from "../constants/constants";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// animations scroll
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import webimages from "../constants/images";
import TechCard from "../shared/TechCard";
// import Services from "./services/Services";
import Slidee from "react-reveal/Slide";
import { service, techData } from "../constants/constants";
const Services = dynamic(() => import("./services/Services"), {});

const Servicelogo = dynamic(() => import("../shared/Servicelogo"), {});
const BlogSection = dynamic(() => import("../components/Home/BlogSection"), {});
const OurCertifications = dynamic(
  () => import("../components/Home/OurCertifications"),
  {}
);
// const WhyChooseUs = dynamic(() => import("../components/Home/WhyChooseUs"), {});
const PortfolioSection = dynamic(
  () => import("../components/Home/PortfolioSection"),
  {}
);
const HomePageForm = dynamic(
  () => import("../components/Home/HomePageForm"),
  {}
);
const FooterCard = dynamic(() => import("../shared/FooterCard"), {});
const Header = dynamic(() => import("../components/Header"), {});
const Footer = dynamic(() => import("../components/Footer"), {});
const Review = dynamic(() => import("../shared/Review"), {});

const FeedbackCardsDetails = dynamic(
  () => import("../shared/FeedbackCardsDetails"),
);
const HomeLanding = dynamic(() => import("../components/Home/HomeLanding"), {
   loading: () => <p>...</p>,
});

function HomeScreen() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000);
  }, [])
  
  return (
    <>
      <Head>
        <title>
          Top-notch Web Development Services | Redsky Advance Solutions
        </title>
        <meta
          name="title"
          content="Top-notch Web Development Services | Redsky Advance Solutions"
        />
        <meta
          name="description"
          content="Are you looking for the best Web and App development services? Redsky Advance Solutions offers high-quality websites and apps tailored to your needs. Visit Now!"
        />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://redskyadvancesolutions.com/" />
      </Head>
      <Header />
      <HomeLanding />

      {/* why  choose  us section */}
      <Box
        color="white"
        display="flex"
        h={["50vh","50vh","100vh","100vh","100vh"]}
        flexDirection="column"
        position="relative"
        justifyContent="center"
        alignItems="center"
        bgImage={`url(${webimages.whyChooseusImg})`}
        bgRepeat="no-repeat"
        bgSize={["100%","100%","100%","100%","contain"]}
        bgPosition="center"
      >
        <Box position="absolute" top="15%">
          <Text
            textAlign="center"
            color="brand.white"
            fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
            fontFamily="Raleway"
            fontWeight="extrabold"
            px={["10", "10", "0", "0", "0"]}
            ml={2}
          >
            {home.WHY}
            <chakra.span
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
              fontFamily="Raleway"
              fontWeight="extrabold"
              ml="2"
            >
              {home.CHOOSE_US}
            </chakra.span>{" "}
          </Text>
        </Box>
        {/* <Flex alignItems="center" mb={6}> */}
        {/* <WhyChooseUs /> */}
      </Box>

      {/* ourcertification section */}
      <Box
        as="section"
        py={["10", "10", "50", "50", "50px"]}
        px={["10", "10", "50", "50", "20"]}
        color="brand.white"
        alignSelf="center"
        maxH="40vh"
      >
        <OurCertifications tech={home.ourpartners} Servicelogo={Servicelogo} />
      </Box>

      {/* 5 years of excellence */}
      <Box
        as="section"
        bgImage={`url(${webimages.background.homefeedback})`}
        bgRepeat="no-repeat"
        bgSize={["450%", "200%", "100%", "100%", "100%"]}
        bgPosition="center"
        w="100%"
        pt={["10", "10", "50", "50", "80px"]}
        pb={["10", "10", "50", "50", "0px"]}
        color="brand.white"
        alignItems="center"
      >
        <FeedbackCardsDetails />
      </Box>

      {/* services we offer section */}
      { show ?  <Box
        as="section"
        bgImage={`url(${webimages.background.servicesWeofferBg})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        py={["10", "10", "50", "50", "60px"]}
        px={["10", "10", "50", "50", "60px"]}
        color="brand.white"
        alignItems="center"
      >
        <Text
          textAlign="center"
          color="brand.white"
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          fontFamily="Raleway"
          fontWeight="extrabold"
          px={["10", "10", "0", "0", "0"]}
          ml={2}
          mb="20"
        >
          {home.SERVICES}
          <chakra.span
            bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
            bgClip="text"
            fontFamily="Raleway"
            fontWeight="extrabold"
            ml="2"
          >
            {home.WE_OFFER}
          </chakra.span>{" "}
        </Text>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={10}
          rowGap={20}
          mb="10"
          // columnGap={20}
        >
          {techData.map((data, index) => {
            return (
              <GridItem key={index}>
                <TechCard data={data} routePath={data?.path} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>:null}

      {/* tech slider section */}
      <Services
        webimage={webimages}
        animation={{ Fade, Slidee, Zoom }}
        tech={service.tech}
        Servicelogo={Servicelogo}
      />

      {/* portFoliosection */}
      { show ?    <Box
        bgImage={`url(${webimages.background.portfolioBg})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        px={["10", "10", "50", "50", "60px"]}
        py={["10", "10", "50", "50", "100px"]}
      >
        <PortfolioSection />
      </Box>:null}

      {/* clients review section */}
      <Box as="section" py="10px" bgColor="brand.black">
        <Box textAlign="center">
          <Box p={2}>
            <Zoom>
              <Fade big>
                <Text
                  textAlign="center"
                  color="brand.white"
                  textTransform="uppercase"
                  fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
                  fontFamily="Raleway"
                  fontWeight="extrabold"
                  px={["10", "10", "0", "0", "0"]}
                  ml={2}
                >
                  {`Our Client’s `}
                  <chakra.span
                    bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                    bgClip="text"
                    fontFamily="Raleway"
                    fontWeight="extrabold"
                    ml="2"
                  >
                    Feedback
                  </chakra.span>{" "}
                </Text>
              </Fade>
            </Zoom>
          </Box>
        </Box>
        <Box px={["10", "10", "50", "50", "60px"]}>
          <AliceCarousel
            mouseTracking
            autoPlay={true}
            autoPlayInterval={3000}
            infinite={true}
            disableButtonsControls={true}
          >
            {home.ReviewsDetails.map((reviewsDetail, idx) => {
              return (
                <Review
                  key={idx}
                  index={idx}
                  image={reviewsDetail.image}
                  desc={reviewsDetail.desc}
                  name={reviewsDetail.name}
                />
              );
            })}
          </AliceCarousel>
        </Box>
      </Box>

      {/* From Section  */}
     { show ? <Box>
        <HomePageForm />
      </Box> : null}

      {/* Blog Section */}
      <Box
        bgGradient="linear(to-b, #101114  40%, #101114a4)"
        px={["10", "10", "50", "50", "60px"]}
      >
        <BlogSection />
      </Box>

      <Box position="relative" mb="20" mt="10" className="noise">
        <FooterCard />
      </Box>
      <Footer />
    </>
  );
}

export default HomeScreen;
