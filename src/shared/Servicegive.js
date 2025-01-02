import React from "react";
import Link from "next/link";
import { Box, Text, ListItem, UnorderedList, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Button from "../shared/Button";

// animation on the scroll .
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

const Servicegive = (props) => {
  return (
    <Box
      flex="1"
      mx={["4", "3", "3", "3", "5"]}
      mb="20"
      width={["90%", "90%", "90%", "80%", "80%"]}
      color="brand.white"
      display="flex"
      flexDirection={["column", "column", "row", "row"]}
      justifyContent={"center"}
      alignItems="center"
      textAlign={["center", "center", "left", "left"]}
    >
      <Box mr={["0", "0", "15", "65"]}>
        <Box
          width={props.main == "Digital" ? "400px" : "400px"}
          height={props.main == "Digital" ? "400px" : "400px"}
        >
          <Slide left>
            <Rotate>
              <Fade big>
                <Image
                  src={props.image}
                  width={props.main == "Digital" ? "400px" : "350px"}
                  height={props.main == "Digital" ? "400px" : "350px"}
                  alt={props.main}
                />
              </Fade>
            </Rotate>
          </Slide>
        </Box>
      </Box>
      <Box>
        <Box lineHeight="1.1" mb="4">
          <Slide right>
            <Fade big>
              <Text
                a="h3"
                color="white"
                fontSize={["2xl", "2xl", "3xl", "3xl", "3xl"]}
                textTransform="uppercase"
                fontWeight="extrabold"
                p="0"
                m="0"
              >
                {props.main}
              </Text>
            </Fade>
          </Slide>

          <Slide right>
            <Fade big>
              <chakra.span
                bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
                bgClip="text"
                fontSize={["2xl", "2xl", "3xl", "3xl", "3xl"]}
                fontWeight="extrabold"
                textTransform="uppercase"
              >
                {props.main2}
              </chakra.span>
            </Fade>
          </Slide>
        </Box>
        <Box>
          <Zoom cascade>
            <Box>
              {props?.servicesDatatext?.text1 && (
                <Text fontSize={["medium", "xl", "xl"]}>
                  {props?.servicesDatatext?.text1}
                </Text>
              )}
              {props.servicesDatatext.text && (
                <Text fontSize={["medium", "xl", "xl"]}>
                  {props.servicesDatatext.text}
                </Text>
              )}
              <Box>
                {props.servicesDatatext.textListsHeading && (
                  <Text
                    fontSize={["medium", "xl", "xl"]}
                    mt={5}
                    textAlign={["left", "left", "left", "left", "left"]}
                    fontWeight="semibold"
                  >
                    {props.servicesDatatext.textListsHeading}
                  </Text>
                )}
                <UnorderedList
                  listStyleType={["disc", "disc", "disc", "disc", "disc"]}
                  w="85%"
                  ml={["5vw", "5vw", "10px", "20px", "20px"]}
                  textAlign={["left", "left", "left", , "left"]}
                >
                  {props.servicesDatatext.textLists.map((listItem, key) => (
                    <ListItem
                      key={`whyl${key}`}
                      fontSize={["medium", "xl", "xl"]}
                      fontWeight="light"
                      mt={2}
                      ml={["0", "5", "5"]}
                    >
                      {listItem}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
              {props.servicesDatatext.text2 && (
                <Text fontSize={["medium", "xl", "xl"]} mt={5}>
                  {props.servicesDatatext.text2}
                </Text>
              )}
            </Box>
          </Zoom>
        </Box>

        {props.buttonName && props.buttonLink && (
          <Box mt="10" textAlign={["center", "center", "left", "left"]}>
            <Slide bottom>
              <Link href={props.buttonLink}>
                <a>
                  <Button
                    text={props.buttonName}
                    sizes="xl"
                    _focus={{ border: "none", backgroundColor: "none" }}
                  />
                </a>
              </Link>
            </Slide>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Servicegive;
