import React, { useState, useEffect, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Input,
  Text,
  Skeleton,
  Textarea,
  Flex,
  Select,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
const ReactQuill = dynamic(() => import("./Editor"), {
  ssr: false,
});
import "react-quill/dist/quill.bubble.css";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import {
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
  increment,
} from "firebase/firestore";
import { db } from "../../../../firebase.config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { BLOG_CATEGORIES } from "../../../constants/constants";
const RoundButton = dynamic(() => import("../../../shared/Button"), {});
const Header = dynamic(() => import("../../../components/Header"), {});
const Footer = dynamic(() => import("../../../components/Footer"), {});
const Login = dynamic(() => import("../../../components/Login/Login"), {});
const BlogsEmptyText = dynamic(() => import("../../../shared/BlogsEmptyText"), {});


var EMPTY_DELTA = { ops: [] };
function AddBlog() {
  const counterDocRef = doc(db, "blogSettings", "blogs-counter");
  const draftsCounterDocRef = doc(db, "blogSettings", "drafts-counter");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const quillRef = useRef(null);
  const auth = getAuth();
  const router = useRouter();
  const draftData = router?.query;

  const [isTimeoutReached, setIsTimeoutReached] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState("");
  const [events, setEvents] = useState([]);
  const [selection, setSelection] = useState("");
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [progress, setProgress] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [draftChanged, setDraftChanged] = useState(false);
  const [categories, setCategories] = useState([]);

  //  ******************* quill editor functionality *****************
  useEffect(() => {
    setValue(draftData.newObj);
    setTitle(draftData.title);
    setSelectedCategory(draftData.category);
  }, []);
  const loadQuill = async () => {
    return new Promise(async (resolve, reject) => {
      const Quill = await require("react-quill").Quill;
      const BlotFormatter = (await import("quill-blot-formatter")).default;
      const ImageFormat = Quill.import("formats/image");
      ImageFormat.DEFAULTS = {
        ...ImageFormat.DEFAULTS,
        align: "center",
      };
      resolve({ Quill, BlotFormatter });
    })
      .then(({ Quill, BlotFormatter }) => {
        Quill.register("modules/blotFormatter", BlotFormatter);
        console.log(
          "bllofggggg>>>>",
          Quill.register("modules/blotFormatter", BlotFormatter)
        );
        return;
      })
      .then((value) => {
        setValue(value);
        setEnabled(true);
      });
  };

  useEffect(() => {
    loadQuill();
  }, []);
  const formatRange = (range) => {
    return range ? [range.index, range.index + range.length].join(",") : "none";
  };

  const onEditorChange = (value, delta, source, editor) => {
    setValue(value);
    setEvents([`[${source}] text-change`, ...events]);
    setIsTimeoutReached(true);
    setDraftChanged(true);
  };

  const onEditorChangeSelection = (range, source) => {
    quillRef?.current?.editor?.theme?.tooltip?.root?.classList?.remove(
      "ql-hidden"
    );
    setSelection(!!range);
    setEvents([
      `[${source}] selection-change(${formatRange(selection)} -> ${formatRange(
        range
      )})`,
      ...events,
    ]);
  };

  const onEditorFocus = (range, source) => {
    quillRef?.current?.editor?.theme?.tooltip?.root?.classList?.remove(
      "ql-hidden"
    );
    setValue(value);
    setEvents([`[${source}] focus(${formatRange(range)})`].concat(events));
  };

  const onEditorBlur = (previousRange, source) => {
    setEvents(
      [`[${source}] blur(${formatRange(previousRange)})`].concat(events)
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (authState) => {
      if (authState) {
        const userRef = doc(db, "authUsers", authState.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists() && userDoc.data().isBlocked) {
          setUser(null);
        } else {
          setUser(authState);
        }
      }
    });
  }, []);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let lowercaseTitle = title.toLowerCase();
      let titleAsArray = [];
      let title1 = lowercaseTitle.split(" ");
      for (let j = 1; j < title.length + 1; j++) {
        titleAsArray.push(title.substring(0, j));
      }
      for (let i = 0; i < title1.length; i++) {
        for (let j = 1; j < title1[i].length + 1; j++) {
          titleAsArray.push(title1[i].substring(0, j));
        }
      }

      const counterDocSnap = await getDoc(counterDocRef);
      const categoriesCollectionRef = collection(db, "categories");
      const categoryDocRef = doc(categoriesCollectionRef, selectedCategory);
      const categoryDocSnap = await getDoc(categoryDocRef);
      const categoryCount = categoryDocSnap.data().count;

      const allBlogData = {
        title: title,
        titleAsArray: titleAsArray,
        newObj: value,
        userEmail: user.email,
        userName: user.displayName,
        userUid: user.uid,
        category: categoryDocSnap.data().key,
        createdAt: serverTimestamp(),
      };
      Promise.all([
        addDoc(collection(db, "blogData"), {
          ...allBlogData,
        }),
        setDoc(counterDocRef, {
          ...counterDocSnap.data(),
          all: { count: counterDocSnap.data().all.count + 1, name: "All" },
        }),
        setDoc(categoryDocRef, {
          ...categoryDocSnap.data(),
          count: categoryCount + 1,
        }),
      ])
        .then(() => {
          if (draftData.id) {
            removeDraftData(draftData.id);
          }
          router.push("/blog");
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleRouteChange = (url) => {
    if (draftChanged) {
      draftHandleSubmit();
      setDraftChanged(false);
    }
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, value, selectedCategory, title]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTimeoutReached(true);
      draftHandleSubmit();
    }, 10000); // set timeout for 10 seconds

    return () => {
      clearTimeout(timeoutId); // cleanup on component unmount or re-render
    };
  }, [value, selectedCategory, title]);

  const draftHandleSubmit = async () => {
    try {
      const lowercaseTitle = title.toLowerCase();
      const titleAsArray = [];
      const title1 = lowercaseTitle.split(" ");
      for (let j = 1; j < title.length + 1; j++) {
        titleAsArray.push(title.substring(0, j));
      }
      for (let i = 0; i < title1.length; i++) {
        for (let j = 1; j < title1[i].length + 1; j++) {
          titleAsArray.push(title1[i].substring(0, j));
        }
      }

      const allBlogData = {
        title: title,
        titleAsArray,
        newObj:
          value === undefined
            ? draftData?.newObj
            : value instanceof Object && Object.keys(value).length === 0
            ? ""
            : value,
        userEmail: user?.email,
        userName: user?.displayName,
        userUid: user?.uid,
        category: selectedCategory || "",
        createdAt: serverTimestamp(),
      };

      // Check if document with same title already exists
      const querySnapshot = await getDocs(
        query(collection(db, "draftsBlogData"), where("title", "==", title))
      );

      if (querySnapshot > 0) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, allBlogData);
        toast({
          position: "top",
          title: "Your draft has been updated",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else if (draftData?.id) {
        // Update existing document with new data
        const docRef = doc(db, "draftsBlogData", draftData.id);
        await updateDoc(docRef, {
          ...allBlogData,
          createdAt: serverTimestamp(),
        });
        toast({
          position: "top",
          title: "Your draft has been updated",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        // Add new document with new data
        const docRef = await addDoc(
          collection(db, "draftsBlogData"),
          allBlogData
        );
        toast({
          position: "top",
          title: "Your draft has been sucessfully saved",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const removeDraftData = async (id) => {
    const draftsCounterDocSnap = await getDoc(draftsCounterDocRef);
    Promise.all([
      deleteDoc(doc(db, "draftsBlogData", id)),
      setDoc(draftsCounterDocRef, {
        count:
          draftsCounterDocSnap.data().count > 0
            ? draftsCounterDocSnap.data().count + 1
            : 0,
      }),
    ]);
  };

  const myToolbar = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [
      { color: ["red", "black", "blue"] },
      { background: ["red", "black", "blue", "White"] },
    ],
    ["link", "image", "video", "code-block", "formula"],
    ["clean"],
  ];

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${file.name}`;
        const storageRef = ref(storage, "blogImages/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const uploadProgress = setProgress(true);
            switch (snapshot.state) {
              case "paused":
                break;
              case "running":
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
              const editor = quillRef.current.getEditor();
              editor.deleteText(editor.getSelection().index, 1);
              editor.insertEmbed(
                editor.getSelection().index,
                "image",
                downloadURL
              );
              setProgress(false);
            });
          }
        );
      });
    };
  };

  const modules = useMemo(
    () => ({
      blotFormatter: {},
      toolbar: {
        container: myToolbar,
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const blogTitleChnage = (e) => {
    setTitle(e.target.value);
    setDraftChanged(true);
  };

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
    setDraftChanged(true);
  };

  const onClickHandler = () => {
    onOpen();
  };

  return (
    <>
      <Header />
      {user ? (
        <Box
          bg="#fff"
          display="flex"
          justifyContent="center"
          py="28"
          px="10"
          color="black"
        >
          <Flex px="2" py="20" direction="column">
            <Box pb="4">
              <Select
                onChange={handleSelectedCategory}
                placeholder="Select Category"
                errorBorderColor="red"
                focusBorderColor="yellow.100"
                width={["100%", "100%", "50%", "50%", "50%"]}
                required
                _placeholder={{
                  color: "black",
                  fontWeight: "400",
                }}
              >
                {categories.reverse().map((category, index) =>
                  category.key !== "all" ? (
                    category.status == "active" ? (
                      <option
                        key={category.key}
                        selected={draftData?.category === category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ) : (
                      ""
                    )
                  ) : null
                )}
              </Select>
            </Box>
            <Box w="100%" mt="6">
              <Textarea
                type="text"
                color="black"
                textTransform="capitalize"
                placeholder="Title"
                onChange={blogTitleChnage}
                value={title || draftData?.title}
                border="none"
                fontSize="20px"
                h="50px"
                fontWeight="800"
                resize="none"
                _focus={{
                  colorScheme: "dark",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
                _hover={{
                  border: "none",
                  outline: "none",
                }}
                _placeholder={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: "1xl",
                }}
                sx={{
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              />
            </Box>

            <Box width={["80vw", "80vw", "50vw", "50vw", "50vw"]} mb="4">
              {enabled && (
                <ReactQuill
                  forwardedRef={quillRef}
                  theme={"bubble"}
                  color="white"
                  placeholder={"Write something awesome..."}
                  modules={modules}
                  value={value || draftData?.newObj}
                  onChange={onEditorChange}
                  onChangeSelection={onEditorChangeSelection}
                  onFocus={onEditorFocus}
                  onBlur={onEditorBlur}
                />
              )}
              {progress && <Skeleton height="248px" width="440px" />}
            </Box>
            <Flex mt="20" justifyContent="space-between" direction="row">
              {value === "" ||
              title === "" ||
              progress ||
              !selectedCategory ? null : (
                <RoundButton
                  onClickHandler={handleSubmit}
                  disabledButton={
                    value === "" ||
                    title === "" ||
                    progress ||
                    !selectedCategory
                  }
                  text="Publish"
                  sizes="md"
                />
              )}
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box p="40" bg="#ffff" textAlign="center" color="black">
          {/* <BlogsEmptyText TitleText="User not Found " /> */}
          <Text  fontWeight="600" fontSize="2xl">user not Found </Text>
          <RoundButton text="Signin" onClickHandler={onClickHandler} />
          <Login isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Box>
      )}
      <Footer />
    </>
  );
}
export default AddBlog;
