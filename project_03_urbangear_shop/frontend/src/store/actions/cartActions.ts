// Import necessary constants and axios for AJAX requests
import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { CartItemBase } from "../../interfaces/interfaces";
import { loadCartFromLocalStorage } from "../utils/localStorageUtils";

// Define action interfaces
export interface InitializeCartAction {
  type: typeof actionTypes.INITIALIZE_CART;
  payload: CartItemBase[];
}

export interface AddToCartAction {
  type: typeof actionTypes.ADD_TO_CART;
  payload: CartItemBase;
}

export interface RemoveFromCartAction {
  type: typeof actionTypes.REMOVE_FROM_CART;
  payload: string; // productId
}

export interface UpdateCartItemQuantityAction {
  type: typeof actionTypes.UPDATE_CART_ITEM_QUANTITY;
  payload: {
    productId: string;
    productQuantity: number;
  };
}

// Define types for the Thunk actions
export type InitializeCartThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  any
>;
export type AddToCartThunkAction = ThunkAction<void, RootState, unknown, any>;
export type RemoveFromCartThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  any
>;
export type UpdateCartItemQuantityThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  any
>;

/*
 * This function initializes the cart when an app is loaded
 */
export const initializeCart = (): InitializeCartThunkAction => {
  return (dispatch: Dispatch) => {
    const cartItems = loadCartFromLocalStorage();

    // Dispatch an action to initialize the cart
    dispatch({
      type: actionTypes.INITIALIZE_CART,
      payload: cartItems,
    });
  };
};

/*
 * This function leverages Redux Thunk to enable asynchronous dispatch
 * Redux Thunk allows us to perform async operations inside our actions
 */
export const addToCart =
  (id: string, productQuantity: number): AddToCartThunkAction =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      // Fetching product details from the server by product ID
      const { data } = await axios.get(`/api/products/${id}`);

      // Mapping the data to match the CartItemBase interface
      const cartItem: CartItemBase = {
        cartItemId: data._id,
        cartItemName: data.name,
        cartItemImage: data.imageUrl,
        cartItemPrice: data.price,
        cartItemCountInStock: data.countInStock,
        cartItemProductQuantity: productQuantity,
      };

      // Dispatch an action to add the fetched product to the cart
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: cartItem,
      });

      // Persist cart items to localStorage for recovery on reload
      localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

/*
 * This function handles the removal of items from the cart
 * It dispatches a REMOVE_FROM_CART action with the product ID to identify which item to remove
 */
export const removeFromCart =
  (id: string): RemoveFromCartThunkAction =>
  (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id, // ID of the product to be removed from the cart
    });

    // Update localStorage to sync with the current state of the cart
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };

/*
 * This function updates the quantity of an item in the cart
 * It takes the item ID and the new quantity as arguments
 */
export const updateCartItemQuantity =
  (
    productId: string,
    productQuantity: number
  ): UpdateCartItemQuantityThunkAction =>
  (dispatch: Dispatch, getState: () => RootState) => {
    // Dispatching the update action with the item ID and new quantity
    dispatch({
      type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
      payload: {
        productId,
        productQuantity: parseInt(productQuantity.toString(), 10), // Ensuring the quantity is an integer
      },
    });

    // Update localStorage to sync with the current state of the cart after quantity update
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };
