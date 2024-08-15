import "./NavDrawer.css";
import { Link } from "react-router-dom";

const NavDrawer = ({ isVisible, navDrawerClick }) => {
  const navDrawerStyle = ["nav-drawer"];

  if (isVisible) {
    navDrawerStyle.push("show");
  }

  return (
    <div className={navDrawerStyle.join(" ")}>
      <ul className="nav-drawer__links" onClick={navDrawerClick}>
        <li>
          <Link>
            <i className="fa-solid fa-xmark close-mark"></i>
            <p className="nav-drawer__shop-logo">UrbanGear Shop</p>
          </Link>
        </li>
        <hr className="nav-drawer__divider" />
        <li className="nav-drawer__item">
          <Link to="/cart">Shopping Cart</Link>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <hr className="nav-drawer__divider" />
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
