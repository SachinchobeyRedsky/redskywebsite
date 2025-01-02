import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import Slidee from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import {
  servicesDetails,
} from "../../../constants/constants";
import webimage from "../../../constants/images";
const Landing = dynamic(() => import("../../../components/Services/Landing"), {});
const TechServices = dynamic(() => import("../../../components/Services/TechServices"), {});
const TechProcess = dynamic(() => import("../../../components/Services/TechProcess"), {});
const ServiceFormSection = dynamic(() => import("../../../components/Services/ServiceFormSection"), {});
const GroupDiscount = dynamic(() => import("../../../components/TechDetails/GroupDiscount"), {});
const FaqSection = dynamic(() => import("../../../components/FaqSection"), {});
const FooterCard = dynamic(() => import("../../../shared/FooterCard"), {});
const WhyHireUs = dynamic(() => import("../../../components/Services/WhyHireUs"), {});
const Services = dynamic(() => import("../Services"), {});
const Servicelogo = dynamic(() => import("../../../shared/Servicelogo"), {});
const Header = dynamic(() => import("../../../components/Header"), {});
const Footer = dynamic(() => import("../../../components/Footer"), {});

const Platform = () => {
  const router = useRouter();
  const {
    query: { platform },
    push,
  } = router;
  if (
    platform &&
    platform !== "native" &&
    platform !== "web-development" &&
    platform !== "mobile-development" &&
    platform !== "graphic-design" &&
    platform !== "backend-development" &&
    platform !== "digital-marketing"
  ) {
    push("/404");
  }
  useEffect(() => {
    if (router.asPath !== "/") router.push(location.pathname);
  }, []);
  const [currentPlatformContent] = servicesDetails.filter((platformContent) => {
    if (platform === platformContent.platformName) {
      return platformContent;
    }
  });
  return (
    <>
      <Head>
        <title>{currentPlatformContent?.metaTitle}</title>
        <meta
          name="title"
          content={currentPlatformContent?.metaTitle}
        />
        <meta
          name="description"
          content={currentPlatformContent?.metaDesc}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href={currentPlatformContent?.canonicalTagLink} />
      </Head>
      <Header />
      <Landing
        heading={currentPlatformContent?.serviceTechHeading}
        landingText={currentPlatformContent?.serviceTechText}
        landingImg={currentPlatformContent?.landingImg}
      />
      <TechServices
        mainHeading={currentPlatformContent?.serviceTechHeading}
        heading={currentPlatformContent?.techServiceHeading}
        gradientTextServices={currentPlatformContent?.gradientTextServices}
        techData={currentPlatformContent?.techDetailCardData}
      />

      {currentPlatformContent?.tech && (
        <Box
      bgImage={`url(${"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2FbackgroundhomeWstartwithpattren.png?alt=media&token=0ffa2c1c-4319-40d6-8c8f-95e2141db78e"})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      backgroundPosition={["bottom", "bottom", "bottom", "center"]}
      backgroundRepeat="no-repeat">
        <Services
          toolsUsing={currentPlatformContent?.toolsUsing}
          tooslUsingGradient={currentPlatformContent?.tooslUsingGradient}
          webimage={webimage}
          animation={{ Fade, Slidee, Zoom }}
          tech={currentPlatformContent?.tech}
          Servicelogo={Servicelogo}
          // backgroundImage={currentPlatformContent?.backgroundImage}
        />
         </Box>
      )}

      {currentPlatformContent?.WhyHireUs && (
        <WhyHireUs
          WhyHireUsHeading={currentPlatformContent?.WhyHireUsHeading}
          WhyHireUsGradient={currentPlatformContent?.WhyHireUsGradient}
          exploreData={currentPlatformContent?.WhyHireUs}
        />
      )}
      {currentPlatformContent?.gredientBoxText && (
        <GroupDiscount
          gredientBoxText={currentPlatformContent?.gredientBoxText}
          buttonText="Contact Us"
        />
      )}

      <TechProcess
        heading={currentPlatformContent?.techProcessHeading}
        gradientTextProcess={currentPlatformContent?.gradientTextProcess}
        techProcessText={currentPlatformContent?.techProcessText}
        websiteTasks={currentPlatformContent?.websiteTasks}
        devData={currentPlatformContent?.devData}
        platformName={currentPlatformContent?.platformName}
      />
      <ServiceFormSection
        serviceFormHeading={currentPlatformContent?.serviceFormHeading}
        serviceFormSubHeading={currentPlatformContent?.serviceFormSubHeading}
        serviceFormText={currentPlatformContent?.serviceText}
        questions={currentPlatformContent?.questions}
        ansText={currentPlatformContent?.ansText}
        bottomText={currentPlatformContent?.bottomText}
      />
      <Box position="relative" mb="20" className="noise">
        <FaqSection
          faqQuestions={currentPlatformContent?.faqs}
          animation={{ Fade, Slidee, Zoom }}
        />
      </Box>
      <Box position="relative" mb="20" mt="20" className="noise">
        <FooterCard />
      </Box>
      <Footer />
    </>
  );
};

export default Platform;
