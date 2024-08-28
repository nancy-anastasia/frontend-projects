import "./ProductCard.css";
import { Link } from "react-router-dom";

// Define the prop types for the ProductCard component
interface ProductCardProps {
  productId: string; // Unique identifier for the product
  imageUrl: string; // URL of the product's image
  productName: string; // Name of the product
  productDescription: string; // Description of the product
  productPrice: number; // Price of the product
}

/**
 * ProductCard Component
 *
 * This component represents a single product card. It displays the product's image,
 * name, description, and price, and is fully clickable to navigate to the product's detail page.
 */
const ProductCard = ({
  productId,
  imageUrl,
  productName,
  productDescription,
  productPrice,
}: ProductCardProps) => {
  return (
    /* The entire card area is clickable, which enhances the user experience by making it intuitive and easy to interact with the product. */
    <div className="product__card">
      <Link to={`/product/${productId}`} className="product__link">
        <img src={imageUrl} alt={productName} className="product__image" />
        <div className="product__info">
          <p className="product__name">{productName}</p>
          <p className="product__description">
            {/* Display the product description truncated to 100 characters, or a default message if no description is provided. */}
            {productDescription
              ? productDescription.substring(0, 100) + "..."
              : "No description available."}
          </p>
          <p className="product__price">${productPrice}</p>
          {/* The button is a visual cue for users, indicating that the area is clickable, even though the entire card is already clickable. */}
          <div className="product__button">View Details</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
