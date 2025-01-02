import { Box, Image } from "@chakra-ui/react";
import React from "react";
import webimages from "../../constants/images";

function WhyChooseUs() {
  return (
    <Box width="100%" height="50%"  bgImage={`url(${webimages.whyChooseusImg})`}
    bgRepeat="no-repeat"
    bgSize="cover"
    bgPosition="center">
      {/* <Image
        src={webimages.whyChooseusImg}
        alt="why choose image"
        height="50%"
        width="100%"
        objectFit="contain"
        loading="lazy"
      /> */}
    </Box>
  );
}

export default WhyChooseUs;
