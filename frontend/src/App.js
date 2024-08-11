import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import screens
import HomePage from "./screens/HomePage";
import ProductPage from "./screens/ProductPage";
import CartView from "./screens/CartView";

// Import components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import NavDrawer from "./components/NavDrawer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <NavDrawer />
      <Backdrop />
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
