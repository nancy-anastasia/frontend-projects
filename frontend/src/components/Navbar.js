import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ hamburgerMenuClick }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartItemsCount = () => {
    return cartItems.reduce((totalQuantity, item) => {
      return totalQuantity + Number(item.productQuantity);
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="hamburger-menu" onClick={hamburgerMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="navbar__logo">
        <Link to="/">
          <h2>UrbanGear Shop</h2>
          <p>React, React Router, Redux and Node.js</p>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">
            <i className="fa-solid fa-house home-icon"></i>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart__count">{getCartItemsCount()}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
