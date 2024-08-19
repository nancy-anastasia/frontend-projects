import "./CartItem.css";
import { Link } from "react-router-dom";

/**
 * CartItem Component displays a single item in the shopping cart, allowing users to view the item,
 * navigate to its detail page, adjust quantity, and remove the item from the cart.
 *
 * Props:
 *  - cartItemId (string): Unique identifier for the cart item
 *  - cartItemName (string): Name of the product
 *  - cartItemImage (string): URL of the product image
 *  - cartItemPrice (number): Price of a single unit of the product
 *  - cartItemCountInStock (number): Available stock for the product
 *  - cartItemProductQuantity (number): Quantity of the product selected by the user in the cart
 *  - onQuantityChange (function): Handler to update the quantity in the cart
 *  - onRemoveItem (function): Handler to remove the item from the cart
 */
const CartItem = ({
  cartItemId,
  cartItemName,
  cartItemImage,
  cartItemPrice,
  cartItemCountInStock,
  cartItemProductQuantity,
  onQuantityChange,
  onRemoveItem,
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
      <select
        className="cartitem__select"
        value={cartItemProductQuantity}
        onChange={(event) => onQuantityChange(cartItemId, event.target.value)}
      >
        {Array.from({ length: cartItemCountInStock }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <button
        className="cartitem__deleteBtn"
        onClick={() => onRemoveItem(cartItemId)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
