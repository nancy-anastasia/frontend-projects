// Importing action type constants
import * as actionTypes from "../constants/cartConstants";

/**
 * The cartReducer handles the state of the shopping cart, specifically the cartItems array.
 * Initial state is an empty array for cartItems.
 */
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    // Handle adding an item to the cart
    case actionTypes.ADD_TO_CART:
      const newItem = action.payload; // Item being added to the cart

      // Check if the item already exists in the cart based on product ID
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.productId === newItem.productId
      );

      if (existingItem) {
        // If the item exists, increase its quantity
        return {
          ...state, // Spread the current state to maintain immutability
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.productId === newItem.productId
              ? {
                  ...cartItem,
                  productQuantity:
                    cartItem.productQuantity + newItem.productQuantity,
                }
              : cartItem
          ),
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...newItem, productQuantity: newItem.productQuantity },
          ], // Add new item to cartItems array
        };
      }

    // Handle updating item quantity in the cart
    case actionTypes.UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.productId === action.payload.productId
            ? { ...cartItem, productQuantity: action.payload.productQuantity }
            : cartItem
        ),
      };

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
