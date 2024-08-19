// Import necessary constants and axios for AJAX requests
import * as actionTypes from "../constants/productConstants";
import axios from "axios";

/**
 * Async action creator to fetch a list of all products.
 * Dispatches a request action, makes an API call, and then dispatches either a success or fail action based on the response.
 */
export const getProductsData = () => async (dispatch) => {
  try {
    // Notifies the application that a request to fetch products has started
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    // API call to fetch product data
    const { data } = await axios.get("/api/products");

    // Dispatches success action with fetched data if API call is successful
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // Dispatches fail action with error message if API call fails
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/**
 * Async action creator to fetch details for a single product by ID.
 * Dispatches a request action, makes an API call, and then dispatches either a success or fail action based on the response.
 */
export const getProductDetails = (id) => async (dispatch) => {
  try {
    // Notifies the application that a request to fetch product details has started
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    // API call to fetch specific product details by product ID
    const { data } = await axios.get(`/api/products/${id}`);

    // Dispatches success action with fetched data if API call is successful
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // Dispatches fail action with error message if API call fails
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/**
 * Action creator to reset the product details state
 * Useful for cleaning up state when leaving a product details page
 */
export const removeProductDetails = (id) => (dispatch) => {
  // Dispatches reset action to clear product details from state
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
