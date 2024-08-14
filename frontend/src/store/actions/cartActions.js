// Import necessary constants and axios for AJAX requests.
import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

/*
 * This function leverages Redux Thunk to enable asynchronous dispatch.
 * Redux Thunk allows us to perform async operations inside our actions.
 */
export const addToCart =
  (id, productQuantity) => async (dispatch, getState) => {
    try {
      // Fetching product details from the server by product ID
      const { data } = await axios.get(`/api/products/${id}`);

      // Dispatch an action to add the fetched product to the cart
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
          product: data._id,
          name: data.name,
          imageUrl: data.imageUrl,
          price: data.price,
          countInStock: data.countInStock,
          productQuantity,
        },
      });

      // Persist cart items to localStorage for recovery on reload
      localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
    } catch (error) {
      // Log an error if the API call fails
      console.error("Failed to add item to cart", error);
    }
  };

/*
 * This function handles the removal of items from the cart.
 * It dispatches a REMOVE_FROM_CART action with the product ID to identify which item to remove.
 */
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id, // ID of the product to be removed from the cart.
  });

  // Update localStorage to sync with the current state of the cart.
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
