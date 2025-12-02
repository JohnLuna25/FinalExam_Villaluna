import React from "react";
import ProductList from "../components/ProductList";
import "./Home.css";
import addToCartPng from "../assets/add-to-cart.png";

const Home = ({
  products,
  setProducts,
  cart,
  setCart,
  addToCart,
  openCart,
}) => {
  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <h1 className="home-title">Villaluna Hardware Store</h1>
          <p className="home-subtitle">Browse our products below</p>
        </div>

        <button className="add-to-cart-btn" onClick={openCart}>
          <img src={addToCartPng} alt="Add to Cart" />
        </button>
      </div>

      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
