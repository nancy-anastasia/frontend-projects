import "./App.css";
import { useState } from "react";
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
  const [navDrawerToggle, setNavDrawerToggle] = useState(false);

  return (
    <BrowserRouter>
      <Navbar hamburgerMenuClick={() => setNavDrawerToggle(true)} />
      <NavDrawer isVisible={navDrawerToggle} />
      <Backdrop
        isVisible={navDrawerToggle}
        backdropClick={() => setNavDrawerToggle(false)}
      />
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
