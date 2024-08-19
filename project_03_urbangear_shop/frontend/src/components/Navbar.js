import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Navbar Component serves as the primary navigation bar of the application. It integrates with Redux to fetch cart items and display their total count dynamically.
 *
 * Props:
 *  - hamburgerMenuClick (function): Function to handle the click event on the hamburger menu
 * to toggle a mobile menu.
 */
const Navbar = ({ hamburgerMenuClick }) => {
  // Accessing the cart state from the Redux store
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  /**
   * getCartItemsCount
   * Calculates the total quantity of items in the cart.
   * @returns {number} Total quantity of all cart items.
   */
  const getCartItemsCount = () => {
    return cartItems.reduce((totalQuantity, item) => {
      return totalQuantity + Number(item.productQuantity);
    }, 0);
  };

  return (
    <nav className="navbar">
      {/* Hamburger menu, visible on mobile devices, which triggers a side menu
      or dropdown on click */}
      <div className="hamburger-menu" onClick={hamburgerMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Logo and branding area; clicking the logo navigates the user back to
      the homepage */}
      <div className="navbar__logo">
        <Link to="/">
          <h2>UrbanGear Shop</h2>
          <p>React, React Router, Redux and Node.js</p>
        </Link>
      </div>
      {/* Navigation links including a home button and cart link with dynamic
      item count indicator */}
      <ul className="navbar__links">
        <li>
          <Link to="/">
            <i className="fa-solid fa-house home-icon"></i>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            {/*  Display of the dynamic cart item count next to the cart icon */}
            <span className="cart__count">{getCartItemsCount()}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
