import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/store";

// Importing selectors to extract cart data from the Redux store
import { selectCartItemCount } from "../store/selectors/cartSelectors";

// Define the prop types for the Navbar component
interface NavbarProps {
  onHamburgerMenuClick: () => void; // Callback function to handle hamburger menu clicks
}

/**
 * Navbar Component
 *
 * This component serves as the primary navigation bar of the application. It integrates with Redux
 * to fetch cart items and display their total count dynamically.
 */
const Navbar = ({ onHamburgerMenuClick }: NavbarProps) => {
  const cartItemCount = useAppSelector(selectCartItemCount);

  return (
    <nav className="navbar">
      {/* Hamburger menu, visible on mobile devices, triggers a side menu
      or dropdown on click */}
      <div className="hamburger-menu" onClick={onHamburgerMenuClick}>
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
            <span className="cart__count">{cartItemCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
