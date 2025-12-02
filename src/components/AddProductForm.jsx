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
    <div className="form-overlay">
      <div className="form-modal">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Tools">Tools</option>
            <option value="Hardware">Hardware</option>
            <option value="Painting">Painting</option>
          </select>

          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label>Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Add Product
            </button>
            <button type="button" className="close-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
