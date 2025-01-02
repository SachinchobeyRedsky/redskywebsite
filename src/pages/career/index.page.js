import { useRef } from "react";
import Head from "next/head";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import webimages from "../../constants/images";
import { carrier } from "../../constants/constants";
const HomePageForm = dynamic(() => import("../../components/Home/HomePageForm.js"), {});
const Header = dynamic(() => import("../../components/Header"), {});
const Footer = dynamic(() => import("../../components/Footer"), {});
const CarrierCard = dynamic(() => import("../../shared/CarrierCard"), {});
const CarrierModalForm = dynamic(
  () => import("../../components/Forms/CarrierModalForm"),
  {}
);
const Landing = dynamic(() => import("./Landing.js"), {});
const Postion = dynamic(() => import("./Postion"), {});
// const FooterCard = dynamic(() => import("../../shared/FooterCard"), {});

function Carrier() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef();

  return (
    <>
    <Head>
        <title>Supercharge Your Career with Redsky Advance Solutions</title>
        <meta
          name="title"
          content="Supercharge Your Career with Redsky Advance Solutions"
        />
        <meta
          name="description"
          content="Elevate your career with Redsky Advance Solutions. We provide top-notch tools & resources for your professional growth. From courses to guidance, we've got you covered."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://redskyadvancesolutions.com/career" />
      </Head>
      <Header />
      <Landing myImage={webimages.publicimages.carrierBack} carrier={carrier} />
      <Postion
        animation={{ Fade, Zoom, Slide }}
        carrier={carrier}
        carrierCardDetails={carrier.carrierCardDetails}
        CarrierCard={CarrierCard}
        onOpen={onOpen}
      />

      <Box >
        <HomePageForm />
      </Box>
      <Modal
        size="full"
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
        <ModalContent
          my="10"
          maxWidth="50rem"
          bg="brand.black"
          boxShadow="0 0 20px  rgba(255, 174, 0, 0.6)"
        >
          <ModalHeader>
            <Text
              textAlign="center"
              fontSize={["lg", "lg", "3xl", "3xl", "3xl"]}
              fontWeight="ultrabold"
              color="brand.white"
              bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
              bgClip="text"
            >
              Application form for interview
            </Text>
            <ModalCloseButton
              _focus={{ border: "none", backgroundColor: "none" }}
              color="white"
            />
          </ModalHeader>
          <ModalBody className="custom-scroll-bar">
            <CarrierModalForm ref={ref} />
          </ModalBody>
          <ModalFooter mr="6">
            {/* <Button
              title="Submit"
              variant="trainingButton"
              onClick={() => ref.current.cb()}
              _hover={{
                border: "solid 3px #faae01",
                transform: "scale(1.05)",
                opacity: 1,
                boxShadow: "0 0 20px #ffae00",
                background: "rgb(11, 11, 13)",
              }}
              _focus={{ border: "none", backgroundColor: "none" }}
            >
              <Text
                variant="gradient"
                textTransform="none"
                fontSize={["3xl", "3xl", "2xl", "2xl"]}
              >
                Submit
              </Text>
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Footer />
    </>
  );
}

export default Carrier;
