import { Box, Button, Text } from "@chakra-ui/react";

function RoundButton() {
  return (
    <Box 
    zIndex={99999}>
      <Button
        title="Learn more"
        background="black.600"
        w="50"
        mt={30}
        ml={["10"]}
        p={["5", "8", "8", "8", "8"]}
        borderRadius="30"
        border="none"
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
        <Text
          fontSize={["15px", "18px", "20px", "22px", "22px"]}
          fontWeight={700}
          bgGradient="linear(to-r,  brand.yellow,  brand.orange)"
          bgClip="text"
        >
          {" "}
          Learn more
        </Text>
      </Button>
    </Box>
  );
}

export default RoundButton;
