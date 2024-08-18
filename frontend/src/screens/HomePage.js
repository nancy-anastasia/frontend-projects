import "./HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import components and actions
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { getProductsData as productsList } from "../store/actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProductsData);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);

  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>
      <div className="homepage__products">
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
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
