// Import necessary constants and axios for AJAX requests
import * as actionTypes from "../constants/productConstants";
import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../interfaces/interfaces";

// Define action interfaces for products data
export interface GetProductsRequestAction {
  type: typeof actionTypes.GET_PRODUCTS_REQUEST;
}

export interface GetProductsSuccessAction {
  type: typeof actionTypes.GET_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface GetProductsFailAction {
  type: typeof actionTypes.GET_PRODUCTS_FAIL;
  payload: string;
}

// Define action interfaces for product details
export interface GetProductDetailsRequestAction {
  type: typeof actionTypes.GET_PRODUCT_DETAILS_REQUEST;
}

export interface GetProductDetailsSuccessAction {
  type: typeof actionTypes.GET_PRODUCT_DETAILS_SUCCESS;
  payload: Product;
}

export interface GetProductDetailsFailAction {
  type: typeof actionTypes.GET_PRODUCT_DETAILS_FAIL;
  payload: string;
}

export interface GetProductDetailsResetAction {
  type: typeof actionTypes.GET_PRODUCT_DETAILS_RESET;
}

// Union type for all possible product actions
export type ProductActions =
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsFailAction
  | GetProductDetailsRequestAction
  | GetProductDetailsSuccessAction
  | GetProductDetailsFailAction
  | GetProductDetailsResetAction;

// Define types for the Thunk actions

export type GetProductsThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  ProductActions
>;
export type GetProductDetailsThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  ProductActions
>;
export type ResetProductDetailsThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  ProductActions
>;

/**
 * Async action creator to fetch a list of all products.
 * Dispatches a request action, makes an API call, and then dispatches either a success or fail action based on the response.
 */
export const getProductsData =
  (): GetProductsThunkAction => async (dispatch: Dispatch) => {
    try {
      // Notifies the application that a request to fetch products has started
      dispatch({
        type: actionTypes.GET_PRODUCTS_REQUEST,
      });

      // API call to fetch product data
      const { data } = await axios.get<Product[]>("api/products");

      // Dispatches success action with fetched data if API call is successful
      dispatch({
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
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
export const getProductDetails =
  (id: string): GetProductDetailsThunkAction =>
  async (dispatch: Dispatch) => {
    try {
      // Notifies the application that a request to fetch product details has started
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

      // API call to fetch specific product details by product ID
      const { data } = await axios.get<Product>(`/api/products/${id}`);

      // Dispatches success action with fetched data if API call is successful
      dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
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
export const removeProductDetails =
  (): ResetProductDetailsThunkAction => (dispatch: Dispatch) => {
    // Dispatches reset action to clear product details from state
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_RESET,
    });
  };
