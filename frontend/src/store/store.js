/* This project uses Redux Toolkit's configureStore instead of manually creating 
   the store with createStore. configureStore automatically sets up Redux DevTools, 
   applies middleware, and combines reducers, making it the recommended way 
   to configure the Redux store in modern applications.
 */
/* Up-to-date dependencies can be installed by running 
    "npm install @reduxjs/toolkit react-redux"
 */

// "configureStore" replaces "createStore" and simplifies store setup
import { configureStore } from "@reduxjs/toolkit";

// Importing thunk for handling asynchronous actions
import thunk from "redux-thunk";

/* 
  If you're only using redux-thunk without any additional custom middleware, 
  you can omit the import of 'redux-thunk' entirely, as 'configureStore' 
  automatically includes it by default. However, if you need to add other custom 
  middleware or modify the default middleware configuration, 
  then including it like this is necessary.
*/

// Assuming there are combined reducers in a "reducers" file
import rootReducer from "./reducers"; // If reducers are defined and combined

// Middleware setup to handle asynchronous actions (e.g., API calls)
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer, // Combines all reducers into one root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware), // Adds redux-thunk and any other custom middleware to the default ones
  devTools: process.env.NODE_ENV !== "production", // Enables Redux DevTools only in development mode environments
});

export default store;
