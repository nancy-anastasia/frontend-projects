/* Up-to-date dependencies can be installed by running 
    "npm install @reduxjs/toolkit react-redux"
*/

/* Configuration for the Redux store using Redux Toolkit, which enhances setup simplicity 
  and reliability by automatically configuring middleware and enabling Redux DevTools in development  environments.
 */
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Importing the `cartReducer` for the cart state management
import { cartReducer } from "./reducers/cartReducers";
// Importing the `getProductsReducer` for handling the state of product listings
import { getProductsReducer } from "./reducers/productReducers";
// Importing the `productDetailsReducer` for managing the loading, success, and failure states of fetching detailed information for a specific product
import { getProductDetailsReducer } from "./reducers/productReducers";

// Combines all the above reducers into a single root reducer
const reducer = combineReducers({
  cart: cartReducer,
  getProductsData: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const cartDataFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartDataFromLocalStorage,
  },
};

// Configure and export the Redux store. Default middleware from Redux Toolkit includes thunk.
const store = configureStore({
  reducer, // Apply the combined reducers to the store
  preloadedState: INITIAL_STATE,
});

export default store;
