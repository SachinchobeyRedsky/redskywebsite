import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase.config";
import { Box, Button, Text } from "@chakra-ui/react";

function Users() {
  const [allUsers, setAllUsers] = useState([]);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "authUsers"));
    const userList = [];
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      userList.push(user);
    });
    setAllUsers(userList);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleBlockUser = async (uid, isBlocked) => {
    try {
      const userDoc = doc(db, "authUsers", uid);
      await updateDoc(userDoc, { isBlocked: !isBlocked });
      getUsers(); // refresh the user list after blocking/unblocking the use
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
    }
  };

  return (
    <Box px="20" py="10" bg="brand.black" color="brand.white">
      <Text mb="4" fontSize="1xl" fontWeight="extrabold">
        All User
      </Text>
      {allUsers?.map((user, index) => (
        <Box
          key={index}
          mb="6"
          p="2"
          w="50%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          borderRadius="10"
          border="solid 2px #faae01"
        >
          <Text> {user?.displayName}</Text>
          <Box>
            <Button
              border="solid 2px #faae01"
              title={user.isBlocked ? "Unblock" : "Block"}
              variant="trainingButton"
              textTransform="none"
              _hover={{
                background: "gray.500",
              }}
              _focus={{
                outline: "none",
                background: "gray.500",
              }}
              _active={{
                outline: "none",
                background: "gray.500",
              }}
              ml="4"
              onClick={() => handleBlockUser(user.uid, user.isBlocked)}
            >
              {user.isBlocked ? "Unblock" : "Block"}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default Users;
