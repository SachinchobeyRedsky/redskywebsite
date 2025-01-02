
import {
  Box,
  Text,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import webimages from "../../constants/images";
import { blog } from "../../constants/constants";
import { useRouter } from "next/router";

const Landing = ({ carrier, myImage, handleChange }) => {
  const router = useRouter()
  const onClickHandler = () => {
    router.push("blog/addBlog");
  };
  return (
    <Box
      bg={`linear-gradient(to right, #101114a0,#101114a0),url(${webimages.publicimages.carrierBack})`}
      backgroundRepeat="no-repeat"
      fontFamily="Raleway"
      h="80vh"
      justifyContent="center"
      alignItems="center"
      backgroundPosition="center"
      backgroundColor="brand.black"
      backgroundSize={["600%", "600%", "100%", "300%", "150%"]}
      display="flex"
      flexDirection="column"
      overflow="hidden"
      as="main"
    >
      <Text
        as="h1"
        className="typewrtier"
        fontSize={["6xl", "6xl", "9xl", "9xl", "9xl"]}
        color="yellow.400"
        textTransform="uppercase"
        fontFamily="Raleway"
        fontWeight="ultrabold"
        overflow="hidden"
        width={"100%"}
        textAlign="center"
      >
        {blog.BLOG_HEADING}{" "}
      </Text>{" "}
      <Text
        className="typewrtier2"
        fontSize={["sm", "sm", "lg", "lg", "lg"]}
        color="brand.white"
        textAlign="center"
        width={["100%", "100%", "70%", "70%", "70%"]}
        fontFamily="Raleway"
        fontWeight="medium"
        p={[4]}
      >
        {blog.HEADING_CONTENT}
      </Text>
      <Box display="flex" w={["60%", "60%", "50%", "25%", "25%"]} mt="6">
        <FormControl position="relative">
          {/* <InputGroup > */}
          <Input
            color="brand.white"
            mb="4"
            borderRadius="20px"
            bg="secondary.300"
            boxShadow="0 0 4px  #fff"
            placeholder="Search"
            onChange={handleChange}
            style={{
              border: "2px solid black !important",
              _focus: {
                borderColor: "2px solid #faae12 !important",
              },
            }}
            _hover={{
              borderColor: "2px solid #fff",
            }}
            _focus={{
              border: "2px solid #faae12 !important",
            }}
          />

          <SearchIcon
            zIndex="999"
            w={4}
            h={4}
            color="white"
            cursor="pointer"
            style={{
              position: "absolute",
              top: "12px",
              right: "15px",
            }}
          />
          {/* </InputRightAddon> */}
          {/* </InputGroup> */}
        </FormControl>
        {/* <Button
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
               create blog
              </Text>
            </Button> */}
      </Box>
    </Box>
  );
};

export default Landing;
