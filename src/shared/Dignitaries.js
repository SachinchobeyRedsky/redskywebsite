import { Box, Text, Center } from "@chakra-ui/react";
import Image from "next/image";

function Dignitaries(props) {
  return (
    <>
      <Box
        w={["90%", "50%", "50%", "80%", "25%"]}
        border="5px solid #101114"
        mt={["6", "6", "6", "0", "0"]}
        overflow="hidden"
      >
        <Box
          h="60"
          overflow="hidden"
          filter="grayscale(100%);"
          objectFit="cover"
          zIndex={"-122"}
          _hover={{ transform: "scale(1.01)", filter: "none" }}
          transition="all 0.2s ease-in"
          borderRadius="10px"
        >
          <Image
            width="340%"
            height="320%"
            src={props.image}
            overflow="hidden"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Center>
            <Box
              py={0}
              h="10"
              width="70%"
              bg="gray.700"
              borderRadius="10px"
              mt={-5}
              zIndex="123"
            >
              <Text fontWeight="ultrabold" fontSize="2xl" color="brand.white">
                {props.name}{" "}
              </Text>
            </Box>
          </Center>
          <Text
            pt={2}
            fontWeight="regular"
            fontSize="1rem"
            fontStyle="italic"
            color="yellow.500"
          >
            {" "}
            {props.title}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Dignitaries;
