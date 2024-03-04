import useData from "./useData";

// Defining the Genre interface for type-checking genre-related data
export interface Genre {
  id: number; // Unique identifier for the genre
  name: string; // Name of the genre
  image_background: string; // URL of the background image associated with the genre
}

/**
 * Custom hook to fetch a list of game genres from the API.
 *
 * This hook uses the useData custom hook to make a GET request to the "/genres" endpoint.
 * It returns the data, loading state, and error information provided by useData.
 *
 * Returns the data (array of Genre objects), loading state, and error information from the useData hook.
 */
const useGenres = () => useData<Genre>("/genres"); // API endpoint for fetching genres

export default useGenres;
