import React, { useState } from "react";
import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";
import "./Home.css";

const Home = ({ products, setProducts }) => {
  const [filter, setFilter] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Villaluna's Hardware Store</h1>
        <h2 className="sub-title">Your Best Friend in Building!</h2>

        <div className="head-filter">
          <label>Filter: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Tools">Tools</option>
            <option value="Hardware">Hardware</option>
            <option value="Painting">Painting</option>
          </select>
        </div>

        <button
          style={{
            padding: "8px 14px",
            background: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "-4px",
            marginLeft: "0",
            width: "fit-content",
          }}
          onClick={() => setShowAddForm(true)}
        >
          Add Product
        </button>
      </div>

      <ProductList products={filteredProducts} setProducts={setProducts} />

      {showAddForm && (
        <AddProductForm
          products={products}
          setProducts={setProducts}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};

export default Home;
