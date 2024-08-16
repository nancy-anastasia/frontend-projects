import "./CartView.css";

// Importing necessary React hooks and Redux functions
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Importing components
import CartItem from "../components/CartItem";

// Importing actions
import { addToCart, removeFromCart } from "../store/actions/cartActions";

const CartView = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleQuantityChange = (productId, productQuantity) => {
    dispatch(addToCart(productId, productQuantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    cartItems.map((item) => item.productId !== productId);
  };

  return (
    <div className="cartview">
      <h2>Shopping Cart</h2>
      <div className="cartview__container">
        <div className="cartview__left">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your shopping cart is currently empty. </p>
              <p>Browse our collection and find something you love!</p>
              <Link to="/" className="store-link">
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
          <div className="cartview__info">
            <p>(0) items</p>
            <p>Total: $499.99</p>
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
