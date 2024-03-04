import axios from "axios";

// Creating a custom Axios instance for making HTTP requests to the RAWG Database API
export default axios.create({
  baseURL: "https://api.rawg.io/api", // Base URL for all requests to the RAWG API
  params: {
    key: "46d10068d12a4cceaa05f9cab8639460", // API key for authenticating requests
  },
});
