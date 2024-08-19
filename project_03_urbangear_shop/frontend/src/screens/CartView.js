import "./CartView.css";

// Importing necessary React hooks and Redux functions for state management
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Importing CartItem component to display each item in the shopping cart
import CartItem from "../components/CartItem";

// Importing Redux actions to modify cart items and quantities
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../store/actions/cartActions";

/**
 * CartView Component serves as the main view for the user's shopping cart.
 * It allows users to view items they've added to the cart,
 */
const CartView = () => {
  const dispatch = useDispatch(); // Hook to dispatch action creators

  const cart = useSelector((state) => state.cart); // Accessing cart state from Redux store
  const { cartItems } = cart; // Destructuring to get items directly from the cart state

  // Handler to update quantity of an item in the cart
  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCartItemQuantity(productId, quantity));
  };

  // Handler to remove an item from the cart
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    // Filter cart items to remove the specified item by productId
    cartItems.map((item) => item.productId !== productId);
  };

  // Computes total quantity of items in the cart
  const getCartCount = () => {
    return cartItems.reduce((totalQuantity, item) => {
      return totalQuantity + Number(item.productQuantity);
    }, 0);
  };

  // Computes total price of all items in the cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + Number(item.price) * Number(item.productQuantity);
    }, 0);
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
            cartItems.map((item) => (
              <CartItem
                cartItemId={item.productId}
                cartItemName={item.name}
                cartItemImage={item.imageUrl}
                cartItemPrice={item.price}
                cartItemCountInStock={item.countInStock}
                cartItemProductQuantity={item.productQuantity}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveFromCart}
              />
            ))
          )}
        </div>
        <div className="cartview__right">
          {/* Display total count and total price of the cart. */}
          <div className="cartview__info">
            <p>{getCartCount()} items</p>
            <p>Total: ${getCartTotal().toFixed(2)}</p>
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
