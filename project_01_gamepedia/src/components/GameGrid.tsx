import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

// Props interface for the GameGrid component
interface Props {
  gameQuery: GameQuery;
}

// Component to display a grid of game cards
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery); // Fetching game data using the custom hook
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Array to generate skeleton loaders

  // Displaying an error message if there is an error in fetching data
  if (error) return <Text>{error}</Text>;

  return (
    // SimpleGrid component from Chakra UI to display game cards in a responsive grid layout
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // Setting responsive column counts
      padding="10px" // Padding around the grid
      spacing={7} // Adding space between grid items
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
