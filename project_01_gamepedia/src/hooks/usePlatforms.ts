import useData from "./useData";

// Defining the Platform interface for type-checking platform-related data
interface Platform {
  id: number; // Unique identifier for the platform
  name: string; // Name of the gaming platform
  slug: string; // URL-friendly version of the platform name
}

/**
 * Custom hook for fetching a list of parent gaming platforms.
 *
 * This hook leverages the useData custom hook to send a GET request to the "/platforms/lists/parents" endpoint
 * of the API, which returns a list of parent platforms. Parent platforms are major platform categories
 * under which individual models or versions are grouped.
 *
 * Returns the data (array of Platform objects), loading state, and error information from the useData hook.
 */
const usePlatforms = () => {
  return useData<Platform>("/platforms/lists/parents"); // API endpoint for fetching platform titles
};

export default usePlatforms;
