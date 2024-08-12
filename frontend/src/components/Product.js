import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://images.unsplash.com/photo-1598371611276-1bc503a270a4?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product image"
      ></img>
      <div className="product__info">
        <p className="product__name">Product 1</p>
        <p className="product__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          temporibus excepturi dolor modi qui libero?
        </p>
        <p className="product__price">$499.99</p>
        <Link to={`/product/${1111}`} className="product__button">
          More
        </Link>
      </div>
    </div>
  );
};

export default Product;
