import React, { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ products, setProducts, onClose }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Tools");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !stock || !description) {
      alert("Please fill all fields!");
      return;
    }

    const newProduct = {
      id: products.length + 1,
      name,
      category,
      price: parseInt(price),
      stock: parseInt(stock),
      description,
    };

    setProducts([...products, newProduct]);
    onClose();
  };

  return (
    <div className="add-product-overlay">
      <div className="add-product-form">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Tools">Tools</option>
            <option value="Hardware">Hardware</option>
            <option value="Painting">Painting</option>
          </select>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Product</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
