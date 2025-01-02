import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Image,
  Flex,
  Box,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { getAuth } from "firebase/auth";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LinkItemsWithMenus = ({
  linkItemsData,
  router,
  makeDisabled,
  addPadding,
  textTransform,
  platform,
  isDynamicRoute,
  ind,
  query,
  onClose,
}) => {
  // const auth = getAuth();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <Flex
        transition="all 0.1s"
        py="6px"
        px="10px"
        justifyContent="space-between"
      >
        <LinkItemWithIcon
          withIcon={linkItemsData?.icon?.src}
          imageFilter="brightness(0) invert(1)"
          iconData={{
            width: "25px",
            height: "25px",
            src: linkItemsData?.icon?.src,
          }}
          flex={1}
          textAlign="left"
          fontSize="sm"
          router={router}
          query={query}
          goto={linkItemsData?.path}
          linktext={linkItemsData?.name || linkItemsData?.tech}
          textTransform={textTransform}
          platform={platform}
          isDynamicRoute={isDynamicRoute}
          onClose={onClose}
        />
        {makeDisabled && (
          <Icon
            as={openIndex === ind ? FaChevronUp : FaChevronDown}
            w={4}
            h={4}
            color="#faae12"
            marginLeft={2}
            marginTop={1}
            cursor="pointer"
            onClick={() => handleToggle(ind)}
          />
        )}
      </Flex>
      <Collapse in={openIndex === ind}>
        <Box bg="#101114" textAlign="justify" fontSize="md" p="5px">
          {linkItemsData?.popoverData?.map((_pItem, idx) => (
            <LinkItemsWithMenus
              router={router}
              key={_pItem.name + idx}
              linkItemsData={_pItem}
              makeDisabled={!!_pItem.techs}
              query={_pItem?.query?.type}
              addPadding="43px"
              textTransform="capitalize"
              platform={_pItem.platform}
              onClose={onClose}
              data="working"
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

const LinkItem = (props) => {
  const {
    goto,
    router,
    linktext,
    platform,
    stopHover,
    isDynamicRoute,
    query,
    onClose,
    data,
  } = props;
  // const auth = getAuth();
  return (
    <Text
      title={linktext}
      {...props}
      onClick={onClose}
      _hover={!stopHover && { color: "yellow.100", border: "none" }}
      className={
        router?.asPath === goto ||
        router?.asPath === `${goto}/${router?.query?.platform}` ||
        router?.asPath ===
          `${goto}/${router?.query?.platform}/${router?.query?.tech}`
          ?
            "active"
          : ""
      }
      fontSize={["sm", "sm", "sm", "xs", "sm"]}
    >
      <Link
        href={{
          pathname: goto,
          ...(query && { query: { type: query } }),
        }}
      >
        <a style={{ display: "block" }}>{linktext}</a>
      </Link>
    </Text>
  );
};

const LinkItemWithIcon = (props) => {
  const {
    fontSize,
    goto,
    router,
    linktext,
    withIcon, //pass this prop if icon needed
    iconData, //{ src: src , height: height, widht: width}
    textTransform,
    fontWeight,
    stopHover,
    imageFilter,
    isDynamicRoute,
    query,
    onClose,
  } = props;
  return withIcon ? (
    <Flex
      className={
        goto === router?.asPath ||
        router?.asPath === `${goto}/${router?.query?.platform}` ||
        router?.asPath ===
          `${goto}/${router?.query?.platform}/${router?.query?.tech}`
          ? "active"
          : "" + stopHover
          ? null
          : "drawer-link-item"
      }
      align="center"
      flex={1}
      cursor="pointer"
    >
      <Image filter={imageFilter} mr={2} {...iconData} alt="header logo" />
      <LinkItem
        flex={1}
        textAlign="left"
        fontWeight={fontWeight ?? "bold"}
        fontSize={fontSize}
        goto={goto}
        router={router}
        query={query}
        linktext={linktext}
        textTransform={textTransform}
        stopHover={stopHover}
        isDynamicRoute={isDynamicRoute}
        onClose={onClose}
      />
    </Flex>
  ) : (
    <LinkItem
      {...props}
      fontWeight="normal"
      fontSize={fontSize}
      goto={goto}
      query={query}
      router={router}
      linktext={linktext}
      textTransform={textTransform}
      onClose={onClose}
    />
  );
};

export { LinkItemWithIcon, LinkItemsWithMenus, LinkItem };
