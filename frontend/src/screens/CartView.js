import "./CartView.css";
import CartItem from "../components/CartItem";

const CartView = () => {
  return (
    <div className="cartview">
      <h2>Shopping Cart</h2>
      <div className="cartview__container">
        <div className="cartview__left">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
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
