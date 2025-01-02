import React, { useState } from "react";
import {
  Box,
  Text,
  chakra,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import PortfolioModal from "../PortfolioModal/PortfolioModal";
import { home } from "../../constants/constants";
import Image from "next/image";

const proJimages = [
  {
    projectName: "Brightsky",
    imgsrc:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame2.webp?alt=media&token=389f13b2-3640-489b-acf1-d4d120cbad27"
  },
  {
    projectName: "Sey-Btz",
    imgsrc:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame6.webp?alt=media&token=96359c2c-c2cf-45ce-ba77-8d4da7381df8"
  },

  {
    projectName: "Reddo",
    imgsrc:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame7.webp?alt=media&token=086c4426-16e2-42a9-8c45-f3f3b00693cf"
  },

  {
    projectName: "Eat-it",
    imgsrc:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame4.webp?alt=media&token=181ffaae-dc24-4103-9b1d-59b08c4a2b5b"
  },

  {
    projectName: "Mr & Mrs",
    imgsrc:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame5.webp?alt=media&token=37174ab9-f9a6-40ac-b6fd-13cbab0c66d7"
  },
  
  {
    projectName: "FitnessApp",
    imgsrc:
    "https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/homePortfolioimg%2FportfolioFrame1.webp?alt=media&token=a397eb16-f232-494e-97f0-63a8563e12e6"
  },
];

function PortfolioSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ProjecName, setProjecName] = useState({});
  return (
    <Box>
      {" "}
      <Box textAlign="center" mb="10">
    
        <Text
        // as="h4"
          textAlign="center"
          color="brand.white"
          textTransform="uppercase"
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          fontFamily="Raleway"
          fontWeight="extrabold"
        >
          {home.EXPLORE_OUR}
          <chakra.span
            bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
            bgClip="text"
            fontFamily="Raleway"
            fontWeight="extrabold"
            ml="2"
          >
            {home.COMPLETED_PROJECTS}
          </chakra.span>{" "}
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={10}
        >
          {proJimages.map((proD, index) => (
            <GridItem
              key={index}
              w="100%"
              _hover={{
                transition: "transform 0.5s",
                transform: "scale(1.07)",
                opacity: 1,
              }}
              onClick={() => {
                onOpen();
                setProjecName({ proD });
              }}
              cursor="pointer"
            >
              <Image
                src={proD?.imgsrc}
                width="500"
                height="350"
                objectFit="contain"
                alt={`Project ${index + 1}`}
                loading="lazy"
              />
            </GridItem>
          ))}
          <PortfolioModal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            projecDetail={ProjecName?.proD}
            projecName={ProjecName?.proD?.projectName}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default PortfolioSection;
