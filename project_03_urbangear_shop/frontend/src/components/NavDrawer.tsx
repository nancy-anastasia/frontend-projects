import "./NavDrawer.css";
import { Link } from "react-router-dom";

// Define the prop types for the NavDrawer component
interface NavDrawerProps {
  isVisible: boolean; // Determines whether the navigation drawer is visible
  onNavDrawerClick: () => void; // Callback function to handle clicks inside the drawer
}

/**
 * NavDrawer Component
 *
 * This component serves as a sliding navigation drawer for a responsive design.
 * It can toggle its visibility based on the isVisible prop and trigger actions when
 * items in the drawer are clicked.
 */
const NavDrawer = ({ isVisible, onNavDrawerClick }: NavDrawerProps) => {
  // Initial class for the drawer. Additional classes are added based on state.
  const navDrawerStyle = ["nav-drawer"];

  // Add "show" class to the drawer class list if it should be visible
  if (isVisible) {
    navDrawerStyle.push("show");
  }

  return (
    /* Dynamic class name joining to toggle visibility */
    <div className={navDrawerStyle.join(" ")}>
      {/* Clicking anywhere in the list can trigger the navDrawerClick */}
      <ul className="nav-drawer__links" onClick={onNavDrawerClick}>
        {/* Close icon and shop logo at the top of the drawer */}
        <li>
          <Link to="#">
            <i className="fa-solid fa-xmark close-mark"></i>
            <p className="nav-drawer__shop-logo">UrbanGear Shop</p>
          </Link>
        </li>
        <hr className="nav-drawer__divider" />
        {/* Navigation item to shopping cart */}
        <li className="nav-drawer__item">
          <Link to="/cart">Shopping Cart</Link>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <hr className="nav-drawer__divider" />
        {/* Navigation item to home page */}
        <li className="nav-drawer__item">
          <Link to="/">Home</Link>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <hr className="nav-drawer__divider" />
      </ul>
    </div>
  );
};

export default NavDrawer;
