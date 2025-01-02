import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Flex,
  Avatar,
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  Divider,
  useDisclosure,
  Icon,
  Button,
  Center,
} from "@chakra-ui/react";
import { signOutUser } from "../utils/utils";
import { LinkItemWithIcon } from "./stateLessViews";
import { HEADER_POPOVER } from "../constants/constants";
import { GoSignOut } from "react-icons/go";

function ProfilePopOver({ currentUser }) {
  const { email, photoURL, displayName, uid } = currentUser;
  const { isOpen, onToggle, onClose } = useDisclosure();
  const router = useRouter();

  const logout = () => {
    signOutUser(router);
  };
  return (
    <Popover placement="bottom" isOpen={isOpen}>
      <PopoverTrigger>
        <Avatar
          size="md"
          onClick={onToggle}
          cursor="pointer"
          bg="yellow.400"
          name={displayName}
          src={photoURL}
        />
      </PopoverTrigger>
      <PopoverContent maxW="250px">
        <PopoverBody p="0" bg="gray.300">
          <Flex flexDir="column" justify="center" align="center" p={2} gap={2}>
            <Avatar
              size="md"
              bg="yellow.400"
              src={photoURL}
              name={displayName}
            />
            <Flex flexDir="column" align="center" justify="center">
              <Text color="yellow.400" fontWeight="bold">
                {displayName}
              </Text>
              <Text fontSize="xs" color="gray.100" fontWeight="normal">
                {email}
              </Text>
            </Flex>
          </Flex>
          <Divider />
          <Center>
            <Button
             onClick={logout}
              variant=""
              filter="brightness(0) invert(1)"
              _hover={{
                color: "yellow.400",
                filter: "unset",
                bg: "none",
              }}
              _active={{
                bg: "none"
              }}
              _focus={{
                bg: "none"
              }}
              leftIcon={<GoSignOut size={18} color="#fca120" />}
            >
              Logout
            </Button>
          </Center>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default ProfilePopOver;
