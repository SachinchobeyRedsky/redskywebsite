import React from "react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BLOG_CATEGORIES } from "../../constants/constants";

function BlogTabs({ render }) {
  return (
    <Box color="#FFF">
      <Tabs variant="unstyled" colorScheme="green">
        <TabList gap="2">
          {BLOG_CATEGORIES.map((_t, index) => (
            <Tab
              key={index}
              _selected={{
                color: "black",
                bg: "linear-gradient(to bottom, #FFF331,#FF7531)",
              }}
              bg="#404040"
              fontSize="sm"
            >
              {_t.keyWord}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {BLOG_CATEGORIES.map((_tp, i) => (
            <TabPanel key={i} fontSize="sm">
              {render(_tp.key)}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default BlogTabs;
