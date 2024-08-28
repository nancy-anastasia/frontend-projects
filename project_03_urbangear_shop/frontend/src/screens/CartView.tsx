import "./CartView.css";

// Importing necessary React hooks and Redux functions for state management
import { useAppDispatch, useAppSelector } from "../store/store";
import { Link } from "react-router-dom";

// Importing selectors to extract cart data from the Redux store
import {
  selectCartItems,
  selectCartItemCount,
  selectCartTotal,
} from "../store/selectors/cartSelectors";

// Importing CartItem component to display each item in the shopping cart
import CartItem from "../components/CartItem";

// Importing Redux actions to modify cart items and quantities
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../store/actions/cartActions";

// Import cart item interface
import { CartItemBase } from "../interfaces/interfaces";

/**
 * CartView Component
 *
 * This component serves as the main view for the user's shopping cart, displaying the cart items, total count, and total price.
 */

// CartView Component serves as the main view for the user's shopping cart
const CartView = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItems);
  const cartItemCount = useAppSelector(selectCartItemCount);
  const cartTotal = useAppSelector(selectCartTotal);

  // Handler to update quantity of an item in the cart
  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateCartItemQuantity(productId, quantity));
  };

  // Handler to remove an item from the cart
  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
    // Filter cart items to remove the specified item by productId
    cartItems.filter((item) => item.cartItemId !== productId);
  };

  return (
    <div className="cartview">
      <h2>Shopping Cart</h2>
      <div className="cartview__container">
        <div className="cartview__left">
          {/* Conditionally render empty cart message or list of cart items. */}
          {cartItems.length === 0 ? (
            <div className="cartview__empty-cart">
              <p>Your shopping cart is currently empty. </p>
              <p>Browse our collection and find something you love!</p>
              <Link to="/" className="cartview__store-link">
                Return to Store
              </Link>
            </div>
          ) : (
            cartItems.map((item: CartItemBase) => (
              <CartItem
                key={item.cartItemId}
                cartItemId={item.cartItemId}
                cartItemName={item.cartItemName}
                cartItemImage={item.cartItemImage}
                cartItemPrice={item.cartItemPrice}
                cartItemCountInStock={item.cartItemCountInStock}
                cartItemProductQuantity={item.cartItemProductQuantity}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveFromCart}
              />
            ))
          )}
        </div>
        <div className="cartview__right">
          {/* Display total count and total price of the cart. */}
          <div className="cartview__info">
            <p>{cartItemCount} items</p>
            <p>Total: ${cartTotal.toFixed(2)}</p>
          </div>
          <div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
