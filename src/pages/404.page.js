import { Box, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <>
      <Box
        mt="40"
        mb="10"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="800" fontSize="9xl" color="white">
          404
        </Text>
        <Text fontWeight="600" fontSize="3xl" color="white" lineHeight="8">
          Page not found
        </Text>
        <Button
          mt="6"
          bg="linear-gradient(to bottom, #FFF331,#FF7531)"
          _hover={"linear-gradient(to bottom, #FFF331,#FF7531)"}
          onClick={handleClick}
          fontWeight="bold"
        >
          Go to home page
        </Button>
      </Box>
    </>
  );
}

export default NotFound;
