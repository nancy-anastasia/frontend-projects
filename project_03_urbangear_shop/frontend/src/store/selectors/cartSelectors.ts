import { RootState } from "../store";

// Selector to get the cart items array from the Redux state
export const selectCartItems = (state: RootState) => state.cart.cartItems;

/**
 * Selector to calculate the total quantity of items in the cart.
 * This sums up the product quantity of all items in the cart.
 */
export const selectCartItemCount = (state: RootState): number =>
  state.cart.cartItems.reduce(
    (count, item) => count + item.cartItemProductQuantity,
    0
  );

/**
 * Selector to calculate the total price of all items in the cart.
 * This multiplies the price of each item by its quantity and sums the result.
 */
export const selectCartTotal = (state: RootState): number =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.cartItemPrice * item.cartItemProductQuantity,
    0
  );
