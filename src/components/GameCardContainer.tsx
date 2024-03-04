import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

// Defining the interface for the component's props
interface Props {
  children: ReactNode; // The children prop can be any valid React content (e.g., JSX, strings, elements)
}

// Component for wrapping game card elements and providing consistent styling in the application
const GameCardContainer = ({ children }: Props) => {
  return (
    // Using Chakra UI's Box component as a stylized container
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
