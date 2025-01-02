import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  Heading,
  Button,
  Select,
  Divider,
  Checkbox,
  AbsoluteCenter,
  useToast,
  InputLeftElement,
} from "@chakra-ui/react";
import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { db } from "../../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import SocialMediaLinksComponent from "../../shared/SocialMediaLinksComponent";
const CarrerForm = ({ selectedTech }) => {
  const toast = useToast();
  const [isError, setIsError] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkValue, setCheckValue] = useState({
    email: false,
    mobile: false,
  });
  const [trainingData, setTrainingData] = useState({
    how: "",
    interested: "",
    trainingDuration: "",
    training: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    date: "",
    gender: "",
    marStatus: "",
    email: "",
    mobile: "",
    permanent: "",
    currentAddress: "",
  });

  const [socialInfo, setSocialInfo] = useState({
    skypeId: "",
    linkedIn: "",
    instaID: "",
    facebookID: "",
  });

  const [eduInfo, setEduInfo] = useState({
    grad: "",
    gradUni: "",
    postGrad: "",
    uniPostGrad: "",
    other: "",
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const handleSocial = (e) => {
    const { name, value } = e.target;
    setSocialInfo({
      ...socialInfo,
      [name]: value,
    });
  };

  const handleeduInfo = (e) => {
    const { name, value } = e.target;

    setEduInfo({
      ...eduInfo,
      [name]: value,
    });
  };
  const restData = { personalInfo };
  const handleData = async (e) => {
    e.preventDefault();

    if (
      restData.personalInfo.fullname == "" ||
      restData.personalInfo.mobile == ""
    ) {
      setIsError(true);
      if (restData.personalInfo.fullname == "") {
        setIsError(true);
        return;
      } else if (restData.personalInfo.mobile == "") {
        setIsError(true);
        return;
      }
      return;
    } else {
      if (restData.personalInfo.fullname !== "") {
        var reg = /^[a-zA-Z '.-]*$/;
        if (!reg.test(restData.personalInfo.fullname)) {
          setCheckNumber(true);
          return;
        } else if (reg.test(restData.personalInfo.fullname)) {
          setCheckNumber(false);
        }
      }
      if (restData.personalInfo.email !== "") {
        var reg =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!reg.test(restData.personalInfo.email)) {
          setCheckValue({ ...checkValue, email: true });
          return;
        } else if (reg.test(restData.personalInfo.email)) {
          setCheckValue({ ...checkValue, email: false });
        }
      }

      if (restData.personalInfo.mobile !== "") {
        if (restData.personalInfo.mobile.length < 10) {
          setCheckValue({ ...checkValue, phone: true });
          return;
        } else if (restData.personalInfo.mobile.length > 10) {
          setCheckValue({ ...checkValue, phone: false });
        }
      }

      try {
        const docRef = await addDoc(collection(db, "trainingdata"), restData);
        toast({
          position: "top",
          render: () => (
            <Box
              color="white"
              fontWeight="700"
              p={4}
              bgGradient="linear-gradient(30deg, #f8cb2e, #ff914d , );"
              borderRadius="16px"
              boxShadow="inset 0 0 8px #faae12"
            >
              <Box>Your details has been submitted sucessfully</Box>
              We will get back to you within 24-48 hrs
            </Box>
          ),
        });

        setPersonalInfo({
          fullname: "",
          date: "",
          gender: "",
          marStatus: "",
          email: "",
          mobile: "",
          permanent: "",
          currentAddress: "",
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  return (
    <Box
      backgroundSize={["400%", null, "400%"]}
      backgroundColor="brand.black"
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
      fontFamily="Raleway"
      position="relative"
      overflow="hidden"
      color="white"
    >
      <Box>
        <form>
          <Flex gap={6}>
            <FormControl
              isInvalid={
                (restData.personalInfo.fullname == "" && isError) ||
                (restData.personalInfo.fullname !== "" && checkNumber)
              }
            >
              <Box w="100%">
                <Input
                  type="text"
                  variant="flushed"
                  color="brand.white"
                  placeholder="Full name"
                  title="OPPP"
                  mb="2"
                  value={personalInfo.fullname}
                  name="fullname"
                  onChange={handleSubmit}
                  sx={{
                    borderBottom: isError
                      ? "0.5px solid red !important"
                      : "0.5px solid white !important",
                  }}
                />
                {personalInfo.fullname == "" && (
                  <InputLeftElement
                    pointerEvents="none"
                    color="yellow.400"
                    ml="16"
                    fontSize="30px"
                  >
                    *
                  </InputLeftElement>
                )}
                {(restData.personalInfo.fullname == "" && isError && (
                  <FormErrorMessage mt="0">Name is required</FormErrorMessage>
                )) ||
                  (restData.personalInfo.fullname !== "" && checkNumber && (
                    <FormErrorMessage mt="0">
                      Alphabet characters only
                    </FormErrorMessage>
                  ))}
              </Box>
            </FormControl>

            <Box width="100%">
              <Input
                type="email"
                variant="flushed"
                color="brand.white"
                placeholder="Email"
                name="email"
                value={personalInfo.email}
                onChange={handleSubmit}
                sx={{
                  borderBottom: "0.5px solid white !important",
                }}
              />
            </Box>
          </Flex>
          <FormControl
            isInvalid={
              (restData.personalInfo.mobile == "" && isError) ||
              (restData.personalInfo.mobile !== "" && checkValue.phone)
            }
          >
            <Box width="48%">
              <Input
                type="number"
                variant="flushed"
                color="brand.white"
                placeholder="Mobile number"
                name="mobile"
                value={personalInfo.mobile}
                onChange={handleSubmit}
                sx={{
                  borderBottom: isError
                    ? "0.5px solid red !important"
                    : "0.5px solid white !important",
                }}
              />
              {personalInfo.mobile == "" && (
                <InputLeftElement
                  pointerEvents="none"
                  color="yellow.400"
                  ml="24"
                  fontSize="30px"
                >
                  *
                </InputLeftElement>
              )}
              {(restData.personalInfo.mobile == "" && isError && (
                <FormErrorMessage mt="-8" pl={["0", "0", "0", "0", "0"]}>
                  {" "}
                  Mobile Number is required
                </FormErrorMessage>
              )) ||
                (restData.personalInfo.mobile !== "" && checkValue.phone && (
                  <FormErrorMessage mt="-8">
                    Mobile Number is not valid
                  </FormErrorMessage>
                ))}
            </Box>
          </FormControl>
        </form>
      </Box>
      <Flex justify="center" m="2">
        <Button
          title="submit"
          variant="trainingButton"
          // mt={2}
          ml="1"
          onClick={handleData}
          border="solid 2px #faae01"
          _hover={{
            border: "solid 3px #faae01",
            transform: "scale(1.05)",
            opacity: 1,
            boxShadow: "0 0 6px #ffae00",
            background: "rgb(11, 11, 13)",
          }}
          _focus={{
            background: "rgb(11, 11, 13)",
          }}
          _active={{
            background: "rgb(11, 11, 13)",
          }}
          type="submit"
        >
          <Text
            variant="gradient"
            textTransform="none"
            fontSize={["xl", "xl", "xl", "xl"]}
          >
            Submit
          </Text>
        </Button>
      </Flex>

      <Box position="relative" px="10" py="6">
        <Divider />
        <AbsoluteCenter bg="#101114" px="4">
          <Text fontSize="xxl" fontWeight="bold">
            OR
          </Text>
        </AbsoluteCenter>
      </Box>
      <Box mb="4">
        <SocialMediaLinksComponent align="center" showPhone="showPhone" />
      </Box>
    </Box>
  );
};
export default CarrerForm;
