import React from "react";
import { useRouter } from "next/router";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Button,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import {
  MdOutlinePublishedWithChanges,
  MdOutlineDrafts,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import Login from "../components/Login/Login";

function MenuItems({ currentUser }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHandler = () => {
    onOpen();
  };
  const menuItems = [
    {
      label: "Published",
      icon: MdOutlinePublishedWithChanges,
      route: {
          pathname: `/blog/${currentUser?.uid}/published`
      }
    },
    {
      label: "Drafts",
      icon: MdOutlineDrafts,
      route: {
        pathname: `/blog/${currentUser?.uid}/drafts`
      },
    },
    {
      label: "Favourite",
      icon: MdOutlineFavoriteBorder,
      route: {
        pathname: `/blog/${currentUser?.uid}/reading-list`
      },
    },
  ];
  return (
    <>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            bg="gray.200"
            title="Filter"
            border="2px solid #faae12"
            borderRadius="2rem"
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
          >
            <Icon as={FiFilter} mt={1.5} w={4} h={4} color="#faae12" />
          </MenuButton>
          <MenuList p="0" bg="brand.black">
            {menuItems.map((item, index) => (
              <Box key={index}>
                <MenuItem
                  fontWeight="bold"
                  onClick={
                    currentUser ? () => router.push(item.route) : onClickHandler
                  }
                  _hover={{ bg: "#faae12" }}
                  _focus={{ bg: "none" }}
                >
                  <Icon as={item.icon} mr={1} w={4} h={4} color="#fff" />
                  {item.label}
                </MenuItem>
                {index < menuItems.length - 1 && <MenuDivider my="0" />}
              </Box>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <Login isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
}

export default MenuItems;
