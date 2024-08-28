/* In React Router v6, the useParams hook is used to access route parameters directly within the component. */
import "./ProductPage.css";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useParams, useNavigate } from "react-router-dom";

// Import Loader component for display during data fetch
import Loader from "../components/Loader";

// Import Redux actions for fetching product details and adding items to the cart
import { getProductDetails } from "../store/actions/productActions";
import { addToCart } from "../store/actions/cartActions";
import {
  selectProductDetails,
  selectProductDetailsLoading,
  selectProductDetailsError,
} from "../store/selectors/productSelectors";

/**
 * ProductPage Component
 *
 * This component displays detailed information about a specific product, allowing users to view product details and add the item to their shopping cart.
 */
const ProductPage = () => {
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const { id } = useParams<{ id: string }>(); // Accessing the ID directly from URL parameters
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Use selectors to get the product details, loading state, and error
  const product = useAppSelector(selectProductDetails);
  const loading = useAppSelector(selectProductDetailsLoading);
  const error = useAppSelector(selectProductDetailsError);

  // Fetching product details based on product ID
  useEffect(() => {
    if (id && (!product || id !== product._id)) {
      dispatch(getProductDetails(id));
    }
  }, [id, dispatch, product]);

  // Handles adding the product to the cart and navigating to the cart page
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product._id, productQuantity));
      navigate("/cart");
    }
  };

  return (
    <div className="product-page">
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : product ? (
        <>
          <div className="product-page__upper-part">
            <div className="product-page__product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-page__product-info">
              <p className="product-page__product-name">{product.name}</p>
              <p className="product-page__product-price">${product.price}</p>
              <p className="product-page__product-description">
                {product.description}
              </p>
              <div className="product-page__purchase-section">
                <p className="product-page__product-status">
                  <i
                    className={
                      product.countInStock > 0
                        ? "fa-solid fa-circle-check product-page__product-in-stock"
                        : "fa-solid fa-circle-xmark product-page__product-out-of-stock"
                    }
                  ></i>
                  <span>
                    {product.countInStock > 0
                      ? `In Stock: ${product.countInStock}`
                      : "Out of Stock"}
                  </span>
                </p>
                <p className="product-page__product-purchase">
                  {product.countInStock > 0 ? (
                    <select
                      value={productQuantity}
                      onChange={(event) =>
                        setProductQuantity(Number(event.target.value))
                      }
                    >
                      {Array.from(
                        { length: product.countInStock },
                        (_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        )
                      )}
                    </select>
                  ) : (
                    ""
                  )}
                  {product.countInStock > 0 ? (
                    <button type="button" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                  ) : (
                    <p className="product-page__coming-soon">
                      <i className="fa-solid fa-truck"></i>
                      <p>Available for Purchase Shortly!</p>
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductPage;
