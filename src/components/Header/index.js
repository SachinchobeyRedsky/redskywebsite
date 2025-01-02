import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Stack,
  Flex,
  Text,
  Button,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../../firebase.config";
// import { getAuth } from "firebase/auth";
import DrawerMenus from "../../shared/DrawerMenus";
import { HEADER, HEADER_HEIGHT, MAX_WIDTH } from "../../constants/constants";
import { useRouter } from "next/router";
import webimages from "../../constants/images";
import HeaderLinkWithPopover from "../../shared/HeaderLinkWithPopover";
// import Login from "../Login/Login";
// import ProfilePopOver from "../../shared/ProfilePopOver";

const Header = (props) => {
  // const auth = getAuth();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentUser, setCurrentUser] = useState("");
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const shadowTimer = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, 800); // Toggle every 1 second

    return () => clearInterval(shadowTimer); // Cleanup on unmount
  }, []);

  // const authChangedHandler = async (authState) => {
  //   if (authState) {
  //     const userRef = doc(db, "authUsers", authState.uid);
  //     const userDoc = await getDoc(userRef);

  //     if (userDoc.exists() && userDoc.data().isBlocked) {
  //       setCurrentUser(null);
  //     } else {
  //       setCurrentUser(authState);
  //     }
  //   } else {
  //     setCurrentUser(null);
  //   }
  // };
  // const onClickHandler = () => {
  //   onOpen();
  // };
  const onClickHandler = () => {
    router.push("/contact-us");
  };

  // useEffect(() => {
  //   auth.onAuthStateChanged(authChangedHandler);
  // }, []);
  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        position="fixed"
        top="0"
        w="100%"
        height={HEADER_HEIGHT}
        px={["6", "6", "12", "12"]}
        bg="brand.black"
        color="white"
        zIndex={1000}
        maxWidth={MAX_WIDTH}
        {...props}
      >
        <Center
          width={["150px", "150x", "150px", "200px", "200px"]}
          h={["60px", "60px", "60px", "60px"]}
        >
          <Link href="/">
            <a>
              <Image
                src={`${webimages.headerLogo.logomain}`}
                alt="Redsky logo"
                width="230px"
                height="120px"
                loading="lazy"
                decoding="async"
                quality=""
              />
            </a>
          </Link>
        </Center>

        <DrawerMenus _focus={{ border: "none", backgroundColor: "none" }} />

        <Center
          display={{
            base: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            fontWeight={800}
            as="nav"
            display="flex"
            justify="center"
            align="center"
          >
            {HEADER?.map((item, idx) => (
              <HeaderLinkWithPopover
                key={idx}
                router={router}
                goto={item.path}
                linktext={item.name}
                popoverContent={item.popoverData}
                enablePopover={!!item.popoverData}
              />
            ))}
          </Stack>
        </Center>

        <Box display={["none", "none", "none", "block", "block"]}>
          {/* {currentUser ? (
            <ProfilePopOver currentUser={currentUser} />
          ) : (
            <Button
              title="Sign In"
              variant="trainingButton"
              onClick={onClickHandler}
              border="2px solid #faae12"
              boxShadow={
                "0 0 20px  rgba(255, 174, 0, 0.4)"
              }
              transition="all 0.1s"
              _hover={{
                border: "solid 3px #faae01",
                transform: "scale(1.05)",
                opacity: 1,
                boxShadow:"0 0 20px #ffae00",
                background: "rgb(11, 11, 13)",
              }}
              _focus={{
                outline: "none",
                background: "gray.500",
              }}
              _active={{
                outline: "none",
                background: "gray.500",
              }}
            >
              <Text variant="gradient" textTransform="none" fontSize={"1xl"}>
                Sign In
              </Text>
            </Button>
          )} */}
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
        </Box>
      </Flex>
    </>
  );
};

export default Header;
