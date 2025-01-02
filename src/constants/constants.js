import Link from "next/link";
import webimages from "./images";
// import recycleImg from "../assets/images/training/recycle.png";
// import settingsImg from "../assets/images/training/settings.png";
// import speedometerImg from "../assets/images/training/speedometer.png";
// import searchImg from "../assets/images/training/magnifying-glass.png";
// import trust from "../assets/images/training/trust.png";
// import folder from "../assets/images/training/folder.png";
import web from "../assets/images/portfolio/Website-C.png";
import crossPlatform from "../assets/images/portfolio/cross-platform-C.png";
import graphicDesign from "../assets/images/portfolio/graphic-design-C.png";
import react from "../assets/images/portfolio/react.png";
import node from "../assets/images/portfolio/node.png";
import angular from "../assets/images/portfolio/angular.png";
import vue from "../assets/images/portfolio/vue.png";
import nativeScript from "../assets/images/portfolio/nativescript.png";
// import xd from "../assets/images/portfolio/xd.png";
// import figma from "../assets/images/portfolio/figma.png";
// import ae from "../assets/images/portfolio/ae.png";
// import ils from "../assets/images/portfolio/ils.png";
// import ps from "../assets/images/portfolio/photoshop.png";
import homeImg from "../assets/images/header/home.png";
import servicesImg from "../assets/images/header/service.png";
import trainingImg from "../assets/images/header/training.png";
import careerImg from "../assets/images/header/career.png";
import portfolioImg from "../assets/images/header/portfolio.png";
import blogImg from "../assets/images/header/blog.png";
import aboutImg from "../assets/images/header/about.png";
import draft from "../assets/images/header/draft.png";
import published from "../assets/images/header/published.png";
import logout from "../assets/images/header/logout.png";
import { Text } from "@chakra-ui/react";
import { GrLinkedinOption } from "react-icons/gr";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebookF ,FaPhone,FaYoutube} from "react-icons/fa";
// max width of the website
export const MAX_WIDTH = "1530px";
export const DRAWER = "drawer";
export const HEADER_HEIGHT = "72px";

// slider constants

export const RESPONSIVE = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

// Header Page Constants

export const HEADER = [
  { icon: homeImg, name: "home", key: "home", path: "/", popoverData: null },
  {
    icon: aboutImg,
    name: "about us",
    key: "about",
    path: "/about-us",
    popoverData: null,
  },
  {
    icon: servicesImg,
    name: "our services",
    key: "services",
    path: "/services",
    popoverData: [
      {
        platform: "Web Development",
        name: "Web Development",
        path: "/services/web-development",
        query: null,
      },
      {
        platform: "Mobile Application",
        name: "Mobile Application",
        path: "/services/mobile-development",
        query: null,
        
      },
      {
        platform: "Back end",
        name: "Backend Development",
        path: "/services/backend-development",
        query: null,
      },
      {
        platform: "Graphic Designs",
        name: "Graphic Designs",
        path: "/services/graphic-design",
        query: null,
      },
      {
        platform: "Digital Marketing",
        name: "Digital Marketing",
        path: "/services/digital-marketing",
        query: null,
      },
    ],
  },
  {
    icon: trainingImg,
    name: "Industrial training",
    key: "training",
    path: "/industrial-training",
    popoverData: null,
    // popoverData: [
    //   {
    //     platform: "node",
    //     name: "node",
    //     path: "/tech-details",
    //     query: { type: "node" },
    //   },
    //   {
    //     platform: "react",
    //     name: "react",
    //     path: "/tech-details",
    //     query: { type: "react" },
    //   },
    //   {
    //     platform: "react-Native",
    //     name: "react-Native",
    //     path: "/tech-details",
    //     query: { type: "reactnative" },
    //   },
    //   {
    //     platform: "angular",
    //     name: "angular",
    //     path: "/tech-details",
    //     query: { type: "angular" },
    //   },
    //   {
    //     platform: "vue",
    //     name: "vue",
    //     path: "/tech-details",
    //     query: { type: "vue" },
    //   },
    // ],
  },
  {
    icon: careerImg,
    name: "career",
    key: "career",
    path: "/career",
    popoverData: null,
  },
  {
    icon: portfolioImg,
    name: "portfolio",
    key: "portfolio",
    path: "/portfolio",
    popoverData: null,
  },
  {
    icon: blogImg,
    name: "blog",
    key: "blog",
    path: "/blog",
    // popoverData: [
    //   {
    //     platform: "published",
    //     name: "published",
    //     path: "/blog/[user]/published",
    //   },
    //   {
    //     platform: "drafts",
    //     name: "drafts",
    //     path: "/blog/[user]/drafts",
    //   },
    // ],
  },

  // {
  //   icon: contactImg,
  //   name: "contact us",
  //   key: "contact",
  //   path: "/contact-us",
  //   popoverData: null,
  // },
];

// header popover data

export const HEADER_POPOVER = [
  { name: "Published", icon: published, path: "published" },
  { name: "Draft", icon: draft, path: "drafts" },
  { name: "Logout", icon: logout },
];

// Footer Page Constants

export const footer = {
  FOOTER_PAGE_HEADING_EXPLORE: "Explore",
  FOOTER_PAGE_HEADING_VISIT: "Partners",
  FOOTER_PAGE_HEADING_SOCIAL: "Connect",
  socialMediaLinks: [
    {
      href: "https://api.whatsapp.com/send?phone=919878788723&text=",
      icon: BsWhatsapp,
      altText:"whtsapp"
    },
    {
      href: "https://www.linkedin.com/company/81347290",
      icon: GrLinkedinOption,
      altText:"linkedin"
    },
    {
      href: "https://www.instagram.com/redskyadvancesolutions/",
      icon: BsInstagram,
      altText:"instagram"
    },
    {
      href: "https://www.facebook.com/redskyadvancetechnology",
      icon: FaFacebookF,
      altText:"facebook"
    },
    {
      href: "https://www.youtube.com/watch?v=SFiJnki1F7k",
      icon: FaYoutube,
      altText:"utube"
    },
    
  ],
  socialMediaLinksPhone: [
    {
      href: "https://api.whatsapp.com/send?phone=919878788723&text=",
      icon: BsWhatsapp,
    },
    {
      href: "https://www.linkedin.com/company/81347290",
      icon: GrLinkedinOption,
    },
    {
      href: "https://www.instagram.com/redskyadvancesolutions/",
      icon: BsInstagram,
    },
    {
      href: "https://www.facebook.com/redskyadvancetechnology",
      icon: FaFacebookF,
    },
    {
        href: "tel:+919878788723",
        icon: FaPhone,
    },
  ],
};
// Home Page Constants
export const projectImges = [
  "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FhomeLandingSliderImages%2Fimage1ClinzeAir.webp?alt=media&token=df233d74-1335-44a5-a92b-a0dcfc5a8ef0",
  "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FhomeLandingSliderImages%2Fimage4Map.webp?alt=media&token=bb5ccf20-4c47-4561-b50b-c017d4d44074",
  "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FhomeLandingSliderImages%2Fimage5Tripsy.webp?alt=media&token=fce848e7-4195-4b05-968d-d964b36f2554",
  "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FhomeLandingSliderImages%2Fimage3Simplified.webp?alt=media&token=a24edfe3-e858-48e5-9c2e-134c46dd0acc",
  "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FhomeLandingSliderImages%2Fimage2CircleD.webp?alt=media&token=e8713584-4c29-4a9c-a633-28bb75e20d83",
  "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FhomeLandingSliderImages%2Fimage6GymApp.webp?alt=media&token=efc78cac-23e7-4e6c-a5af-8942da8e99ce",
]
export const home = {
  HOME_LANDING_PAGE__HEADING: "Empowering Growth",
  HOME_LANDING_PAGE_HEADING2: "Through Innovative Development Solutions!",
  HOME_LANDING_PAGE__TEXT:
    "We strive to empower your digital vision by delivering efficient, reliable, and innovative technology solutions that align with your unique business goals and objectives.",
  WHY: "WHY",
  WE: "WE ?",
  CHOOSE_US: "CHOOSE US",
  LATEST: "Latest",
  BLOG: "Blog",
  OUR: "Our",
  CERTIFICATIONS: "Certifications",
  EXPLORE_OUR: "EXPLORE OUR",
  COMPLETED_PROJECTS: "COMPLETED PROJECTS",
  SERVICES: "SERVICES",
  WE_OFFER: "WE OFFER",
  WhyUsLists: [
    <>
      Experience the transformative impact of our technological and industrial
      expertise, which fuels remarkable outcomes for ideas, products, or{" "}
      <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        // color="#5ad3f2"
        fontWeight="bold"
        cursor={"pointer"}
      >
        <Link
          href={{
            pathname: "/services",
          }}
          legacyBehavior
          passHref
        >
          <a>services</a>
        </Link>
      </Text>
      , helping you soar to new heights.
    </>,
    <>
      Quality is not just a goal for us; it is an integral part of our
      foundation and the cornerstone of our{" "}
      <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        // color="#5ad3f2"
        fontWeight="bold"
        cursor={"pointer"}
      >
        <Link
          href={{
            pathname: "/services",
          }}
          legacyBehavior
          passHref
        >
          <a>services</a>
        </Link>
      </Text>
      .
    </>,
    "Our greatest competition lies within ourselves, pushing us to constantly raise the bar and surpass our own achievements.",
  ],
  ReviewsDetails: [
    {
      image:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Fsarah.webp?alt=media&token=bca18afa-2441-4e42-85c6-24658d90940c",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Fsarah.jpeg?alt=media&token=d71346ba-efdb-41ec-b080-9b435b7c47aa",
      desc: "They provided professional assistance on this project, filling knowledge gaps to help complete the app in great time. I highly recommend him for work with not only app development and launch but would happily recommend for other projects within his extensive skill set. Great to work with.",
      name: "Sarah hirst",
    },
    {
      image:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Fsara.webp?alt=media&token=933d26bb-69b9-48f0-b51c-2ee9ed33187c",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Fistockphoto-1293903541-612x612.jpeg?alt=media&token=246625e8-7b2b-4973-aa4e-27b68dbbec9e",
      desc: "Sachindeep was great to work with, very helpful and knowledgable on all tasks in the contract. I don't have much experience with the skills required for the project, hence hiring Sachindeep, he was quick to take on the tasks as needed and competently completed everything whilst explaining how things worked when I didn't understand. ",
      name: "Sara",
    },
    {
      image:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Ftradingdash.webp?alt=media&token=c2212115-21cb-4a87-9e0c-3fdb38b22783",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Ftradingdash.jpeg?alt=media&token=bfa9b9ce-fcb5-4ac1-8cc7-37f95fd3bd12",
      desc: "He is an extraordinary developer. Did really very well and beyond expectations. Understood the requirements quickly and get that done before the deadline. I will hire him again.",
      name: "William",
    },
    {
      image:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2FharinderSingh.webp?alt=media&token=4b28dce8-1886-493e-983a-89abb4bed2f1",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2FharinderSingh.avif?alt=media&token=47df5326-41e4-4c4a-8b0d-8ada5282dea3",
      desc: "It was awesome to work with sumit. He understood the requirements clearly and was so much cooperative through out the project. His requirement analysis was too good to take this project in next phase. I recommend him for long term projects to every one on the upwork community. Thanks",
      name: "Harinder Singh",
    },
    {
      image:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2FLeonardo.webp?alt=media&token=18cdfd0f-b995-4f5c-b864-3415e8db657b",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2FLeonardo.jpeg?alt=media&token=26a66911-77cb-4fdc-b2d7-ef3412a09c17",
      desc: "Thanks for the work, Recommended. Programmer met all the requirements of the project, great line of reasoning and good coding.",
      name: "Leonardo Figueiredo",
    },

    {
      image:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Fsaroj.webp?alt=media&token=7ccc5941-ed37-4a1e-9c78-48243055fd92",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FrevidewImages%2Fistockphoto-1254176393-612x612.jpeg?alt=media&token=e69f97e0-3c1c-44a7-8b54-703a45fe94b2",
      desc: "They are very talented peoples and  a genuine team. Would like to work with them again in future. All ways gives best possible solutions.",
      name: "Saroj Sharma ",
    },
  ],
  ourpartners: [
    {
      images: webimages.ourpartners.aws,
    },
    {
      images: webimages.ourpartners.googlepartner,
    },
    {
      images: webimages.ourpartners.googledevp,
    },

    {
      images: webimages.ourpartners.ios,
    },
  ],
};
// service page Constants

export const service = {
  SERVICES_HEADING: "SERVICES",
  HEADING_CONTENT:
  <>
  <Text
    display={"inline"}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="extrabold"
    cursor={"pointer"}
  > <Link
  href={{
    pathname: "/",
  }}
  legacyBehavior
  passHref
>
  <a> Redsky Advance Solutions </a>
</Link>   </Text>is a leading provider of web design and development, mobile application development, and backend services. Our developers use the latest cutting-edge technologies to create bespoke, high-quality, and user-friendly websites and applications.From design to implementation we use a data-driven approach for testing and quality analysis to activate the end-product.
  </>,
  ENGAGEMENT_MODEL: "ENGAGEMENT MODEL",
  WE_OFFER: "WE OFFER",
  PICK_OUT: "PICK OUT",
  YOUR_NICHE: "YOUR NICHE",
  PICK_OUT_CONTENT:
    "pioneer in the development we are providing the best services in the web and app development from desgning and to the new robust development method we are unbeatable",
  SERVICES_WE: "SERVICES WE",
  PROVIDE: "PROVIDE",
  TECHNOLOGY_WE: "TECHNOLOGY WE",
  ARE_USING: "ARE USING",

  faqs: [
    {
      question: "1. Do you offer digital marketing services also?",
      answer: `Yes, We offer a comprehensive range of digital marketing services, including SEO, PPC advertising, social media marketing, email marketing, content marketing, and more. Our goal is to provide a tailored strategy to help your business grow online.`,
    },
    {
      question: "2. Do you offer services only in Mohali and Chandigarh?",
      answer:
        "No, at Redsky Advance Solutions, we offer our services nationwide and globally, as well. Contact us today to get custom web and mobile app development solutions.",
    },
    {
      question: "3. How long does it take to completely make a website?",
      answer:
        "The timeline for each website development project varies on the basis of its complexity and requirements. However, being the best web development company in Mohali we prioritize efficiency without compromising quality. Typically, we complete the projects within 6 to 12 weeks from the initial consultation to launch. Complex projects may take longer, but we work closely with you to establish a realistic timeframe and provide regular updates throughout the process.",
    },
    {
      question:
        "4. What healthcare mobile app development services do you offer?",
      answer:
        "At Redsky Advance Solutions, we specialize in providing comprehensive healthcare mobile app development services. Our services include: Custom Mobile App Development, User-Centric Design, Integration with EHR/EMR Systems, Cross-Platform Compatibility, Data Security and Compliance, and Continuous Support and Maintenance.",
    },
    {
      question:
        "5. What healthcare mobile app development services do you offer?",
      answer:
        "At Redsky Advance Solutions, we specialize in providing comprehensive healthcare mobile app development services. Our services include: Custom Mobile App Development, User-Centric Design, Integration with EHR/EMR Systems, Cross-Platform Compatibility, Data Security and Compliance, and Continuous Support and Maintenance.",
    },
    {
      question:
        "6. Do you offer custom website design or use pre-built templates?",
      answer:
        "Yes, we work with both of them. As per the requirement of customers.",
    },
  ],

  cardData: [
    {
      key: "1",
      images: webimages.foreground.service.cardservice.serviceImage,
      text: "Extended Team",
      para: "We have an excellent capacity to scale up our dedicated developers to complete a project. It works as an extension of your existing team and is managed by us. This allows flexibility in resource allocation and allows us to scale up or down as per client requirements. We’ve successfully set up a number of extended teams for our clients.",
      alt: "doubt image",
    },
    {
      key: "12",
      images: webimages.foreground.service.cardservice.serviceImage2,
      text: "Managed Services",
      para: "We deliver exceptional projects and provide ongoing project support and management services to our clients. Our experts are dedicated to keeping your products up to market expectations and secure. Now, focus on the core competencies while we manage and maintain your IT operations.",
      alt: "placemnt assurance",
    },
    {
      key: "123",
      images: webimages.foreground.service.offer.graphic,
      text: "Managed Product",
      para: "At RedSky Advance Solutions, we understand that the rapid rise in market competition and customer demands require businesses to develop differentiated and competitive products that provide a market advantage. We assist in the development of such products cost-effectively, ensuring that your business stays ahead of the curve.",
      alt: "trending technology",
    },
  ],

  cardData2: [
    {
      image: webimages.foreground.service.icons.calender,
      text: "E-commerce",
    },
    {
      image: webimages.foreground.service.icons.realEstate,
      text: "Education",
    },
    {
      image: webimages.foreground.service.icons.delivery,
      text: "Lifestyle",
    },
    {
      image: webimages.foreground.service.icons.plugin,
      text: "Entertainment",
    },
    {
      image: webimages.foreground.service.icons.graph,
      text: "Utility",
    },
    {
      image: webimages.foreground.service.icons.shopbag,
      text: "Social",
    },
    {
      image: webimages.foreground.service.icons.taxi,
      text: "Travel",
    },
    {
      image: webimages.foreground.service.icons.sethoscope,
      text: "Medical",
    },
  ],
  react: `${(
    <Link href="/reactjs">
      <a>reactjs</a>
    </Link>
  )}`,

  servicesData: [
    {
      main: "Web",
      main2: "Development",
      image: webimages.foreground.service.offer.frontend,
      servicesDatatext: {
        text1: (
          <>
            Our web developers are proficient in{" "}
            <Text
              display={"inline"}
              textDecor="none"
              textUnderlineOffset="3px"
              fontWeight="bold"
            >
              {/* <Link
                // href={{
                //   pathname: "/tech-details",
                //   query: { type: "react" },
                // }}
                legacyBehavior
                passHref
              > */}
                ReactJS
              {/* </Link> */}
            </Text>
            ,{" "}
            <Text
              display={"inline"}
              textDecor="none"
              textUnderlineOffset="3px"
              // color="#d73231"
              fontWeight="bold"
            >
              {/* <Link
                // href={{
                //   pathname: "/tech-details",
                //   query: { type: "angular" },
                // }}
                legacyBehavior
                passHref
              > */}
                Angular
              {/* </Link> */}
            </Text>
            , and
            <Text
              display={"inline"}
              textDecor="none"
              textUnderlineOffset="3px"
              // color="#50b37f"
              fontWeight="bold"
              ml={1}
            >
              {/* <Link
                // href={{
                //   pathname: "/tech-details",
                //   query: { type: "vue" },
                // }}
                legacyBehavior
                passHref
              > */}
                VueJS
              {/* </Link> */}
            </Text>{" "}
            to create dynamic and eccentric websites for our clients.
          </>
        ),
        textListsHeading: "Key features of our websites :",
        textLists: [
          "SEO-friendly",
          "Customized for mobiles, tablets, and desktops",
          "Attractive interface with CTAs",
          "High-conversion landing pages",
          "Enriched with engaging content",
        ],
        text2:
          "We deliver high-tech web development solutions that are fully compatible with Windows, Linux, Unix, Solaris, and iOS. Experience the most secure and robust websites suited to your personal and business requirements.          ",
      },
      buttontext: "Details",
      buttonLink: "services/web-development",
    },
    {
      main: "Mobile Application",
      main2: "Development",
      image: webimages.foreground.service.offer.mobileapp,

      servicesDatatext: {
        textListsHeading:
          "We create qualitatively superior applications for iOS and Android platforms. Our mobile app services include :",
        textLists: [
          "Native iPhone apps using Swift, Xcode, and Objective-C",
          "Native Android apps using Android Studio, C++, and Java",
          "Hybrid apps with HTML5, CSS3, and Javascript",
          "Attractive, clean, and engaging UI/UX designs",
          "Low maintenance and high ROI for apps",
          "Regular app performance and crash testing",
        ],
        text2:
          "We deliver user-centric and seamless mobile app development solutions. We test prototypes on actual devices to check the usability and simplicity of the UI. Our customized coding features every aspect of the business and establishes the brand image.        ",
      },
      buttontext: "Details",
      buttonLink: "/services/mobile-development",
    },
    {
      main: "Backend",
      main2: "Development",
      image: webimages.foreground.service.offer.backend,
      servicesDatatext: {
        text1:
          "We strengthen your app landscape with time-tested backend development solutions. We build robust, scalable, and high-performing backend layers tailored to your project and business requirements.",
        text: (
          <>
            We develop rich and robust backends using{" "}
            <Text
              display={"inline"}
              textDecor="none"
              textUnderlineOffset="3px"
              fontWeight="bold"
            >
              {/* <Link
                // href={{
                //   pathname: "/tech-details",
                //   query: { type: "node" },
                // }}
                legacyBehavior
                passHref
              > */}
                NodeJS
              {/* </Link> */}
            </Text>
            , MongoDB, Firebase, and SQL.
          </>
        ),
        textListsHeading: "Our services include :",
        textLists: [
          "Building, optimizing, and deploying server-side codes",
          "Drafting complex functional protocols",
          "Constructing libraries and other components to maintain architectural consistency",
          "Enabling cloud integration",
          "Facilitating smart digital transformation strategies to strengthen your core IT shape.",
        ],
      },
      buttontext: "Details",
      buttonLink: "/services/backend-development",
    },
    {
      main: "Graphic ",
      main2: "Designs",
      image: webimages.foreground.service.offer.graphic,
      servicesDatatext: {
        textListsHeading:
          "Our experienced graphic designers are proficient in creating visually appealing bespoke designs for your brand and business requirements. Our services include :",
        textLists: [
          "Logo Design",
          "Brochure Design",
          "Flyer Design",
          "Banner Design",
          "Infographic Design",
          "Packaging Design",
        ],
        text2:
          "We ensure that the designs we create are visually attractive, unique to your brand, and represent your products and services in the best possible way.",
      },
      buttontext: "Details",
      buttonLink: "/services/graphic-design",
    },

    {
      main: "Digital",
      main2: "marketing",
      image: webimages.foreground.service.offer.digital,
      servicesDatatext: {
        text1:
          "Unlock the full potential of your brand with our comprehensive digital marketing services. From strategic planning to execution, we offer a range of solutions tailored to elevate your online presence and drive measurable results.",
        textListsHeading: "Our Digital Marketing services:",
        textLists: ["SEO", "PPC", "Social media marketing", "Email marketing"],
        text2:
          "Whether you're looking to increase brand awareness, generate leads, or drive conversions, we have the expertise and tools to help you succeed. Let us help you unlock the full potential of your online presence and take your business to new heights!",
      },
      buttontext: "Details",
      buttonLink: "/services/digital-marketing",
    },
  ],
  tech: [
    {
      images: webimages.foreground.training.logo.react,
      text: "React JS",
    },
    {
      images: webimages.foreground.training.logo.angular,
      text: "Angular",
    },
    {
      images: webimages.foreground.training.logo.vuejs,
      text: "Vue",
    },
    {
      images: webimages.foreground.training.logo.reactNative,
      text: "React Native",
    },
    {
      images: webimages.foreground.training.logo.nativeScript,
      text: "Native Script",
    },
    {
      images: webimages.foreground.training.logo.nextjs,
      text: "nextjs",
    },
    {
      images: webimages.foreground.training.logo.php,
      text: "php",
    },
    {
      images: webimages.foreground.training.logo.mysql,
      text: "my sql",
    },
    {
      images: webimages.foreground.training.logo.sass,
      text: "sass",
    },
  ],
};

// services details page constant

// About Us page Constants
export const FOOTERCARD_TEXT =
  "Unleash Your Digital Potential with Our Innovative Solutions!";

export const aboutUs = {
  ABOUTUS_PAGE_HEADING: "ABOUT US",
  ABOUTUS_PAGE_HEADING_TEXT:
    "Welcome to Redsky Advance Solutions, where the boundaries of digital innovation are constantly pushed. We are a team of creative individuals, combining our expertise and technical prowess to transform your ideas into stunning realities. What sets us apart is our unwavering commitment to excellence and our proficiency in the latest technologies. We tailor our solutions to suit your unique needs, ensuring remarkable success in the form of innovative, efficient, and future-proof solutions. As your companion on the path of digital innovation, we are with you every step of the way, from conception to execution and beyond. Building strong relationships based on trust, transparency, and mutual growth is at the core of what we do.Discover the transformative power of technology with Redsky Advance Solutions and feel the difference!",
  ABOUTUS_PAGE_INNOVATION: "INNOVATION",
  ABOUTUS_PAGE_TEAMWORK: "TEAMWORK",
  ABOUTUS_PAGE_QUALITY: "QUALITY",
  ABOUTUS_PAGE_CARD_HEADING: "Core values that drive us :",
  ABOUTUS_PAGE_CARD_TEXT:
    "Passion, Focus on Customer Success, Learning attitude, Strive for perfection, Pride in growth, We over Me. ",
  ABOUTUS_PAGE_HEADING_OUR: "OUR",
  ABOUTUS_PAGE_HEADING_CULTURE: "CULTURE",
  ABOUTUS_PAGE_HEADING_ODIGNITARIES: "MEET THE ",
  BEHIND_REDSKY: "DIGNITARIES",
  INNOVATION:
    "e believe in the power of innovation to stay at the forefront of the ever-changing technological landscape.  Our team of creative minds thrives on finding out-of-the-box and cutting-edge ways to address business challenges across various industries and deliver transformative outcomes.",
  TEAMWORK:
    "e deliver smart solutions that make a difference by leveraging the strengths of each team member while collaborating seamlessly.  We foster a collaborative work environment where ideas are shared, perspectives are valued, and collective intelligence is harnessed.",
  QUALITY:
    "e have a strong dedication to providing solutions of the highest caliber that go beyond the finished product and cover the end-to-end user experience.  From the first consultation to final product deployment, we adhere to rigorous quality standards.",
  aboutCardDetails: [
    {
      image: webimages.aboutUs.cardsImage.card1,
      title: " Our Mission",
      desc: "We leverage technology to empower businesses to drive innovation and growth. With a focus on quality, collaboration, and customer satisfaction, we strive to be the trusted partner that businesses rely on, to achieve their digital goals.",
    },
    {
      image: webimages.aboutUs.cardsImage.card2,
      title: "Our Value",
      desc: "Integrity, transparency, and excellence are the pillars that underpin everything we do. We strive to develop long-term business relationships with you based on trust, reliability, and ethical business practices, ensuring that your success is our success.",
    },
    {
      image: webimages.aboutUs.cardsImage.card3,
      title: "Our Approach",
      desc: "Our comprehensive approach aims at understanding requirements and translating them into innovative solutions using the most robust and cutting-edge technology stacks. Our intensive brainstorming sessions generate creative ideas that align with your goals and visions help us develop efficient and high-performing digital solutions. We prioritize adaptability and embrace changes seamlessly to stay ahead in the dynamic digital landscape. Our agile methodologies enable us to achieve faster time-to-market, giving you a competitive edge in industries.",
    },
  ],

  dignitariesDetails: [
    {
      image: webimages.aboutUs.digiCards.isha,
      name: "Isha",
      title: "Managing Director",
      desc: "one of our co-founder and a innovator handling all the task of the creativity adn designing just call them",
    },
    {
      image: webimages.aboutUs.digiCards.sumit,
      name: "Sumit",
      title: "Co-founder",
      desc: "the back bone of  both the company and development making your website from simple static poster to the fully fletched application",
    },
    {
      image: webimages.aboutUs.digiCards.sachin,
      name: "Sachin",
      title: "Co-founder",
      desc: "an allrounder in the game and a good and optimistic team leader , they are the co founder responsible for making the good logic",
    },
  ],
  cards: [
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2Fimgpsh_fullsize_anim%20(6).jpg?alt=media&token=9fd41d67-9f4b-4789-9960-a22801b9e80c",
    "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ],
};

// training page Constant
export const trainingConstants = {
  TRAINING_HEADING: "TRAINING",
  HEADING_CONTENT:
  <>
    Redsky Advance Solutions is your premier destination for comprehensive
    <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      >
        <Link
          href={{
            pathname: "/industrial-training",
          }}
          legacyBehavior
          passHref
        >
          <a> Industrial Training in Mohali</a>
        </Link>
      </Text>. We aim to empower aspiring developers with the skills and knowledge required to excel in the fast-paced world of technology. We provide training courses and internships in a wide array of cutting-edge technologies like, ReactJS, React-Native, Angular, VueJS, NodeJS, NativeScript, and many more. Staying relevant in the tech industry is crucial, and that's why we offer hands-on training programs, dedicated guidance, and a problem-solving approach to make you excel!
  </>,
  WHY_TRAINING: "TRUSTED I.T TRAINING",
  AT_REDSKY: "REDSKY ADVANCE SOLUTIONS",
  WHY_TRAINING_CONTENT:
  <>
    Whether you're starting on a new career path, looking to upskill, or seeking professional growth, 
    <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      >
        <Link
          href={{
            pathname: "/",
          }}
          legacyBehavior
          passHref
        >
          <a> Redsky Advance Solutions</a>
        </Link>
      </Text> is your trusted professional training and placement company partner.
  </>,
  TRAINING: "TRENDING",
  WE_PROVIDE: "TECHNOLOGIES",
  OUR: "OUR ",
  SHINING_STAR: "SHINING STARS",
  faqs: [
    {
      question: "1. Why Us?",
      answer: `You would choose us because at Redsky Training, your success is our priority. Our hands-on courses, led by industry experts, are designed to equip you with the skills needed to tackle real-world challenges. Whether you prefer the flexibility of online learning or the engagement of in-person classes, we provide the pathway to expertise.`,
    },
    {
      question:
        "2. What is the difference between industrial training and internships?",
      answer:
      <>
      <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      >
        <Link
          href={{
            pathname: "/industrial-training",
          }}
          legacyBehavior
          passHref
        >
          <a>Industrial training </a>
        </Link>
      </Text>
        is like a structured, long-term program that students do as part of their studies, usually to gain practical skills in a specific industry. Internships are shorter, more flexible work experiences that give students a taste of real-world work, often outside of their academic field.
      </>
    },
    {
      question: "3. What is the Cost structure of industrial training?",
      answer: `The cost structure of industrial training can vary depending on several factors such as the duration of the training program and the course you’ll choose. For more details, please contact us.`,
    },
    {
      question: "4. Do you Provide Certification upon course completion?",
      answer: `Yes, we do. Upon completing a course, you'll receive a Training certificate. This certificate is a mark of your accomplishment, enhancing your resume and opening doors to new career opportunities.`,
    },
    {
      question: "5. Are there any job placement services or career support?",
      answer: `Yes, we offer job placement services and career support to help you excel in your career. Our team assists with resume building, interview preparation, and job search. Also, in-house placement opportunities are available.`,
    },
  ],

  cardData: [
    {
      key: "1",
      images: webimages.foreground.training.illustrations.trainingImage,
      text: "Doubt Support",
      para: " With super experienced teachers and professional developers at all times, anyone can ask any question about the training. Whether you’re a beginner or an experienced coder, get guidance for all your problems.",
      alt: "doubt image",
    },
    {
      key: "12",
      images: webimages.foreground.training.illustrations.trainingImage2,
      text: "Placement Assurance",
      para: "Nothing compares to doing a real coding interview with a real human being. We let you do mock coding interviews with other users on a shared workspace. With us, guarantee your success in final interviews!",
      alt: "placemnt assurance",
    },
    {
      key: "123",
      images: webimages.foreground.service.offer.graphic,
      text: "Trending Technology",
      para: "We work with and teach trending technology used in the real world so that you are never behind the times and can keep up with this fast-paced industry. We equip you with the latest technology during the course, as well.",
      alt: "trending technology",
    },
  ],
  
  gridInfo: [
    {
      logo: webimages.foreground.training.logo.nodejs,
      text: " Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser",
      title: "Node",
      key: "node",
      path: "/industrial-training/node"
    },
    {
      logo: webimages.foreground.training.logo.react,
      text: "React is a front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
      title: "React",
      key: "react",
      path: "/industrial-training/react"
    },
    {
      logo: webimages.foreground.training.logo.react,
      text: " React Native is a framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities ",
      title: "React Native",
      key: "reactnative",
      path: "/industrial-training/react-native"
    },
    {
      logo: webimages.foreground.training.logo.angular,
      text: "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
      title: "Angular",
      key: "angular",
      path: "/industrial-training/angular"
    },
    {
      logo: webimages.foreground.training.logo.vuejs,
      text: " Vue.js is an open-source model-view-viewmodel front-end JavaScript framework for building user interfaces and single-page applications.  ",
      title: "Vue",
      key: "vue",
      path: "/industrial-training/vue"     
    },
    // {
    //   logo: webimages.foreground.training.logo.python,
    //   text: "Python is a high-level, general-purpose programming language that emphasizes readability and simplicity.",
    //   title: "Python",
    //   key: "python",
    // },
    {
      logo: webimages.foreground.training.logo.php,
      text: "php is a free and open-source content management system (CMS) that allows users to create and manage websites and blogs. It is written in PHP and uses a MySQL or MariaDB database to store content.",
      title: "php",
      key: "php",
      path: "/industrial-training/php"
    },
    {
      logo:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2FDigitalMarketing.png?alt=media&token=aa059179-4068-43f9-894d-0a80af00a546",
      text: "Digital marketing is a broad term that encompasses all marketing efforts that use electronic devices or the internet. It involves leveraging digital channels, platforms, and technologies to promote products, services.",
      title: "Digital Marketing",
      key: "digitalmarketing",
      path: "/industrial-training/digital-marketing"     
    },
  ],

  internImagesData: [
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/internshipGallery%2Faaksh.jpg?alt=media&token=db479b65-4b87-4cf8-9737-08e266a8d338",
      name: "Aakash Sharma",
      desc: "Successfully completed Training in ReactJs",
      placedAt: "Cloud Web Solutions",
      review:
        "This is the best software company in Mohali for Industrial training and internship. Honestly they have the best Mentor & Practical Approach to make anyone expert in the development field. My training experience was superb with Redskyatech.",
    },
    {
      id: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/internshipGallery%2Fharshvir.jpg?alt=media&token=929d169b-07d4-4d0f-8f93-aaa73ab4f6ef",
      name: "Harshvir Singh",
      placedAt: "smartData Enterprises",
      desc: "Successfully completed Training in ReactJs",
      review:
        "I had a amazing experience with the Redsky company . Doing an internship of react js in the firm is a great decision for me . Company's environment is very positive and the staff is very supportive.",
    },
    {
      id: 3,
      image: webimages.internImg.img3,
      name: "Shubham Sharma",
      desc: "Successfully completed Training in React-Native",
      placedAt: "In-house",
      review: "Great place to work & learn specially for a beginner.",
    },
    {
      id: 4,
      image: webimages.internImg.img4,
      name: "Surjit Singh",
      desc: "Successfully completed Training in MERN",
      placedAt: "In-house",
      review:
        "I am joined Redsky Advance Solutions pvt. Ltd as a React js trainee. I highly recommend this company for training and internship.They introduce you to the real world and make you understand the actual development thing. ",
    },
    {
      id: 5,
      image:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/internshipGallery%2Fnikhil.jpeg?alt=media&token=d2416b7f-6eae-4807-9345-7debc3045e46",
      name: "Nikhil",
      desc: "Successfully completed Training in React-Native",
      placedAt: "Incredimate Studio",
      review:
        "It was such an amazing learning experience for my personal and professional growth. Also as they commit, providing 100% job assistance actually they do. Thankyou for the wonderful training program, I got placed in a good reputed company with the help of your assistance.",
    },
    {
      id: 6,
      image:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/internshipGallery%2Fparas.jpg?alt=media&token=85df8481-c9ee-457d-a2cb-48d84673340c",
      name: "Paras Anmol",
      desc: "Successfully completed Training in MERN",
      placedAt: "NetFrux Technologies",
      review:
        "I recently completed training with Redsky Advance Solutions, and I'm thrilled with the experience. Their expert trainers, personalized approach, and exceptional support system make them stand out. The skills I gained have been a game-changer for me. I highly recommend Redsky for top-notch training and growth. Thank you, Redsky Advance Solutions, for your excellence in empowering individuals.",
    },
    {
      id: 7,
      image:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/internshipGallery%2Fparmeet.jpg?alt=media&token=cdcc357e-743f-4ba7-842c-15f01c46d958",
      name: "Parmeet Kaur",
      desc: "Successfully completed Training in React-Native",
      placedAt: "Incredimate Studio",
      review:
        "Best company to the people who want to learn new things and want to grow in his career. Such a wonderful experience as a trainee in Redsky Advance Solutions Pvt. Ltd. Best company in Mohali for training.",
    },
    {
      id: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/internshipGallery%2Fsahil.jpg?alt=media&token=db468263-f2d1-461b-adb1-92852d6a51a0",
      name: "Sahil",
      desc: "Successfully completed Training in ReactJs",
      // placedAt: "AppKing Tech Solution Pvt. Ltd.",
      review:
        "The experience of learning with Redsky Advance Solutions Pvt. Ltd. was awesome. They introduce you to the real world and make you understand the actual development thing. Great atmosphere, infrastructure, great team.",
    },
    {
      image: webimages.internImg.img9,
      name: "Abhinav Sharma",
      desc: "Successfully completed Training in ReactJs",
      review:
        "I joined Redsky Advance Solutions pvt. Ltd as a React native trainee. I highly recommend this company for training and internship.",
      placedAt: "Coding Cafe",
    },
  ],

  trainingReviews: [
    {
      image: "https://www.w3schools.com/w3images/avatar2.png",
      desc: "Redsky Advance Solutions pvt.ltd company is best software development company as compared to other companies.they always support to me in every situation such like good or bad ..I rate Redsky Advance Solutions pvt. ltd 5 out of 5 because they provides lots of facilities to enhance the skills of their trainees and interns.",
      name: "Narinder Kumar",
    },
    {
      image: "https://www.w3schools.com/howto/img_avatar.png",
      desc: "I have done my 6 months training in reactjs from Redsky advance technology. My experience with Redsky advance technology was very good. They have very experienced staff. All staff members are very supportive. I recommend you to join the Redsky advance technology for the best frontend and backend courses.",
      name: "Aman Singh",
    },
    {
      image: "https://www.w3schools.com/w3images/avatar6.png",
      desc: "I did my React-Native training from redsky advance  technology.They provide best training one could ever receive.Best place to work and to learn .",
      name: "Samriti Thakur",
    },
    {
      image: "https://www.w3schools.com/w3images/avatar2.png",
      desc: "I completed a six-month industrial training in React Native. We received a lot of experience with Live Project as students While learning and doing practical work, students face numerous challenges. However, our instructor, Sachin Sir, assists them in resolving their issues.",
      name: "Jass Noor",
    },
    {
      image: "https://www.w3schools.com/w3images/avatar6.png",
      desc: "My friend recommended Redsky Advance Technology to me for React js training. On his recommendation, I went to the company and joined as a trainee .  Training was given to me starting from basic to complex concepts. Highly recommended!!  it was an awesome experience .Thanks Redsky Advance Technology",
      name: "Sonia",
    },
  ],
};

// Contact Us page Constant
export const contactUs = {
  CONTACTUS_PAGE_HEADING: "Transform Your Ideas into Reality.",
  CONTACTUS_PAGE_INMIND: " Contact Us to Get Started!",
  CONTACTUS_PAGE_TEXT: `Excited about your project? So are we! Share your requirements in the form below, and our team will reach out to you in a flash (well, almost). Let's make something awesome together!`,
  CONTACTUS_PAGE_SERVICES: "Pick necessary services",
  CONTACTUS_PAGE_EDITER_HEADING: "Any general points you want to give us?",
  CONTACT_US_FORM_HEADING: "We Would Love To Help.",
  CONTACT_US_FORM_TEXT:
    "We'd love to hear from you! Just fill the form and our team will be in touch with you in 24 hours.",
};

// portfolio page Constant
export const portfolioConstants = {
  PORTFOLIO_HEADING: "PORTFOLIO",
  HEADING_CONTENT: `Our portfolio reflects our passion for creating innovative and impactful digital solutions. Each project is a testament to our commitment to excellence and our ability to deliver results that exceed our client's expectations. Explore our portfolio to see how we can bring your next project to life!`,
  DOMAINS_THAT_WE: "DOMAINS THAT WE",
  HAVE_WORKED_FOR: "HAVE WORKED FOR",
  portfolio_content: `Thank you for considering our company for your IT needs. We have a wide range of experience in the IT field and are confident that we can meet your needs. Our portfolio includes a variety of projects that showcase our skills and expertise. Please take a look and let us know if you have any questions. We look forward to hearing from you soon.`,
  platforms: [
    {
      icon: web,
      name: "Web",
      key: "web",
      techWeUse: [
        // { tech: "Node js", key: "node", icon: node },
        { tech: "React js", key: "react", icon: react },
        { tech: "Angular", key: "angular", icon: angular },
        { tech: "Vue js", key: "vue", icon: vue },
      ],
      content:
        "A website is a group of globally accessible, interlinked web pages which have a single domain name. It can be developed and maintained by an individual, business or organization. The website aims to serve a variety of purposes.",
    },
    {
      icon: crossPlatform,
      name: "Hybrid",
      key: "hybrid",
      techWeUse: [
        { tech: "React Native", key: "reactnative", icon: react },
        { tech: "NativeScript", key: "nativescript", icon: nativeScript },
      ],
      content:
        "Hybrid apps are essentially web apps that have been put in a native app shell. Once they are downloaded from an app store and installed locally, the shell is able to connect to whatever capabilities the mobile platform provides through a browser that's embedded in the app.",
    },
    {
      icon: graphicDesign,
      name: "Graphic Design",
      key: "graphic-design",
      // techWeUse: [
      //   { tech: "XD", key: "xd", icon: xd },
      //   { tech: "Figma", key: "figma", icon: figma },
      //   { tech: "Photoshop", key: "ps", icon: ps },
      //   { tech: "Illustrator", key: "ils", icon: ils },
      //   { tech: "After Effect", key: "ae", icon: ae },
      // ],
      content:
        "Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Graphic design is an interdisciplinary branch of design and of the fine arts",
    },
  ],
  cardData: [
    {
      key: { name: "sabg", value: 1 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/images%2Fsabg.png?alt=media&token=991a33ae-55e2-4ae6-b570-d762db3a9506`,
      text: "SABG APP",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["nativescript", "xd", "illustrator"],
    },
    {
      key: { name: "heater", value: 2 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Fsmart-sauna(heater-app)%2Fscandia%20(heater%20app).png?alt=media&token=17ed825e-66cc-47dc-b202-4f7b3d9f53bb`,
      text: "HEATER APP",
      para: "this is business bbased payment application website developed at the redsky with the modern optiomised technology ",
      alt: "placement assurance",
      type: ["hybrid", "graphic-design"],
      tech: ["react native", "figma", "illustrator"],
    },
    {
      key: { name: "mr&mrs", value: 3 },
      images:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Fmr%26mrs%2FMr%20%26%20Mrs.png?alt=media&token=414c0e6e-b7c7-4dd3-9f5a-336849129cea",
      text: "MR. AND MRS APP",
      para: "a multination portoflio website that attracts thousand of users from design to the development everything at the core is done by our team of develoers ",
      alt: "trending technology",
      type: ["hybrid"],
      tech: ["nativescript"],
    },
    {
      key: { name: "music-q", value: 4 },
      images: webimages.foreground.portfolio.screenshot.screenshot4,
      text: "Music Q",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid"],
      tech: ["nativescript"],
    },
    {
      key: { name: "driving-quiz", value: 5 },
      images: webimages.foreground.portfolio.screenshot.screenshot5,
      text: "DRIVING QUIZ APP",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid"],
      tech: ["react native"],
    },
    {
      key: { name: "rentomach", value: 6 },
      images: webimages.foreground.portfolio.screenshot.screenshot6,
      text: "RENTOMACH APP",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid"],
      tech: ["react native"],
    },
    {
      key: { name: "ssbrokers", value: 7 },
      images:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Fssbrokers%2FSS%20Brokers.jpg?alt=media&token=864e3c88-5517-4760-afd7-8f21b758569c",
      text: "SSBROKERS APP",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid"],
      tech: ["nativescript"],
    },
    {
      key: { name: "doctor-patients", value: 8 },
      images: webimages.foreground.portfolio.screenshot.screenshot8,
      text: "DOCTOR PATIENTS APP",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["web"],
      tech: ["vue js"],
    },
    {
      key: { name: "reddo", value: 9 },
      images: webimages.foreground.portfolio.screenshot.screenshot9,
      text: "REDDO APP",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["web"],
      tech: ["react js"],
    },
    {
      key: { name: "bazebo", value: 10 },
      images:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Fbazebo%2Fbazebo.png?alt=media&token=6e38dee3-96de-46d8-b684-cd85b51d0da1",
      text: "BAZEBO",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["react native", "xd", "illustrator"],
    },
    {
      key: { name: "bsrs", value: 11 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Fbali's-rental-services%2Frental.png?alt=media&token=db325219-1720-4994-8aef-23adae88f44e`,
      text: "BALI'S RENTAL SERVICES",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["react native", "xd", "illustrator"],
    },
    {
      key: { name: "eatit", value: 12 },
      images:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Featit%2Featit.png?alt=media&token=aa006cd0-e3e8-4d96-9c38-df63bc5dd01b",
      text: "EAT IT",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["nativescript", "figma", "illustrator"],
    },
    {
      key: { name: "fsh", value: 13 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Ffarmer's-hut%2Ffarmers-hut.png?alt=media&token=865084f0-5e12-4eaa-b43d-eba6b4c181a8`,
      text: "FARMER'S HUT",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["react native", "figma", "illustrator"],
    },
    {
      key: { name: "investcheck", value: 14 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Finvest-check%2Finvest%20check.png?alt=media&token=6c9edd58-9534-454d-86ae-d1da06d71307`,
      text: "INVEST CHECK",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["react native", "figma", "illustrator"],
    },
    {
      key: { name: "msd", value: 15 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Finvest-check%2Finvest%20check.png?alt=media&token=6c9edd58-9534-454d-86ae-d1da06d71307`,
      text: "MAURITIUS DRIVING GUIDE",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["nativescript", "xd"],
    },
    {
      key: { name: "shopapp", value: 16 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Fshop-app%2Fshop%20app%20icon.png?alt=media&token=af3f8cb0-a9c1-4ac5-b9c0-efe2fce15a57`,
      text: "SHOP APP",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["hybrid", "graphic-design"],
      tech: ["nativescript", "figma", "illustrator"],
    },
    {
      key: { name: "eatit-admin", value: 17 },
      images: `https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/RedskyProjects%2Featit%2Featit.png?alt=media&token=aa006cd0-e3e8-4d96-9c38-df63bc5dd01b`,
      text: "EAT IT ADMIN",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "doubt image",
      type: ["web", "graphic-design"],
      tech: ["angular", "xd"],
    },
  ],

  projectsData: [
    {
      // key: 1,
      projectName: "Brightsky",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame2.png?alt=media&token=4cbcd12c-0827-4689-892f-e26375ffc429",
      text: "Brightsky",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Brightsky image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },
    {
      // key: 2,
      projectName: "Sey-Btz",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame6.png?alt=media&token=9e348283-a366-44cb-aea8-a9024af8c9fc",
      text: "Sey-Btz",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Sey-Btz image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },
    {
      // key: 3,
      projectName: "Reddo",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame7.png?alt=media&token=fbd448fc-db1e-4667-b2da-1c5cbdccd53b",
      text: "Reddo",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Reddo image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      // key: 4,
      projectName: "Mr & Mrs",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame5.png?alt=media&token=99333c5b-c4b6-4416-a34d-63369701d7f4",
      text: "Mr & Mrs",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Mr & Mrs image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },
    {
      // key: 5,
      projectName: "Eat-it",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame4.png?alt=media&token=dec2e6a9-22ec-4540-b089-a58afe91ce69",
      text: "Eat-it",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Eat-it image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },
    {
      // key: 6,
      projectName: "FitnessApp",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame1.png?alt=media&token=f9b53240-dd26-4345-81a9-ac1096cf513e",
      text: "FitnessApp",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "FitnessApp image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      // key: 6,
      projectName: "School-Admin",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame8.png?alt=media&token=44b82e11-89a8-4d03-8f02-c6dbaf956e5d",
      text: "School-Admin",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "SchoolAdmin image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      // key: 6,
      projectName: "Ilus",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame9.png?alt=media&token=dc700ec8-7a8c-43f4-920b-d37e19b2f489",
      text: "Ilus",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Ilus image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      // key: 6,
      projectName: "Valet",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame10.png?alt=media&token=52f35e14-7487-49ae-be5b-aebd0b876aa9",
      text: "Valet",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "FitnessApp image",
      type: ["all"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    // web

    {
      projectName: "Valet",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame1.png?alt=media&token=727f392e-8a2f-4036-8ce3-dfe2d513c668",
      text: "Valet",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "FitnessApp image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Ilus",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame2.png?alt=media&token=e2751088-7329-4f94-8f12-8100db4173c9",
      text: "Ilus",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Ilus",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "School-Admin",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame3.png?alt=media&token=8fc0a7ad-ed73-4a0a-9c15-c344b4732796",
      text: "School-Admin",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "School-Admin image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Mr & Mrs",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame4.png?alt=media&token=9af5e2dc-b574-4c2d-b57d-8ff810a28830",
      text: "Mr & Mrs",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Mr & Mrs image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Sey-Btz",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame5.png?alt=media&token=e3886b87-776c-43ee-beae-71e68aee43dc",
      text: "Sey-Btz",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Sey-Btz image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Eat-it",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame6.png?alt=media&token=59ef32ad-f6a7-43e2-aea9-8c1263addf72",
      text: "Eat-it",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Eat-it image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Reddo",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame7.png?alt=media&token=d6efa8c2-02a9-400e-966e-c011294c2d2d",
      text: "Reddo",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Reddo image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Brightsky",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame8.png?alt=media&token=23976110-b0e9-4d45-af7b-4ca59cda940f",
      text: "Brightsky",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Brightsky image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },
    
    {
      projectName: "FitnessApp",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2Fweb%2FwebPortfolioFrame9.png?alt=media&token=35e3ebdc-e4f0-4f15-87d4-eed9056df155",
      text: "FitnessApp",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "FitnessApp image",
      type: ["web"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    // mobile

    {
      projectName: "Valet",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame1%201.png?alt=media&token=a53a91db-c781-418c-a0fd-e2ce1f5aa6b0",
      text: "Valet",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Valet image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Ilus",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame2%201%20(1).png?alt=media&token=fa2fa891-4b9f-4990-9ea4-1d450601ede0",
      text: "Ilus",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Ilus image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "School-Admin",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame3%201.png?alt=media&token=caee75c3-941f-4e20-9439-6bfff98f16c6",
      text: "School-Admin",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "School-Admin image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Mr & Mrs",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame4%201.png?alt=media&token=75a747f0-c6ef-4456-b774-607319d783fd",
      text: "Mr & Mrs",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Mr & Mrs image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Sey-Btz",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame5%201.png?alt=media&token=fdd54b28-bf6c-4d80-8161-dcb6215008bf",
      text: "Sey-Btz",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Sey-Btz image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Eat-it",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame6%201.png?alt=media&token=68eaa2a9-8a49-4383-a650-0b263eb38815",
      text: "Eat-it",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Eat-it image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Reddo",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame7%201.png?alt=media&token=3b923ed6-de94-4dd5-acb1-061f28a42132",
      text: "Reddo",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Reddo image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },

    {
      projectName: "Brightsky",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame8%201.png?alt=media&token=4c45bc2c-a94d-46c1-952e-5892296b5da8",
      text: "Brightsky",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "Brightsky image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },
    {
      projectName: "FitnessApp",
      imgsrc:
        "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FmobileProjects%2FmobilePortfolioFrame9%201.png?alt=media&token=ac3ac262-75a8-4719-b1cc-c356aa433efe",
      text: "FitnessApp",
      para: "this is the fintech appliction developed with the help of robust technology and is serving more than 40 milioon coustomers",
      alt: "FitnessApp image",
      type: ["hybrid"],
      tech: ["nativescript", "xd", "illustrator"],
    },
  ],
};

export const feedbackCardsDetails = {
  PAGE_HEADING_EXCELLENCE: "EXCELLENCE",
  PAGE_HEADING_TEXT:
    "We provide more than just expertise and experience. Our proven track record ensures maximum efficiency and productivity.",
  ADVANCED_CONTENTS:
    "Equipping with the transformative technology solutions that need to gain an edge in the industry.",
  HAPPY_CLIENTS_CONTENTS:
    "Building strong business relationships based on trust, reliability, and exceptional results.",
  APPROVAL_RATING_CONTENTS:
    "We wear this remarkable rating as a badge of honor, reflecting our unwavering commitment to excellence. Through continuous efforts and a solution-oriented approach, we strive to consistently surpass expectations, earning the trust and satisfaction of those we proudly serve.    ",
};

// Carriers Page Constants
export const carrier = {
  CARRIER_HEADING: "CAREER",
  HEADING_CONTENT: `Join our team at Redsky Advance Solutions and be part of a journey where innovation meets excellence! We're looking for talented individuals who are passionate about their profession and eager to learn and grow with us. If you're ready to take your career to the next level and work on exciting projects, explore our current opportunities below. We look forward to welcoming you to our team!`,
  WE_ARE: "WE ARE",
  HIRING_FOR: "HIRING FOR",
  carrierCardDetails: [
    {
      title: "React dev",
      postedDate: "posted: 18 march 2022",
      leftDesc:
        "Hire ReactJS developer to build interactive, dynamic, and feature-rich front end application ",
      rightDesc:
        "Schedule interviews. Meet and select the developers you like.",
    },
    {
      title: "Angular dev",
      postedDate: "posted: 18 march 2022",
      leftDesc:
        "Hire Angular developer to build interactive, dynamic, and feature-rich front end application",
      rightDesc:
        "Schedule interviews. Meet and select the developers you like.",
    },
  ],
};

// blog
export const blog = {
  BLOG_HEADING: "OUR BLOG",
  HEADING_CONTENT: `Explore the world of digital creativity and innovation with our blog! Here, we share insights, tips, and trends to help you navigate the ever-evolving world of technology and marketing. From the latest in web development and design to digital marketing strategies that drive results, our blog is your hub for staying informed and inspired. Join us on this exciting journey as we share our expertise and knowledge to empower you on your digital journey!`,
};
// blog page constant
export const blogConstant = {
  LANDING_HEADING: "DISCOVER NEW EXPERIENCE",
  EXPERIENCE_IN: " IN  BLOGGING",
};

export const LEARN_MORE_CONTENT = `Shovels at rakes plows. Blue berries pigeons buzz and bean prairie dogs nails at est. Gourds utters at welding equipment a oink oink haybine. Oranges cucumbers rhubarb gourds watermelon. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Apples ducks straw, quail a ostriches donkey, ha.
Hook cucumbers. Augers oats hen cowpies. Peacocks baa ostriches owls. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. In the straw rain barrels. Grapes at yams mushrooms organic berries gobble. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Blue berries pigeons buzz and bean prairie dogs nails a.
Est. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. John Deere bees, parsley sweet corn at, porky pig shovels. Cat at pineapples pigeons. Utters are weathervane foal est. House hen chinchillas in barn livestock cat hogs chicks trucks. Fertilizer buzz.
Purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. veterinarian blue berries cattle jelly canning. . House hen chinchillas in barn livestock cat hogs chicks trucks. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Augers oats hen cowpies. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.
House at pony. Augers oats hen cowpies. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. Forage Harvester rakes peacocks, squeal garden woof. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Stra.
Augers beef kettle our crickets. . In the straw rain barrels. Straw augers beef kettle our crickets. Lamb in eggplant baler rain barrels manure hay rake. Mouse soybeans sweet corn hogs llamas or oink oink wind. Straw augers beef kettle our crickets. Cauliflower a seeds quail. Goat goose hen horse. Apples ducks straw, quail a ostriche.
Donkey, hay hook cucumbers. Augers oats hen cowpies. John Deere bees, parsley sweet corn at, porky pig shovels. veterinarian blue berrie.`;

export const TECH_SYLLABUS_HEADING = `Node Js Training Syllabus`;
export const TECH_SYLLABUS_TEXT = `Our Node Js Training in Chandigarh is designed and curated by industry
experts who have over 20+ years of experience working as Back End
Developers. That's, why by enrolling in this training program, you can
build a solid foundation for all the core components of Website
Developement.`;

export const TRAINING_TECH_DETAILS_CONTENT = [
  {
    platform:"Node",
    tech: "Node",
    techSyllabus: `Node Js Training Syllabus`,
    techSyllabusText: `Our Node Js Training in Chandigarh is designed and curated by industry
experts who have over 20+ years of experience working as Back End
Developers. That's, why by enrolling in this training program, you can
build a solid foundation for all the core components of Website
Developement.`,
    techLogo: webimages.foreground.training.logo.nodejs,
    metaTitle: "Node.js Training in Mohali | Redsky Advance Solutions | Your Top Choice!",
    metaDescription:
    "Get ahead in your career with Node.js training in Mohali at Redsky Advance Solutions. Join us today and take your skills to the next level!",
    techHeadline:
      "Node.jsⓇ; an open-source, cross-platform JavaScript runtime environment. It is a library for running web apps outside the client's browser.",
    overviewHeading: "Overview",
    overview: 
    <>
    Node.js is an open-source server environment. Node.js is a cross-platform runtime environment. It functions seamlessly on Windows, Linux, Unix, and macOS. It serves as a back-end JavaScript runtime and harnesses the power of the V8 JavaScript Engine to execute JavaScript code independently of web browsers.
      Explore Node.js courses for web and mobile development. Build apps at any scale, for various purposes. Companies are actively seeking Node.js developers. Start your Node.js training with Redsky Advance Solutions - the
      <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > <Link
      href={{
        pathname: "/industrial-training/node",
      }}
      legacyBehavior
      passHref
    > best nodejs training in Mohali </Link></Text>, with qualified instructors.,
    </>,
    title1: "The Best Training Company in Mohali - ",
    title2: "Redsky Advance Solutions",
    techFeatures: [
      {
        feature: "Implemented in JavaScript",
        featureContent: `Node.js is coded in JavaScript, which is one of the most popular programming languages worldwide. Most developers are already familiar with JavaScript, its functionality, and various fundamental and advanced concepts. This familiarity makes learning and grasping Node.js quite straightforward. Node.js enables developers to create complete web projects using JavaScript.`,
        featureIcon:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fmodular.png?alt=media&token=d209f9eb-2972-4c22-a8f0-3ec6b29d0f3f",
      },
      {
        feature: "Asynchronous Nature",
        featureContent: `Node.js is prized for its asynchronous nature, which means a Node.js server doesn't have to wait for data from an API. This is achieved through non-blocking I/O, where code doesn't hinder other operations. Together, asynchronous and non-blocking features result in Node.js delivering rapid responses and an enhanced user experience.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FliveReloading.png?alt=media&token=85dc7cc3-b8c5-4797-bc21-37363d3749bc",
      },
      {
        feature: "Event-Driven Architecture",
        featureContent: `In Node.js, "event-driven" signifies that an action triggers a corresponding event. When events are triggered or completed, they invoke callback functions, also known as event handlers. Callback functions are resource-efficient and consume less memory on the server side. This lightweight characteristic is a key benefit of Node.js.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fcreated.png?alt=media&token=9e4891cf-ffd4-445f-82a9-ad039ca183a6",
      },
      {
        feature: "Single-Threaded Working",
        featureContent: `Node.js handles all requests as single threads, gathering them in the event loop. This means all tasks, from receiving requests to processing and responding to clients, occur within the same thread. This design prevents unnecessary reloading and minimizes content-switching time, making Node.js a cost-effective choice.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fdeclarative.png?alt=media&token=3b29fd36-6521-4d0d-ae2c-6450b7b604cd",
      },
      {
        feature: "Scalability",
        featureContent: `Many companies seek highly scalable and robust applications. Node.js excels in handling concurrent requests, efficiently utilizing all active CPU cores. This capability makes it a preferred choice for developers. Additionally, the diverse Node.js versions cater to various client needs, offering high customizability.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Faccesability.png?alt=media&token=20ada7ba-5b60-4235-b07d-f944a4acd28a",
      },
      {
        feature: "Zero Buffering",
        featureContent: `Node.js operates with data streams that process data in small, discrete chunks, eliminating buffering when Node.js is in use.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Ffast.png?alt=media&token=7531575d-968b-4cd7-98d3-c29ed76fdb09",
      },
    ],
    sectionImg1: 
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fnode%2Fadvantages.png?alt=media&token=ff576eb8-2a75-4bee-bd2f-7d0afd824232",
    sectionTitle1: "Advantages of Node.js",
    textLists: [
      "Open-Source: Node.js is freely available to all developers, fostering a vibrant community. This community continually contributes to its knowledge base, sharing its insights and code enhancements.",
      "JavaScript Expertise: Leveraging JavaScript, Node.js taps into a vast pool of developers well-versed in this language. This familiarity makes it accessible for new team members, streamlining the training process.",
      "Efficiency: Node.js relies on Push technology instead of web sockets, making it the top choice for real-time communication applications and highly scalable programs.",
    ],

    sectionImg2:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fnode%2Flearn.png?alt=media&token=bc85fc9b-9c47-49ec-ae15-fd2bef5cc009",
    sectionTitle2: "What You’ll Learn in Our Node.js Training?",

    textLists2: [
      " Node.js Introduction.",
      " ExpressJS Installation and Routing.",
      "Testing Techniques: Mocks, Testing Frameworks, Stubs.",
      "Asynchronous Programming in JavaScript.",
      " HTTP and Building HTTP Servers with Node.",
      "Filesystem and File Operations.",
      " Creating REST APIs with Mongoose and Express.",
      "Streams and Events.",
      "MongoDB Integration.",
    ],

    sectionImg3:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fnode%2Fenroll.png?alt=media&token=fcef7647-1426-408f-97d1-4c36c01544cf",
    sectionTitle3: "Who Should Enroll in the Node.js Course?",
    textLists3: [
      "Testing Experts, Web Development Specialists, Project Management Professionals.",
      "Software Architecture Experts.",
      "Enthusiastic Beginners interested in Node.js Web Development.",
    ],

    faqs: [
      {
        question: "1. What will I learn in this Node.js training?",
        answer:
        `Our Node.js training covers a wide range of topics, including HTML, CSS, JS, the basics of Node.js, working with modules and building RESTful APIs.`,
      },
      {
        question: "2. Will I receive a certificate after completing the training?",
        answer:
        `Yes, upon successful completion of the Node.js training, you will receive a certificate that you can add to your resume and showcase your expertise in Node.js development.`,
      },
      {
        question: "3. What sets your Node.js training apart from others?",
        answer:
        `Our Node.js training is designed by industry experts and includes hands-on projects and real-world examples to help you gain practical experience.`,
      },
      {
        question:
          "4. What are the career opportunities for Node.js developers?",
        answer:
        `Node.js developers are in high demand. You can pursue roles such as Node.js developer, full-stack developer, backend developer, and more.`,
      },
      {
        question:
          "5. Is there job placement assistance available after completing the training?",
        answer:
        `Yes, we offer job placement assistance to help you find opportunities in the field of Node.js development. Our team will guide job search strategies, resume writing, and interview preparation.`,
      },
    ],

    syallbus: [
      {
        question: "1. Introduction to Node.js",
        textList: [
          "Definition and Overview",
          "Benefits and Use Cases",
          "Node.js vs. Other Server-side Platforms",
          "Installing and Setting Up Node.js",
        ],
      },
      {
        question: "2. Understanding JavaScript & ES6+ Concepts",
        textList: [
          "Event Loop and Callbacks",
          "Promises, Async/Await",
          "Arrow Functions, Template Literals, Destructuring",
        ],
      },
      {
        question: "3. Basics of Node.js",
        textList: [
          " The Global Object",
          "Modules, require() Function",
          " Event Emitter",
          " Buffer and Streams",
        ],
      },
      {
        question: "4.Working with the Node Package Manager (NPM)",
        textList: [
          "Overview of NPM",
          "Installing and Removing Packages",
          "Understanding package.json and node_modules",
          "Managing Project Dependencies and Dev Dependencies.",
        ],
      },
      {
        question: "5. Building Web Servers with Node.js",
        textList: [
          "Core HTTP Module",
          "Creating a Basic Server",
          "Serving HTML and JSON",
          "Handling Routes and Requests",
        ],
      },
      {
        question: "6. Introduction to Express.js",
        textList: [
          "Overview of Express.js Framework",
          "Setting up Express.js",
          "Routing with Express",
          "Middlewares and their Importance",
          "Serving Static Files",
        ],
      },
      {
        question: "7. Templating Engines",
        textList: ["EJS, Handlebars, Pug", "Rendering Dynamic Content"],
      },
      {
        question: "8.Handling Data with Forms and RESTful Services",
        textList: [
          "GET, POST, PUT, DELETE Requests",
          "File Uploads",
          "Building REST APIs with Node.js and Express",
        ],
      },
      {
        question: "9. Data Storage Solutions",
        textList: [
          "Relational Databases: MySQL, PostgreSQL with Sequelize ORM",
          "NoSQL Databases: MongoDB with Mongoose ODM",
          "Redis for Caching",
        ],
      },
      {
        question: "10. User Authentication and Authorization",
        textList: [
          "Session-based Authentication",
          "Token-based Authentication: JWT (JSON Web Tokens)",
          "OAuth with Passport.js",
        ],
      },
      {
        question: "11.Error Handling and Debugging",
        textList: [
          "Understanding Error-first Callbacks",
          "Debugging with Built-in Debugger and External Tools",
        ],
      },

      {
        question: "12. Advanced Topics",
        textList: [
          "Clusters and Child Processes",
          "Buffers, Streams, and File Systems",
          "Building Real-time Applications with Socket.io",
          "Implementing HTTPS and Securing Node.js Apps",
        ],
      },
      {
        question: "13. Testing and Deployment",
        textList: [
          "Writing Unit and Integration Tests: Mocha, Chai, Jest",
          "Mocking: Sinon",
          "Deployment Strategies for Node.js Apps",
          "Continuous Integration and Continuous Deployment (CI/CD)",
        ],
      },
      {
        question: "14. Best Practices and Patterns",
        textList: [
          "Modularizing Code: Design Patterns in Node.js",
          "Keeping the Codebase Clean: ESLint, Prettier",
          "Handling Secrets and Configurations",
        ],
      },
      {
        question: "15. Final Project and Case Studies",
        textList: [
          "Building a Full-fledged Application from Scratch",
          "Analyzing Real-world Applications Using Node.js",
        ],
      },
    ],
  },
  {
    platform:"React",
    tech: "React",
    techSyllabus: `React Js Training Syllabus`,
    techSyllabusText: `Our React Js Training in Chandigarh is designed and curated by industry
experts who have over 20+ years of experience working as Back End
Developers. That's, why by enrolling in this training program, you can
build a solid foundation for all the core components of Website
Developement.`,
    techLogo: webimages.foreground.training.logo.react,
    metaTitle: "Top React Training Providers in Mohali: Redsky Advance Solutions",
    metaDescription:
    "Looking to master React? Redsky Advance Solutions in Mohali offers top-notch training to level up your skills. Join us for expert-led courses.",
    techHeadline:
      "React is a JavaScript library for creating user interfaces. It is declarative, efficient and flexible.",
    overviewHeading: "Overview",
    overview:
    <>
      React, also known as React.js or ReactJS, is a widely practiced JavaScript library for crafting robust and engaging web applications. Throughout your journey with React, we will help you acquire the skills to kickstart your development and progress towards creating dynamic user interfaces. During this learning experience, you will delve into React's unique features, including JSX, components, state management, props, hooks, and more.Enroll in the best 
      <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > <Link
      href={{
        pathname: "/industrial-training/react",
      }}
      legacyBehavior
      passHref
    > React training in Mohali </Link></Text>and get a competitive edge as a front-end or full-stack web developer.
    </>,
    title1: "React Learning",
    title2: "Course in Chandigarh",
    techFeatures: [
      {
        feature: "Declarative",
        featureContent:
          "React helps in creating interactive UIs seamlessly. Create straightforward views for every state in your application, and React will adeptly update and render the precise components when your data undergoes changes. Declarative views enhance code predictability and simplify the debugging process.",
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fdeclarative.png?alt=media&token=3b29fd36-6521-4d0d-ae2c-6450b7b604cd",
      },
      {
        feature: "Simplicity",
        featureContent:
          "ReactJS is a component-based framework that uses JavaScript files with the .jsx extension to create user interfaces. JSX is a syntax extension that allows you to write HTML-like syntax in your JavaScript code, making it easier to write and maintain React components.",
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2FEasytolearn.png?alt=media&token=85865a4d-8d66-4e56-9ec8-9775abd90c4e",
      },
      {
        feature: "SEO-Friendly",
        featureContent:
          "ReactJS helps developers build fast, interactive, and SEO-friendly web applications. ReactJS is known for its super-fast rendering feature, which can significantly improve the load time of your app. This is important for SEO because search engines like Google favor apps that load quickly.ReactJS also makes it easy to use keywords and add metadata to your app.",
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2FSEOFriendly.png?alt=media&token=e5eedebe-518b-46d4-95be-169d51b1a7ab",
      },

      {
        feature: "Performance",
        featureContent:
          "ReactJS is known to be a great performer. This feature sets it apart from many other contemporary frameworks. It excels because it oversees a virtual DOM, a cross-platform programming API that handles HTML, XML, or XHTML.",
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fperformance.png?alt=media&token=0a4ed791-f9af-4e04-acac-1c2d8d98b71e",
      },
      {
        feature: "Helpful Developer Toolset",
        featureContent:
          "Facebook has included several developer tools for React and Chrome in the ReactJS framework, and they help developers immensely in discovering parent and child components, observing their hierarchies, examining their present state, and so on. Developers can effectively apply emerging technologies in real, live projects through self-learning.",
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2FhelpFul.png?alt=media&token=470cd724-d221-48e0-9207-8310959b75c9",
      },
      {
        feature: "Blazing Fasty",
        featureContent:
          "Internally, React employs various ingenious techniques to reduce the need for performing expensive DOM operations when updating the UI. For many applications, using React will lead to a fast user interface with little work to specifically optimize for performance. However, there are multiple methods to accelerate your React application.",
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Ffast.png?alt=media&token=7531575d-968b-4cd7-98d3-c29ed76fdb09",
      },
    ],

    sectionImg1:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2FrequiredForTraining.png?alt=media&token=84243e09-7420-47a3-a5bf-81f8ef5a12da",
    sectionTitle1: "Eligibility and Prerequisites",
    sectionContent1:
      "Our ReactJS-certified course is tailored for web developers who want to design and construct UI/UX solutions for both mobile and web applications, all while optimizing their workflow with the React JavaScript library.",
    textHeading:
      "To enroll in this course, learners should meet the following prerequisites:",
    textLists: [
      "Hold either an undergraduate degree or a high school diploma.",
      "Laptop for practicing.",
    ],

    sectionImg2:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Flearn.png?alt=media&token=22dbaf63-2f51-4361-be65-bc63ef002caa",
    sectionTitle2: "What You Will Learn",
    sectionContent2:
      "Our React training program covers a wide range of topics: ",
    textHeading2:
      "By the end of the program, you all have a solid foundation in React development and the skills to build complex web applications.",
    textLists2: [
      "The basics of JSX and React components.",
      "Lessons on state management, event handling, and routing.",
      "Advanced topics like Hooks and the Context API.",
      "Real-world projects.",
      "Learn user authentication with JWT and Redux for state management.",
    ],
    sectionImg3: 
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fshared%2Fopportunity.png?alt=media&token=7b5b118d-ae72-46ca-85ce-cc6dc6a58190",
    sectionTitle3: "Your Trusted and The Best React Training in Mohali",
    sectionContent3: "Empower your career growth with us:",
    textLists3: [
      "Gain job-ready skills through a cutting-edge curriculum shaped by industry and academic experts.",
      "Learn from active industry practitioners, not disconnected trainers, with up-to-date best practices and case studies.",
      "Tackle real-world challenges through capstone projects using actual data sets in virtual labs.",
      "Benefit from continuous learning with structured guidance and 24x7 support from mentors.",
    ],
    faqs: [
      {
        question: "1.Which topics are covered in the React training?",
        answer:
        "In React training, you'd cover topics like components, state management, routing, hooks, forms, API interaction, Redux and best practices.",
      },
      {
        question: "2. Will the training include hands-on projects to practice?",
        answer:
        "Yes, our Reactjs training includes hands-on projects that will help you to apply your learning in practical scenarios and build a portfolio of work.",
      },
      {
        question: "3. What is the format of the training (online, in-person)?",
        answer:
        <>
        We at  <Text
    display={"inline"}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="extrabold"
    cursor={"pointer"}
  > <Link
  href={{
    pathname: "/",
  }}
  legacyBehavior
  passHref
>
  <a> Redsky Advance Solutions </a>
</Link>   </Text>  provides both online and offline training options.,
        </>
      },
      {
        question:
          "4. Are there any discounts or scholarships available?",
        answer:
        "Yes, we offer group discounts. If three or more students join together, each student is eligible for a discount. You can contact us for more information on discounts and scholarships.",
      },
      {
        question:
          "5. Can I get a certificate upon completion of the training program?",
        answer:
        "Yes, you will receive a certificate of training completion.",
      },
    ],

    syallbus: [
      {
        question: "1. Introduction to React js",
        textList: [
          "Definition and Overview",
          "Benefits and Use Cases",
          "Node.js vs. Other Server-side Platforms",
          "Installing and Setting Up Node.js",
        ],
      },
      {
        question: "2. Understanding JavaScript & ES6+ Concepts",
        textList: [
          "Event Loop and Callbacks",
          "Promises, Async/Await",
          "Arrow Functions, Template Literals, Destructuring",
        ],
      },
      {
        question: "3. Basics of Node.js",
        textList: [
          " The Global Object",
          "Modules, require() Function",
          " Event Emitter",
          " Buffer and Streams",
        ],
      },
      {
        question: "4.Working with the Node Package Manager (NPM)",
        textList: [
          "Overview of NPM",
          "Installing and Removing Packages",
          "Understanding package.json and node_modules",
          "Managing Project Dependencies and Dev Dependencies.",
        ],
      },
      {
        question: "5. Building Web Servers with Node.js",
        textList: [
          "Core HTTP Module",
          "Creating a Basic Server",
          "Serving HTML and JSON",
          "Handling Routes and Requests",
        ],
      },
      {
        question: "6. Introduction to Express.js",
        textList: [
          "Overview of Express.js Framework",
          "Setting up Express.js",
          "Routing with Express",
          "Middlewares and their Importance",
          "Serving Static Files",
        ],
      },
      {
        question: "7. Templating Engines",
        textList: ["EJS, Handlebars, Pug", "Rendering Dynamic Content"],
      },
      {
        question: "8.Handling Data with Forms and RESTful Services",
        textList: [
          "GET, POST, PUT, DELETE Requests",
          "File Uploads",
          "Building REST APIs with Node.js and Express",
        ],
      },
      {
        question: "9. Data Storage Solutions",
        textList: [
          "Relational Databases: MySQL, PostgreSQL with Sequelize ORM",
          "NoSQL Databases: MongoDB with Mongoose ODM",
          "Redis for Caching",
        ],
      },
      {
        question: "10. User Authentication and Authorization",
        textList: [
          "Session-based Authentication",
          "Token-based Authentication: JWT (JSON Web Tokens)",
          "OAuth with Passport.js",
        ],
      },
      {
        question: "11.Error Handling and Debugging",
        textList: [
          "Understanding Error-first Callbacks",
          "Debugging with Built-in Debugger and External Tools",
        ],
      },

      {
        question: "12. Advanced Topics",
        textList: [
          "Clusters and Child Processes",
          "Buffers, Streams, and File Systems",
          "Building Real-time Applications with Socket.io",
          "Implementing HTTPS and Securing Node.js Apps",
        ],
      },
      {
        question: "13. Testing and Deployment",
        textList: [
          "Writing Unit and Integration Tests: Mocha, Chai, Jest",
          "Mocking: Sinon",
          "Deployment Strategies for Node.js Apps",
          "Continuous Integration and Continuous Deployment (CI/CD)",
        ],
      },
      {
        question: "14. Best Practices and Patterns",
        textList: [
          "Modularizing Code: Design Patterns in Node.js",
          "Keeping the Codebase Clean: ESLint, Prettier",
          "Handling Secrets and Configurations",
        ],
      },
      {
        question: "15. Final Project and Case Studies",
        textList: [
          "Building a Full-fledged Application from Scratch",
          "Analyzing Real-world Applications Using Node.js",
        ],
      },
    ],
  },
  {
    platform:"React-Native",
    tech: "React-Native",
    techSyllabus: `React-Native Training Syllabus`,
    techSyllabusText: `Our React-Native Training in Chandigarh is designed and curated by industry
experts who have over 20+ years of experience working as Back End
Developers. That's, why by enrolling in this training program, you can
build a solid foundation for all the core components of Website
Developement.`,
    techLogo: webimages.foreground.training.logo.react,
    metaTitle: "ReactNative Training Providers in Mohali | Redsky Advance Solutions | Your Go-To Choice",
    metaDescription:
    "Redsky Advance Solutions offers comprehensive ReactNative training in Mohali. Choose from the best training providers and excel in ReactNative development.",
    techHeadline:
      "React Native is a JavaScript-based framework for curating native mobile apps. It uses the same components as React, so developers can learn one language and use it to build both web and mobile applications.",
    overviewHeading: "Overview",
    overview:
    <>
    React Native is an exciting framework that empowers web developers to build robust mobile applications with their existing JavaScript skills. It facilitates faster mobile development and efficient code sharing across iOS, Android, and the Web, all while maintaining a high-quality end-user experience.
    With this course, you'll learn about various React components, styling methods, and mobile interactivity with React Native.Join us today and get the best<Text
    display={"inline"}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="extrabold"
    cursor={"pointer"}
  ><Link
  href={{
    pathname: "/industrial-training/react-native",
  }}
  legacyBehavior
  passHref
>  ReactNative training in Chandigarh</Link></Text>.
    </>,

    title1: "Trusted The Best Mobile App Development",
    title2: " Training Institute in Mohali",
    titleContent:
      "Our React Native course is designed for individuals aspiring to pursue a career in mobile development.",
    techFeatures: [
      {
        feature: "Open Source",
        featureContent: `React Native is an open-source mobile app development framework that allows developers to build native apps for iOS and Android using JavaScript and React. This implies that developers can write their code once and deploy it on both platforms, resulting in time and cost savings.
        It has a large and active community of developers who contribute to the framework and its ecosystem.
        `,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FopenSource.png?alt=media&token=6d3f5acf-160d-400e-9ea9-5f7f367a26ea",
      },
      {
        feature: "Backed by Facebook",
        featureContent: `Considering Facebook's commitment to this project, it's certain that they will invest a considerable amount of time and energy in improving the framework and delivering daily upgrades. This has been evident in their track record so far and will undoubtedly continue for several more years. Thanks to Facebook's dedication, React is proving to be a future-proof and sustainable choice.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fcreated.png?alt=media&token=9e4891cf-ffd4-445f-82a9-ad039ca183a6",
      },
      {
        feature: "Modular and Intuitive",
        featureContent: `React Native allows developers to reuse code, easily update their apps, and add new features using third-party libraries. For example, the core modules provide basic functionality, such as rendering UI components, handling user input, and accessing native APIs. Third-party modules provide even more functionality, such as analytics, advertising, and social media integration.
        `,
        featureIcon:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fmodular.png?alt=media&token=d209f9eb-2972-4c22-a8f0-3ec6b29d0f3f",
      },
      {
        feature: "Speed Up Development",
        featureContent: `One of the key reasons Facebook has made React a must-have technology is its notable advantage: React Native's cross-platform development and hot reloading features can help developers build native-looking apps for both iOS and Android quickly and efficiently. This is a crucial feature of React Native, as it ensures that users experience faster page load times.
        `,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Ffast.png?alt=media&token=a1552b34-75dd-4115-8b3f-5c876a36430f",
      },
      {
        feature: "Live Reload",
        featureContent: `React Native can be seen as the natural progression after React, extending its principles to create robust mobile applications. What sets React Native apart is its intriguing 'live reload' feature, a capability not typically found in native frameworks. This feature allows you to instantly see the results of your latest code changes, enhancing the development process.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FliveReloading.png?alt=media&token=85dc7cc3-b8c5-4797-bc21-37363d3749bc",
      },
      {
        feature: "Accessibility",
        featureContent: `React Native build comes with more accessibility. The Accessibility API announcement has seen significant advancements from the previous version. These include changes in roles, action support, flags, and numerous other enhancements, such as support for 'reduced motion,' improved Android keyboard accessibility options, and the introduction of CALayer for text rendering.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Faccesability.png?alt=media&token=20ada7ba-5b60-4235-b07d-f944a4acd28a",
      },
    ],

    sectionImg1: 
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Flearn.png?alt=media&token=962643df-fbcb-43cb-aa3f-07e9dc804f19",
    sectionTitle1: "What You Will Learn?",
    textHeading:
      "In this course, you will acquire fundamental skills, that will help you create a rewarding future in the mobile and web development industry:",
    textLists: [
      "Creating a React Native app and applying styling using essential components.",
      "Constructing extensive lists and configuring user input features within React Native applications.",
      "Utilizing the Pressable component to craft interactive buttons and clickable regions.",
      "Implementing React Navigation to set up your app's navigation structure and seamlessly navigate between screens.",
    ],
    sectionImg2:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Ftools.png?alt=media&token=cb71cd01-a430-41ca-8822-90b0bbcf4a06",
    sectionTitle2: "Tools and Software Proficiency",
    sectionContent2:
      "Throughout this course, you'll become proficient in using various tools and software, including",
    textLists2: [
      "Git",
      "VS Code",
      "XCode",
      "Android Studio",
      "Command Prompt",
      "Simulator",
      "Emulator",
    ],
    sectionImg3:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Foppertunities.png?alt=media&token=7377ad22-14de-4f4f-9fce-823331feb3ce",
    sectionTitle3: "Career Opportunities with React Native",
    sectionContent3:
      "Professionals with expertise in React Native are highly sought after for a range of career opportunities:",
    textLists3: [
      "Cross-Platform Mobile Development: Businesses looking to create iOS and Android apps simultaneously value React Native developers for ensuring a seamless rollout.",
      "Multi-Platform UI Design: React Native professionals excel at designing stunning user interfaces across various platforms, including Windows and tvOS.",
      "App Enhancement: React Native developers play a vital role in helping iOS and Android companies modernize their apps with features like push notifications and animations, enhancing overall app effectiveness.",
      "Full-Stack Development: Those with a background in React Native have the opportunity to engage in full-stack development, where they can work on web-based games, websites, mobile apps, and more.",
    ],
    faqs: [
      {
        question: "1. Which topics are covered in the React Native training?",
        answer:
        <>
        Our
         <Text
    display={"inline"}
    _hover={{ textDecor: "underline" }}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="extrabold"
    cursor={"pointer"} 
  ><Link
  href={{
    pathname: "/industrial-training/react-native",
  }}
  legacyBehavior
  passHref
>  React Native training </Link></Text> covers topics such as React Native basics, components, styling, navigation, state management, API integration, and building real-world applications.
        </>
      },
      {
        question: "2. Is prior experience required for enrolling in the React Native training?",
        answer:
        "While prior experience in JavaScript or mobile app development is not required, having a basic understanding of these concepts can be beneficial.",
      },
      {
        question: "3. Do you provide opportunities to work on real-world applications as part of the training?",
        answer:
        "Yes, our React Native training includes hands-on projects and real-world applications to help you apply your learning in practical scenarios and build a portfolio of work.",
      },
      {
        question:
          "4. Do you provide certification upon course completion?",
        answer:
        "Yes, upon completion of our React Native training program, you will receive a certificate of completion that you can showcase on your resume and LinkedIn profile.",
      },
      {
        question:
          "5. Are there any job placement or career support services offered after the React Native training?",
        answer:
        <>
        Yes at<Text
    display={"inline"}
    _hover={{ textDecor: "underline" }}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="extrabold"
    cursor={"pointer"}
  ><Link
  href={{
    pathname: "/",
  }}
  legacyBehavior
  passHref
> Redsky Advance Solutions </Link></Text> , we offer job placement assistance and career support services to help you kickstart your career in React Native development.",
        </>
      },
    ],

    syallbus: [
      {
        question: "1. Introduction to React-native",
        textList: [
          "Definition and Overview",
          "Benefits and Use Cases",
          "Node.js vs. Other Server-side Platforms",
          "Installing and Setting Up Node.js",
        ],
      },
      {
        question: "2. Understanding JavaScript & ES6+ Concepts",
        textList: [
          "Event Loop and Callbacks",
          "Promises, Async/Await",
          "Arrow Functions, Template Literals, Destructuring",
        ],
      },
      {
        question: "3. Basics of Node.js",
        textList: [
          " The Global Object",
          "Modules, require() Function",
          " Event Emitter",
          " Buffer and Streams",
        ],
      },
      {
        question: "4.Working with the Node Package Manager (NPM)",
        textList: [
          "Overview of NPM",
          "Installing and Removing Packages",
          "Understanding package.json and node_modules",
          "Managing Project Dependencies and Dev Dependencies.",
        ],
      },
      {
        question: "5. Building Web Servers with Node.js",
        textList: [
          "Core HTTP Module",
          "Creating a Basic Server",
          "Serving HTML and JSON",
          "Handling Routes and Requests",
        ],
      },
      {
        question: "6. Introduction to Express.js",
        textList: [
          "Overview of Express.js Framework",
          "Setting up Express.js",
          "Routing with Express",
          "Middlewares and their Importance",
          "Serving Static Files",
        ],
      },
      {
        question: "7. Templating Engines",
        textList: ["EJS, Handlebars, Pug", "Rendering Dynamic Content"],
      },
      {
        question: "8.Handling Data with Forms and RESTful Services",
        textList: [
          "GET, POST, PUT, DELETE Requests",
          "File Uploads",
          "Building REST APIs with Node.js and Express",
        ],
      },
      {
        question: "9. Data Storage Solutions",
        textList: [
          "Relational Databases: MySQL, PostgreSQL with Sequelize ORM",
          "NoSQL Databases: MongoDB with Mongoose ODM",
          "Redis for Caching",
        ],
      },
      {
        question: "10. User Authentication and Authorization",
        textList: [
          "Session-based Authentication",
          "Token-based Authentication: JWT (JSON Web Tokens)",
          "OAuth with Passport.js",
        ],
      },
      {
        question: "11.Error Handling and Debugging",
        textList: [
          "Understanding Error-first Callbacks",
          "Debugging with Built-in Debugger and External Tools",
        ],
      },

      {
        question: "12. Advanced Topics",
        textList: [
          "Clusters and Child Processes",
          "Buffers, Streams, and File Systems",
          "Building Real-time Applications with Socket.io",
          "Implementing HTTPS and Securing Node.js Apps",
        ],
      },
      {
        question: "13. Testing and Deployment",
        textList: [
          "Writing Unit and Integration Tests: Mocha, Chai, Jest",
          "Mocking: Sinon",
          "Deployment Strategies for Node.js Apps",
          "Continuous Integration and Continuous Deployment (CI/CD)",
        ],
      },
      {
        question: "14. Best Practices and Patterns",
        textList: [
          "Modularizing Code: Design Patterns in Node.js",
          "Keeping the Codebase Clean: ESLint, Prettier",
          "Handling Secrets and Configurations",
        ],
      },
      {
        question: "15. Final Project and Case Studies",
        textList: [
          "Building a Full-fledged Application from Scratch",
          "Analyzing Real-world Applications Using Node.js",
        ],
      },
    ],
  },
  {
    platform:"Angular",
    tech: "Angular",
    techSyllabus: `Angular Training Syllabus`,
    techSyllabusText: `Our Angular Training in Chandigarh is designed and curated by industry
experts who have over 20+ years of experience working as Back End
Developers. That's, why by enrolling in this training program, you can
build a solid foundation for all the core components of Website
Developement.`,
    techLogo: webimages.foreground.training.logo.angular,
    metaTitle: "Top Angular Training Providers in Mohali | Redsky Advance Solutions",
    metaDescription:
    "Discover the best Angular training providers in Mohali at Redsky Advance Solutions. Enhance your skills and become an expert in Angular development.",
    techHeadline: `Angular is a full-featured JavaScript framework for building web applications. It is opinionated and provides a lot of out-of-the-box features, such as routing, dependency injection, and two-way data binding. 
    Angular is an excellent option for handling large and intricate web applications.
    `,
    overviewHeading: "Overview",
    overview: `Angular is a robust JavaScript framework that empowers developers to create 
    powerful single-page applications for web and mobile. Key concepts in Angular include Directives, 
    Controllers, Expressions, Filters, Tables, and Views. It's renowned for its versatility and performance. 
    Notably, it was initially called AngularJS and later simplified to Angular from version 2.0 onwards.
    Redsky Advance Solutions is the best training company in Mohali. We offer a comprehensive Angular course covering all aspects from the initial version to the latest Angular version. This training equips you to build scalable single-page applications, understand core concepts, and create production-ready apps with Angular. It's designed to help you master Angular from scratch and apply it effectively to UI development.
`,
    title1: "Get Certified at The Best Web Development ",
    title2: "Training Institute in Mohali",
    techFeatures: [
      {
        feature: `Cross-platform`,
        featureContent: `Angular's prominent role in developing Progressive Web Applications (PWA) places it at the forefront of its features list. PWA leverages modern web capabilities, providing audiences with an app-like experience. Notably, Angular enables you to deploy both local and progressive apps, making it an essential feature.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FliveReloading.png?alt=media&token=85dc7cc3-b8c5-4797-bc21-37363d3749bc",
      },
      {
        feature: `Efficient MVC architecture`,
        featureContent: `Angular 8 leverages the Model-View-Controller (MVC) architecture, enhancing its value for client-side application development. It also takes care of other features like data binding and scopes. Compared to other frameworks, MVC seamlessly integrates all essential application elements, reducing the need for additional coding.        `,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fcreated.png?alt=media&token=9e4891cf-ffd4-445f-82a9-ad039ca183a6",
      },
      {
        feature: `Sectional structure`,
        featureContent: `The Angular framework excels in code organization by allowing developers to create and structure modules as needed. This modular approach facilitates the division of functionality into reusable code components, streamlining development tasks and enabling web applications to implement lazy loading.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FopenSource.png?alt=media&token=6d3f5acf-160d-400e-9ea9-5f7f367a26ea",
      },
      {
        feature: `Data binding`,
        featureContent: `Data binding in web development simplifies the manipulation of web page elements through a web browser. It leverages dynamic HTML, eliminating the need for complex scripting or programming. Data binding is particularly crucial when designing web pages with interactive components such as games and tutorials. Additionally, it enhances the presentation of web pages with large datasets.`,
        featureIcon:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fmodular.png?alt=media&token=d209f9eb-2972-4c22-a8f0-3ec6b29d0f3f",
      },
      {
        feature: `Declarative UI`,
        featureContent: `A key feature of AngularJS is its declarative UI approach. In Angular, you can forego the need to use JavaScript to define the user interface (UI) of your web application. Instead, you can rely on HTML, which is often simpler and more intuitive than JavaScript. HTML brings declarative and straightforward properties to UI components in Angular applications. This eliminates the need to manually set up program flows.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fdeclarative.png?alt=media&token=3b29fd36-6521-4d0d-ae2c-6450b7b604cd",
      },
      {
        feature: `Test-friendliness`,
        featureContent: `JavaScript is an interpreted language, which makes it imperative for developers to test the code's capability. The framework offers features like Dependency Injection (DI) that greatly facilitate testing. Dependency injection (DI) simplifies the process, allowing testers to insert test data into the controller and check the output concurrently. It’s that simple!`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2FSEOFriendly.png?alt=media&token=e5eedebe-518b-46d4-95be-169d51b1a7ab",
      },
    ],

    sectionImg1:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fangular%2Flearn.png?alt=media&token=3df2e3db-9f4b-42f8-9bc3-b359ee2cca3c",
    sectionTitle1: "What You’ll Learn?",
    sectionContent1:
      "Our ReactJS-certified course is tailored for web developers who want to design and construct UI/UX solutions for both mobile and web applications, all while optimizing their workflow with the React JavaScript library.",
    textHeading:
      "To enroll in this course, learners should meet the following prerequisites:",
    textLists: [
      " Create device-agnostic Angular applications.",
      "Master Angular CLI Installation and various Angular Components.",
      "Understand TypeScript, Templates, and Decorators used in component creation.",
      "Explore advanced concepts like Class Binding, Style Binding, and Event Binding.",
      "Dive into the latest version of Angular Pipes and their practical use.",
      "Integrate the latest version of Angular with Bootstrap for enhanced UI development.",
      "Get a grasp of the latest version of Angular Directives, Routing, and Services.",
      "Build both Template-Driven Forms and Reactive Forms in the latest version of Angular.",
      "Learn how to work with the latest version of Angular REST APIs and leverage Observables for consuming REST services.",
      "Understand Angular CLI and the latest version of Angular Life Cycle Hooks.",
      "Capture and validate data efficiently using template-driven forms.",
      // "Modularize your applications using the Component Router.",
      // "Differentiate between the latest version of Angular Development Build and Production Build.",
      // "Perform unit testing in the latest version of Angular.",
    ],

    sectionImg2: 
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fangular%2FcanEnroll.png?alt=media&token=8fe4abed-e7d4-4b64-bf3a-fb94fa033d8e",
    sectionTitle2: "Who Can Enroll in This Course?",

    textLists2: [
      "  Front End Developers (the latest version of Angular, AngularJS).",
      "Full Stack Java Developers with AngularJS experience.",
      "Web Developers proficient in JavaScript, Angular, and AngularJS.",
      "Aspiring Programmers and Web Developers.",
      "Newbies interested in MEAN/MERN technology stacks.",
      "UI Developers focusing on Angular.",
      "NodeJS and AngularJS Programmers.",
      "Angular/Typescript Developers.",
      "Lead Technical Managers and Engineering Managers.",
      "Solutions Architects and Technical Architects.",
    ],

    sectionImg3: 
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fangular%2FangularCertification.png?alt=media&token=6be8b3b3-75f6-4c0f-9fbf-b1e5f2dc2784",
    sectionTitle3: "Why Choose Angular Certification Training?",
    textLists3: [
      "Industry Adoption: Leading companies like YouTube, Google, Nike, Samsung, Microsoft, BMW, and numerous Fortune 500 firms rely on Angular to provide captivating user experiences.",
      "Versatile Application: Angular proves its worth from prototype development to global deployment, providing productivity and scalable infrastructure that underpins Google's most extensive applications.",
      "Improved job prospects: Angular is a popular front-end web development framework, and companies are always looking for qualified Angular developers. By getting certified, you can demonstrate your skills and knowledge to potential employers and make yourself more marketable.",
    ],
    faqs: [
      {
        question: "1. What is the curriculum of the Angular training program?",
        answer:
        `Our Angular training program covers topics such as Angular fundamentals, components, services, forms, routing, and best practices for building web applications.`,
      },
      {
        question: "2. Is Angular difficult to learn for beginners?",
        answer:
        `Many beginners find Angular challenging initially due to its steep learning curve. However, with practice and dedication, it becomes easier to grasp the concepts and build applications.`,
      },
      {
        question: "3. How long does it take to learn Angular?",
        answer:
        `The time it takes to learn Angular can vary depending on factors such as your prior experience with web development and the amount of time you can dedicate to learning. Generally, it can take a few weeks to a few months to become comfortable with Angular.`,
      },
      {
        question:
          "4. Are there any hands-on projects or assignments in the Angular training program?",
        answer:
        `Yes, the Angular training program includes hands-on projects and assignments designed to help you apply what you've learned in a real-world setting. These projects will not only reinforce your understanding of Angular but also give you valuable experience that you can showcase to potential employers.`,
      },
      {
        question:
          "5. Is there job placement assistance available after completing the training?",
        answer:
        `Yes, we offer job placement assistance to help you kickstart your career as an Angular developer. Our team will provide guidance on job search strategies, help you prepare your resume and portfolio, and provide interview coaching to help you land your dream job.`,
      },
    ],

    syallbus: [
      {
        question: "1. Introduction to Angular",
        textList: [
          "Definition and Overview",
          "Benefits and Use Cases",
          "Node.js vs. Other Server-side Platforms",
          "Installing and Setting Up Node.js",
        ],
      },
      {
        question: "2. Understanding JavaScript & ES6+ Concepts",
        textList: [
          "Event Loop and Callbacks",
          "Promises, Async/Await",
          "Arrow Functions, Template Literals, Destructuring",
        ],
      },
      {
        question: "3. Basics of Node.js",
        textList: [
          " The Global Object",
          "Modules, require() Function",
          " Event Emitter",
          " Buffer and Streams",
        ],
      },
      {
        question: "4.Working with the Node Package Manager (NPM)",
        textList: [
          "Overview of NPM",
          "Installing and Removing Packages",
          "Understanding package.json and node_modules",
          "Managing Project Dependencies and Dev Dependencies.",
        ],
      },
      {
        question: "5. Building Web Servers with Node.js",
        textList: [
          "Core HTTP Module",
          "Creating a Basic Server",
          "Serving HTML and JSON",
          "Handling Routes and Requests",
        ],
      },
      {
        question: "6. Introduction to Express.js",
        textList: [
          "Overview of Express.js Framework",
          "Setting up Express.js",
          "Routing with Express",
          "Middlewares and their Importance",
          "Serving Static Files",
        ],
      },
      {
        question: "7. Templating Engines",
        textList: ["EJS, Handlebars, Pug", "Rendering Dynamic Content"],
      },
      {
        question: "8.Handling Data with Forms and RESTful Services",
        textList: [
          "GET, POST, PUT, DELETE Requests",
          "File Uploads",
          "Building REST APIs with Node.js and Express",
        ],
      },
      {
        question: "9. Data Storage Solutions",
        textList: [
          "Relational Databases: MySQL, PostgreSQL with Sequelize ORM",
          "NoSQL Databases: MongoDB with Mongoose ODM",
          "Redis for Caching",
        ],
      },
      {
        question: "10. User Authentication and Authorization",
        textList: [
          "Session-based Authentication",
          "Token-based Authentication: JWT (JSON Web Tokens)",
          "OAuth with Passport.js",
        ],
      },
      {
        question: "11.Error Handling and Debugging",
        textList: [
          "Understanding Error-first Callbacks",
          "Debugging with Built-in Debugger and External Tools",
        ],
      },

      {
        question: "12. Advanced Topics",
        textList: [
          "Clusters and Child Processes",
          "Buffers, Streams, and File Systems",
          "Building Real-time Applications with Socket.io",
          "Implementing HTTPS and Securing Node.js Apps",
        ],
      },
      {
        question: "13. Testing and Deployment",
        textList: [
          "Writing Unit and Integration Tests: Mocha, Chai, Jest",
          "Mocking: Sinon",
          "Deployment Strategies for Node.js Apps",
          "Continuous Integration and Continuous Deployment (CI/CD)",
        ],
      },
      {
        question: "14. Best Practices and Patterns",
        textList: [
          "Modularizing Code: Design Patterns in Node.js",
          "Keeping the Codebase Clean: ESLint, Prettier",
          "Handling Secrets and Configurations",
        ],
      },
      {
        question: "15. Final Project and Case Studies",
        textList: [
          "Building a Full-fledged Application from Scratch",
          "Analyzing Real-world Applications Using Node.js",
        ],
      },
    ],
  },
  {
    platform:"Vue",
    tech: "Vue",
    techSyllabus: `Vue Js Training Syllabus`,
    techSyllabusText: `Our Vue Js Training in Chandigarh is designed and curated by industry
experts who have over 20+ years of experience working as Back End
Developers. That's, why by enrolling in this training program, you can
build a solid foundation for all the core components of Website
Developement.`,
    techLogo: webimages.foreground.training.logo.vuejs,
    metaTitle: "Vue Framework Training Providers in Mohali: Redsky Advance Solutions",
    metaDescription:
    "Learn Vue framework from the leading training providers in Mohali. Redsky Advance Solutions offers comprehensive courses to enhance your skills. Enroll now!",
    techHeadline: `Vue is a progressive JavaScript framework for crafting UIs. It boasts a lightweight, rapid performance, and easy learning.
    Beginners and experienced developers can both join this course.
    `,
    overviewHeading: "Overview",
    overview: <>Vue.js is an open-source progressive JavaScript framework designed for building interactive web interfaces. It's a renowned framework for streamlining web development. VueJS focuses on the view layer. It can be easily integrated into big products for front-end development without any issues.
    Whether you're a beginner in web development or looking to enhance your app's interactivity, VueJS offers a comprehensive toolkit for your needs. Enroll in a Vue.js course with the best 
    <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/industrial-training",
      }}
      legacyBehavior
      passHref
    > training company in Mohali </Link></Text>and learn everything from the fundamentals to advanced development techniques. 
    Join the growing community of Vue learners today!</>,
    title1: "Get Certified at The Best Web Development ",
    title2: "Training Institute in Mohali",
    techFeatures: [
      {
        feature: "Virtual DOM",
        featureContent: `Vue.js employs a Virtual DOM, a JavaScript representation of the actual DOM, to process changes efficiently. Modifications to this Virtual DOM are compared with the original data structure, and only the necessary changes are applied to the real DOM. This approach is both creative and cost-effective, allowing for swift updates.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Faccesability.png?alt=media&token=20ada7ba-5b60-4235-b07d-f944a4acd28a",
      },
      {
        feature: "Data Binding",
        featureContent: `This feature helps manipulate or assign values to HTML attributes, change the style, and assign classes with the help of a binding directive called v-bind available with Vue.js.`,
        featureIcon:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fmodular.png?alt=media&token=d209f9eb-2972-4c22-a8f0-3ec6b29d0f3f",
      },
      {
        feature: "Template",
        featureContent: `Vue.js provides HTML-based templates that establish a connection between the DOM and the Vue.js instance data. These templates are transformed into virtual DOM render functions. Web developers can utilize either the template or replace it with a custom render function as needed.
        `,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FopenSource.png?alt=media&token=6d3f5acf-160d-400e-9ea9-5f7f367a26ea",
      },
      {
        feature: "Runtime Performance",
        featureContent: `When we look towards runtime performance, Vue.js has a definite edge as it abstains from dirty checking. Vue.js' efficient dependency-tracking system ensures changes are triggered individually.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fperformance.png?alt=media&token=0a4ed791-f9af-4e04-acac-1c2d8d98b71e",
      },
      {
        feature: "Optimization",
        featureContent: `Vue.js tracks component dependencies during rendering, enabling the system to identify which components need re-rendering when the form changes.
        `,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Ffast.png?alt=media&token=7531575d-968b-4cd7-98d3-c29ed76fdb09",

      },
      {
        feature: "Flexibility and Modularity",
        featureContent: `Vue.js is a versatile and modular alternative. If you prefer not to code every aspect of your app's interface from scratch, you can utilize the Vue.js webpack template. This template provides access to advanced features such as hot module reloading, CSS extraction, linting, and more, without imposing restrictions. Additionally, Vue.js allows for easy integration of third-party packages.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fdeclarative.png?alt=media&token=3b29fd36-6521-4d0d-ae2c-6450b7b604cd",
      },
    ],

    sectionImg1: 
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fvue%2Flearn.png?alt=media&token=359a7058-02b2-4f17-b055-29f17cf1289a",
    sectionTitle1: "Why Should You Learn Vue.js?",
    sectionContent1: `Vue.js is a frontend framework that stands out for its ease of learning. Other front-end technologies require a deep understanding of various libraries. But, Vue.js welcomes beginners with open arms.
   Have a basic knowledge of HTML, CSS, and JavaScript? Congratulations! You’re the right candidate for the Vue.js journey.
   `,
    textHeading: "Here’s why Vue.js should be your choice:",
    textLists: [
      "Elegant programming style and patterns.",
      "Simple and approachable, making it easy for newcomers.",
      "Powerful enough for experienced developers.",
      "Familiar templating syntax and component-based structure make integrating or migrating existing projects to Vue a relatively straightforward process.",
      "Boasts a robust ecosystem of tools and companion libraries,",
      // "Versatile framework that’s capable of meeting the complex demands of enterprise-grade applications.",
    ],

    sectionImg2:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fvue%2Fjobs.png?alt=media&token=70688e90-ceae-4e41-8aab-c7fae15df01a", 
    sectionTitle2: "Vue.js Offers Versatility in the Job Market",
    sectionContent2:
      "Vue.js also opens doors to a wide range of job opportunities in the front-end development industry. It can be",
    textLists2: [
      "Used for a wide range of front-end development jobs due to its versatility.",
      "Used to construct applications from scratch.",
      "Used with frameworks like Vuetify and Quasar Framework to enhance its capabilities.",
      "Used with Nuxt.js for server-side rendering.",
      "Used for mobile development with frameworks like Vux and Vue Native.",
      "Used by full-stack developers and PHP developers because it is included in the Laravel PHL web framework.",
    ],

    sectionImg3: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fvue%2FlearnWithUs.png?alt=media&token=d3f6d650-a072-4fc1-abd1-9c97913bab74",
    sectionTitle3: "What You’ll Learn With Us?",
    sectionContent3:
      "Our Vue.js training program covers a wide range of topics: ",
    textLists3: [
      "Basics of Vue.js, including template-driven data display, Setting up Vue projects from scratch or using vue-cli.",
      "Fundamental Vue.js concepts and application usage,Creating instances, single-page apps, custom directives, mixins, and routing.",
      "Styling websites and apps with Vue.js and CSS.",
      "Using render functions and JSX for custom content rendering.",
      "Control code execution and display with vue-router.",
      "Effective use of the Vuex library for state management.",
      "Building a fully functional app and unit testing.",
    ],
    faqs: [
      {
        question: "1. Why Us?",
        answer:
        `Our Vue.js training is designed and delivered by experienced developers who are actively working in the industry. The training includes practical, real-world examples and projects, giving you the skills and confidence to succeed as a Vue.js developer.`,
      },
      {
        question: "2. What will I learn in the Vue.js training?",
        answer:
        `Our Vue.js training covers a wide range of topics, including HTML, CSS, JS, Vue.js fundamentals, components, directives, state management with Vuex, routing with Vue Router, and building advanced Vue.js applications.`,
      },
      {
        question: "3. Is the Vue.js training suitable for beginners?",
        answer:
        `Yes, our Vue.js training is designed for beginners with no prior experience in Vue.js or web development. The training starts with the basics and gradually progresses to more advanced topics.`
      },
      {
        question:
          "4. Can I get a certificate upon completion of the Vue.js training program?",
        answer:
        `Yes, upon successful completion of the Vue.js training program, you will receive a certificate of completion. This certificate demonstrates your proficiency in Vue.js development.`,
      },
      {
        question:
          "5. What are the career prospects after completing the Vue.js training?",
        answer:
        `After completing our Vue.js training, you can pursue roles such as Vue.js developer, front-end developer, or web application developer. Vue.js developers are in high demand, and the skills you gain during the training will make you a valuable asset to employers.`
      },
    ],
    syallbus: [
      {
        question: "1. Introduction to Vue js",
        textList: [
          "Definition and Overview",
          "Benefits and Use Cases",
          "Node.js vs. Other Server-side Platforms",
          "Installing and Setting Up Node.js",
        ],
      },
      {
        question: "2. Understanding JavaScript & ES6+ Concepts",
        textList: [
          "Event Loop and Callbacks",
          "Promises, Async/Await",
          "Arrow Functions, Template Literals, Destructuring",
        ],
      },
      {
        question: "3. Basics of Node.js",
        textList: [
          " The Global Object",
          "Modules, require() Function",
          " Event Emitter",
          " Buffer and Streams",
        ],
      },
      {
        question: "4.Working with the Node Package Manager (NPM)",
        textList: [
          "Overview of NPM",
          "Installing and Removing Packages",
          "Understanding package.json and node_modules",
          "Managing Project Dependencies and Dev Dependencies.",
        ],
      },
      {
        question: "5. Building Web Servers with Node.js",
        textList: [
          "Core HTTP Module",
          "Creating a Basic Server",
          "Serving HTML and JSON",
          "Handling Routes and Requests",
        ],
      },
      {
        question: "6. Introduction to Express.js",
        textList: [
          "Overview of Express.js Framework",
          "Setting up Express.js",
          "Routing with Express",
          "Middlewares and their Importance",
          "Serving Static Files",
        ],
      },
      {
        question: "7. Templating Engines",
        textList: ["EJS, Handlebars, Pug", "Rendering Dynamic Content"],
      },
      {
        question: "8.Handling Data with Forms and RESTful Services",
        textList: [
          "GET, POST, PUT, DELETE Requests",
          "File Uploads",
          "Building REST APIs with Node.js and Express",
        ],
      },
      {
        question: "9. Data Storage Solutions",
        textList: [
          "Relational Databases: MySQL, PostgreSQL with Sequelize ORM",
          "NoSQL Databases: MongoDB with Mongoose ODM",
          "Redis for Caching",
        ],
      },
      {
        question: "10. User Authentication and Authorization",
        textList: [
          "Session-based Authentication",
          "Token-based Authentication: JWT (JSON Web Tokens)",
          "OAuth with Passport.js",
        ],
      },
      {
        question: "11.Error Handling and Debugging",
        textList: [
          "Understanding Error-first Callbacks",
          "Debugging with Built-in Debugger and External Tools",
        ],
      },

      {
        question: "12. Advanced Topics",
        textList: [
          "Clusters and Child Processes",
          "Buffers, Streams, and File Systems",
          "Building Real-time Applications with Socket.io",
          "Implementing HTTPS and Securing Node.js Apps",
        ],
      },
      {
        question: "13. Testing and Deployment",
        textList: [
          "Writing Unit and Integration Tests: Mocha, Chai, Jest",
          "Mocking: Sinon",
          "Deployment Strategies for Node.js Apps",
          "Continuous Integration and Continuous Deployment (CI/CD)",
        ],
      },
      {
        question: "14. Best Practices and Patterns",
        textList: [
          "Modularizing Code: Design Patterns in Node.js",
          "Keeping the Codebase Clean: ESLint, Prettier",
          "Handling Secrets and Configurations",
        ],
      },
      {
        question: "15. Final Project and Case Studies",
        textList: [
          "Building a Full-fledged Application from Scratch",
          "Analyzing Real-world Applications Using Node.js",
        ],
      },
    ],
  },
  {
    platform:"Php",
    tech: "PHP",
    techSyllabus: `Vue Js Training Syllabus`,
    techSyllabusText: `Our Vue Js Training in Chandigarh is designed and curated by industry
experts who have over 20+ years of experience working as Back End
Developers. That's, why by enrolling in this training program, you can
build a solid foundation for all the core components of Website
Developement.`,
    techLogo:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Flogos%2Fnew-php-logo-orange.png?alt=media&token=9fc9a2a0-810f-41fc-99a7-299007f42d6a",
    metaTitle: "PHP Training Providers in Mohali | Redsky Advance Solutions",
    metaDescription:
    "Offering top-notch PHP training in Mohali, Redsky Advance Solutions is the go-to choice for those looking to master PHP development skills. Enroll now!",
    techHeadline: `PHP is a popular server-side scripting language designed primarily for web development. It is used to create dynamic web pages and applications. PHP code is embedded within HTML, allowing developers to create interactive and dynamic content that interacts with databases. PHP stands for "Hypertext Preprocessor," a recursive acronym that highlights its main purpose of processing web content.
    `,
    overviewHeading: "Overview",
    overview: 
    <>
     <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > <Link
      href={{
        pathname: "/",
      }}
      legacyBehavior
      passHref
    > Redsky Advance Solutions </Link></Text>is a leading provider of industrial training in PHP, offering specialized programs designed to enhance your skills and knowledge in this versatile scripting language. Our PHP training courses are crafted by industry experts to cover all aspects of PHP development, from the fundamentals to advanced concepts. With Redsky Advance Solutions, you'll receive hands-on experience working on real-world projects, ensuring that you're well-prepared for a successful career in PHP development. Whether you're a student looking to start your career or a professional seeking to expand your skill set, our PHP industrial training programs are the perfect choice for you.
    </>,
    title1: "Industrial Training in PHP: ",
    title2: "Kickstart Your Web Development Career",
    titleContent:`Are you eager to dive into the world of web development? Our comprehensive industrial training program in PHP is designed to provide you with the skills and knowledge needed to succeed in the field. Whether you're a student seeking practical experience or a working professional looking to expand your skill set, our program is perfect for you.`,
    techFeatures: [
      {
        feature: "Open Source",
        featureContent: `PHP is open-source, which means it is freely available for anyone to use and modify. This makes it accessible to a wide range of developers and encourages collaboration and innovation within the community.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FopenSource.png?alt=media&token=6d3f5acf-160d-400e-9ea9-5f7f367a26ea",
      },
      {
        feature: "Cross-Platform Compatibility",
        featureContent: `PHP is compatible with all major operating systems, including Windows, macOS, Linux, and Unix. This makes it easy to develop and deploy PHP applications across different platforms.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2FliveReloading.png?alt=media&token=85dc7cc3-b8c5-4797-bc21-37363d3749bc",
      },
      {
        feature: "Integration Capabilities",
        featureContent: `PHP can be easily integrated with other technologies, such as HTML, CSS, JavaScript, and various databases (e.g., MySQL, PostgreSQL). This makes it a flexible choice for building dynamic and interactive web applications.`,
        featureIcon:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Fmodular.png?alt=media&token=d209f9eb-2972-4c22-a8f0-3ec6b29d0f3f",
      },
      {
        feature: "Extensive Library Support",
        featureContent: `PHP has a vast collection of libraries and frameworks that help developers build complex web applications more efficiently. Popular PHP frameworks include Laravel, Symfony, and CodeIgniter.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fdeclarative.png?alt=media&token=3b29fd36-6521-4d0d-ae2c-6450b7b604cd",
      },
      {
        feature: "Scalability",
        featureContent:`PHP is highly scalable, allowing developers to build small, simple websites or large, complex web applications. It can handle a high volume of traffic and is used by many popular websites, such as Facebook and Wikipedia.`, 
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freactjs%2Fperformance.png?alt=media&token=0a4ed791-f9af-4e04-acac-1c2d8d98b71e",
      },
      {
        feature: "Security",
        featureContent: `PHP has built-in security features, such as data encryption and secure authentication mechanisms, to help protect web applications from common security threats, such as SQL injection and cross-site scripting (XSS) attacks.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Freact-native%2Faccesability.png?alt=media&token=20ada7ba-5b60-4235-b07d-f944a4acd28a",
      },
    ],

    sectionImg1: 
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fphp%2FchooseUs.png?alt=media&token=ee1b9531-d9e0-4148-86fc-e85c26ff2f89",
    sectionTitle1: "Why Choose Our PHP Industrial Training?",
    textLists: [
      <>
       <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Industry-Relevant Curriculum: </Text>Our training program is carefully crafted to cover the latest trends and technologies in PHP development, ensuring that you stay ahead in the industry.
      </>,
      <>
        <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Hands-On Experience: </Text>Get hands-on experience with real-world projects and assignments that simulate the challenges faced in the industry.",
      </>,
      <>
      <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Expert Guidance: </Text>Learn from industry experts who have years of experience in PHP development and are committed to your success.
      </>,
   <>  <Text
      display={"inline"}
      textDecor="none"
      textUnderlineOffset="3px"
      fontWeight="extrabold"
      cursor={"pointer"}
    > Placement Assistance: </Text>We provide placement assistance to help you secure a job in top companies after completing the training program.
</> ,
    ],

    sectionImg2:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fphp%2Flearn.png?alt=media&token=605174ff-fa13-4be1-8a8f-abbd2db3a6b4",
    sectionTitle2: "What You'll Learn",
    
      textLists2: [
        <><Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > PHP Basics: </Text>Learn the fundamentals of PHP programming, including variables, data types, operators, and control structures.
        </>,
        <>
        <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Object-Oriented PHP: </Text>Master the principles of object-oriented programming in PHP and learn how to create classes, objects, and methods.
        </>,
        <>
         <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > MySQL Integration: </Text>Learn how to integrate MySQL databases with PHP and perform database operations such as querying, inserting, updating, and deleting data.
        </>,
        <>
        <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Web Development Frameworks: </Text>Explore popular PHP frameworks like Laravel and learn how to use them to build dynamic and interactive web applications.
        </>,
        <> <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Project Work: </Text>
       Apply your knowledge and skills to real-world projects, giving you practical experience that you can showcase to potential employers.
      </>
    ],

   
    faqs: [
      {
        question: "1. What will I learn in the PHP training program?",
        answer:
        <>In our 
        <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > <Link
      href={{
        pathname: "/industrial-training/php",
      }}
      legacyBehavior
      passHref
    > PHP industrial training </Link></Text>program, you'll learn the fundamentals of PHP programming, including data types, variables, control structures, functions, and object-oriented programming. You'll also learn how to work with databases, handle form data, and create dynamic web pages using PHP.</>
      },
      {
        question: "2. Will the PHP training program include hands-on projects?",
        answer:
        `Yes, our PHP training program includes hands-on projects that allow you to apply your skills and build real-world applications. These projects are designed to give you practical experience and showcase your abilities to potential employers.`
      },
      {
        question: "3. What is the format of the PHP training program (online, in-person)?",
        answer:
        `We offer both online and in-person PHP training programs to accommodate different learning preferences. Our online program is conducted through live virtual sessions, while our in-person program is held at our company.`
      },
      {
        question:
          "4. What sets your PHP training program apart from others?",
        answer:
        `Our PHP training program stands out for its comprehensive curriculum, experienced instructors, and hands-on learning approach. We focus on practical skills that are in demand in the industry, ensuring that our graduates are well-prepared for career success.`,
      },
      {
        question:
          "5. What is the Cost structure of PHP training?",
        answer:
        `The cost structure of PHP training can vary depending on several factors such as the duration of the training program and the course you’ll choose. For more details, please contact us.`
      },
    ],
    syallbus: [
      {
        question: "1. Introduction to Vue js",
        textList: [
          "Definition and Overview",
          "Benefits and Use Cases",
          "Node.js vs. Other Server-side Platforms",
          "Installing and Setting Up Node.js",
        ],
      },
      {
        question: "2. Understanding JavaScript & ES6+ Concepts",
        textList: [
          "Event Loop and Callbacks",
          "Promises, Async/Await",
          "Arrow Functions, Template Literals, Destructuring",
        ],
      },
      {
        question: "3. Basics of Node.js",
        textList: [
          " The Global Object",
          "Modules, require() Function",
          " Event Emitter",
          " Buffer and Streams",
        ],
      },
      {
        question: "4.Working with the Node Package Manager (NPM)",
        textList: [
          "Overview of NPM",
          "Installing and Removing Packages",
          "Understanding package.json and node_modules",
          "Managing Project Dependencies and Dev Dependencies.",
        ],
      },
      {
        question: "5. Building Web Servers with Node.js",
        textList: [
          "Core HTTP Module",
          "Creating a Basic Server",
          "Serving HTML and JSON",
          "Handling Routes and Requests",
        ],
      },
      {
        question: "6. Introduction to Express.js",
        textList: [
          "Overview of Express.js Framework",
          "Setting up Express.js",
          "Routing with Express",
          "Middlewares and their Importance",
          "Serving Static Files",
        ],
      },
      {
        question: "7. Templating Engines",
        textList: ["EJS, Handlebars, Pug", "Rendering Dynamic Content"],
      },
      {
        question: "8.Handling Data with Forms and RESTful Services",
        textList: [
          "GET, POST, PUT, DELETE Requests",
          "File Uploads",
          "Building REST APIs with Node.js and Express",
        ],
      },
      {
        question: "9. Data Storage Solutions",
        textList: [
          "Relational Databases: MySQL, PostgreSQL with Sequelize ORM",
          "NoSQL Databases: MongoDB with Mongoose ODM",
          "Redis for Caching",
        ],
      },
      {
        question: "10. User Authentication and Authorization",
        textList: [
          "Session-based Authentication",
          "Token-based Authentication: JWT (JSON Web Tokens)",
          "OAuth with Passport.js",
        ],
      },
      {
        question: "11.Error Handling and Debugging",
        textList: [
          "Understanding Error-first Callbacks",
          "Debugging with Built-in Debugger and External Tools",
        ],
      },

      {
        question: "12. Advanced Topics",
        textList: [
          "Clusters and Child Processes",
          "Buffers, Streams, and File Systems",
          "Building Real-time Applications with Socket.io",
          "Implementing HTTPS and Securing Node.js Apps",
        ],
      },
      {
        question: "13. Testing and Deployment",
        textList: [
          "Writing Unit and Integration Tests: Mocha, Chai, Jest",
          "Mocking: Sinon",
          "Deployment Strategies for Node.js Apps",
          "Continuous Integration and Continuous Deployment (CI/CD)",
        ],
      },
      {
        question: "14. Best Practices and Patterns",
        textList: [
          "Modularizing Code: Design Patterns in Node.js",
          "Keeping the Codebase Clean: ESLint, Prettier",
          "Handling Secrets and Configurations",
        ],
      },
      {
        question: "15. Final Project and Case Studies",
        textList: [
          "Building a Full-fledged Application from Scratch",
          "Analyzing Real-world Applications Using Node.js",
        ],
      },
    ],
  },
  {
    platform:"Digital-Marketing",
    tech: "Digital Marketing",
    techLogo: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2FDigitalMarketing.png?alt=media&token=aa059179-4068-43f9-894d-0a80af00a546",
    metaTitle: "Digital Marketing Training Providers in Mohali | Redsky Advance Solutions",
    metaDescription:
    "Redsky Advance Solutions is your go-to destination for digital marketing training in Mohali. Gain valuable skills and knowledge from industry experts. Start today!",
    techHeadline:
    <>Digital marketing refers to the use of digital channels, devices, and platforms to promote products, services, or brands to consumers. It encompasses a wide range of online marketing activities, including
     
     <Text
    display={"inline"}
    _hover={{ textDecor: "underline" }}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="extrabold"
    cursor={"pointer"}
  ><Link
  href={{
    pathname: "/industrial-training/digital-marketing",
  }}
  legacyBehavior
  passHref
> search engine optimization </Link></Text> (SEO), social media marketing, email marketing, content marketing, and more.</>,
    overviewHeading: "Overview",
    overview: 
    <>Digital marketing encompasses a broad range of activities aimed at promoting products or services using digital technologies, primarily on the Internet. This includes tactics such as 
    search engine optimization (SEO), content marketing, social media marketing, email marketing, pay-per-click (PPC) advertising, and more. Businesses leverage digital channels to connect with their target audience, build brand awareness, drive website traffic, and ultimately, generate leads and sales. Start your Digital marketing training with Redsky Advance Solutions- the best 
    <Text
    display={"inline"}
    _hover={{ textDecor: "underline" }}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="bold"
    cursor={"pointer"}
  ><Link
  href={{
    pathname: "/industrial-training/digital-marketing",
  }}
  legacyBehavior
  passHref
> Digital marketing training company in Chandigarh.</Link></Text>`</>,
      title1: "Best Digital Marketing Training Company in Mohali",
    title2: "Company in Mohali",
    techFeatures: [
      {
        feature: "Search Engine Optimization (SEO)",
        featureContent:
        `SEO is the process of optimizing your website to rank higher in search engine results pages (SERPs). It involves optimizing your website's content, structure, and backlinks to improve its visibility and attract organic traffic.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2Fseo.png?alt=media&token=a6046d72-f857-4aa3-8325-e1446103f8d3",
      },
      {
        feature: "Pay-Per-Click (PPC) Advertising",
        featureContent:
        `PPC advertising allows you to place ads on search engines and pay a fee each time your ad is clicked. It's a cost-effective way to drive targeted traffic to your website and increase conversions.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2FPPC.png?alt=media&token=06edcc5a-7d09-40a0-a67e-92d1a54d1dcd",
      },
      {
        feature: "Social Media Marketing",
        featureContent:
        `Social media marketing involves using social media platforms like Facebook, Twitter, and Instagram to promote your products or services. It includes creating and sharing content, engaging with followers, and running ads to reach a wider audience.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2FSMM.png?alt=media&token=63ec1676-69a2-4f3d-8430-b70a7e0797f6",
      },
      {
        feature: "Email Marketing",
        featureContent: 
        `Email marketing involves sending targeted emails to your subscribers to promote your products or services. It's a cost-effective way to nurture leads, drive conversions, and build customer loyalty.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2FemailMarketing.png?alt=media&token=a9aa110d-ce39-4dad-a20b-2ece0de91c75",
      },
      {
        feature: "Content Marketing",
        featureContent:
        `Content marketing focuses on creating and distributing valuable, relevant content to attract and engage a target audience. It includes blog posts, articles, videos, infographics, and more.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2FcontentMarketing.png?alt=media&token=8d8c9594-1641-4506-b299-a456943acb25",
      },
      {
        feature: "Influencer Marketing",
        featureContent:
        `Influencer marketing involves partnering with influencers to promote your products or services. Influencers have a large and engaged following, making them effective at reaching and influencing their audience.`,
        featureIcon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2Fanalitic_reporting.png?alt=media&token=47d36567-ded9-4bc7-932c-d2cda63dfe63",
      },
    ],
    sectionImg1:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2Fadvantages.png?alt=media&token=fa54de87-8be4-4c40-a4c1-a4380cc8f275",
    sectionTitle1: "Advantages of Digital Marketing",
    textLists: [
"Digital marketing helps increase your brand's visibility online, making it easier for potential customers to find you.",
"With digital marketing, you can target specific demographics, interests, and behaviours, ensuring your ads are seen by the right people at the right time.",
"Digital marketing is often more cost-effective than traditional marketing methods, allowing you to reach a larger audience without breaking the bank.",
"With digital marketing, you can reach a global audience, enabling you to expand your business beyond geographical boundaries.",
    ],

    sectionImg2:"https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/TechImages%2Fdigital-marketing%2FwhatToLearn.png?alt=media&token=b5be9763-c8ee-4654-8821-7c7f7e121286",
    sectionTitle2: "What You’ll Learn in Our Digital Marketing Training?",
    sectionContent2:
    <>In our 
    <Text
    display={"inline"}
    _hover={{ textDecor: "underline" }}
    textDecor="none"
    textUnderlineOffset="3px"
    fontWeight="extrabold"
    cursor={"pointer"}
  >  Digital marketing training </Text>
     program, you'll engage in hands-on tasks that mirror real-world scenarios, ensuring you're prepared for the challenges of the digital marketing field. 
    Here's a glimpse of the tasks you'll learn:</>,
    textHeading2:`These tasks are designed to give you practical experience and a deep understanding of the digital marketing landscape, ensuring you're ready to excel in your career.`,
    textLists2: [
      "Keyword Research and Analysis.",
"Campaign Planning and Execution.",
"Content Creation.",
"Social Media Management.",
"Email Campaign Management.",
 "Analytics and Reporting.",
"Develop a digital marketing strategy for a hypothetical business.",
    ],

    // sectionImg3: enrollCourse,
    // sectionTitle3: "Who Should Enroll in the Node.js Course?",
    // // sectionContent3: "Our Node.js training program covers a wide range of topics: ",
    // textLists3: [
    //   "Testing Experts, Web Development Specialists, Project Management Professionals.",
    //   "Software Architecture Experts.",
    //   "Enthusiastic Beginners interested in Node.js Web Development.",
    // ],
    faqs: [
      {
        question: "1. What will I learn in the digital marketing training?",
        answer:
        "Our training covers a wide range of digital marketing topics, including SEO, social media marketing, email marketing, content marketing, PPC advertising, Google Analytics, Google Search Console and more.",
      },
      {
        question: "2. What is the duration of the training program?",
        answer:
        "The duration of our training program varies depending on the course. We offer both short-term courses that can be completed in a few weeks and more comprehensive programs that will take several months.",
      },
      {
        question: "3. Are there any opportunities for hands-on practice or real-world projects?",
        answer:
        "Yes, our training programs include hands-on exercises, case studies, and real-world projects to help you apply your learning in practical scenarios and build a portfolio of work.",
      },
      {
        question:
          "4. What is the cost of the training program?",
        answer:
        "The cost of our training programs varies depending on the course. We offer competitive pricing and flexible payment options to make our programs accessible to a wide range of candidates.",
      },
      {
        question:
          "5. Are there any job placement or career support services offered after the training?",
        answer:
        "Yes, we offer job placement assistance and career support services to help you kickstart your career in digital marketing."
      },
    ],
  },
];

export const GRAPHIC_DESIGN_TECHS = [
  {
    tech: "XD",
    techLogo: webimages.foreground.training.techLogo.vueicon, // change the logo when needed
    techHeadline: `Design, Prototype, and Share Your Next Digital Experience with Adobe XD.`,
    overview: `XD stands for Adobe Experience Design, a UI/UX design software for digital products such as websites, mobile apps, and more. It allows designers to create wireframes, prototypes, and design specs, and has features such as vector design, UI components, and collaboration tools.`,
    whyThisTech: [{ sectionImg: "", sectionContent: "" }],
    techFeatures: [
      {
        feature: "Virtual DOM",
        featureContent: `Vue.js utilizes virtual DOM. Virtual DOM is, essentially, a clone of the principal DOM element absorbs every change intended for the DOM and is present in the form of JavaScript data structures. The changes made to the JavaScript data structures are compared with the original data structure. Only the final changes will reflect in the real DOM, which viewers will be able to see. This is a creative method, cost-effective and the changes can be done quickly.`,
        featureIcon: webimages.foreground.training.techLogo.augmentd,
      },
      {
        feature: "Data Binding",
        featureContent: `This feature helps manipulate or assign values to HTML attributes, change the style, assign classes with the help of a binding directive called v-bind available with VueJS.`,
        featureIcon: webimages.foreground.training.techLogo.folder,
      },
      {
        feature: "Template",
        featureContent: `As already mentioned above, It offers HTML-based templates that bind the DOM with the Vue.js instance data. It compiles the templates into virtual DOM Render functions. A web developer can use the template of the render functions and they can replace the template with the render function.`,
        featureIcon: webimages.foreground.training.techLogo.capacitor,
      },
      {
        feature: "Runtime Performance",
        featureContent: `When we look towards runtime performance, Vue.js has the definite edge as it abstains from e dirty checking. Vue.js clear dependency-tracking observation system with synchronized queueing ensures changes trigger individualistically.`,
        featureIcon: webimages.foreground.training.techLogo.desktop,
      },
      {
        feature: "Optimization",
        featureContent: `Vue.js tracks component dependencies during render. This results in that the system already knows which components require re-render when the form changes, which does not. Each component will be able to call shouldComponentUpdate to avoid any kind of nested component warnings.`,
        featureIcon: webimages.foreground.training.techLogo.googleDocs,
      },
      {
        feature: "Flexibility and Modularity",
        featureContent: `It is a flexible, modular replacement to it. If you are among those who don’t find it interesting to code every single part of the app’s interface, then you can use Vue.js web-pack template as it does not restrict access to its advanced feature set like hot module reloading, CSS extraction, linting, etc. It is flexible to add any third party package in vue.js.`,
        featureIcon: webimages.foreground.training.techLogo.agile,
      },
    ],
  },
  {
    tech: "FIGMA",
    techLogo: webimages.foreground.training.techLogo.vueicon, // change the logo when needed
    techHeadline: `Design better, together with Figma.`,
    overview: `Figma is a cloud-based interface design tool that enables teams to collaborate in real-time on wireframes, prototypes, and designs. It offers features such as vector networks, design systems, and version control, making it a comprehensive solution for UI/UX design workflows. Figma's user-friendly interface and seamless collaboration capabilities make it a popular choice among designers, product managers, and developers.`,
    whyThisTech: [{ sectionImg: "", sectionContent: "" }],
    techFeatures: [
      {
        feature: "Virtual DOM",
        featureContent: `Vue.js utilizes virtual DOM. Virtual DOM is, essentially, a clone of the principal DOM element absorbs every change intended for the DOM and is present in the form of JavaScript data structures. The changes made to the JavaScript data structures are compared with the original data structure. Only the final changes will reflect in the real DOM, which viewers will be able to see. This is a creative method, cost-effective and the changes can be done quickly.`,
        featureIcon: webimages.foreground.training.techLogo.augmentd,
      },
      {
        feature: "Data Binding",
        featureContent: `This feature helps manipulate or assign values to HTML attributes, change the style, assign classes with the help of a binding directive called v-bind available with VueJS.`,
        featureIcon: webimages.foreground.training.techLogo.folder,
      },
      {
        feature: "Template",
        featureContent: `As already mentioned above, It offers HTML-based templates that bind the DOM with the Vue.js instance data. It compiles the templates into virtual DOM Render functions. A web developer can use the template of the render functions and they can replace the template with the render function.`,
        featureIcon: webimages.foreground.training.techLogo.capacitor,
      },
      {
        feature: "Runtime Performance",
        featureContent: `When we look towards runtime performance, Vue.js has the definite edge as it abstains from e dirty checking. Vue.js clear dependency-tracking observation system with synchronized queueing ensures changes trigger individualistically.`,
        featureIcon: webimages.foreground.training.techLogo.desktop,
      },
      {
        feature: "Optimization",
        featureContent: `Vue.js tracks component dependencies during render. This results in that the system already knows which components require re-render when the form changes, which does not. Each component will be able to call shouldComponentUpdate to avoid any kind of nested component warnings.`,
        featureIcon: webimages.foreground.training.techLogo.googleDocs,
      },
      {
        feature: "Flexibility and Modularity",
        featureContent: `It is a flexible, modular replacement to it. If you are among those who don’t find it interesting to code every single part of the app’s interface, then you can use Vue.js web-pack template as it does not restrict access to its advanced feature set like hot module reloading, CSS extraction, linting, etc. It is flexible to add any third party package in vue.js.`,
        featureIcon: webimages.foreground.training.techLogo.agile,
      },
    ],
  },
];

export const BLOG_CATEGORIES = [
  { key: "all", keyword: "All" },
  { key: "trv", keyword: "Travel" },
  { key: "edu", keyword: "Education" },
  { key: "tech", keyword: "Technology" },
  { key: "h&f", keyword: "Health & Fitness" },
  { key: "ls", keyword: "Life Styles" },
  { key: "entmt", keyword: "Entertainment" },
];

export const techData = [
  {
    id: 1,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FwebDevelopment.png?alt=media&token=ccd4f489-a112-46cc-bb65-494db7263558",
    name: "Web Development",
    description: `Redsky Advance Solutions is your partner in creating impactful websites that drive results. We specialize in designing visually stunning websites that not only captivate but also convert visitors into leads and sales.
    `,
    path: "/services/web-development",
  },
  {
    id: 2,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FmobileDevelopment.png?alt=media&token=e827ea44-91da-4e61-921d-fc0f821f2a77",
    name: "Mobile Application",
    description: `Empower your brand's mobile presence with our friendly and expert mobile app development services. We're here to transform your ideas into reality, crafting intuitive and engaging apps that resonate with your audience.`,
    path: "/services/mobile-development",
  },
  {
    id: 3,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FgraphicDesigning.png?alt=media&token=f83dda0a-2924-4831-89b1-86d4fb696330",
    name: "Backend  Development",
    description: `Seeking scalable backend solutions tailored to your business requirements? Look no further! Our dedicated team delivers cutting-edge web services to propel your business forward in the digital landscape.`,
    path: "/services/backend-development",
  },
  {
    id: 4,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FbackendDevelopment.png?alt=media&token=75a56c4e-3e66-40c2-9d6a-688c9a424cb0",
    name: "Graphic Designing",
    description: `Experience top-quality graphic design services customized to meet your specific needs. Our team leverages the latest technologies to deliver exceptional products within agreed timelines.`,
    path: "/services/graphic-design",
  },

  {
    id: 5,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FdigitalMarketing.png?alt=media&token=5c6fdb2c-9692-4f22-a8e0-2292cfb17a8c",
    name: "Digital Marketing",
    description: `Drive your digital success with our personalized and data-centric strategies. Our digital marketing solutions establish a robust online presence, enhance brand visibility, and effectively engage your target audience.`,
    path: "/services/digital-marketing",
  },
  {
    id: 6,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2Fseo.png?alt=media&token=86a56382-f011-4ce9-b63b-29cabb41cf1d",
    name: "SEO",
    description: `Embrace the power of organic search traffic with our SEO service where meticulous keyword research and market analysis will help you in business. We ensure that your website ranks prominently on search engines, driving valuable web traffic to your business.`,
    path: "/services/digital-marketing",
  },
];

export const trainingtechData = [
  {
    id: 1,
    icon:
      // "",
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FExperienced%20Developers%201.png?alt=media&token=a6d65643-fabf-43eb-a71c-3bb9f2855909",
    name: "Experienced Developers",
  },
  {
    id: 2,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FCulture%20of%20Work%201.png?alt=media&token=84656f08-77e7-4089-86f0-e5d8211f9d30",
    name: "Culture of Work",
  },
  {
    id: 3,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FPractical%20Training%201.png?alt=media&token=29f42ffe-99e6-4816-8cc8-315d8bce55e8",
    name: "Practical Training",
  },
  {
    id: 4,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FConversation%20Session%201.png?alt=media&token=c09e4c2e-544a-4372-8c15-08bd0c5b539f",
    //  "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FConversation%20Session%201.png?alt=media&token=622279a8-8994-421d-a628-4b38274bc875",
    name: "Conversation Session",
  },
  {
    id: 5,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FFlexible%20Schedules%201.png?alt=media&token=a9c8decf-9741-40f0-bc85-31ec25bcfec7",
    name: "Flexible Schedules",
  },
  {
    id: 6,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FPractical_Projects.png?alt=media&token=ec2d604c-7d9f-446c-9f3f-8578b2f318f5",
    // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FIllustration-of-Google-icon-on-transparent-background-PNG%201.png?alt=media&token=f20169bd-b348-4040-824f-927cec37f858",
    name: "Practical Projects",
  },
  {
    id: 7,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2FReasonable%20Costs%201.png?alt=media&token=fac22faf-f5b5-45a7-99e9-07bc16aae436",
    name: "Reasonable Costs",
  },
  {
    id: 8,
    icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FtrainingIconsWhyWesection%2F100%25%20Job%20Guarantee%201.png?alt=media&token=553775f6-0d44-47a6-b01e-fab078f2691c",
    name: "100% Job Guarantee",
  },
];

export const servicesDetails = [
  {
    id: 1,
    metaTitle:"Innovations in Web Development by Redsky Advance Solutions",
    metaDesc:"Leading web development experts at Redsky Advance Solutions. Elevate your online presence with our top-notch services and innovative solutions. Visit today!",
    platformName: "web-development",
    canonicalTagLink:"https://redskyadvancesolutions.com/services/web-development",
    serviceTechHeading: "Web Development",
    serviceTechText: <>
    At Redsky Advance Solutions, we pride ourselves on creating exceptional web experiences tailored to your needs. Our expert team delivers end-to-end
    <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/web-development",
      }}
      legacyBehavior
      passHref
    > web development services </Link></Text>
      , from concept to deployment. We use the latest technologies and frameworks to ensure your website is fast, secure, and user-friendly. Whether you need a simple website, a complex web application, or e-commerce solutions, we've got you covered.
    </>,
   
    landingImg:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FservicesLandingimg%2FwebDoodal.png?alt=media&token=ee56f60b-7470-4447-a364-488ebc59d8e1",
      // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FservicesLandingimg%2FwebImg1.webp?alt=media&token=0bed0810-8f9b-42d4-9f6f-fe6554f80b93",
    techServiceHeading: `TECHNOLOGIES WE`,
    gradientTextServices: `ARE USING`,
    techDetailCardData: [
      {
        id: 1,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Freact.png?alt=media&token=9e1ecabe-f60a-49bd-843c-87633b382cf4",
        name: "React Js",
        description: 
        "At Redsky Advance Solutions, we have extensive experience in developing interactive user interfaces using ReactJS. ReactJS is a popular JavaScript library for building UI components. Our skilled developers leverage ReactJS to create dynamic and engaging user interfaces that enhance the overall user experience.",
        path: "/services/web",
      },
      {
        id: 2,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fangular.png?alt=media&token=9a8b15a2-74fe-49ea-a35e-ae2d7781cd7b",
        name: "Angular",
        description:
        "Our team is skilled in using Angular, a robust framework for building dynamic web applications. Angular provides a comprehensive set of tools and features that enable us to create scalable and maintainable web solutions. By utilizing Angular, we ensure that your web applications are efficient, reliable, and feature-rich.", 
        path: "/services/hybrid",
      },
      {
        id: 3,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fvuejs.png?alt=media&token=32d36394-f6f2-4f40-8a10-571a9e23a3b5",
        name: "Vue Js",
        description:
        "Our developers are well-versed in using Vue.js, a progressive JavaScript framework, to create interactive and responsive web interfaces. Vue.js offers a simple and approachable way to build web applications, making it ideal for creating modern and dynamic user interfaces. By utilizing Vue.js, we ensure that your web applications are intuitive, engaging, and user-friendly.",
      },
      {
        id: 4,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fnextjs.png?alt=media&token=a68a4ca4-9d86-49e9-ba5d-c3e8db88a06f",
        name: "Next Js",
        description:
        "Our developers are proficient in Next.js development. Next.js is a powerful framework that allows us to build fast and SEO-friendly web applications. With features like server-side rendering and easy deployment, Next.js enables us to create high-performance web solutions that meet your business requirements", 
      },
      {
        id: 5,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fphp.png?alt=media&token=896f5b44-3a9b-4a29-9d33-0b9291af68ec",
        name: "Php",
        description:
        <>
          
        With expertise in <Text
        _hover={{ textDecor: "underline" }}
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="bold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/web-development",
      }}
      legacyBehavior
      passHref
    > PHP Services </Link></Text> , a server-side scripting language, we build custom, scalable, and secure web solutions tailored to your business needs.PHP is widely used for web development due to its flexibility and ease of use. Our experienced developers leverage PHP to create robust web applications that drive business growth.
        </>
      },
    ],

    WhyHireUsHeading: "Why",
    WhyHireUsGradient: "Hire Us",
    WhyHireUs: [
      {
        title: "Passionate Professionals",
        description:
        "We are a team of passionate developers who take pride in crafting exceptional websites. We ensure that every project is delivered to the highest standards.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fquality-assurance.png?alt=media&token=727214b1-fb2c-4566-9c43-996041910b84",
      },
      {
        title: "Transparent Communication",
        description:
        "We believe in open and transparent communication. You will be kept informed at every stage of the development process, ensuring that your vision is realized.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Freal-time-support.png?alt=media&token=f7fa0201-1bd6-4378-833c-d4342e82a420",
      },
      {
        title: "Fast and Reliable",
        description:
        "Speed and reliability are key factors in user experience. Our websites are built with performance in mind, ensuring fast loading times and a smooth browsing experience for your visitors.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fcost-effectiveness.png?alt=media&token=9a6006c3-7534-44de-9f43-3986f0e4f509",
      },
      {
        title: "On-time Delivery",
        description:
        "We understand the importance of deadlines. Our team is committed to delivering your project on time, ensuring that you can launch your website according to your schedule.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fexpertise.png?alt=media&token=42da3b9f-c49d-4b32-86cb-4c550f416d4f",
      },
      {
        title: "Affordable Pricing",
        description:
        "Quality doesn’t have to come at a premium. We offer competitive rates for our website development services, ensuring that you get the best value for your investment.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fresult-driven.png?alt=media&token=39b5840d-fd0f-43d9-82e7-09ebfa523ab7",
      },
      {
        title: "Dedicated Support",
        description:
        "Our commitment to your success doesn’t end after your site is launched. We provide ongoing support and maintenance to keep your website running smoothly and effectively.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Freliability-removebg.png?alt=media&token=9120e428-cdb2-46b5-b259-7a85e27c53b8",
      },
    ],
    techProcessHeading: `Solutions`,
    gradientTextProcess: `We Offer`,
    devData: [
      {
        title: "Custom Web Development",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FCustomise.png?alt=media&token=a02879ee-f12c-43dc-a530-c55f7a303ada",
        paraText:
        "At Redsky Advance Solutions, we offer custom website development services that cater to your specific business needs. From conceptualization to the final launch, our team works closely with you to create tailor-made web applications that align with your brand identity and business objectives. We use the latest technologies and best practices to ensure that your web app is not only visually appealing but also highly functional and user-friendly."
      },
      {
        title: "UI/UX Design",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FthirdPartyUpgrade.png?alt=media&token=10076551-7995-4be5-9472-246bf6e62435",
        paraText:
        "Our design experts are dedicated to creating stunning, user-centric interfaces that enhance user engagement and drive conversions. We understand the importance of a well-designed user interface and its impact on the overall user experience. That's why we pay special attention to every detail, from layout and colour scheme to typography and navigation, to create interfaces that are not only visually appealing but also intuitive and easy to use."
      },
      {
        title: "Maintenance & Support",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FappUpdate.png?alt=media&token=f752a6a4-82be-4b11-bd60-c967e24a5ec1",
        paraText:
        "We provide ongoing maintenance and support services to keep your web app running smoothly. Our team of experts is always available to address any issues or concerns you may have, ensuring that your web app stays ahead of the competition. Whether it's updating content, fixing bugs, or implementing new features, we're here to help you every step of the way.",
      },
    ],

    serviceFormHeading: "Top-Rated Web ",
    serviceFormSubHeading: "Development Agency",
    serviceText: `Experience excellence with our top-rated web development company. We specialize in creating innovative websites that elevate brands and engage audiences. Whether you're looking for a sleek and modern design, robust functionality, or seamless user experience, our team is dedicated to exceeding your expectations.`,

    faqs: [
      {
        question: "1. Which technologies do you use for web development?",
        answer:
        "We use a variety of technologies depending on the project requirements, including HTML, CSS, JavaScript, ReactJS, Angular, Vue.js, Node.js, PHP, and others.",
      },
      {
        question: "2. How long does it take to complete a website?",
        answer:
        "The time required to develop a website depends on its complexity and the specific requirements. We work closely with our clients to understand their needs and provide a realistic timeline for each project.",
      },
      {
        question: "3. Can you update an existing website?",
        answer:
        "Yes, we can update an existing website. Whether you need to add new features, improve the design, or optimize for search engines, we can help.",
      },
      {
        question:
          "4. Do you offer custom website design or use pre-built templates?",
        answer:
        "Yes, we work with both of these. As per the requirement of customers.",
      },
      {
        question:
          "5. How do I get started with your web development services?",
        answer:
        "To get started, simply contact us with your project requirements, and we'll schedule a consultation to discuss your needs and provide a customized solution for your website development needs.",
      },
    ],
  },
  {
    id: 2,
    metaTitle:"Expert Mobile App Development Services by Redsky Advance Solutions",
    metaDesc:"Redsky Advance Solutions offers expert mobile app development services to help businesses thrive in the digital world. Contact us today!",
    platformName: "mobile-development",
    canonicalTagLink:"https://redskyadvancesolutions.com/services/mobile-development",
    serviceTechHeading: "Mobile Application",
    serviceTechText:
    <>
     At 
     <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/",
      }}
      legacyBehavior
      passHref
    >
      <a>  Redsky Advance Solutions </a></Link> </Text>, we specialize in crafting innovative and user-centric mobile applications for iOS and Android platforms. Our team of experienced developers and designers is dedicated to delivering high-quality mobile solutions that meet your business objectives. Whether you're looking to create a new app from scratch or improve an existing one, we've got you covered.`,
    </>,
    landingImg:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fappdev%201%20(2).png?alt=media&token=7a50da09-7d27-4205-8a19-04e49ea28e99",
    techServiceHeading: `TECHNOLOGIES WE ARE`,
    gradientTextServices: `EXPERT IN`,
    techDetailCardData: [
      {
        id: 1,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fios.png?alt=media&token=cabf142c-7de5-485d-bdb8-e42b8a8426a6",
        name: "IOS App",
        description:
          "Our team of expert developers is well-versed in iOS app development. Whether you're looking to develop a new app or update an existing one, we have the skills and experience to bring your vision to reality on the iOS platform.",
        path: "/services/web",
      },
      {
        id: 2,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fandroid.png?alt=media&token=309e6670-0202-4189-9d25-57efa9c5c5f4",
        name: "Android App",
        description:
        <>
          With our extensive experience in Android <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > app development </Text>, we can help you create custom apps. From designing the user interface to integrating complex functionalities, our team has the expertise to deliver top-notch Android apps that meet your business requirements.
        </>,
        path: "/services/hybrid",
      },
      {
        id: 3,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fionic.png?alt=media&token=a77bf635-e1be-4c85-9c47-7c0459ec3d5b",
        name: "Ionic App",
        description:
          "Ionic is a popular framework for building cross-platform mobile apps using web technologies like HTML, CSS, and JavaScript. Our developers are proficient in Ionic development, allowing us to create hybrid mobile apps that run smoothly on both iOS and Android devices.",
        path: "/services/graphic-design",
      },
      {
        id: 4,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2FnativeScript.png?alt=media&token=11ad28b8-c9d2-4156-a8eb-46cb83728fd3",
        name: "NativeScript App",
        description:
          "Our team has extensive experience in NativeScript development, allowing us to create high-performance, native-like apps that offer a seamless user experience across different platforms. Whether you're targeting iOS, Android, or both, we can help you build a NativeScript app that meets your needs.",
      },
      {
        id: 5,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Freact.png?alt=media&token=9e1ecabe-f60a-49bd-843c-87633b382cf4",
        name: "React Native App",
        description:
          "React Native is a popular framework for building cross-platform mobile apps using the React JavaScript library. Our developers are skilled in React Native development, enabling us to create dynamic, high-performance apps that look and feel like native apps on iOS and Android devices.",
      },
    ],
    WhyHireUsHeading: "Mobile app",
    WhyHireUsGradient: "development process",
    WhyHireUs: [
      {
        title: "Requirement Analysis",
        description:
          "We work closely with you to understand your goals, target audience, and app requirements.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FmobileDevelopment%2FmobileProcess%2Fanalysis.png?alt=media&token=04092225-e27e-4c6a-bb20-9854f9fb0ac8",
      },
      {
        title: "Design",
        description:
          "Our design team creates wireframes and mockups to visualise the app's user interface and experience.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FmobileDevelopment%2FmobileProcess%2Fdesign.png?alt=media&token=bac760c1-5bda-45a5-91d3-7ed292799ea7",
      },
      {
        title: "Development",
        description:
          "Our developers use the latest technologies and best practices to build the app according to the approved designs.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FmobileDevelopment%2FmobileProcess%2Fdeployment.png?alt=media&token=a80686d0-73c7-469c-a3cb-a3972e036e7a",
      },
      {
        title: "Testing",
        description:
          "We rigorously test the app for functionality, usability, and compatibility to ensure it meets our quality standards.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FmobileDevelopment%2FmobileProcess%2FTesting.png?alt=media&token=68489ba2-c44c-4cf4-8849-8ec790310644",
      },
      {
        title: "Deployment",
        description:
          "We help you launch the app on the App Store and Google Play Store, ensuring a smooth rollout.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FmobileDevelopment%2FmobileProcess%2Fdevelopment.png?alt=media&token=9c913a54-0fea-4131-8a0d-66df9dba6932",
      },
      {
        title: "Support",
        description:
          "We provide ongoing maintenance and support services to keep your app running smoothly and up-to-date with the latest OS versions.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FmobileDevelopment%2FmobileProcess%2Fmaintainance.png?alt=media&token=4d2a2554-08b8-4e0f-b45e-5a9d833fa5d3",
      },
    ],
    techProcessHeading: `Solutions`,
    gradientTextProcess: `We Offer`,
    techProcessText: `The term online marketing covers broadly, from promoting your business in search 
engine results to email newsletters or special offers for your customers. The good news for business owners 
like you is that all these different strategies work in their own way.`,

    devData: [
      {
        title: "Custom Mobile App Development",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FCustomise.png?alt=media&token=a02879ee-f12c-43dc-a530-c55f7a303ada",
        paraText:
          "From concept to launch, we create tailor-made mobile apps that align with your brand identity and business objectives.",
      },
      {
        title: "Cross-Platform Development",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FthirdPartyUpgrade.png?alt=media&token=10076551-7995-4be5-9472-246bf6e62435",
        paraText:
          "Reach a broader audience with apps that work seamlessly on iOS and Android platforms, built using cutting-edge frameworks like React Native, NativeScript and Ionic.",
      },
      {
        title: "Third-Party Integration",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FappUpdate.png?alt=media&token=f752a6a4-82be-4b11-bd60-c967e24a5ec1",
        paraText:
          "We seamlessly integrate third-party APIs, SDKs, and services into your mobile app, enhancing its capabilities and providing a richer user experience.",
      },
    ],

    serviceFormHeading: "Best Mobile App ",
    serviceFormSubHeading: "Development Company in the USA",
    serviceText: 
    <>
    Embark on a journey of digital transformation with Redsky Advance Solutions, your premier destination for cutting-edge 
    <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/mobile-development",
      }}
      legacyBehavior
      passHref
    >
      <a>  mobile app development services  </a></Link></Text> in the USA. Our innovative approach and unwavering dedication ensure that every app we create is a masterpiece, tailored to exceed your expectations and drive unparalleled success.
  Whether you're looking to create a mobile app from scratch or revamp an existing one, Redsky Advance Solutions is here to help.
    </>,

    faqs: [
      {
        question: "1. How long does it take to develop a mobile app?",
        answer:
          "The timeline for developing a mobile app can vary depending on the complexity of the app, the features required, and other factors. On average, developing a mobile app can take 3 to 6 months from start to finish.",
      },
      {
        question: "2. Do you develop apps for both iOS and Android?",
        answer:
          "Yes, we develop mobile apps for both iOS and Android platforms. Our team is experienced in developing native apps for each platform, as well as cross-platform apps using frameworks like React Native and Native-script.",
      },
      {
        question: "3. Why choose React Native for mobile app development?",
        answer:
          "React Native is chosen for mobile app development due to its ability to create high-quality mobile apps for both iOS and Android using a single codebase. It offers fast development with hot reloading and reusable components.",
      },
      {
        question: "4. How much does it cost to develop a mobile app?",
        answer:
          "The cost of developing a mobile app can vary depending on the scope and complexity of the app. Factors such as features, design, and development time all contribute to the overall cost. We provide customized quotes based on your specific app requirements.",
      },
      {
        question: "5. Do you provide post-launch support and maintenance?",
        answer:
          "Yes, we provide post-launch support and maintenance services to ensure your app remains functional and up-to-date. Our team is available to address any issues or updates that may be needed after the app is launched.          ",
      },
    ],
  },
  {
    id: 3,
    metaTitle:"Ultimate Guide to Backend Development with Redsky Advance Solutions",
    metaDesc:"Unlock the secrets of backend development with Redsky Advance Solutions. Dive into our Ultimate Guide and become a proficient backend developer.",
    platformName: "backend-development",
    serviceTechHeading: "Backend Development",
    canonicalTagLink:"https://redskyadvancesolutions.com/services/backend-development",
    serviceTechText: `Transform your applications with our backend development services. At Redsky Advance Solutions, we are committed to delivering high-quality solutions using technologies like Node.js, PHP, MySQL, AWS, Firebase, and MongoDB. Our team of developers has the expertise to build scalable, secure, and high-performance backend solutions that meet your business needs. Whether you need help with database design, API development, or performance optimisation, we can deliver solutions that drive your business forward.`,
    landingImg:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FservicesLandingimg%2FbackendService.png?alt=media&token=6a4429c4-5a41-4d16-8795-d37aa3bd15c4",
      // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2Fbackend%2FNodeMainDoodal.png?alt=media&token=9d1f431b-a48e-4c7f-ac5c-9b0f4af8767a",
    techServiceHeading: `Technologies We `,
    gradientTextServices: `Are Using`,
    techDetailCardData: [
      {
        id: 1,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fnode.png?alt=media&token=5eeda05e-6ec8-4160-8bf1-acaa61ccc904",
        name: "Node Js",
        description: <>
        Node.js is a powerful runtime environment that allows us to build fast and scalable network applications.
         With its event-driven, non-blocking I/O model, Node.js is perfect for building real-time applications that require high concurrency.
          Our team of  <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="bold"
        cursor={"pointer"}
      > Node.js developers </Text>has the expertise to deliver robust and efficient backend solutions that meet your specific requirements.</>,
      },
      {
        id: 2,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fphp.png?alt=media&token=896f5b44-3a9b-4a29-9d33-0b9291af68ec",
        name: "Php",
        description: "PHP is a widely used server-side scripting language that is ideal for developing dynamic web pages and web applications. Its simplicity and ease of integration with other technologies make it a popular choice for backend development. Our PHP developers have years of experience in building scalable and secure backend solutions using PHP, ensuring that your applications perform optimally.",
      },
      {
        id: 3,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fmongodb.png?alt=media&token=20f3ea78-5df7-47b6-be2b-75be8eb27906",
        name: "Mongodb",
        description: "MongoDB is a flexible and scalable NoSQL database solution that we use to store and manage unstructured data. Its document-based data model and horizontal scalability make it ideal for handling large volumes of data in a distributed environment. Our MongoDB experts can design and implement MongoDB databases that meet your specific requirements, ensuring that your data is stored and managed efficiently.",
      },
      {
        id: 4,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Fmysql.png?alt=media&token=f5defe35-5a1e-4a8d-8f59-befda6064b13",
        name: "MySql",
        description: "MySQL is a reliable and efficient relational database management system that we use to store and manage your application's data. With features like ACID compliance, transactions, and indexing, MySQL ensures the integrity and performance of your database. Our MySQL experts can design and optimise databases to handle large volumes of data efficiently, ensuring fast access and retrieval.",
      },
      {
        id: 5,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Faws.png?alt=media&token=0811ccd3-013b-4033-8cf6-7035f6050484",
        name: "AWS",
        description: "Amazon Web Services (AWS) provides a comprehensive suite of cloud computing services that we leverage to build scalable and reliable backend infrastructures for your applications. From computing and storage to database and networking, AWS offers a wide range of services that enable us to meet your specific needs.",
        path: "/services/graphic-design",
      },
      {
        id: 6,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FtechLogosWithRoundBackground%2Ffirebase.png?alt=media&token=04fb47db-9506-4eb1-b51c-db3fde6e39b1",
        name: "Firebase",
        description: "Firebase is a mobile and web application development platform that allows us to build high-quality apps without managing infrastructure. With features like real-time database, authentication, and hosting, Firebase accelerates the development process and helps us deliver feature-rich applications to you. We can help you leverage the power of Firebase to build scalable and secure backend solutions for your applications.",
      },
    ],
    WhyHireUsHeading: "Our Approach to ",
    WhyHireUsGradient: "Backend Development",
    WhyHireUs: [
      {
        title: "Requirement Analysis",
        description:
        "We start by understanding your business needs and requirements to define the scope of the project.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fquality-assurance.png?alt=media&token=727214b1-fb2c-4566-9c43-996041910b84",
      },
      {
        title: "Architecture Design",
        description:
        "Based on the requirements, we design a custom architecture that ensures scalability, performance, and security.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Freal-time-support.png?alt=media&token=f7fa0201-1bd6-4378-833c-d4342e82a420",
      },
      {
        title: "Database Design and Optimization",
        description:
        "We design and optimise the database to ensure efficient data storage and retrieval.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fcost-effectiveness.png?alt=media&token=9a6006c3-7534-44de-9f43-3986f0e4f509",
      },
      {
        title: "API Development and Integration",
        description:
        "We develop RESTful APIs that enable seamless communication between the frontend and backend components of your application.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fexpertise.png?alt=media&token=42da3b9f-c49d-4b32-86cb-4c550f416d4f",
      },
      {
        title: "Performance Optimization",
        description:
        "We optimise the backend infrastructure to handle increasing user loads and ensure smooth performance under high-traffic conditions.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Fresult-driven.png?alt=media&token=39b5840d-fd0f-43d9-82e7-09ebfa523ab7",
      },
      {
        title: "Security and Compliance",
        description:
        "We implement robust security measures to protect your data and ensure compliance with relevant regulations.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FwhyHireUsIcons%2Freliability-removebg.png?alt=media&token=9120e428-cdb2-46b5-b259-7a85e27c53b8",
      },
    ],
    techProcessHeading: `Solutions`,
    gradientTextProcess: `We Offer`,
    techProcessText: 
    <>
    At 
    <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="bold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/",
      }}
      legacyBehavior
      passHref
    > Redsky Advance Solutions </Link></Text>, we offer a range of solutions to address your backend development needs. Whether you're looking to build a scalable web application or a robust mobile app, we have the expertise and technology stack to deliver high-quality solutions that meet your requirements. Our solutions include:
    </>
    ,

    devData: [
      {
        title: "Custom Backend Development",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FCustomise.png?alt=media&token=a02879ee-f12c-43dc-a530-c55f7a303ada",
        paraText:
        "We specialise in building custom backend solutions tailored to your specific requirements. Whether you need a robust API for your web application or a scalable database for your mobile app, we can deliver a solution that meets your needs.",
      },
      {
        title: "Database Design and Optimization",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FthirdPartyUpgrade.png?alt=media&token=10076551-7995-4be5-9472-246bf6e62435",
        paraText:
        "Our team of experts can design and optimise databases to handle large volumes of data efficiently. Whether you're dealing with structured or unstructured data, we can design a database that meets your performance and scalability requirements.",
      },
      {
        title: "API Development and Integration",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fshared%2FsolutionWeOffer%2FappUpdate.png?alt=media&token=f752a6a4-82be-4b11-bd60-c967e24a5ec1",
        paraText:
        "We develop RESTful APIs that enable seamless communication between your frontend and backend systems. Whether you're integrating with third-party services or building a microservices architecture, we can develop an API that meets your needs.",
      },
    ],

    serviceFormHeading: "Best Backend ",
    serviceFormSubHeading: "Development Services",
    serviceText: <>
    Empower your applications with our comprehensive
    <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="bold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/backend-development",
      }}
      legacyBehavior
      passHref
    > backend development services </Link></Text>.
     We prioritise scalability, ensuring that your applications can handle increased user
      loads and traffic, and security, implementing robust measures to protect your data and
       applications from cyber threats.
        With a focus on performance optimisation, compliance with relevant regulations, and delivering custom solutions tailored to your needs,
         our backend development company is your trusted partner for building secure, scalable, and high-performance applications. </>,

    faqs: [
      {
        question: "1. What technologies do you use for backend development?",
        answer:
        "We specialise in using a variety of technologies for backend development, including Node.js, PHP, MySQL, AWS, Firebase, and MongoDB. These technologies allow us to build scalable, secure, and high-performance backend solutions for your applications.",
      },
      {
        question: "2. Can you help us migrate our existing backend infrastructure to a new platform?",
        answer:
        "Yes, we have experience in migrating existing backend infrastructures to new platforms. Whether you're looking to migrate to the cloud or upgrade to the latest technology, we can help you make a smooth transition."
      },
      {
        question: "3. Can you integrate our backend with third-party services?",
        answer:
        "Yes, we have experience in integrating backend systems with third-party services. Whether you need to integrate with payment gateways, CRM systems, or other APIs, we can help you achieve seamless integration."
      },
      {
        question:
          "4. How do you handle data backups and recovery?",
        answer:
        "We implement regular data backups and have a robust data recovery plan in place. This ensures that your data is protected against loss and can be recovered quickly in the event of a disaster."
      },
      {
        question:
          "5. What kind of support do you offer after the development phase?",
        answer:
        "We offer ongoing support and maintenance services to ensure that your backend infrastructure remains stable and secure. Whether you need bug fixes, updates, or enhancements, we're here to help."
      },
    ],
  },
  {
    id: 4,
    metaTitle:"Step-by-Step Tutorial of Graphic Designing with Redsky Advance Solutions",
    metaDesc:"Discover the art of graphic designing with Redsky Advance Solutions through our comprehensive step-by-step tutorial. Enhance your skills today!",
    platformName: "graphic-design",
    canonicalTagLink:"https://redskyadvancesolutions.com/services/graphic-design",
    serviceTechHeading: "Graphic Designs",
    serviceTechText:
    <>
     Unleash the power of exceptional graphic design with 
     <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Redsky Advance Solutions </Text>. Our team of experts combines skill and creativity to deliver designs that stand out. From concept to completion, we guarantee top-notch results that exceed your expectations. Let's bring your ideas to reality and make your brand stand out!
    </>,
    landingImg:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FservicesLandingimg%2FgraphicDesigningDoodal.png?alt=media&token=e3edb540-1e11-4023-8038-fdc23988ada8",
      // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FgraphicDesigningMainDoodal2.png?alt=media&token=5098ff91-3726-4f39-b062-2bf455264245",
    techServiceHeading: `Our`,
    gradientTextServices: `Services`,
    techDetailCardData: [
      {
        id: 1,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FdesignServices%2FlogoDesign.png?alt=media&token=6f991b00-a8a4-4cb2-b7a9-6a04148f718f",
        name: "Logo Design",
        description: `Your logo is the cornerstone of your brand identity. Let us create a logo that captures the essence of your brand and leaves a lasting impression on your audience.`,
        path: "/services/web",
      },
      {
        id: 2,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FdesignServices%2Fui_ux.png?alt=media&token=84688d92-ce32-4f4a-a928-197dbde18ed0",
        name: "UI/UX Design",
        description: `We specialize in designing user-friendly interfaces and experiences for websites, mobile apps, and software, focusing on usability and user satisfaction.`,
        path: "/services/hybrid",
      },
      {
        id: 3,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FdesignServices%2FbrandLogo.png?alt=media&token=26c4a92e-e54d-4b8d-871b-2e51100cbd84",
        name: "Brand Identity Design",
        description: `We offer comprehensive brand identity design services, including colour schemes, typography, and brand guidelines, to ensure consistency across all your brand touchpoints.`,
        path: "/services/graphic-design",
      },
      {
        id: 4,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FdesignServices%2FprintDesign.png?alt=media&token=9689a6d1-3ed1-45b0-a86a-3a010556352c",
        name: "Print Design",
        description: `From business cards to brochures to posters, we can help you create stunning print materials that communicate your message effectively and leave a lasting impression.`,
      },
      {
        id: 5,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FdesignServices%2FmerchantDesign.png?alt=media&token=d4da9192-5e06-4571-a73b-586b08fb2e2e",
        name: "Merchandise Design",
        description: `We can help you design merchandise such as T-shirts, mugs, and tote bags that promote your brand and create additional revenue streams.`,
      },
      {
        id: 6,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FdesignServices%2FdigitalDesign.png?alt=media&token=ef0bd6ff-f6ce-4521-aa50-271ed0b7164d",
        name: "Digital Design",
        description: `Our digital design services include social media graphics, website banners, email templates, and digital ads, all designed to help you engage your audience online.`,
      },
    ],

    toolsUsing: "Tools we",
    tooslUsingGradient: "are using",
    backgroundImage: "",
    backgroundImage:
      "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fforeground-image%2FbackgroundhomeWstartwithpattren.png?alt=media&token=0ffa2c1c-4319-40d6-8c8f-95e2141db78e",
    tech: [
      {
        images:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2Ftools%2Fxd.png?alt=media&token=8f157886-767c-4a20-a390-26adc4afc04a",
        text: "AdobeXD",
      },
      {
        images:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2Ftools%2Ffigma.png?alt=media&token=72487398-6053-4778-b90b-a17db877b863",
        text: "Figma",
      },
      {
        images:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2Ftools%2Fcanva.png?alt=media&token=bb74d607-dde9-4c8e-b90f-a73340c92d82",
        text: "Canva",
      },
      {
        images:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2Ftools%2FadobeIllustrator.png?alt=media&token=c17c8288-e7eb-49db-a60d-11792f7d39a2",
        text: "illustrator",
      },
      {
        images:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2Ftools%2FphotoShop.png?alt=media&token=c12d4232-3a59-49dc-96b1-be6d02163de3",
        text: "photoshop",
      },

      {
        images:
          "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2Ftools%2FInDesign.png?alt=media&token=9c037c5a-7a49-4131-8d60-0711e30546ce",
        text: "inDesign",
      },
    ],
    techProcessHeading: `Why`,
    gradientTextProcess: `Choose Us`,
    devData: [
      {
        title: "Creativity",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FwhyChooseUseIcon%2FcreativeWithoutBackground.png?alt=media&token=faeadcc0-8c3a-453e-b61b-33cbea9ab84b",
        paraText: `We are passionate about creativity and strive to bring fresh ideas to every project we undertake.`,
      },
      {
        title: "Expertize",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FwhyChooseUseIcon%2FExpert-removebg-preview.png?alt=media&token=e687be60-c6c5-4892-94d0-d8592ee4b5c4",
        paraText: `With years of experience in the industry, we have the expertise to deliver high-quality designs that meet our clients' needs.`,
      },
      {
        title: "Timely Delivery",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FwhyChooseUseIcon%2FtimlyDeliver-removebg-preview.png?alt=media&token=5a4068d8-d2cf-4c54-a227-b1fec2a023bb",
        paraText: `We understand the importance of deadlines and strive to deliver our projects on time and within budget. You can rely on us to meet your design needs efficiently and effectively.
        `,
      },
      {
        title: "Result Oriented",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FwhyChooseUseIcon%2FResultOriented-removebg-preview.png?alt=media&token=79aadcc6-e177-4924-a660-82fbfce2c4c0",
        paraText: `Our ultimate goal is to help our clients achieve their business objectives through effective design solutions.`,
      },
      {
        title: "Affordable Pricing",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FwhyChooseUseIcon%2FPricing-removebg-preview.png?alt=media&token=96d653ec-f6bb-43f9-a603-66b9af4bc6e1",
        paraText: `We offer competitive pricing for our graphic design services, ensuring that you get the best value for your investment.`,
      },
      {
        title: "Customise",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FgraphicDesign%2FwhyChooseUseIcon%2FCustomise-removebg-preview.png?alt=media&token=584530ab-a8c2-46ab-b851-d75ac18621dc",
        paraText: `We offer competitive pricing for our graphic design services, ensuring that you get the best value for your investment.`,
      },
    ],

    serviceFormHeading: "Best Graphic",
    serviceFormSubHeading: "Designing Company",
    serviceText: 
    <>
    Upgrade your brand's visual appeal with our 
    <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/graphic-design",
      }}
      legacyBehavior
      passHref
    > graphic design services  </Link> </Text>. Our team specializes in creating eye-catching logos, brand identities, and print materials. We also excel in digital design, offering engaging social media graphics, website banners, and email templates. Choose us for creative excellence and timely delivery. Let's bring your ideas to reality and make your brand stand out!
    </>,

    faqs: [
      {
        question: "1. What graphic design services do you offer?",
        answer:
        <>
        We offer a range of graphic design services, including 
        <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > logo design </Text>, website design, App Design, and website graphics.
        </> 
      },
      {
        question: "2. Do you offer revisions to your designs?",
        answer: `Yes, we offer a certain number of revisions to our designs to ensure that they meet your expectations. We value your input and strive to deliver designs that exceed your expectations.`,
      },
      {
        question: "3. Do you provide source files for the designs?",
        answer: `Yes, we provide source files for all our designs, allowing you to make edits and updates in the future if needed.`,
      },
      {
        question: "4. How much do your graphic design services cost?",
        answer: `The cost of our graphic design services depends on the scope of the project and the specific services required. We offer competitive pricing and can provide a customized quote based on your needs.`,
      },
      {
        question: "5. How do I request a quote for my project?",
        answer: `To request a quote for your project, simply contact us with details about your project, and we'll get back to you with a customized quote.`,
      },
    ],
  },
  {
    id: 5,
    metaTitle:"Grow Your Brand with Digital Marketing Services | Redsky Advance Solutions",
    metaDesc:"Boost your brand's online presence with expert digital marketing services offered by Redsky Advance Solutions. Drive growth and engagement today.",
    platformName: "digital-marketing",
    canonicalTagLink:"https://redskyadvancesolutions.com/services/digital-marketing",
    serviceTechHeading: "Digital Marketing",
    serviceTechText: 
    <>
    At 
    <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/",
      }}
      legacyBehavior
      passHref
    > Redsky Advance Solutions  </Link> </Text>, your digital success is our top priority! With our data-driven strategies and innovative solutions, we'll not only boost your online presence but also engage your audience. Whether you're looking to increase brand awareness, drive website traffic, or generate more leads, we've got you covered.
    Let's work together to achieve your business goals and take your digital presence to new heights. Explore our range of digital marketing services today and let's start your journey to success!    
    </>,
    landingImg:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2FservicesLandingimg%2FdigitalMarketingDoodal%20.png?alt=media&token=49d73242-2290-4b7e-a3fb-6481edc09d05",
    techServiceHeading: `Digital Marketing`,
    gradientTextServices: `services`,
    techDetailCardData: [
      {
        id: 1,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2Fseo.png?alt=media&token=86a56382-f011-4ce9-b63b-29cabb41cf1d",
        name: "Search Engine Optimization",
        description:<>
          Boost your website's visibility and improve its search engine rankings with our comprehensive <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      >  SEO services</Text>. Our expert team employs proven strategies to optimize your website, enhance its online presence, and attract more organic traffic.
        </>
      },
      {
        id: 2,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FSMM.png?alt=media&token=55fb16d8-7773-43e1-8838-3022bca45760",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FdigitalMarketing%2FdigitalServicesicon%2FsocialMediaMarketing.png?alt=media&token=456974dd-64ba-4e10-9633-a16ade64f885",
        name: "Social Media Marketing",
        description:
          "Ready to take your social media presence to the next level? Our social media marketing service is designed to boost your brand's visibility, engage your audience, and drive results.",
      },
      {
        id: 3,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FPPC.png?alt=media&token=f47a60fd-b841-4f7f-af9f-c15a5e6090cc",
        name: "Pay-per-Click Advertising",
        description:
        <>
          Our team of
          <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Pay-Per-Click </Text> experts can help you create and manage ad campaigns across various search engines and social media platforms to drive more traffic and generate leads.
        </>
      },
      {
        id: 4,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FemailMarketing.png?alt=media&token=a94ec37e-42a3-4c39-9cc7-3b8ca4f06bd0",
        name: "Email Marketing",
        description:
        <>
          At Redsky, we understand the power of effective email marketing. Our team of
          <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > email marketing experts </Text>
   is here to help you craft compelling campaigns that drive results.
        </>
       
      },
      {
        id: 5,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2FcontentMarketing.png?alt=media&token=ce085233-5d8c-4574-a712-fadf2830b0e6",
        // "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FdigitalMarketing%2FdigitalServicesicon%2FcontentMarketing.png?alt=media&token=3aebce35-f0a3-4ba5-87f5-46b5bfb3d04b",
        name: "Content Marketing",
        description:
          "We're dedicated to helping you create and distribute top-notch content that connects with your audience. From blog posts to social media campaigns, we have the expertise to enhance your brand's digital footprint and boost your online visibility.",
        path: "/services/graphic-design",
      },
      {
        id: 6,
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fhome%2FservicesOffered%2Fanalitic_reporting.png?alt=media&token=315b9c51-f03f-4f2b-b3e1-cc41cdab8663",
        name: "Analytics and Reporting",
        description:
          "Our analytics and reporting services provide a comprehensive view of your digital performance. From detailed data analysis to custom reporting, we help you make informed decisions and optimize your strategies for success.",
      },
    ],
    gredientBoxText:
      "Empower Your Brand with Our Dynamic Digital Marketing Solutions",
    techProcessHeading: `Services`,
    gradientTextProcess: `We Offer`,
    techProcessText: `At Redsky Advance Solutions, we understand the significance of enhancing the visibility of your business to attract potential customers. That's why we offer a comprehensive range of digital marketing services to help you optimise your online presence and increase your outreach. Our team of experts is equipped with the necessary skills and knowledge to deliver tailored solutions that cater to your unique business needs.`,

    websiteTasks: [
      {
        title: "On-Page SEO Of The Website",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FdigitalMarketing%2FonPageSeo.png?alt=media&token=ff79404e-fce1-43d6-87ad-4d73c4953d9a",
        tasks: [
          "Checking website for errors",
          "Rectifying those errors",
          "Checking Meta Tags, Alt Tags",
          "Initial Backlink Analysis",
          "Content checkup for duplicity",
          "Canonicalization",
          "HTML Code cleanup",
          "404-page error",
          "Website Analysis",
          "Keyword Research",
          "Google Analytic and Webmaster Code",
          "Robot.txt and Sitemap creation",
          "H1 Tag",
        ],
      },
      {
        title: "Off-Page SEO",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FdigitalMarketing%2FoffPageSeo.png?alt=media&token=16a029a3-798d-4840-b69f-4d073a966690",
        tasks: [
          "Article Submission",
          "Blog Creation",
          "Classifieds, Bookmarks,Submission",
          "Press Release Submission",
          "Blog Commenting",
          "Image and Video Promotions",
          "PPT submissions",
          "Guest Blog Posting",
          "Forum Submission",
          "Business Listings",
          "Online Reputation Management",
          "Content Writing",
        ],
      },
      {
        title: "Paid Advertising",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FdigitalMarketing%2FpaidAdvertising.png?alt=media&token=e4bf5add-725b-4dca-a15f-86c859e0ab9d",
        tasks: [
          " Google Ad Campaign Setup and Management",
          "Bing Ad Campaign Setup and Management",
          "Facebook Ad Campaign Setup and Management",
          "Twitter Ad Campaign Setup and Management",
          "LinkedIn Ad Campaign Setup and Management",
        ],
      },
      {
        title: "Social Media Marketing",
        icon: "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fservices%2FdigitalMarketing%2FsocialMediaMarketing.png?alt=media&token=3830a851-4df0-415d-8ec4-b793972c08c7",
        tasks: [
          "Facebook Business Page Maintenance",
          "Twitter Updates",
          "Google Business Page Maintenance",
          "Google Plus updates",
          "Video Submissions",
          "Pinterest Business Page Maintenance",
          "LinkedIn Profile Maintenance",
          "Other Social Media Submissions as per client’s demand",
        ],
      },
    ],

    serviceFormHeading: "Best Digital",
    serviceFormSubHeading: "Marketing Agency",

    serviceText:
    <>
     Want to enhance your brand's online presence? Redsky Advance Solutions is the top
     <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/digital-marketing",
      }}
      legacyBehavior
      passHref
    >  digital marketing agency  </Link> </Text>to trust. We're a results-focused marketing agency committed to driving your business growth. Our aim is to generate more leads, attract more customers, and increase your sales.
    </>,
    questions: `What Sets Us Apart?`,
    ansText: [
      "Proven Success: We have a track record of delivering exceptional results for our clients.",
      "Tailored Strategies: Our strategies are customized to meet your brand's unique needs and goals.",
      "Industry Expertise: With years of experience in the field, we know what it takes to succeed in the digital landscape.",
    ],
    bottomText:
    <>
      Ready to elevate your brand's online presence? Partner with 
      <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > Redsky Advance Solutions </Text>
       today and experience the difference for yourself.
    </>,

    faqs: [
      {
        question: "1.What digital marketing services do you offer?",
        answer:
        <>
         We offer a comprehensive range of <Text
        display={"inline"}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      > digital marketing services </Text>, including SEO, PPC advertising, social media marketing, email marketing, content marketing, and more. Our goal is to provide a tailored strategy to help your business grow online.
        </>
      },
      {
        question:
          "2. Can you help my business improve its search engine rankings?",
        answer:
        <>
        Yes, we specialize in 
        <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/digital-marketing",
      }}
      legacyBehavior
      passHref
    > SEO Services  </Link> </Text> and have a proven track record of helping businesses improve their search engine rankings. We use a combination of on-page optimization, content creation, and link-building strategies to increase your website's visibility on search engines like Google.
        </> 
      },
      {
        question:
          "3. How long does it take to see results from digital marketing efforts?",
        answer: `The timeline for seeing results from digital marketing efforts can vary depending on various factors, including the competitiveness of your industry and the specific strategies implemented. However, we work diligently to deliver results as quickly as possible while ensuring long-term success for your business.`,
      },
      {
        question: "4. Do you offer social media marketing services?",
        answer: 
        <>
        Yes, we offer 
        <Text
        display={"inline"}
        _hover={{ textDecor: "underline" }}
        textDecor="none"
        textUnderlineOffset="3px"
        fontWeight="extrabold"
        cursor={"pointer"}
      ><Link
      href={{
        pathname: "/services/digital-marketing",
      }}
      legacyBehavior
      passHref
    > social media marketing services </Link></Text> to help businesses increase their brand awareness, engage with their audience, and drive traffic and leads. We create customized social media strategies based on your business goals and target audience.
        </>
      },
      {
        question: "5. How much does your digital marketing services cost?",
        answer: `The cost of our digital marketing services can vary depending on the scope and complexity of your project. We offer flexible pricing options to accommodate businesses of all sizes and budgets. Contact us for a customized quote based on your specific needs.`,
      },
    ],
  },
];
