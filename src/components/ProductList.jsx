import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products, setProducts }) => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((p) => p.category === categoryFilter);

  const increaseQuantity = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id && p.stock < p.initialStock
          ? { ...p, stock: p.stock + 1 }
          : p
      )
    );
  };

  const addToCart = (product) => {
    if (product.stock === 0) return;
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <label style={{ color: "white" }}>
        Filter by Category:{" "}
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tools">Tools</option>
          <option value="Hardware">Hardware</option>
          <option value="Painting">Painting</option>
        </select>
      </label>

      <div className="product-list">
        {filteredProducts.map((product) => {
          const orderedAmount = product.initialStock - product.stock;

          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₱{product.price}</p>
              <p>
                Quantity:{" "}
                <button
                  className="btn-add"
                  onClick={() => increaseQuantity(product.id)}
                  disabled={product.stock === 0} // can't increase if no stock
                >
                  +
                </button>{" "}
                {orderedAmount}{" "}
                <button
                  className="btn-minus"
                  onClick={() => decreaseQuantity(product.id)}
                  disabled={orderedAmount === 0} // can't go below 0
                >
                  -
                </button>
              </p>

              <p>Subtotal: ₱{product.price * orderedAmount}</p>
              <p>Stock: {product.stock}</p>

              {product.stock === 0 ? (
                <p style={{ color: "red" }}>No more stocks available!</p>
              ) : product.stock < 15 ? (
                <p style={{ color: "orange" }}>Low Stock!</p>
              ) : null}

              <button
                className="btn-cart"
                style={{ color: "white", backgroundColor: "#1c68f5ff" }}
                onClick={() => addToCart(product)}
                disabled={product.stock === 0} // can't add to cart if no stock
              >
                Add to Cart
              </button>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
