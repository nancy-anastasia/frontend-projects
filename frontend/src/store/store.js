/* Up-to-date dependencies can be installed by running 
    "npm install @reduxjs/toolkit react-redux"
*/

/* Configuration for the Redux store using Redux Toolkit, which enhances setup simplicity 
  and reliability by automatically configuring middleware and enabling Redux DevTools in development  environments.
 */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducers"; // Importing the cartReducer for the cart state management

const reducer = combineReducers({
  cart: cartReducer, // Combines the cartReducer into the root reducer
});

// Configure and export the Redux store. Default middleware from Redux Toolkit includes thunk.
const store = configureStore({
  reducer, // Apply the combined reducers to the store
});

export default store;
