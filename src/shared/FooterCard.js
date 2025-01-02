import { Box, Text } from "@chakra-ui/react";
import React, { useState , useEffect} from "react";
import { useRouter } from "next/router";
import RoundButton from "../shared/Button";
import { FOOTERCARD_TEXT } from "../constants/constants";

function FooterCard() {
  const router = useRouter();

  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const shadowTimer = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, 800); // Toggle every 1 second

    return () => clearInterval(shadowTimer); // Cleanup on unmount
  }, []);
  const onClickHandler = () => {
    router.push("/contact-us");
  };
  return (
    <>
      <Box
        m="auto"
        textAlign="center"
        bg="secondary.300"
        w={["94%", "94%", "80%", "70%", "70%"]}
        h={["150px", "150px", "180px", "180px", "180px"]}
        borderRadius="150px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        border="1px solid #ffae00"
        boxShadow="0 0 20px #ffae00"
        transition="all 0.1s"
        px="8"
      >
        <Text
          fontSize={["md", "md", "1.2vw", "1.2vw", "1.9vw"]}
          fontWeight="bold"
          mb="4"
        >
          {FOOTERCARD_TEXT}
        </Text>

        <RoundButton
          title="Contact Us"
          text="LET'S CONNECT"
          sizes="xl"
          showShadow={showShadow}
          onClickHandler={onClickHandler}
        />
      </Box>
    </>
  );
}

export default FooterCard;
