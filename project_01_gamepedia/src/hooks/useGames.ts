import { GameQuery } from "../App";
import useData from "./useData";

// Defining the Platform interface for type-checking platform-related data
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Defining the Game interface for type-checking game-related data
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // Array of parent platforms, each containing a Platform object
  metacritic: number; // Metacritic score of the game
}

/**
 * Custom hook to fetch game data based on provided query parameters.
 *
 * @param {GameQuery} gameQuery - Object containing query parameters for fetching games
 * Returns The data, loading state, and error information from the useData hook
 */
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games", // API endpoint for fetching games
    {
      // Parameters for the API request, derived from the gameQuery object
      params: {
        genres: gameQuery.genre?.id, // Genre ID
        platforms: gameQuery.platform?.id, // Platform ID
        ordering: gameQuery.sortOrder, // Ordering criteria
        search: gameQuery.searchText, // Search query text
      },
    },
    [gameQuery] // Dependency array for re-fetching data when gameQuery changes
  );

export default useGames;
