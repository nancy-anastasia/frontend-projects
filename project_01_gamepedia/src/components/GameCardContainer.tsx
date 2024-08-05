import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

// Defining the interface for the component's props
interface Props {
  children: ReactNode; // The children prop can be any valid React content (e.g., JSX, strings, elements)
}

// Component for wrapping game card elements and providing consistent styling in the application
const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode(); // Color mode through ChakraProvider

  const boxShadowMode =
    colorMode === "dark"
      ? "0 10px 20px rgba(0, 0, 0, 0.9), 0 6px 6px rgba(0, 0, 0, 0.7)"
      : "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)";

  const backgroundColor = colorMode === "dark" ? "#333333" : "white";

  return (
    // Using Chakra UI's Box component as a stylized container
    <Box
      borderRadius={10}
      overflow="hidden"
      boxShadow={boxShadowMode}
      bg={backgroundColor}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
