import "./CartView.css";
import CartItem from "../components/CartItem";

const CartView = () => {
  return (
    <div className="cartview">
      <div className="cartview__left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cartview__right">
        <div className="cartview__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
