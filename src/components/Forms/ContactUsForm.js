import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

function ContactUsForm({
  detail,
  setDetail,
  value,
  setValue,
  isError,
  checkValue,
  checkNumber,
}) {
  const { email, name, company, phone } = detail;

  const edittab = (e) => {
    const { value, name } = e.target;
    setDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box overflow="hidden">
      <form>
        <Flex display={["column", "column", "flex", "flex", "flex"]}>
          <FormControl
            isInvalid={
              (detail.name == "" && isError) ||
              (detail.name !== "" && checkNumber.name)
            }
          >
            <Box width="100%">
              <Input
                type="text"
                variant="flushed"
                placeholder="Name*"
                value={name}
                onChange={edittab}
                name="name"
              />
              {(name == "" && isError && (
                <FormErrorMessage mt="-6">Name is required</FormErrorMessage>
              )) ||
                (name !== "" && checkNumber.name && (
                  <FormErrorMessage mt="-6">
                    Alphabet characters only
                  </FormErrorMessage>
                ))}
            </Box>
          </FormControl>
          <FormControl
            isInvalid={
              (detail.email == "" && isError) ||
              (detail.email !== "" && checkValue.email)
            }
          >
            <Box width="100%">
              <Input
                type="text"
                variant="flushed"
                placeholder="Email"
                value={email}
                name="email"
                onChange={edittab}
                ml={["0", "0", "10", "10", "10"]}
              />
              {(email == "" && isError && (
                <FormErrorMessage mt="-6" ml={["0", "0", "10", "10", "10"]}>
                  Email is required
                </FormErrorMessage>
              )) ||
                (email !== "" && checkValue.email && (
                  <FormErrorMessage mt="-6" ml={["0", "0", "10", "10", "10"]}>
                    Email is not valid
                  </FormErrorMessage>
                ))}
            </Box>
          </FormControl>
        </Flex>
        <Flex display={["column", "column", "flex", "flex", "flex"]}>
          <FormControl>
            <Box width={["100%", "100%", "50%", "50%", "50%"]} mb="4">
              <PhoneInput
                flags={flags}
                style={{
                  backgroundColor: "transparent", // Transparent background
                  color: "#fff",
                  colorScheme: "#fff", // White text color
                  placeholderColor: "white", // White placeholder color
                }}
                defaultCountry="IN"
                placeholder="Phone*"
                name="mobile"
                value={value}
                onChange={setValue}
              />
            </Box>
          </FormControl>
        </Flex>
        {/* </FormControl> */}
      </form>
    </Box>
  );
}

export default ContactUsForm;
