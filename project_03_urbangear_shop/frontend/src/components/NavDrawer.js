import "./NavDrawer.css";
import { Link } from "react-router-dom";

/**
 * NavDrawer Component serves as a sliding navigation drawer for a responsive design
 *
 * Props:
 *  - isVisible (boolean): Determines whether the navigation drawer is visible
 *  - navDrawerClick (function): Handler for click events within the drawer
 */
const NavDrawer = ({ isVisible, navDrawerClick }) => {
  /* Initial class for the drawer. Additional classes are added based on state */
  const navDrawerStyle = ["nav-drawer"];

  /* Add "show" class to the drawer class list if it should be visible */
  if (isVisible) {
    navDrawerStyle.push("show");
  }

  return (
    /* Dynamic class name joining to toggle visibility. */
    <div className={navDrawerStyle.join(" ")}>
      {/* Clicking anywhere in the list can trigger the navDrawerClick */}
      <ul className="nav-drawer__links" onClick={navDrawerClick}>
        {/* Close icon and shop logo at the top of the drawer */}
        <li>
          <Link>
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
