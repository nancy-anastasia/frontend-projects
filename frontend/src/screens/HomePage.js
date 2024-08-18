import "./HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Importing reusable components and action creators
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { getProductsData as productsList } from "../store/actions/productActions";

/**
 * HomePage Component is the landing page of the application and showcases the latest products.
 * It utilizes Redux for state management to handle fetching, loading,
 * and error handling of product data.
 */
const HomePage = () => {
  const dispatch = useDispatch();

  // Accessing the product-related state from the Redux store
  const getProducts = useSelector((state) => state.getProductsData);
  const { products, loading, error } = getProducts;

  // Fetch products when component mounts using useEffect hook
  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]); // Dependency array includes dispatch to ensure stability in useCallback

  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>
      <div className="homepage__products">
        {loading ? (
          // Display loader animation while product data is being fetched.
          <Loader />
        ) : error ? (
          // Display error message if there is an error fetching products
          <p>{error}</p>
        ) : (
          // Render a list of ProductCards if data is successfully fetched
          products.map((product) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              imageUrl={product.imageUrl}
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
