import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    /* The entire area of the card is clickable in this project. This approach is widely used in online stores to enhance the user experience by making it intuitive and straightforward for users to interact with products. */
    <div className="product__card">
      <Link to={`/product/${1111}`} className="product__link">
        <img
          src="https://images.unsplash.com/photo-1598371611276-1bc503a270a4?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product image"
          className="product__image"
        ></img>
        <div className="product__info">
          <p className="product__name">Product 1</p>
          <p className="product__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            temporibus excepturi dolor modi qui libero?
          </p>
          <p className="product__price">$499.99</p>
          {/* The button is meant to be purely decorative because the entire card is already clickable. It's a visual clue for users that this area can be clicked. */}
          <div className="product__button">View Details</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
