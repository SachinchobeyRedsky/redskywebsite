import React, { useEffect, useState } from "react";
import { Box, Image} from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import {
  collection,
  getDocs,
  query as firebaseQuery,
} from "firebase/firestore";
import { db } from "../../../firebase.config";

function HomeSlider() {
  const [currentPorjects, setCurrentPorject] = useState([]); 

  const getProjectByName = async () => {
    const querySnapshot = await getDocs(collection(db, "homelandingServiceProjects"));
    if (querySnapshot.empty) {
      return;
    }
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setCurrentPorject(data); 
    });
  };
  
  useEffect(() => {
    getProjectByName();
  }, []);
  const settings = {
    className: "center",
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <Box w="100%" py={["0", "0", "10", "24", "24"]}>
      <Slider {...settings}>
        {currentPorjects?.projectdata?.map((tec, index) => {
          return (
            <Box key={index} width="100%">
              <Image
                src={tec}
                // height={"400px"}
                // width={"750px"}
                height={["200px", "200px", "350px", "350px", "400px"]}
                width={["500px", "500px", "850px", "750px", "750px"]}
                objectFit="cover"
                alt="servicesprojects"
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}

export default HomeSlider;
