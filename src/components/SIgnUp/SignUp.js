import React, { useState, useEffect } from "react";
import { db } from "../../../firebase.config";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Box,
  Text,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Image,
  chakra,
} from "@chakra-ui/react";
import { BsFillEyeFill as OpenEye } from "react-icons/bs";
import { AiFillEyeInvisible as CloseEye } from "react-icons/ai";
import webimages from "../../constants/images";

export default function SignUp(props) {
  const auth = getAuth();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [trainingData, setTrainingData] = useState({
    email: "",
    userName: "",
    phone: "",
  });
  const [pass, setPass] = useState({
    pass: "",
    confPass: "",
  });

  const { userName, email, phone } = trainingData;

  const handleChange = (e) => {
    setTrainingData({ ...trainingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        trainingData.email,
        pass.pass
      );
      if (result.user) {
        await setDoc(doc(db, "blogUsers", result.user.uid), {
          accessToken: result.user.accessToken,
          displayName: trainingData.userName,
          email: trainingData.email,
          uid: result.user.uid,
          phone: trainingData.phone,
          role: "blogUser",
        });
      }

      if (result.user) {
        alert("Signup Success!");
      }
    } catch (error) {
      alert("Signup Success!");
    }
  };

  return (
    <>
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
          py="4"
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
            Sign Up
          </Text>
          <Box>
            <FormControl onSubmit={handleSubmit} isRequired={true}>
              <Text color="#faae12" fontSize={"15px"} fontWeight="800">
                E-mail
              </Text>
              <Input
                type="text"
                variant="flushed"
                placeholder="Email"
                name="email"
                isRequired="true"
                color={"#fff"}
                borderBottomColor="#fff"
                fontSize={"12px"}
                onChange={handleChange}
                _placeholder={{ color: "#fff" }}
                mb="2"
              />
              <Text color="#faae12" fontSize={"16px"} fontWeight="800">
                Username
              </Text>

              <Input
                variant="flushed"
                color="brand.white"
                placeholder="Username"
                name="userName"
                borderBottomColor="#fff"
                isRequired="true"
                focusBorderColor="#faae12"
                fontSize={"12px"}
                onChange={handleChange}
                _placeholder={{ color: "#FFF" }}
                mb="2"
              />
              <Text color="#faae12" fontSize={"16px"} fontWeight="800">
                Phone Number
              </Text>

              <Input
                variant="flushed"
                placeholder="Phone Number"
                onChange={handleChange}
                fontSize={"12px"}
                isRequired="true"
                borderBottomColor="#fff"
                focusBorderColor="#faae12"
                mb="2"
                name="phone"
                _placeholder={{ color: "#fff" }}
              />

              <Text color="#faae12" fontSize={"16px"} fontWeight="800">
                Enter password
              </Text>

              <InputGroup>
                <Input
                  variant="flushed"
                  pr="4.5rem"
                  borderBottomColor="#fff"
                  fontSize={"12px"}
                  isRequired="true"
                  type={show ? "text" : "password"}
                  _placeholder={{ color: "#fff" }}
                  onChange={(e) => setPass({ ...pass, pass: e.target.value })}
                  placeholder="Enter password"
                  mb="2"
                />
                <InputRightElement width="4.5rem">
                  <Box marginBottom={"1rem"} onClick={handleClick}>
                    {show ? <OpenEye /> : <CloseEye />}
                  </Box>
                </InputRightElement>
              </InputGroup>
              <Text
                // marginTop={["5"]}
                color="#faae12"
                fontSize={"16px"}
                fontWeight="800"
              >
                Confirm password
              </Text>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  variant="flushed"
                  borderBottomColor="#fff"
                  isRequired="true"
                  _placeholder={{ color: "#fff" }}
                  fontSize={"12px"}
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                  mb="2"
                />
                <InputRightElement width="4.5rem">
                  <Box marginBottom={"1rem"} onClick={handleClick}>
                    {show ? <OpenEye /> : <CloseEye />}
                  </Box>
                </InputRightElement>
              </InputGroup>

              <Box py="6" textAlign="center">
                <Box w="100%" h="100%">
                  <Button
                    title="Sign Up"
                    size="md"
                    height="35px"
                    color="#ffff"
                    onClick={handleSubmit}
                    type="submit"
                    width="250px"
                    bg="linear-gradient(to bottom, #FFF331,#FF7531)"
                    _hover={"linear-gradient(to bottom, #FFF331,#FF7531)"}
                  >
                    <Text fontSize="15px" color={"black"} fontWeight={"800"}>
                      Sign up
                    </Text>
                  </Button>
                  <Text
                    textAlign="center"
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
                    _hover={"linear-gradient(to bottom, #FFF331,#FF7531)"}
                    borderRadius="8px"
                    onClick={() => {
                      props.googleSignIn();
                    }}
                  >
                    <Flex alignItems="center">
                      <Image
                        w="8"
                        h="8"
                        borderRadius="4px"
                        src="/images.png"
                        alt="google icon"
                      />
                      <Text ml="4"> Countinue With Google </Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Text mt="4" color="#fff">
                      {" "}
                      Do not have an account?{" "}
                      <chakra.span
                        color="#faae12"
                        fontWeight="700"
                        cursor="pointer"
                        onClick={() => {
                          props.handleTabsChange(0);
                        }}
                      >
                        {" "}
                        Sign In{" "}
                      </chakra.span>
                    </Text>
                  </Box>
                </Box>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </>
  );
}
