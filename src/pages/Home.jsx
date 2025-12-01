import React from "react";
import ProductList from "../components/ProductList";
import "./Home.css";

const Home = ({ products, setProducts }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Villaluna Hardware Store</h1>
      <p className="home-subtitle">Browse our products below</p>
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Home;
