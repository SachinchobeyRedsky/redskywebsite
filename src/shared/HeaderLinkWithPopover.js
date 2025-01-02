import React, { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import {
  Text,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { LinkItem } from "./stateLessViews";
// import { getAuth } from "firebase/auth";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HeaderLinkWithPopover = ({
  goto,
  router,
  linktext,
  location, // pass location prop if in drawer or footer
  enablePopover,
  popoverContent,
}) => {
  // const auth = getAuth();
  const [accIdx, setAccIdx] = useState(-1);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleChange = (i) => {
    setAccIdx(i);
  };

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };
  const handlePopoverClose = () => {
    setAccIdx(-1);
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    return () => {
      setAccIdx(-1);
    };
  }, [router.query]);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isServicesPage = goto === "/services";
  return isServicesPage && enablePopover && !location ? (
    <Box>
      <Popover
        onOpen={handlePopoverOpen}
        onClose={handlePopoverClose}
        trigger="hover"
      >
        <PopoverTrigger>
          <Flex
            px={1}
            cursor="pointer"
            className={
              router.asPath === goto ||
              router.asPath === `${goto}/${router.query?.platform}` ||
              router.asPath ===
                `${goto}/${router.query?.platform}/${router.query?.tech}`
                ? "active"
                : ""
            }
            color={isPopoverOpen ? "yellow.400" : ""}
            border={isPopoverOpen ? "none" : ""}
            align="center"
          >
            <LinkItem
              fontSize="md"
              fontWeight=""
              goto={goto && goto}
              linktext={linktext}
              textTransform="uppercase"
            />

            <Icon
              as={isPopoverOpen ? FaChevronUp : FaChevronDown}
              w={4}
              h={4}
              marginLeft={2}
              cursor="pointer"
            />
          </Flex>
        </PopoverTrigger>

        <PopoverContent maxWidth="400px" mt={2}>
          <PopoverBody
            py="2"
            bg="brand.black"
            boxShadow="inset 0 0 8px #faae12"
          >
            <Accordion index={accIdx} onChange={handleChange} allowToggle>
              {popoverContent?.map((el, idx) => (
                <Fragment key={idx}>
                  <AccordionItem p={0} border="none">
                    <AccordionButton
                      textAlign="center"
                      px={6}
                      py={2}
                      _hover={{
                        bg: "yellow.400",
                        color:
                          el.path === router.asPath ||
                          router?.query?.platform === el.platform.toLowerCase()
                            ? "#fff"
                            : "",
                      }}
                      className={
                        el.path === router.asPath ||
                        router?.query?.platform === el.platform.toLowerCase()
                          ? "active"
                          : ""
                      }
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {el.path !== undefined ? (
                          <LinkItem
                            stopHover={true}
                            goto={el.path}
                            fontWeight="bold"
                            linktext={el.name}
                            textTransform="capitalize"
                            fontSize="md"
                            query={el?.query?.type}
                            // isDynamicRoute={
                            //   (el.path === "/blog/[user]/drafts" &&
                            //     auth?.currentUser) ||
                            //   (el.path === "/blog/[user]/published" &&
                            //     auth?.currentUser)
                            // }
                          />
                        ) : (
                          // Render the name as plain text when path is not provided
                          <Text
                            fontWeight="bold"
                            textTransform="capitalize"
                            fontSize="md"
                          >
                            {el.name}
                          </Text>
                        )}
                      </Box>
                      {el.techs && <AccordionIcon />}
                    </AccordionButton>

                    <AccordionPanel p={0}>
                      <List>
                        {el.techs?.map((tech, i) => (
                          <ListItem
                            key={i + tech.path}
                            className={
                              tech.path === router.asPath ? "active" : ""
                            }
                            px="5"
                            py={1}
                            _hover={{
                              bg: "yellow.400",
                              color: tech.path === router.asPath ? "#fff" : "",
                            }}
                          >
                            <LinkItem
                              stopHover={true}
                              goto={tech.path && tech.path}
                              linktext={tech.name}
                              textTransform="capitalize"
                              fontSize="md"
                              fontWeight="normal"
                            />{" "}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Fragment>
              ))}
            </Accordion>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  ) : (
    <LinkItem
      fontSize="md"
      fontWeight="bold"
      goto={goto}
      linktext={linktext}
      router={router}
      textTransform="uppercase"
      px={1}
    />
  );
};

export default HeaderLinkWithPopover;
