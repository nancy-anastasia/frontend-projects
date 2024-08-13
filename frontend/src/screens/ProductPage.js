import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-page__upper-part">
        <div className="product-image">
          <img
            src="https://images.unsplash.com/photo-1598371611276-1bc503a270a4?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product name"
          />
        </div>
        <div className="product-info">
          <p className="product-name">Product 1</p>
          <p className="product-price">$499.99</p>
          <p className="product-description">
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Explicabo odit harum numquam temporibus nemo cupiditate.
          </p>
          <div className="product-purchase-section">
            <p className="product-status">
              <i class="fa-solid fa-circle-check"></i>
              <span>In Stock</span>
            </p>
            <p className="product-purchase">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button type="button">Add to Cart</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
