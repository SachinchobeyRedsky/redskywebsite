import { Box } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Slidee from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { TRAINING_TECH_DETAILS_CONTENT } from "../../../constants/constants";
const FeaturesCards = dynamic(
  () => import("../../../components/TechDetails/FeaturesCards"),
  {}
);
const Landing = dynamic(
  () => import("../../../components/TechDetails/Landing"),
  {}
);
const Overview = dynamic(
  () => import("../../../components/TechDetails/Overview"),
  {}
);
const WhyThisTech = dynamic(
  () => import("../../../components/TechDetails/WhyThisTech"),
  {}
);
const TechSyllabus = dynamic(
  () => import("../../../components/TechDetails/TechSyllabus"),
  {}
);
const GroupDiscount = dynamic(
  () => import("../../../components/TechDetails/GroupDiscount"),
  {}
);
const FaqSection = dynamic(() => import("../../../components/FaqSection"), {});

const TechDetails = () => {
  const {
    query: { techDetails },
  } = useRouter();

 
  const [currentTechDetails] = TRAINING_TECH_DETAILS_CONTENT.filter(
    (technology) => technology.platform.toLowerCase() === techDetails
  );
  return (
    <>
      <Head>
        {currentTechDetails?.metaTitle && (
          <title>{currentTechDetails?.metaTitle}</title>
        )}
        <meta
          name="title"
          content={currentTechDetails?.metaTitle && currentTechDetails?.metaTitle}
        />
        <meta
          name="description"
          content={currentTechDetails?.metaDescription && currentTechDetails?.metaDescription}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Box color="#fff" as="section">
        {currentTechDetails && ( // Check if currentTechDetails is defined
          <>
            <Landing
              font="6xl"
              heights="80vh"
              title={currentTechDetails?.tech}
              subtitle={currentTechDetails?.techHeadline}
              logoSrc={currentTechDetails?.techLogo}
              techFeatures={currentTechDetails?.techFeatures}
            />
            <Overview
              overviewText={currentTechDetails?.overview}
              overviewHeading={currentTechDetails?.overviewHeading}
            />
            <FeaturesCards 
            techFeatures={currentTechDetails?.techFeatures}
            title={currentTechDetails?.tech}
            />
            <WhyThisTech
              title={currentTechDetails?.tech}
              title1={currentTechDetails?.title1}
              title2={currentTechDetails?.title2}
              titleContent={currentTechDetails?.titleContent}
              sectionTitle={currentTechDetails?.sectionTitle1}
              topicContent={currentTechDetails?.sectionContent1}
              textList={currentTechDetails?.textLists}
              textHeading={currentTechDetails?.textHeading}
              topicImg={currentTechDetails?.sectionImg1}
            />
            <WhyThisTech
              flexDirection="row-reverse"
              padding="80px"
              sectionTitle={currentTechDetails?.sectionTitle2}
              topicContent={currentTechDetails?.sectionContent2}
              textList={currentTechDetails?.textLists2}
              textHeading2={currentTechDetails?.textHeading2}
              topicImg={currentTechDetails?.sectionImg2}
            />
            {currentTechDetails?.sectionTitle3 && (
              <WhyThisTech
                sectionTitle={currentTechDetails?.sectionTitle3}
                topicContent={currentTechDetails?.sectionContent3}
                textList={currentTechDetails?.textLists3}
                topicImg={currentTechDetails?.sectionImg3}
              />
            )}
            {/* <TechSyllabus
          syllabus={currentTechDetails?.syallbus}
          heading={currentTechDetails?.techSyllabus}
          techText={currentTechDetails?.techSyllabusText}
        /> */}
            <GroupDiscount
              title={currentTechDetails?.tech}
              subtitle={currentTechDetails?.techHeadline}
              buttonText="Group Discount"
            />
            <FaqSection
              faqQuestions={currentTechDetails?.faqs}
              animation={{ Fade, Slidee, Zoom }}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default TechDetails;
