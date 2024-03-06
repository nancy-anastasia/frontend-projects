import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

// Interface defining the props expected by the GameHeading component
interface Props {
  gameQuery: GameQuery;
}

// Component that renders a dynamic heading based on selected platform and genre
const GameHeading = ({ gameQuery }: Props) => {
  // Constructing the heading text using platform and genre from the gameQuery
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    // Using Chakra UI's Heading component for styled text, setting it as an h1 for semantic HTML
    <Heading as="h1" fontSize="5xl" marginY={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
