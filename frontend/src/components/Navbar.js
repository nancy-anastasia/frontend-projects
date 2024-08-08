import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="navbar__logo">
        <h2>UrbanGear Shop</h2>
        <p>React, React Router, Redux and Node.js</p>
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
            <span className="cart__count">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
