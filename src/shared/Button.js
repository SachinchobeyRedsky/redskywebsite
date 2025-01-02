import { Box, Button, Text } from "@chakra-ui/react";

function RoundButton(props) {
  return (
    <Box >
      <Button
        border="solid 2px #faae01"
        className={props?.showShadow ? "with-shadow" : ""}
        title={props.title}
        variant="trainingButton"
        bg="rgb(11, 11, 13)"
        boxShadow={
          "0 0 20px  rgba(255, 174, 0, 0.4)"
        }
        transition="all 0.1s"
        _hover={{
          border: "solid 3px #faae01",
          transform: "scale(1.05)",
          opacity: 1,
          boxShadow: "0 0 20px #ffae00",
          background: "rgb(11, 11, 13)",
        }}
        _focus={{
          outline: "none",
          background: "gray.500",
        }}
        _active={{
          outline: "none",
          background: "gray.500",
        }}
        onClick={props.onClickHandler}
        disabled={props.disabledButton}
      >
        <Text
          variant="gradient"
          fontWeight="800"
          textTransform="none"
          fontSize={props.sizes ? props.sizes : "1xl"}
        >
          {props.text}
        </Text>
      </Button>
    </Box>
  );
}

export default RoundButton;
