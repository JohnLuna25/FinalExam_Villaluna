import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products, addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const increase = (id) => {
    setQuantities({
      ...quantities,
      [id]: (quantities[id] || 0) + 1,
    });
  };

  const decrease = (id) => {
    if ((quantities[id] || 0) > 0) {
      setQuantities({
        ...quantities,
        [id]: quantities[id] - 1,
      });
    }
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantities({
        ...quantities,
        [product.id]: 0,
      });
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        const q = quantities[product.id] || 0;
        const lowStock = product.stock <= 5;

        return (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price-stock">
              <p>Price: ₱{product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
            {lowStock && (
              <p style={{ color: "red", fontWeight: "bold" }}>Low Stock!</p>
            )}

            {/* FIXED QUANTITY DISPLAY */}
            <div className="quantity-container">
              <span className="quantity-label">Quantity: </span>

              <button className="btn-add" onClick={() => increase(product.id)}>
                +
              </button>

              <span className="quantity-number"> {q} </span>

              <button
                className="btn-minus"
                onClick={() => decrease(product.id)}
                disabled={q === 0}
              >
                -
              </button>
            </div>

            <button
              className="btn-cart"
              disabled={q === 0 || product.stock === 0}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>

            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
