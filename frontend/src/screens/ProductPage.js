/* In React Router v6, the useParams hook should be used to access route parameters directly within the component. */
import "./ProductPage.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// Import components
import Loader from "../components/Loader";

// Import actions
import { getProductDetails } from "../store/actions/productActions";
import { addToCart } from "../store/actions/cartActions";

const ProductPage = ({ history }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { id } = useParams(); // Accessing the ID directly from URL parameters
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Getting the navigate function

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (!product || id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [id, dispatch, product]);

  const handleAddToCart = () => {
    dispatch(addToCart(product._id, productQuantity));
    navigate("/cart");
  };

  return (
    <div className="product-page">
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
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
                  {product.countInStock <= 0 ? (
                    ""
                  ) : (
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
      )}
    </div>
  );
};

export default ProductPage;
