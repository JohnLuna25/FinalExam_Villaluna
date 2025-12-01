import React from "react";
import "./Home.css";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Villaluna Hardware Store</h1>
      <p className="home-subtitle">This is the Home page UI placeholder.</p>
      <ProductList />
    </div>
  );
};

export default Home;
