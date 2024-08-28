import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux"; // Importing Provider from react-redux
import store from "./store/store.ts"; // Importing the Redux store

const rootElement = document.getElementById("root");

// Ensure that rootElement is not null
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        {/* Wrapping App with Provider to connect Redux */}
        <App />
      </Provider>
    </StrictMode>
  );
}

/* Provider is the component that makes the Redux store available to React components. 
  Placing it inside StrictMode ensures that all components wrapped with Provider will benefit from the checks and warnings that StrictMode provides. 
*/
