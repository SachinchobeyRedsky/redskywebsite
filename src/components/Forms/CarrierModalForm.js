import React, { useState, forwardRef, useRef } from "react";
import {
  Box,
  Text,
  Flex,
  Select,
  Spinner,
  useToast,
  Button,
  Icon,
  InputLeftElement,
} from "@chakra-ui/react";
import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { MdAttachment } from "react-icons/md";
import { db } from "../../../firebase.config";
import { useImperativeHandle } from "react";

const CarrierModalForm = forwardRef((props, ref) => {
  const toast = useToast();
  const chooseFileRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkValue, setCheckValue] = useState({
    email: false,
    mobile: false,
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
    images: {},
  });
  const [showAsterick, setshowAsterick] = useState({
    fullname: true,
    gender: true,
    email: true,
    mobile: true,
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
  const [progress, setProgress] = useState(false);

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
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const restData = { personalInfo, eduInfo, socialInfo };
  const handleData = async (e) => {
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${image.name}`;

        const storageRef = firebaseRef(storage, "images/" + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const uploadProgress = setProgress(true);
            switch (snapshot.state) {
              case "paused":
                break;
              case "running":
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    if (
      restData.personalInfo.fullname == "" ||
      restData.personalInfo.gender == "" ||
      restData.personalInfo.email == "" ||
      restData.personalInfo.mobile == "" ||
      (restData.personalInfo.images &&
        Object.keys(restData.personalInfo.images).length == 0)
    ) {
      setIsError(true);
      if (restData.personalInfo.fullname == "") {
        setIsError(true);
        return;
      } else if (restData.personalInfo.gender == "") {
        setIsError(true);
        return;
      } else if (restData.personalInfo.email == "") {
        setIsError(true);
        return;
      } else if (restData.personalInfo.mobile == "") {
        setIsError(true);
        return;
      } else if (
        restData.personalInfo.images &&
        Object.keys(restData.personalInfo.images).length == 0
      ) {
        setIsError(true);
        return;
      }
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
        if (
          personalInfo.images && // 👈 null and undefined check
          Object.keys(personalInfo.images).length > 0
        ) {
          const imageUR = await Promise.all(
            [...personalInfo.images].map((image) => storeImage(image))
          )
            .then(async (res) => {
              setProgress(false);
              delete restData.personalInfo.images;
              const docRef = await addDoc(collection(db, "carrierdata"), {
                ...restData,
                image: res[0],
              });
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
                images: {},
              });

              setSocialInfo({
                skypeId: "",
                linkedIn: "",
                instaID: "",
                facebookID: "",
              });

              setEduInfo({
                grad: "",
                gradUni: "",
                postGrad: "",
                uniPostGrad: "",
                other: "",
              });
              setIsError(false);
              setCheckNumber(false);
              setCheckValue(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Files
    if (e.target.files) {
      setPersonalInfo((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setPersonalInfo((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  const triggerChooseFile = () => {
    chooseFileRef.current.click();
  };
  useImperativeHandle(ref, () => ({
    cb() {
      handleData();
    },
  }));

  const plasehlderStr = {
    text1: (
      <>
        Full name
        <Text
          display={"inline"}
          _hover={{ textDecor: "underline" }}
          textDecor="none"
          textUnderlineOffset="3px"
          // color="#5ad3f2"
          fontWeight="bold"
          color="red"
        >
          *
        </Text>
      </>
    ),
  };
  return (
    <>
      <Box px={6} position="relative">
        <form>
          <FormControl mb="24">
            <Text
              fontSize={["lg", "lg", "lg", "lg", "lg"]}
              fontWeight="semibold"
              color="secondary.400"
            >
              Personal Information
            </Text>
            <Flex gap={6} pt={4}>
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
                  {personalInfo.fullname =="" && (
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

              <FormControl>
                <Box w="100%">
                  <Input
                    type="date"
                    variant="flushed"
                    color="brand.white"
                    fontSize="sm"
                    mb="2"
                    name="date"
                    value={personalInfo.date}
                    onChange={handleSubmit}
                    sx={{
                      borderBottom: "0.5px solid white !important",
                    }}
                  />
                </Box>
              </FormControl>
            </Flex>
            <Flex gap={6}>
              <FormControl
                isInvalid={restData.personalInfo.gender == "" && isError}
              >
                <Box w="100%">
                  <Select
                    placeholder="Gender"
                    pt={6}
                    size="sm"
                    variant="flushed"
                    color="gray.100"
                    sx={{
                      borderBottom: isError
                        ? "0.5px solid red !important"
                        : "0.5px solid white !important",
                    }}
                    _focus={{ borderBottom: "1px solid #faae12" }}
                    value={personalInfo.gender}
                    name="gender"
                    onChange={handleSubmit}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                  {!personalInfo.gender && (
                    <InputLeftElement
                      pointerEvents="none"
                      color="yellow.400"
                      ml="12"
                      mt="4"
                      fontSize="30px"
                    >
                      *
                    </InputLeftElement>
                  )}
                  {restData.personalInfo.gender == "" && isError && (
                    <FormErrorMessage mt="2">
                      Gender is required
                    </FormErrorMessage>
                  )}
                </Box>
              </FormControl>
              <FormControl>
                <Box w="100%">
                  <Select
                    placeholder="Marital status"
                    pt={6}
                    size="sm"
                    variant="flushed"
                    color="gray.100"
                    sx={{
                      borderBottom: "0.5px solid white !important",
                    }}
                    _focus={{ borderBottom: "1px solid #faae12" }}
                    name="marStatus"
                    value={personalInfo.marStatus}
                    onChange={handleSubmit}
                  >
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                  </Select>
                </Box>
              </FormControl>
            </Flex>
            <Flex gap={6} pt="6">
              <FormControl
                isInvalid={
                  (restData.personalInfo.email == "" && isError) ||
                  (restData.personalInfo.email !== "" && checkValue.email)
                }
              >
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
                      borderBottom: isError
                        ? "0.5px solid red !important"
                        : "0.5px solid white !important",
                    }}
                  />
                  {personalInfo.email =="" && (
                    <InputLeftElement
                      pointerEvents="none"
                      color="yellow.400"
                      ml="10"
                      fontSize="30px"
                    >
                      *
                    </InputLeftElement>
                  )}
                  {(restData.personalInfo.email == "" && isError && (
                    <FormErrorMessage mt="-8">
                      Email is required
                    </FormErrorMessage>
                  )) ||
                    (restData.personalInfo.email !== "" && checkValue.email && (
                      <FormErrorMessage mt="-8">
                        Email is not valid
                      </FormErrorMessage>
                    ))}
                </Box>
              </FormControl>
              <FormControl
                isInvalid={
                  (restData.personalInfo.mobile == "" && isError) ||
                  (restData.personalInfo.mobile !== "" && checkValue.phone)
                }
              >
                <Box width="100%">
                  <Input
                    type="phone"
                    variant="flushed"
                    color="brand.white"
                    placeholder="Phone"
                    name="mobile"
                    value={personalInfo.mobile}
                    onChange={handleSubmit}
                    sx={{
                      borderBottom: isError
                        ? "0.5px solid red !important"
                        : "0.5px solid white !important",
                    }}
                    maxLength={10}
                  />
                  {personalInfo.mobile =="" && (
                    <InputLeftElement
                      pointerEvents="none"
                      color="yellow.400"
                      ml="10"
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
                    (restData.personalInfo.mobile !== "" &&
                      checkValue.phone && (
                        <FormErrorMessage mt="-8">
                          Mobile Number is not valid
                        </FormErrorMessage>
                      ))}
                </Box>
              </FormControl>
            </Flex>

            <FormControl>
              <Box w="100%">
                <Input
                  type="text"
                  variant="flushed"
                  color="brand.white"
                  placeholder="Permanent address"
                  name="permanent"
                  value={personalInfo.permanent}
                  onChange={handleSubmit}
                  sx={{
                    borderBottom: "0.5px solid white !important",
                  }}
                />
              </Box>
            </FormControl>
            <FormControl>
              <Box w="100%">
                <Input
                  type="text"
                  variant="flushed"
                  color="brand.white"
                  placeholder="Current address"
                  name="currentAddress"
                  value={personalInfo.currentAddress}
                  onChange={handleSubmit}
                  sx={{
                    borderBottom: "0.5px solid white !important",
                  }}
                />
              </Box>
            </FormControl>

            {/* <Text
              fontSize={["lg", "lg", "lg", "lg", "lg"]}
              fontWeight="semibold"
              color="secondary.400"
              mt={6}
            >
              Social Information
            </Text>
            <Flex pt={4} gap={6}>
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="Skype ID"
                name="skypeId"
                value={socialInfo.skypeId}
                onChange={handleSocial}
              />
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="LinkedIn ID"
                name="linkedIn"
                value={socialInfo.linkedIn}
                onChange={handleSocial}
              />
            </Flex>
            <Flex gap={6}>
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="Instagram ID"
                name="instaID"
                value={socialInfo.instaID}
                onChange={handleSocial}
              />
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="Facebook ID"
                name="facebookID"
                value={socialInfo.facebookID}
                onChange={handleSocial}
              />
            </Flex> */}

            <Text
              fontSize={["lg", "lg", "lg", "lg", "lg"]}
              fontWeight="semibold"
              color="secondary.400"
              mt={10}
            >
              Educational qualification
            </Text>
            <Flex pt={4} gap={6}>
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="Graduation"
                name="grad"
                value={eduInfo.grad}
                onChange={handleeduInfo}
                sx={{
                  borderBottom: "0.5px solid white !important",
                }}
              />
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="College/Institute name"
                name="gradUni"
                value={eduInfo.gradUni}
                onChange={handleeduInfo}
                sx={{
                  borderBottom: "0.5px solid white !important",
                }}
              />
            </Flex>
            <Flex gap={6}>
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="Post-Graduation"
                value={eduInfo.postGrad}
                name="postGrad"
                onChange={handleeduInfo}
                sx={{
                  borderBottom: "0.5px solid white !important",
                }}
              />
              <Input
                type="text"
                variant="flushed"
                color="brand.white"
                placeholder="College/Institute name"
                onChange={handleeduInfo}
                name="uniPostGrad"
                value={eduInfo.uniPostGrad}
                sx={{
                  borderBottom: "0.5px solid white !important",
                }}
              />
            </Flex>
            <Input
              type="text"
              variant="flushed"
              color="brand.white"
              placeholder="Other ( specify )"
              name="other"
              value={eduInfo.other}
              onChange={handleeduInfo}
              sx={{
                borderBottom: "0.5px solid white !important",
              }}
            />
          </FormControl>
        </form>
             <Box
          w="100%"
          bottom="8%"
          ml="6"
          left="20%"
        >
          <Text
            fontSize={["lg", "lg", "lg", "lg", "lg"]}
            fontWeight="semibold"
            color="secondary.400"
            mt={6}
          >
            Upload Your Resume
          </Text>
          <FormControl
            isInvalid={
              restData.personalInfo.images &&
              Object.keys(restData.personalInfo.images).length == 0 &&
              isError
            }
          >
            <Box w="30%" cursor="pointer">
              {progress ? (
                <Spinner
                  thickness="4px"
                  speed="0.80s"
                  color="orange"
                  size="xl"
                  mt="4"
                  ml="24"
                />
              ) : (
                <Box my="2">
                  <Box
                    display="flex"
                    alignItems="center"
                    onClick={triggerChooseFile}
                  >
                    {" "}
                    <Icon as={MdAttachment} w="8" h="8" />{" "}
                    {chooseFileRef?.current?.files[0]?.name ? (
                      <Text ml="1">
                        {chooseFileRef?.current?.files[0]?.name}{" "}
                      </Text>
                    ) : (
                      <Text ml="1">Attach File</Text>
                    )}
                  </Box>
                  <Input
                    mt={6}
                    type="file"
                    variant="flushed"
                    ref={chooseFileRef}
                    id="images"
                    onChange={onMutate}
                    border="none"
                    outline="none"
                    display="none"
                    w={["80%", "80%", "80%", "30%", "30%"]}
                    _focus={{
                      borderBottom: "1px solid transparent",
                      outline: "none",
                    }}
                    accept=".jpg,.png,.jpeg,.docx,.pptx,.pdf"
                  />
                </Box>
              )}
              {restData.personalInfo.images &&
                Object.keys(restData.personalInfo.images).length == 0 &&
                isError && (
                  <FormErrorMessage mt="">
                    Please Upload your Resume
                  </FormErrorMessage>
                )}
            </Box>
          </FormControl>

          <Flex justify="right">
            <Button
              title="submit"
              variant="trainingButton"
              mt={0}
              ml="1"
              onClick={handleData}
              border="solid 2px #faae01"
              _hover={{
                border: "solid 2px #faae01",
                transform: "scale(1.05)",
                opacity: 1,
                boxShadow: "0 0 10px #ffae00",
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
        </Box>
      </Box>
    </>
  );
});

CarrierModalForm.displayName = "CarrierModalForm";

export default CarrierModalForm;
