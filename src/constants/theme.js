import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    black: "#101114",
    yellow: "#fff331",
    orange: "#ff7531",
    white: "#fff",
  },
  black: {
    100: "#1011144b",
    200: "#101114bc",
    300: "#101114c6",
    400: "#10111433",
    500: "#101114d9",
    600: "#202020",
    700: "#151515",
    800: "#08080be1",
    900: "#07080987",
  },
  yellow: {
    100: "#faae12",
    200: "#ffa200",
    300: "#fff700",
    400: "#ffae00",
    500: "#d79512",
    600: "#facc12",
    700: "#fae001",
  },
  gray: {
    100: "#c1c1c1",
    200: "#1e2026",
    300: "#262931",
    400: "#131518",
    500: "#292931",
    600: "#737373",
    700: "#1c1e23",
    800: "#21232a",
  },
  secondary: {
    100: "#825b5b",
    200: "#161619",
    300: "#101010",
    400: "#ffffcc",
    500: "#121316",
    600: "#18181d",
    700: "#10111427",
    800: "#101114b5",
    900: "#0b0b0e",
  },
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1rem",
  xxl:"1.3rem",
  "1xl": "1.5rem",
  "2xl": "1.8rem",
  "2xxl":"2.15rem",
  "3xl": "2.5rem",
  "4xl": "3.5rem",
  "5xl": "3.5rem",
  "6xl": "3.5rem",
  "7xl": "5rem",
  "8xl": "5.5rem",
  "9xl": "7.5rem",
};

const fontWeights = {
  ultralight: "100",
  extralight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  ultrabold: "900",
};
const styles = {
  global: {
    h2: {
      fontFamily: "Raleway",
      fontWeight: "extrabold",
      fontSize: "36px",
      margin: "0",
      padding: "0",
      lineHeight: "1",
    },
    "html, body": {
      fontFamily: "Raleway",
      boxSizing: "border-box",
      backgroundColor: "#101114 !important",
      color: "white"
    },
    option: {
    },
   

    _marker: {
      color: "yellow.200",
    },
  },
};

const components = {
  Input: {
    variants: {
      flushed: {
        baseStyle: {
          color: "white",
          colorScheme: "dark",
        },
        field: {
          _focus: {
            colorScheme: "dark",
            borderBottom: "1px solid #faae12",
            outline: "none",
            boxShadow: "none",
            _placeholder: {
              color: "yellow.100",
            },
          },
          mb: "10",
          colorScheme: "dark",
          fontFamily: "Raleway",
          _placeholder: {
            color: "gray.100",
            fontSize: "sm",
          },
        },
      },
    },
  },
  Divider: {
    baseStyle: {
      borderColor: "gray.100",
      borderWidth: "1px"
    }
  },
  Heading: {
    baseStyle: {
      fontFamily: "Raleway",
      fontWeight: "extrabold",
    },
  },
  Button: {
    variants: {
      formButton: {
        backgroundColor: "gray.200",
        width: "100%",
        color: "brand.white",
        padding: "2rem 0",
        borderRadius: "0.2rem",
        fontSize: "180%",
        textTransform: "uppercase",
        _hover: {
          backgroundColor: "gray.300",
          border: "none",
          outline: "none",
        },
        _focus: { border: "none", backgroundColor: "none" },
        _active: {
          backgroundColor: "gray.400",
          border: "none",
          outline: "none",
        },
        _focus: {
          backgroundColor: "secondary.900",
          outline: "none",
          border: "none",
        },
      },
      trainingButton: {
        backgroundColor: "gray.200",
        color: "brand.white",
        padding: "1.2rem 2rem",
        borderRadius: "2rem",
        fontSize: "100%",
        fontWeight: "800",
        textTransform: "uppercase",

        _hover: {
          backgroundColor: "#121317",
          outline: "none",
        },
        _active: {
          backgroundColor: "gray.400",
          border: "none",
          outline: "none",
        },
        _focus: {
          backgroundColor: "secondary.900",
          outline: "none",
          border: "none",
        },
      },
      trainingButton2: {
        backgroundColor: "gray.200",
        color: "brand.white",
        padding: "1.2rem 2rem",
        borderRadius: "2rem",
        fontSize: "100%",
        fontWeight: "800",
        textTransform: "uppercase",
        transition: "all 0.1s",
        border: "solid 2px #faad12",
        _hover: {
          color: "yellow.100",
          border: "solid 1px #faae12",
          backgroundColor: "#25272e",
          outline: "none",
        },
        _focus: { border: "none", backgroundColor: "none" },
        _active: {
          backgroundColor: "#15151a",
          border: "none",
          border: "solid 1px #faae12",
          outline: "none",
        },
        _focus: {
          backgroundColor: "secondary.900",
          outline: "none",
          border: "solid 1px #faae12",
        },
      },
    },
    baseStyle: {
      _hover: {
        backgroundColor: "#15171c",
        border: "none",
        outline: "0",
      },
      _active: {
        backgroundColor: "gray.400",
        border: "none",
        outline: "0",
      },
      _focus: {
        backgroundColor: "secondary.900",
        outline: "none",
        border: "none",
      },
    },
  },
  Text: {
    variants: {
      gradient: {
        backgroundImage: "linear-gradient(112deg, #fff331 0%, #ff7531 100% )",
        backgroundClip: "text",
        fontWeight: "800",
      },
    },
    baseStyle: {
      fontFamily: "Raleway",
    },
  },
  Select: {
    variants: {
      flushed: {
        "> option, > optgroup": {
          color: "white",
          backgroundColor: "brand.black",
          padding: "0.3rem 0",
          margin: "1rem",
        },
        field: {
          _focus: {
            colorScheme: "dark",
            borderBottom: "1px solid #faae12",
            outline: "none",
            boxShadow: "none",
            _placeholder: {
              color: "yellow.100",
            },
          },
          "> option, > optgroup": {
            color: "white",
            backgroundColor: "brand.black",
            padding: "0.3rem 0",
            margin: "1rem",
            fontSize: "0.8rem",
          },
        },
      },
    },
  },
};

const theme = extendTheme({
  colors,
  components,
  styles,
  fontSizes,
  fontWeights,
});
export default theme;
