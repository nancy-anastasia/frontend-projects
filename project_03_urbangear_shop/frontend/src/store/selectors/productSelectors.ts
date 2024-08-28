import { RootState } from "../store";
import { Product } from "../../interfaces/interfaces";

// Selector to get the list of products
export const selectProducts = (state: RootState): Product[] =>
  state.getProductsData.products;

// Selector to get the loading state
export const selectProductsLoading = (state: RootState): boolean =>
  state.getProductsData.loading;

// Selector to get any errors related to fetching products
export const selectProductsError = (state: RootState): string | null => {
  return state.getProductsData.error ?? null;
};
/* The ?? (nullish coalescing operator) is used to return the right-hand operand (null in this case) if the left-hand operand (state.getProductsData.error) is null or undefined. */

// Selector to get the product details
export const selectProductDetails = (state: RootState): Product | null =>
  state.getProductDetails.product;

// Selector to get the loading state
export const selectProductDetailsLoading = (state: RootState): boolean =>
  state.getProductDetails.loading;

// Selector to get any errors related to fetching product details
export const selectProductDetailsError = (state: RootState): string | null => {
  return state.getProductDetails.error ?? null;
};
