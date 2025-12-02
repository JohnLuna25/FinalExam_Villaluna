import React, { useState } from "react";
import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";
import "./ProductList.css";

const Home = ({ products, setProducts }) => {
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false); // 👈 ADD THIS

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="home-container">
      <div className="home-header">
        {/* Title */}
        <h1 className="home-title">Villaluna Hardware Store</h1>

        {/* Add Product Button */}
        <button
          className="add-product-btn"
          onClick={() => setShowForm(true)} // 👈 SHOW THE FORM
        >
          Add Product
        </button>
      </div>

      {/* Filter */}
      <div className="head-filter">
        <label>Filter:</label>
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

      {/* SHOW FORM ONLY WHEN CLICKED */}
      {showForm && (
        <AddProductForm
          setProducts={setProducts}
          onClose={() => setShowForm(false)} // 👈 CLOSE THE FORM
        />
      )}

      {/* Product List */}
      <ProductList
        products={filteredProducts}
        fullProducts={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Home;
