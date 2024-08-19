import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux"; // Importing Provider from react-redux
import store from "./store/store"; // Importing the Redux store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrapping App with Provider to connect Redux */}
      <App />
    </Provider>
  </React.StrictMode>
);

/* Provider is the component that makes the Redux store available to your React components. 
  Placing it inside React.StrictMode ensures that all your components wrapped with Provider will benefit from the checks and warnings that React.StrictMode provides. 
*/

reportWebVitals();
