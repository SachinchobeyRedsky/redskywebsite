import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaList, FaCog, FaUsers } from "react-icons/fa";
import CreateCategories from "../adminPage/createCategories/index.page";
import BlogSetting from "../adminPage/blogSetting/index.page";
import Users from "../adminPage/users/index.page";
import { auth } from "../../../../firebase.config";
import RoundButton from "../../../shared/Button";
import { useRouter } from "next/router";


function AdminPage() {
  const router =useRouter();
  const [activeComponent, setActiveComponent] = useState(<CreateCategories />);
  const [activeIndex, setActiveIndex] = useState(
    `/blog/adminPage/Create Categories`
  );
  const [currentUser, setCurrentUser] = useState("");
  const buttons = [
    {
      text: "Create Categories",
      icon: <FaList />,
      component: <CreateCategories />,
    },
    {
      text: "Blog Setting",
      icon: <FaCog />,
      component: <BlogSetting />,
    },
    {
      text: "All Users",
      icon: <FaUsers />,
      component: <Users />,
    },
  ];
  const authChangedHandler = async (authState) => {
    if (authState) {
      setCurrentUser(authState);
    }
  };

  useEffect(() => {
    const currentUser = auth.onAuthStateChanged(authChangedHandler);
  }, []);
  const handleButtonClick = (component, path) => {
    setActiveComponent(component);
    setActiveIndex(path);
  };
  const adminOnclick = () => {
    router.push("/blog/addBlog");
  };
  return (
    <>
      <Box
        pos="fixed"
        top="0"
        left="0"
        w="280px"
        h="100vh"
        bg="gray.800"
        color="white"
        p="40px"
      >
        <Text mb="4" fontSize="2xl" fontWeight="extrabold">
          Dashboard
        </Text>
        <Flex direction="column" gap={4}>
          {buttons.map((button, index) => (
            <Flex
              key={index}
              align="center"
              cursor="pointer"
              color={
                activeIndex === `/blog/adminPage/${button.text}`
                  ? "#faae01"
                  : "#Fff"
              }
              _hover={{ color: "#faae01" }}
              onClick={() =>
                handleButtonClick(
                  button.component,
                  `/blog/adminPage/${button.text}`,
                  index
                )
              }
            >
              {button.icon}
              <Text ml="2" fontSize="lg">
                {button.text}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box ml="200px" p="40px" bg=" brand.black">
        <Flex justifyContent="space-between">
          <Text
            color="yellow.100"
            ml="20"
            fontSize="2xl"
            fontWeight="extrabold"
          >
            Admin Dashboard
          </Text>
          <RoundButton text=" Create Blog " onClickHandler={adminOnclick} />
          <Flex>
            <Avatar
              size="md"
              bg="yellow.400"
              src={currentUser?.photoURL}
              name={currentUser?.userName}
            />

            <Text fontWeight="600" mt="2.5" ml="2" color="yellow.100">
              {" "}
              {currentUser?.displayName}
            </Text>
          </Flex>
        </Flex>

        {activeComponent ? activeComponent : <Text>No component selected</Text>}
      </Box>
    </>
  );
}

export default AdminPage;
