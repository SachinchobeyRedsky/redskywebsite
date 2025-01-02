import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useToast,
  // useDimensions,
  // useDisclosure,
  // ModalHeader,
} from "@chakra-ui/react";
import {
  Box,
  FormControl,
  chakra,
  Input,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase.config";
import {
  // collection,
  // addDoc,
  updateDoc,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import { useRouter } from "next/router";
import webimages from "../../constants/images";
import SignUp from "../SIgnUp/SignUp";

const provider = new GoogleAuthProvider();

function Login({ isOpen, onOpen, onClose }) {
  const toast = useToast();
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const googleSignIn = () => {
    onClose();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const userRef = doc(db, "authUsers", result.user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists() && userDoc.data().isBlocked) {
          toast({
            position: "top",
            description:
              "There is a problem with your account. Please contact support for administrator.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          if (userDoc.exists()) {
            await updateDoc(userRef, {
              accessToken: result.user.accessToken,
              displayName: result.user.displayName,
              email: result.user.email,
              photoURL: result.user.photoURL,
            });
          } else {
            // Add new user document

            await setDoc(userRef, {
              accessToken: result.user.accessToken,
              displayName: result.user.displayName,
              email: result.user.email,
              photoURL: result.user.photoURL,
              uid: result.user.uid,
              role: "blogUser",
            });
          }

          alert("Login Success!");
          if (router.asPath === "/blog") {
          } else {
            router.push(router.pathname);
          }
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(async (user) => {
        const userRef = doc(db, "authUsers", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          if (userDoc.data().isBlocked) {
            toast({
              position: "top",
              title: "User Blocked",
              description:
                "Your account has been blocked. Please contact support for assistance.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
            return;
          }
          // Update existing user document
          await updateDoc(userRef, {
            lastSignInTime: user.metadata.lastSignInTime,
          });
        } else {
          // Add new user document
          await setDoc(userRef, {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            role: "blogUser",
            createdAt: serverTimestamp(),
            lastSignInTime: user.metadata.lastSignInTime,
          });
        }

        alert("Login Success!");

        if (router.pathname === "/blog") {
          router.push("/blog/addBlog");
        }

        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const testMail = (e) => {
    isValidEmail(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <>
      <Modal isOpen={isOpen} scrollBehavior="inside" onClose={onClose}>
        <ModalOverlay bg="dark" backdropFilter="auto" backdropBlur="5px" />
        <ModalContent
          maxWidth="30rem"
          p={0}
          bg="brand.black"
          boxShadow="0 0 20px  rgba(255, 174, 0, 0.6)"
        >
          <ModalCloseButton color="white" _focus={{ border: "none" }} />
          <ModalBody className="custom-scroll-bar">
            <Box color="#FFF" bg="#101114">
              <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList borderBottom="opx solid #fff">
                  <Tab color="#fff" _selected={{ color: "#faae12" }}>
                    SignIn
                  </Tab>
                  {/* <Tab _selected={{ color: "#faae12" }}>SignUp</Tab> */}
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box
                      bg={`linear-gradient(to right, #101114a0,#101114a0),url(${webimages.background.training.training2})`}
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                    >
                      <Box
                        w="100%"
                        h="50%"
                        px="6"
                        py="6"
                        bg="brand.black"
                        opacity="1.1"
                        borderRadius="0.700rem"
                      >
                        <Text
                          color="#faae12"
                          fontSize={"1xl"}
                          fontWeight="800"
                          textAlign="center"
                        >
                          Sign In
                        </Text>
                        <FormControl>
                          <Text
                            color="#faae12"
                            fontSize={"15px"}
                            fontWeight="800"
                          >
                            E-mail
                          </Text>
                          <Input
                            type="email"
                            variant="flushed"
                            mb="2"
                            borderBottomColor="whitesmoke"
                            placeholder="Enter email"
                            isRequired="true"
                            _placeholder={{ color: "#fff" }}
                            fontSize={"12px"}
                            onChange={testMail}
                          />
                          <Text
                            color="#faae12"
                            fontSize={"15px"}
                            fontWeight="800"
                          >
                            Password
                          </Text>
                          <Input
                            fontSize={"12px"}
                            variant="flushed"
                            mb="2"
                            isRequired="true"
                            borderBottomColor="whitesmoke"
                            onChange={(e) => setPass(e.target.value)}
                            _placeholder={{ color: "white" }}
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                          />
                          {/* <Text textAlign="right" color="#fff">
                            {" "}
                            Forgot password?
                          </Text> */}
                          <Box gap="10" textAlign="center" mt="6">
                            <Button
                              title="sign In"
                              size="md"
                              height="35px"
                              color={"black"}
                              width="200px"
                              bg="linear-gradient(to bottom, #FFF331,#FF7531)"
                              _hover={
                                "linear-gradient(to bottom, #FFF331,#FF7531)"
                              }
                              onClick={handleSignin}
                            >
                              Sign In{" "}
                            </Button>
                            {/* <Text
                              fontSize="15px"
                              my="2"
                              color={"#ffff"}
                              fontWeight={"800"}
                            >
                              OR
                            </Text>
                            <Box
                              as="button"
                              height="35px"
                              color="#ffff"
                              type="submit"
                              width="250px"
                              bg="#4285f4"
                              textAlign="center"
                              _hover={
                                "linear-gradient(to bottom, #FFF331,#FF7531)"
                              }
                              onClick={googleSignIn}
                              borderRadius="8px"
                            >
                              <Flex alignItems="center">
                                <Image
                                  w="8"
                                  h="8"
                                  borderRadius="4px"
                                  src="/images.png"
                                  alt="google icon"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <Text ml="4"> Countinue With Google </Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Text mt="4" color="#fff">
                                {"Don't have an account?"}
                                <chakra.span
                                  color="#faae12"
                                  fontWeight="700"
                                  cursor="pointer"
                                  onClick={() => {
                                    handleTabsChange(1);
                                  }}
                                >
                                  {" "}
                                  Sign Up{" "}
                                </chakra.span>
                              </Text>
                            </Box> */}
                          </Box>
                        </FormControl>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <SignUp
                      googleSignIn={googleSignIn}
                      handleTabsChange={handleTabsChange}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
