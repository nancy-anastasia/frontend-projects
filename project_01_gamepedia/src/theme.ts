import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Configuration object for Chakra UI theme settings
const config: ThemeConfig = {
  // Setting the initial color mode to "dark" for the entire application
  initialColorMode: "dark",
};

// Extending the default Chakra UI theme in order to customize it
const theme = extendTheme({
  config,
  colors: {
    // Customizing the 'gray' color palette with specific shades
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#333333",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;
