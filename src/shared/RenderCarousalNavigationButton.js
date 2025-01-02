import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const POSITION = "absolute";

const RenderCarousalNavigationButton = ({
  move,
  width,
  height,
  left,
  right,
  top,
  bottom,
  display,
  color,
}) => {
  return (
    <Box display={display}>
      {move === "next" ? (
        <ChevronRightIcon
          w={width}
          h={height}
          position={POSITION}
          left={left}
          bottom={bottom}
          top={top}
          right={right}
          color={color}
        />
      ) : (
        move === "back" && (
          <ChevronLeftIcon
            w={width}
            h={height}
            position={POSITION}
            left={left}
            bottom={bottom}
            top={top}
            right={right}
            color={color}
          />
        )
      )}
    </Box>
  );
};

export default RenderCarousalNavigationButton;
