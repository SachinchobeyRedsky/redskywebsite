import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Box,
  Flex,
  Button,
  Select,
  useToast,
  Icon,
  Textarea,
  Spinner,
  InputLeftElement,
} from "@chakra-ui/react";
import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { db } from "../../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { MdAttachment } from "react-icons/md";

const ModalForm = React.memo(({ massage }) => {
  const ref = useRef();
  const toast = useToast();
  const chooseFileRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [progress, setProgress] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option
  const [value, setValue] = useState("");
  const [showAsterick, setshowAsterick] = useState(true);
  const [showMobAsterick, setShowMobAsterick] = useState(true);
  const [checkValue, setCheckValue] = useState({
    email: false,
  });
  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    email: "",
    images: {},
  });
  const handleSelectedoption = (event) => {
    setSelectedOption(event.target.value); // Update the selected option state when an option is selected
  };
  useEffect(() => {}, [selectedOption, showAsterick, showMobAsterick]);

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    e.target.value === "" ? setshowAsterick(true) : setshowAsterick(false);
  };

  const handleChange = (num) => {
    // Remove non-numeric characters
    const strippedNumber = num.replace(/\D/g, "");

    // Allow only up to 10 digits
    if (strippedNumber.length <= 10) {
      setValue(strippedNumber);
      setShowMobAsterick(false);
      setIsError(false);
    } else {
      setShowMobAsterick(true);
      setIsError(true);
    }
  };
  const restData = { personalInfo };
  const handleData = async (e) => {
    e.preventDefault();
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

    if (restData.personalInfo.fullname == "" || value == "") {
      setIsError(true);
      if (restData.personalInfo.fullname == "") {
        setIsError(true);
        return;
      } else if (value == "") {
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

      if (value !== "") {
        if (value.length < 13 || value.length > 13) {
          setCheckValue({ ...checkValue, phone: true });
          return;
        } else {
          setCheckValue({ ...checkValue, phone: false });
        }
      }

      try {
        const neww = ref.current.value;
        const newObj = {
          ...restData,
          feedback: neww,
          phone: value,
          BudgetRange: selectedOption,
        };
        if (
          personalInfo.images === undefined ||
          Object.keys(personalInfo.images).length == 0
        ) {
          const docRef = await addDoc(collection(db, "ContactData"), {
            ...newObj,
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
          setIsError(false);
          setCheckNumber(false);
          setPersonalInfo({
            fullname: "",
            email: "",
            mobile: "",
            // feedback: "",
          });
          setSelectedOption("");
          setValue("");
          ref.current.value = "";
          setshowAsterick(true);
          setShowMobAsterick(true);
        } else {
          const imageUR = await Promise.all(
            [...personalInfo.images].map((image) => storeImage(image))
          )
            .then(async (res) => {
              setProgress(false);
              delete newObj.personalInfo.images;
              const docRef = await addDoc(collection(db, "ContactData"), {
                ...newObj,
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
              setIsError(false);
              setCheckNumber(false);
              setPersonalInfo({
                fullname: "",
                email: "",
                mobile: "",
                // feedback: "",
              });
              setSelectedOption("");
              setValue("");
              ref.current.value = "";
              setshowAsterick(true);
              setShowMobAsterick(true);
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

  return (
    <>
      <Box
        p="2"
        fontFamily="Raleway"
        position="relative"
        overflow="hidden"
        color="white"
        w="100%"
      >
        {massage && (
          <Text mb="8" fontSize="1xl" fontWeight="bold">
            {massage}
          </Text>
        )}
        <Box alignItems="center">
          <form>
            <Flex
              gap={6}
              flexDirection={["column", "column", "row", "row", "row"]}
            >
              <FormControl
                isInvalid={
                  (restData.personalInfo.fullname == "" && isError) ||
                  (restData.personalInfo.fullname !== "" && checkNumber)
                }
              >
                <Box w="100%" position="relative">
                  <Input
                    type="text"
                    variant="flushed"
                    color="brand.white"
                    placeholder="Name"
                    title="OPPP"
                    mb="1"
                    value={personalInfo.fullname}
                    name="fullname"
                    onChange={handleSubmit}
                    sx={{
                      borderBottom: isError
                        ? "0.5px solid red !important"
                        : "0.5px solid white !important",
                    }}
                  />
                  {showAsterick && (
                    <InputLeftElement
                      pointerEvents="none"
                      color="yellow.400"
                      ml="10"
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

              <FormControl
              // isInvalid={
              //   (restData.personalInfo.email == "" && isError) ||
              //   (restData.personalInfo.email !== "" && checkValue.email)
              // }
              >
                <Box width="100%">
                  <Input
                    type="email"
                    variant="flushed"
                    color="brand.white"
                    placeholder="Email"
                    name="email"
                    mb="2"
                    value={personalInfo.email}
                    onChange={handleSubmit}
                  />
                  {/* {restData.personalInfo.email !== "" && checkValue.email && (
                    <FormErrorMessage mt="1">
                      Email is not valid
                    </FormErrorMessage>
                  )} */}
                </Box>
              </FormControl>
            </Flex>
            <Flex
              gap={6}
              flexDirection={["column", "column", "row", "row", "row"]}
            >
              <FormControl>
                <Box w="100%">
                  <Select
                    placeholder="Select a Budget Range"
                    aria-label="Select a Budget Range"
                    pt={6}
                    size="sm"
                    color="gray.100"
                    outline="none"
                    border="none"
                    variant="flushed"
                    borderBottom="1px solid #fff !important"
                    _focus={{ borderBottom: "1px solid #faae12 !important" }}
                    value={selectedOption}
                    onChange={handleSelectedoption}
                    _hover={{ borderBottom: "1px solid #fff" }}
                  >
                    <option value="Between $10K to $ 50K">
                      Between $10K to $ 50K
                    </option>
                    <option value="Between $50K to $ 100K">
                      Between $50K to $ 100K
                    </option>
                    <option value="More than $ 100K">More than $ 100K </option>
                  </Select>
                </Box>
              </FormControl>
              <FormControl
                isInvalid={
                  (value == "" && isError) || (value !== "" && checkValue?.phone)
                }
              >
                {/* // isInvalid={value == "" && isError}> */}
                <Box width="100%" mt="6" position="relative">
                  <PhoneInput
                    flags={flags}
                    style={{
                      backgroundColor: "transparent", // Transparent background
                      color: "#fff",
                      colorScheme: "#fff", // White text color
                      placeholderColor: "white", // White placeholder color
                    }}
                    defaultCountry="IN"
                    placeholder="Phone"
                    name="mobile"
                    value={value}
                    onChange={(num) => {
                      // const strippedNumber = num?.replace(/\D/g, ""); // Remove non-numeric characters
                      // num?.length <= 10 &&
                      setValue(num),
                        num === undefined
                          ? setShowMobAsterick(true)
                          : setShowMobAsterick(false);
                    }}
                    limitMaxLength
                    className={
                      isError ? "custom-phone-input" : "custom-phone-input1"
                    }
                  />
                  {showMobAsterick && (
                    <InputLeftElement
                      color="yellow.400"
                      ml="20"
                      mt="-2"
                      fontSize="30px"
                    >
                      *
                    </InputLeftElement>
                  )}
                </Box>
                {(value == "" && isError && (
                  <FormErrorMessage pl={["0", "0", "0", "0", "0"]}>
                    {" "}
                    Mobile Number is required
                  </FormErrorMessage>
                )) ||
                  (value !== "" && checkValue.phone && (
                    <FormErrorMessage mt="1">
                      Please put 10 digit mobile number
                    </FormErrorMessage>
                  ))}
              </FormControl>
            </Flex>

            <Text
              py={6}
              fontSize={["lg", "lg", "xl", "xl", "xl"]}
              fontFamily="Raleway"
            >
              {`What's your Project about / Any Query?`}
            </Text>
            <Textarea
              placeholder="Enter your Message.... "
              h={28}
              mb="4"
              borderColor="3px solid #fff"
              _hover={{
                borderColor: "3px solid #fff",
              }}
              _placeholder={{
                color: "gray.100",
                fontSize: "sm",
              }}
              _focus={{ border: "1px solid #faae12" }}
              ref={ref}
            />
            <FormControl>
              <Box w={["50%", "50%", "30%", "30%", "30%"]} cursor="pointer">
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
                      variant="unstyled"
                      id="images"
                      ref={chooseFileRef}
                      outline="none"
                      onChange={onMutate}
                      border="none"
                      borderBottom="none"
                      display="none"
                      _focus={{
                        borderBottom: "1px solid transparent",
                        outline: "none",
                      }}
                      accept=".jpg,.png,.jpeg,.docx,.pptx,.pdf"
                    />
                  </Box>
                )}
              </Box>
            </FormControl>
          </form>
        </Box>

        <Flex justify="right">
          <Button
            title="submit"
            variant="trainingButton"
            mt={2}
            ml="1"
            onClick={handleData}
            border="solid 2px #faae01"
            _hover={{
              border: "solid 3px #faae01",
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
    </>
  );
});

export default ModalForm;
