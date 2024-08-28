import * as actionTypes from "../constants/cartConstants";
import { CartItemBase } from "../../interfaces/interfaces";
import {
  InitializeCartAction,
  AddToCartAction,
  RemoveFromCartAction,
  UpdateCartItemQuantityAction,
} from "../actions/cartActions";

// Define the interface for the cart state
interface CartState {
  cartItems: CartItemBase[];
}

// Combine the action types using a union type
type CartActionTypes =
  | InitializeCartAction
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemQuantityAction;

// Initial state is an empty array for cartItems
const initialState: CartState = {
  cartItems: [],
};

/**
 * The cartReducer handles the state of the shopping cart, specifically the cartItems array.
 * Initial state is an empty array for cartItems
 */
export const cartReducer = (
  state: CartState = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    // Initialize the shopping cart
    case actionTypes.INITIALIZE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    // Handle adding an item to the cart
    case actionTypes.ADD_TO_CART:
      const newItem = action.payload; // Item being added to the cart

      // Check if the item already exists in the cart based on product ID
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.cartItemId === newItem.cartItemId
      );

      if (existingItem) {
        // If the item exists, increase its quantity
        return {
          ...state, // Spread the current state to maintain immutability
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.cartItemId === newItem.cartItemId
              ? {
                  ...cartItem,
                  cartItemProductQuantity:
                    cartItem.cartItemProductQuantity +
                    newItem.cartItemProductQuantity,
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
            {
              ...newItem,
              cartItemProductQuantity: newItem.cartItemProductQuantity,
            },
          ],
        };
      }

    // Handle updating item quantity in the cart
    case actionTypes.UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.cartItemId === action.payload.productId
            ? {
                ...cartItem,
                cartItemProductQuantity: action.payload.productQuantity,
              }
            : cartItem
        ),
      };

    // Handle removing an item from the cart
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.cartItemId !== action.payload // Remove an item based on product ID
        ),
      };

    // Return the current state if the action type doesn't match
    default:
      return state;
  }
};
