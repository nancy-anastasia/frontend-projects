import "./HomePage.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";

// Importing reusable components and action creators
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { getProductsData as productsList } from "../store/actions/productActions";
import { Product } from "../interfaces/interfaces";
import {
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from "../store/selectors/productSelectors";

/**
 * HomePage Component
 *
 * This component serves as the landing page of the application, showcasing the latest products.
 */
const HomePage = () => {
  const dispatch = useAppDispatch();

  // Use selectors to get the products, loading, and error state
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);

  // Fetch products when component mounts using the useEffect hook
  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);

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
        ) : Array.isArray(products) && products.length !== 0 ? (
          // Render a list of ProductCards if data is successfully fetched
          products.map((product: Product) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              imageUrl={product.imageUrl}
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
