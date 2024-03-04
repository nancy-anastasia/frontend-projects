import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number; // Total count of items in the response
  results: T[]; // Array of items of type T
}

/**
 * Custom hook for fetching data from an API endpoint.
 *
 * @param {string} endpoint - The API endpoint from which to fetch data
 * @param {AxiosRequestConfig} [requestConfig] - Optional Axios request configuration to customize the request
 * @param {any[]} [deps] - Optional array of dependencies that, when changed, will trigger the useEffect hook
 *
 * @returns An object containing the fetched data array, an error message (if any), and a loading state
 */
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]); // State to store the fetched data
  const [error, setError] = useState(""); // State to store any error message
  const [isLoading, setIsLoading] = useState(false); // State to indicate loading status

  useEffect(
    () => {
      const controller = new AbortController(); // Controller to abort the fetch request

      setIsLoading(true); // Set loading to true before starting the fetch operation

      // Performing the API request using the provided endpoint and request configuration
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal, // Pass the abort signal to the request
          ...requestConfig, // Spread the optional requestConfig into the request options
        })
        .then((res) => {
          setData(res.data.results); // Update the data state with the results
          setIsLoading(false); // Set loading to false after the data is fetched
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Ignore errors from cancelled requests
          setError(err.message); // Set the error state to the error message
          setIsLoading(false); // Set loading to false if an error occurs
        });

      return () => controller.abort(); // Cleanup function to abort the request when the component unmounts or dependencies change
    },
    deps ? [...deps] : [] // Dependence array for the useEffect hook
  );
  return { data, error, isLoading }; // Return the data, error, and loading states
};

export default useData;
