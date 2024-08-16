// Importing action type constants
import * as actionTypes from "../constants/cartConstants";

// The cartReducer handles the state of the shopping cart, specifically the cartItems array.
// Initial state is an empty array for cartItems.
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    // Handle adding an item to the cart
    case actionTypes.ADD_TO_CART:
      const item = action.payload; // Item being added to the cart

      // Check if the item already exists in the cart based on product ID
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );

      if (existingItem) {
        // If the item exists, replace it with the new item data
        return {
          ...state, // Spread the current state to maintain immutability
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === existingItem.product ? item : cartItem
          ),
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, item], // Add new item to cartItems array
        };
      }

    // Handle removing an item from the cart
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload // Remove an item based on product ID
        ),
      };

    // Return the current state if the action type doesn't match
    default:
      return state;
  }
};
