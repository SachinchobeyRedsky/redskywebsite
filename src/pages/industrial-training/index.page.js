import { Box, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { trainingConstants } from "../../constants/constants";
import webimages from "../../constants/images";
import Slidee from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const ExploreCourses = dynamic(() => import("./ExploreCourses"), {});
const WeDiffSection = dynamic(() => import("./WeDiffSection"), {});
const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), {});
const Component = dynamic(() => import("../../shared/Titles"), {});
const TrainCard = dynamic(() => import("../../shared/TrainCard"), {});
const Landing = dynamic(() => import("./Landing"), {});
const Whyus = dynamic(() => import("./Whyus"), {});
const Provide = dynamic(() => import("./Provide"), {});
const IntersGallery = dynamic(() => import("./IntersGallery"), {});
const FooterCard = dynamic(() => import("../../shared/FooterCard"), {});
const FaqSection = dynamic(() => import("../../components/FaqSection"), {});

const training = () => {
  const { isOpen, onOpen, onClose } = useDisclosure;
  const responsive = {
    0: { items: 1 },
    990: { items: 1 },
    1024: { items: 1 },
    1200: { items: 2 },
  };

  return (
    <>
      <Head>
        <title>Master Your Skills with the Top Training Company in Mohali | Join Now!</title>
        <meta
          name="title"
          content="Master Your Skills with the Top Training Company in Mohali | Join Now!"
        />
        <meta
          name="description"
          content="Redsky Advance Solutions is a top-rated training company in Mohali that provides the best training in App & Web development. We will help you master development languages."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://redskyadvancesolutions.com/industrial-training" />
      </Head>
      <Header />
      <Landing trainingConstants={trainingConstants} webimages={webimages} />
      <Whyus
        animation={{ Slidee, Fade }}
        webimages={webimages}
        trainingConstants={trainingConstants}
        cardData={trainingConstants.cardData}
        Component={Component}
      />
       <Provide
        responsive={responsive}
        animation={{ Slidee, Fade, Zoom }}
        trainingConstants={trainingConstants}
        webimages={webimages}
        AliceCarousel={AliceCarousel}
        icon={{ ChevronLeftIcon, ChevronRightIcon }}
        gridInfo={trainingConstants.gridInfo}
        TrainCard={TrainCard}
        onOpen={onOpen}
      />
      <ExploreCourses />
     
      <WeDiffSection />
      <IntersGallery
        AliceCarousel={AliceCarousel}
        responsive={responsive}
        trainingConstants={trainingConstants}
        internImagesData={trainingConstants.internImagesData}
      />
      <FaqSection
        faqQuestions={trainingConstants?.faqs}
        animation={{ Fade, Slidee, Zoom }}
      />
      <Box position="relative" mb="20" mt="20" className="noise">
        <FooterCard />
      </Box>
      <Footer />
    </>
  );
};

export default training;
