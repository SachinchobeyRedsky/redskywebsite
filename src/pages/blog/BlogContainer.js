import React, { forwardRef, useEffect, useState } from "react";
import BlogCard from "../../shared/BlogCard";
import {
  Box,
  Flex,
  Icon,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  FaRegThumbsUp,
  FaThumbsUp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";
import {
  doc,
  arrayRemove,
  arrayUnion,
  updateDoc,
  onSnapshot,
  setDoc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import { useRouter } from "next/router";

const LikeBlogButton = ({ id, likes, user }) => {
  const likesRef = doc(db, "blogData", id);
  const handleLikes = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("liked");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        flexdirection="row"
        gap="2"
        alignItems="flex-end"
        ml="2"
        cursor="pointer"
        onClick={handleLikes}
      >
        <Flex gap={2}>
          {" "}
          <Icon
            as={likes?.includes(user.uid) ? FaThumbsUp : FaRegThumbsUp}
            w={4}
            h={4}
            color="#faae12"
          />{" "}
        </Flex>
      </Box>
    </Box>
  );
};
const BlogContainer = (props, ref) => {
  const toast = useToast();
  const { index, data, push, currentUser } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSaved, setIsSaved] = useState(false);
  const [blogs, setBlogs] = useState();
  const [user, setUser] = useState(null);
  const iconsUrl = [
    {
      icon: FaFacebook,
      name: "facebook",
      text: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.origin + `/blog/${data?.category}/${data?.title}`
      )}`,
    },
    {
      icon: FaTwitter,
      name: "twitter",
      text: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        window.location.origin + `/blog/${data?.category}/${data?.title}`
      )}`,
    },
    {
      icon: FaLinkedin,
      name: "linkedin",
      text: "Linkedin",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.origin + `/blog/${data?.category}/${data?.title}`
      )}`,
    },
    {
      icon: FaWhatsapp,
      name: "whatsapp",
      text: "Whatsapp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        window.location.origin + `/blog/${data?.category}/${data?.title}`
      )}`,
    },
    {
      icon: FaLink,
      name: "copy Link",
      text: "Copy Link",
      onClick: () =>
        navigator.clipboard
          .writeText(
            window.location.origin + `/blog/${data?.category}/${data?.title}`
          )
          .then(() => {
            toast({
              position: "top",
              render: () => (
                <Box
                  color="white"
                  fontWeight="700"
                  p={4}
                  bgGradient="linear-gradient(30deg, #f8cb2e, #ff914d , );"
                  borderRadius="16px"
                  boxShadow="inset 0 0 8px #faae12"
                >
                  <Box>Link copied to clipboard</Box>
                </Box>
              ),
            });
          }),
    },
  ];
  const router = useRouter();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "blogData", data.id), (doc) => {
      setBlogs(doc.data());
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const checkSavedState = async () => {
      if (currentUser) {
        const savedBlogsRef = doc(db, "savedBlogs", currentUser.uid);
        const savedBlogsDoc = await getDoc(savedBlogsRef);
        const savedBlogIds = savedBlogsDoc.exists()
          ? savedBlogsDoc.data().blogIds
          : [];
        setIsSaved(savedBlogIds.includes(data.id));
      }
    };
    checkSavedState();
  }, [currentUser, data?.id]);

  const handleSaveClick = async () => {
    if (currentUser) {
      const savedBlogsRef = doc(db, "savedBlogs", currentUser.uid);
      const savedBlogsDoc = await getDoc(savedBlogsRef);
      const savedBlogIds = savedBlogsDoc.exists()
        ? savedBlogsDoc.data().blogIds
        : [];

      const blogIdIndex = savedBlogIds.indexOf(data.id);

      if (blogIdIndex !== -1) {
        // Remove blog from saved blogs
        savedBlogIds.splice(blogIdIndex, 1);

        await updateDoc(savedBlogsRef, {
          blogIds: savedBlogIds,
        });

        setIsSaved(false);
      } else {
        // Add blog to saved blogs
        savedBlogIds.push(data.id);

        await setDoc(savedBlogsRef, {
          userId: currentUser.uid,
          blogIds: savedBlogIds,
        });
        setIsSaved(true);
      }
    } else {
      // Show login modal if user is not logged in
      toast({
        position: "top",
        title: "Please log in to save this blog",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const blogRef = doc(db, "blogData", data?.id);
  const [hiddenBlog, setHiddenBlog] = useState(false);

  const handleHideClick = async () => {
    const newHidden = !hiddenBlog;
    await updateDoc(blogRef, { hidden: newHidden });
    setHiddenBlog(newHidden);
  };
  useEffect(() => {
    const fetchBlogData = async () => {
      const doc = await getDoc(blogRef);
      if (doc.exists()) {
        const data = doc.data();
        setHiddenBlog(data.hidden);
      }
    };
    fetchBlogData();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const querySnapshot = await getDocs(collection(db, "authUsers"));
      querySnapshot.forEach((doc) => {
        const authUser = doc.data();
        if (authUser.uid === currentUser?.uid) {
          setUser(authUser);
        }
      });
    };

    fetchUser();
  }, [currentUser, hiddenBlog]);
  return (
    <>
      <Box bg="none" borderRadius={10}>
        <Box
          cursor="pointer"
          key={index}
          ref={ref}
          onClick={() => {
            push &&
              push(
                {
                  pathname: `/blog/${
                    data?.title.replace(/\s/g, "-") || ""
                  }`,
                },
                `/blog/${
                  data?.title.replace(/\s/g, "-") || ""
                }`
              );
          }}
        >
          <BlogCard
            blogTitle={data?.title}
            info={data?.newObj}
            id={data?.id}
            createdAt={data?.createdAt}
            userName={data?.userName}
            photoUrl={data?.photoUrl}
            userEmail={data?.userEmail}
          />
        </Box>
       
      </Box>
    </>
  );
};

export default forwardRef(BlogContainer);
