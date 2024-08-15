import "./HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import components and actions
import Product from "../components/Product";
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
          <h2>{error}</h2>
        ) : (
          products.map((product) => <Product />)
        )}
      </div>
    </div>
  );
};

export default HomePage;
