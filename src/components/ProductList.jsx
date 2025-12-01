import React, { useState } from "react";
import "./ProductList.css"; // optional for styling

const ProductList = () => {
  // Default products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hammer",
      category: "Tools",
      price: 150,
      quantity: 2,
      image: "...",
    },
    {
      id: 2,
      name: "Handsaw",
      category: "Tools",
      price: 120,
      quantity: 1,
      image: "...",
    },
    {
      id: 3,
      name: "Paint",
      category: "Painting",
      price: 250,
      quantity: 3,
      image: "...",
    },
  ]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Subtotal: ${product.price * product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
