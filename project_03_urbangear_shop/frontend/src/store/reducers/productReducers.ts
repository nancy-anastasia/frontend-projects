import * as actionTypes from "../constants/productConstants";
import {
  ProductsState,
  ProductDetailsState,
} from "../../interfaces/interfaces";
import {
  GetProductsRequestAction,
  GetProductsSuccessAction,
  GetProductsFailAction,
  GetProductDetailsRequestAction,
  GetProductDetailsSuccessAction,
  GetProductDetailsFailAction,
  GetProductDetailsResetAction,
} from "../actions/productActions";

// Combine the action types using union types
type ProductsActionTypes =
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsFailAction;

type ProductDetailsActionTypes =
  | GetProductDetailsRequestAction
  | GetProductDetailsSuccessAction
  | GetProductDetailsFailAction
  | GetProductDetailsResetAction;

/**
 * Reducer to handle state related to fetching products
 * @param {ProductsState} state - The current state of the products
 * @param {ProductsActionTypes} action - Action object to reduce
 * @returns {ProductsState} The new state after applying the action
 */
export const getProductsReducer = (
  state: ProductsState = { products: [], loading: false },
  action: ProductsActionTypes
): ProductsState => {
  switch (action.type) {
    // Sending request for getting products data
    case actionTypes.GET_PRODUCTS_REQUEST:
      // Set loading to true while maintaining other parts of the state
      return {
        ...state,
        loading: true,
      };
    // Products data received
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    // Getting products data failed
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default: {
      return state;
    }
  }
};

/**
 * Reducer to handle state related to a single product's details
 * @param {ProductDetailsState} state - The current state of the product details
 * @param {ProductDetailsActionTypes} action - Action object to reduce
 * @returns {ProductDetailsState} The new state after applying the action
 */
export const getProductDetailsReducer = (
  state: ProductDetailsState = { product: null, loading: false },
  action: ProductDetailsActionTypes
): ProductDetailsState => {
  switch (action.type) {
    // Sending request for getting product details
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // Product details successfully received
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    // Getting product details failed
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
        product: null,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: null,
        loading: false,
      };
    default:
      return state;
  }
};
