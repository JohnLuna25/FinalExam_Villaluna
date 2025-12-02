import React, { useState } from "react";
import ProductList from "../components/ProductList";
import addToCartPng from "../assets/add-to-cart.png";
import "./Home.css";

const Home = ({ products, setProducts, cart, setCart, openCart }) => {
  const [filter, setFilter] = useState("All");

  // Filter products based on category
  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="title-filter">
          <h1 className="home-title">Villaluna Hardware Store</h1>

          {/* Filter dropdown */}
          <div className="head-filter">
            <label
              style={{ color: "white", fontSize: "18px", marginRight: "15px" }}
            >
              Filter:{" "}
            </label>
            <select
              className="category-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Tools">Tools</option>
              <option value="Hardware">Hardware</option>
              <option value="Painting">Painting</option>
            </select>
          </div>
        </div>

        <button className="add-to-cart-btn" onClick={openCart}>
          <img src={addToCartPng} alt="Cart" />
        </button>
      </div>

      {/* Pass filteredProducts to ProductList */}
      <ProductList
        products={filteredProducts}
        cart={cart}
        setCart={setCart}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Home;
