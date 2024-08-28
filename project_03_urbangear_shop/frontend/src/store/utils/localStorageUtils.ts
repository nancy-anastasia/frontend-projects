import { CartItemBase } from "../../interfaces/interfaces";
export const loadCartFromLocalStorage = (): CartItemBase[] => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (error) {
    console.error("Could not load cart from local storage", error);
    return [];
  }
};

export const saveCartToLocalStorage = (cartItems: CartItemBase[]): void => {
  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Could not save cart to local storage", error);
  }
};
