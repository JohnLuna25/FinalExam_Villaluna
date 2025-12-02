import React, { useState } from "react";
import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hammer",
      category: "Tools",
      price: 250,
      stock: 34,
      description: "Durable hammer suitable for carpentry and home repairs.",
    },
    {
      id: 2,
      name: "Handsaw",
      category: "Tools",
      price: 180,
      stock: 26,
      description:
        "Sharp handsaw for cutting wood and light construction work.",
    },
    {
      id: 3,
      name: "PVC Pipe Cutter",
      category: "Tools",
      price: 740,
      stock: 7,
      description:
        "Heavy-duty cutter for PVC pipes, ideal for plumbing projects.",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Villaluna Hardware Store</h1>

        <div className="head-filter">
          <label>Filter: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Tools">Tools</option>
            <option value="Hardware">Hardware</option>
            <option value="Painting">Painting</option>
          </select>
        </div>

        <button onClick={() => setShowAddForm(true)}>Add Product</button>
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
