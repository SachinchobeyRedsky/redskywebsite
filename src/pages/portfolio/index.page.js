import webimages from "../../constants/images";
import dynamic from "next/dynamic";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { home, portfolioConstants } from "../../constants/constants";
import FooterCard from "../../shared/FooterCard";
import { Box, chakra, Text } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import Head from "next/head";
const HomePageForm = dynamic(
  () => import("../../components/Home/HomePageForm"),
  {}
);
const Review = dynamic(() => import("../../shared/Review"), {});
const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), {});
const Landing = dynamic(() => import("../../components/Portfolio/Landing"), {});
const Tabcard = dynamic(() => import("../../components/Portfolio/TabCard"), {});

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>
          Our Portfolio - Redsky Advance Solutions: Showcasing Our Work
        </title>
        <meta
          name="title"
          content="Our Portfolio - Redsky Advance Solutions: Showcasing Our Work"
        />
        <meta
          name="description"
          content="Explore our portfolio of successful projects & discover the expertise & capabilities of Redsky Advance Solutions. Our portfolio showcases a range of development, AI & deep learning."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://redskyadvancesolutions.com/portfolio" />
      </Head>
      <Header />
      <Landing
        heading={portfolioConstants.PORTFOLIO_HEADING}
        content={portfolioConstants.HEADING_CONTENT}
        mainimage={webimages.background.portfolio.mainimage}
      />
      <Tabcard
        location="portfolio"
        animation={{ Slide, Zoom, Fade }}
        cardData={portfolioConstants?.projectsData}
        cardimage={webimages.background.portfolio.cardimage}
        data={portfolioConstants.platforms}
        content={portfolioConstants?.portfolio_content}
        heading={{ start: "Domains we", end: "have worked for" }}
      />

      {/* clients review section */}
      <Box
        as="section"
        py="20"
        bgColor="brand.black"
      >
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
      <Box>
        <HomePageForm />
      </Box>

      <Box position="relative" my="20" className="noise">
        <FooterCard />
      </Box>
      <Footer />
    </>
  );
};

export default Portfolio;
