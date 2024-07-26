import React from "react";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
