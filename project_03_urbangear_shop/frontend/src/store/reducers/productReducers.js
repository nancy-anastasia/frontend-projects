import * as actionTypes from "../constants/productConstants";

/**
 * Reducer to handle state related to fetching products
 * @param {Object} state - The current state of the products
 * @param {Object} action - Action object to reduce
 * @returns {Object} The new state after applying the action
 */
export const getProductsReducer = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      // Set loading to true while maintaining other parts of the state
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};

/**
 * Reducer to handle state related to a single product's details
 * @param {Object} state - The current state of the product details
 * @param {Object} action - Action object to reduce
 * @returns {Object} The new state after applying the action
 */
export const getProductDetailsReducer = (
  state = { product: {}, loading: false },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      // Set loading to true while maintaining other parts of the state
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
