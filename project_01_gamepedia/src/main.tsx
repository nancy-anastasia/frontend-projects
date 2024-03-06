// Importing modules and components from React, ReactDOM, Chakra UI, and local files
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"; // Components from Chakra UI for theming and color mode
import App from "./App.tsx"; // Main application component
import theme from "./theme.ts"; // Custom theme settings for Chakra UI
import "./index.css"; // Global CSS styles

// Accessing the root DOM element where the React app will be mounted
const rootElement = document.getElementById("root") as HTMLElement | null;

// Checking if the root element exists to avoid null reference errors
if (rootElement) {
  // Creating a root container for the React application using ReactDOM
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  // Handling the case where the root element is not found more explicitly
  console.error("Failed to find the root element.");
}
