import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Checkbox,
  Select,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  serverTimestamp,
  onSnapshot,
  orderBy,
  updateDoc,
  query,
  setDoc,
  where
} from "firebase/firestore";
import { db } from "../../../../../firebase.config";

const CreateCategories = () => {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const handleChange = (event) => setValue(event.target.value);

  const handleAddCategory = async () => {
    if (value.trim()) {
      const newCategory = {
        key: value.toLowerCase().substring(0, 3),
        name: value,
        createdAt: serverTimestamp(),
        status: "active", // default status is active
        count: 0,
      };
      
      const categoriesRef = collection(db, "categories");
      const querySnapshot = await getDocs(query(categoriesRef, where("name", "==", value)));
      
      if (!querySnapshot.empty) {
        // Update the existing category
        const categoryDoc = querySnapshot.docs[0];
        await updateDoc(categoryDoc.ref, { ...newCategory });
      } else {
        // Add a new category
        await addDoc(categoriesRef, { ...newCategory });
      }
  
      setValue("");
    }
  };
  
  const handleUpdateCategory = (categoryId) => {
    const categoryToUpdate = categories.find(
      (category) => category.id === categoryId
    );
    if (categoryToUpdate) {
      updateDoc(doc(db, "categories", categoryId), {
        ...categoryToUpdate,
        key: value.toLowerCase().substring(0, 3),
        name: value,
      })
        .then(() => {
          setValue("");
          setEditCategoryId(null); // reset the editCategoryId state variable
        })
        .catch((error) => {
          console.error("Error updating category in Firestore:", error);
        });
    }
  };

  const handleEditCategory = (categoryId) => {
    const categoryToEdit = categories.find(
      (category) => category.id === categoryId
    );
    if (categoryToEdit) {
      setValue(categoryToEdit.name);
      setEditCategoryId(categoryId);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "categories"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedCategories = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setCategories(fetchedCategories);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Box px="20" pt="10" pb="40" bg="brand.black" alignItems="center" color="brand.white">
        <Text mb="4" fontSize="1xl" fontWeight="extrabold">
          Create Category
        </Text>
        <Input
          w="50%"
          value={value}
          onChange={handleChange}
          placeholder="Create Category"
          size="xl"
          variant="flushed"
          mb="6"
        />
        <Button
          border="solid 2px #faae01"
          title={editCategoryId ? "Update" : "Add Category"}
          variant="trainingButton"
          textTransform="none"
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
          ml="6"
          onClick={
            editCategoryId
              ? () => handleUpdateCategory(editCategoryId)
              : handleAddCategory
          }
        >
          {editCategoryId ? "Update" : "Add Category"}
        </Button>
        <Tabs variant="unstyled" width="100%" colorScheme="yellow">
          <TabList mb="2" gap="80">
            <Tab fontWeight="extrabold">Active Categories</Tab>
            <Tab fontWeight="extrabold">Deleted Categories</Tab>
          </TabList>
          <TabIndicator
            mt="-10px"
            height="2px"
            bg="yellow.100"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Flex>
                <Box>
                  {categories.map(
                    (category, index) =>
                      category.status === "active" && (
                        <Box
                          key={index}
                          mb="4"
                          p="2"
                          textTransform="capitalize"
                          display="flex"
                          flexDirection="row"
                          justifyContent="space-between"
                          alignItems="center"
                          gap="80"
                          borderRadius="10"
                          textAlign="center"
                          border="solid 2px #faae01"
                        >
                          <Box ml="4" display="flex">
                            <Checkbox
                              isChecked={category.status === "active"}
                              colorScheme="yellow"
                              onChange={() => {
                                const newStatus =
                                  category.status === "active"
                                    ? "inactive"
                                    : "active";
                                updateDoc(doc(db, "categories", category.id), {
                                  status: newStatus,
                                });
                              }}
                            ></Checkbox>
                            <Text ml="2">{category.name}</Text>
                          </Box>
                          <Box>
                            <Button
                              border="solid 2px #faae01"
                              title={"edit"}
                              variant="trainingButton"
                              textTransform="none"
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
                              ml="4"
                              onClick={() => handleEditCategory(category.id)}
                            >
                              Edit
                            </Button>
                          </Box>
                        </Box>
                      )
                  )}
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              {categories.map(
                (category, index) =>
                  category.status === "inactive" && (
                    <Box
                      key={index}
                      mb="4"
                      w="40"
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                      border="solid 2px #faae01"
                    >
                      <Box ml="4" display="flex">
                        <Checkbox
                          isChecked={category.status === "active"}
                          onChange={() => {
                            const newStatus =
                              category.status === "active"
                                ? "inactive"
                                : "active";
                            updateDoc(doc(db, "categories", category.id), {
                              status: newStatus,
                            });
                          }}
                        ></Checkbox>

                        <Text ml="2">{category.name}</Text>
                      </Box>
                    </Box>
                  )
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default CreateCategories;
