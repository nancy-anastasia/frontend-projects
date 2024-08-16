import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({
  cartItemId,
  cartItemName,
  cartItemImage,
  cartItemPrice,
  cartItemCountInStock,
  cartItemProductQuantity,
}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={cartItemImage} alt={cartItemName} />
      </div>
      <Link to={`/product/${cartItemId}`} className="cartitem__name">
        <p>{cartItemName}</p>
      </Link>
      <p className="cartitem__price">${cartItemPrice}</p>
      <select className="cartitem__select" value={cartItemProductQuantity}>
        {Array.from({ length: cartItemCountInStock }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
