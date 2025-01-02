import { Box } from "@chakra-ui/react";
import { trainingConstants } from "../../constants/constants";
const Slider = ({ Review, AliceCarousel, reviewBack }) => {

  
  return (
    <Box
      bg="brand.black"
      py="20"
      bgImage={`linear-gradient(to right,#101114bc,#101114c6),url(${reviewBack.src})`}
      bgRepeat="no-repeat"
      bgSize={["450%", "200%", "100%", "100%", "100%"]}
      bgColor="brand.black"
      bgPosition="bottom"
    >
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        autoPlayInterval={3000}
        infinite={true}
        slideBy={2}
        disableButtonsControls={true}
      >
        {trainingConstants?.trainingReviews?.map((triningReview, idx) => {
          return (
            <Review
              key={idx}
              image={triningReview.image}
              desc={triningReview.desc}
              name={triningReview.name}
            />
          );
        })}
      </AliceCarousel>
    </Box>
  );
};

export default Slider;
