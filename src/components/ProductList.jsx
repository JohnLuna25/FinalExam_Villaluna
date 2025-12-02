import React from "react";
import "./ProductList.css";

const ProductList = ({ products, setProducts }) => {
  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const increaseStock = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: product.stock + 1 } : product
      )
    );
  };

  const decreaseStock = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.stock > 0
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    );
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.stock;
    }, 0);
  };

  return (
    <div>
      <div className="total-subtotal">
        <h3>Total Inventory Value</h3>
        <h2>₱{calculateTotal().toLocaleString()}</h2>
      </div>

      <div className="product-list">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₱{product.price}</p>

              <p>
                Stock: {product.stock}{" "}
                <button
                  className="stock-plus-btn"
                  onClick={() => increaseStock(product.id)}
                >
                  +
                </button>{" "}
                <button
                  className="stock-minus-btn"
                  onClick={() => decreaseStock(product.id)}
                >
                  -
                </button>
              </p>

              {product.stock < 5 && (
                <p className="low-stock-warning">⚠ Low Stock!</p>
              )}

              <p>Subtotal: ₱{product.price * product.stock}</p>

              <p className="justified-text">{product.description}</p>

              <button
                className="red-delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
