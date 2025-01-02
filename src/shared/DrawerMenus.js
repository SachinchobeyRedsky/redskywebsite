import React, { useMemo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  Accordion,
  Image,
  Flex,
  DrawerFooter,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import webimages from "../constants/images";
import { HEADER } from "../constants/constants";
import { LinkItemsWithMenus } from "./stateLessViews";
// import { getAuth } from "firebase/auth";

function DrawerMenus() {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  // const auth = getAuth();
  const router = useRouter();
  const btnRef = React.useRef();
  // const { displayName, email, photoURL } = auth.currentUser ?? {};
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const shadowTimer = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, 1000); // Toggle every 1 second

    return () => clearInterval(shadowTimer); // Cleanup on unmount
  }, []);
  const openDemo =  () => {
    onOpenModal
 }
 const onClickHandler = () => {
  router.push("/contact-us");
};
  return (
    <>
      {isOpen ? (
        <Button
          _focus={{ border: "none", backgroundColor: "none" }}
          colorScheme="brand.black"
          onClick={onClose}
          display={["block", "block", "block", "none", "none"]}
        >
          <CloseIcon w={6} h={6} />
        </Button>
      ) : (
        <Button
          title="Menus"
          ref={btnRef}
          _focus={{ border: "none", backgroundColor: "none" }}
          colorScheme="brand.black"
          onClick={onOpen}
          display={["block", "block", "block", "none", "none"]}
        >
          <HamburgerIcon w={8} h={8} />
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        closeOnOverlayClick="true"
      >
        <DrawerOverlay />
        <DrawerContent justifyContent={"space-around"} bg="brand.black">
          <DrawerCloseButton />
          <DrawerHeader mb={5} p={0}>
            <Flex px={4} py={3} align="center" justify="space-between">
                <Image
                  src={webimages.headerLogo.logomain}
                  width="130px"
                  height="40px"
                  alt="header logo"
                />
            </Flex>
            <Divider />
          </DrawerHeader>
          <DrawerBody
            overflowY="overlay"
            p="0"
            className="custom-scroll-bar"
            color="brand.white"
          >
            <Box flex={1}>
              <Accordion allowToggle>
                {HEADER.map((_h, i) => (
                  <LinkItemsWithMenus
                    router={router}
                    ind={i}
                    key={_h.name + i}
                    linkItemsData={_h}
                    makeDisabled={!!_h.popoverData}
                    withIcon={true}
                    textTransform="uppercase"
                    onClose={onClose}
                  />
                ))}
              </Accordion>
            </Box>
          </DrawerBody>
          <DrawerFooter
            px="5"
            flexDir="column"
            alignItems="stretch"
            justifyContent="center"
          >
          <Button
            title="Get In touch"
            className={showShadow ? "with-shadow" : ""}
            border="solid 2px #faae01"
            boxShadow="0 0 8px #ffae00"
            borderRadius="500"
            background="rgb(11, 11, 13)"
            _hover={{
              background: "rgb(11, 11, 13)",
              transform: "scale(1.05)",
            }}
            _focus={{
              background: "rgb(11, 11, 13)",
            }}
            _active={{
              background: "rgb(11, 11, 13)",
            }}
            onClick={onClickHandler}
          >
            <Text variant="gradient" textTransform="none" fontSize={"lg"}>
              Get In Touch
            </Text>
          </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
       </>
  );
}

export default DrawerMenus;
