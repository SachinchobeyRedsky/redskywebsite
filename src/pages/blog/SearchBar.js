import { Box, FormControl, Input, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar({ setSearch, getSearchedBlogData }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Box w={["60%", "60%", "18%", "18%", "18%"]}>
        <Flex>
          <FormControl>
            <Input
              color="brand.white"
              variant="flushed"
              colorScheme="#faae12"
              borderBottom="2px solid #faae12"
              placeholder="Search"
              onChange={handleSearchChange}
            />
          </FormControl>

          <Button
            bg="linear-gradient(to bottom, #FFF331,#FF7531)"
            _hover={"linear-gradient(to bottom, #FFF331,#FF7531)"}
          >
            <SearchIcon w={4} h={4} color="black" />
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default SearchBar;
