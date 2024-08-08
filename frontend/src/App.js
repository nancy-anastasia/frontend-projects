import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screen imports
import HomePage from "./screens/HomePage";
import ProductPage from "./screens/ProductPage";
import CartView from "./screens/CartView";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      {/* NavDrawer */}
      {/* Backdrop */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
