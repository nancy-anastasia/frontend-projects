import "./CartItem.css";
import { Link } from "react-router-dom";
import { CartItemBase } from "../interfaces/interfaces";

// Define the props interface for the CartItem component
interface CartItemProps extends CartItemBase {
  onQuantityChange: (id: string, quantity: number) => void; // Callback for changing the quantity of the cart item
  onRemoveItem: (id: string) => void; // Callback for removing the cart item
}

/**
 * CartItem Component
 *
 * This component displays a single item in the shopping cart. It allows users to:
 * - View the item's image, name, and price
 * - Navigate to the item's detail page
 * - Adjust the item's quantity in the cart
 * - Remove the item from the cart
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
}: CartItemProps) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={cartItemImage} alt={cartItemName} />
      </div>
      <Link to={`/product/${cartItemId}`} className="cartitem__name">
        <p className="cartitem__name">{cartItemName}</p>
      </Link>
      <p className="cartitem__price">${cartItemPrice}</p>
      <select
        className="cartitem__select"
        value={cartItemProductQuantity}
        onChange={(event) =>
          onQuantityChange(cartItemId, Number(event.target.value))
        }
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
