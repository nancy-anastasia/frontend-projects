import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"; // Importing the Game interface from the useGames hook
import PlatformIconList from "./PlatformIconList"; // Component to display icons for each platform
import CriticScore from "./CriticScore"; // Component to display the critic score with conditional coloring
import getCroppedImageUrl from "../services/image-url"; // Function to modify the image URL for cropping

// Props interface for the GameCard component, which expects a game object of type Game
interface Props {
  game: Game;
}

// Component to display information about a game in a card format
const GameCard = ({ game }: Props) => {
  return (
    // Card component from Chakra UI as the container
    <Card boxShadow="none" bg="transparent">
      {/* Displaying the game's image, modified for cropping via getCroppedImageUrl */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      {/* Card body containing the game details */}
      <CardBody>
        {/* Horizontal stack for layout, spacing between platform icons and critic score */}
        <HStack justifyContent="space-between" marginBottom={2}>
          {/* PlatformIconList component displays icons for each game platform */}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)} // Mapping parent_platforms to platform objects for the PlatformIconList
          />
          {/* CriticScore component displays the game's metacritic score with conditional coloring */}
          <CriticScore score={game.metacritic} />
        </HStack>
        {/* Game title displayed as a heading */}
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
