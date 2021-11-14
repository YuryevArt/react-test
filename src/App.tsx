import React from "react";
import { Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
