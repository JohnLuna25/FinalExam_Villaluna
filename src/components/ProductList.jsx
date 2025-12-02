import React from "react";
import "./ProductList.css";

const ProductList = ({ products, cart, setCart, setProducts }) => {
  const getQuantity = (productId) => {
    const item = cart.find((c) => c.id === productId);
    return item ? item.quantity : 0;
  };

  const increaseQuantity = (product) => {
    if (getQuantity(product.id) >= product.stock) return;
    const item = cart.find((c) => c.id === product.id);
    if (item) {
      setCart(
        cart.map((c) =>
          c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const item = cart.find((c) => c.id === product.id);
    if (!item) return;
    if (item.quantity === 1) {
      setCart(cart.filter((c) => c.id !== product.id));
    } else {
      setCart(
        cart.map((c) =>
          c.id === product.id ? { ...c, quantity: c.quantity - 1 } : c
        )
      );
    }
  };

  const addToCart = (product) => {
    if (getQuantity(product.id) >= product.stock) return; // cannot exceed stock
    increaseQuantity(product);

    // decrease product stock
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>

          <div className="price-stock">
            <span>Price: ₱{product.price}</span>
            <span>Stock: {product.stock}</span>
          </div>

          {product.stock <= 15 && product.stock > 0 && (
            <p style={{ color: "red", fontWeight: "bold" }}>Low Stock!</p>
          )}

          <div className="quantity-container">
            Quantity:{" "}
            <button
              className="btn-add"
              onClick={() => increaseQuantity(product)}
            >
              +
            </button>
            {getQuantity(product.id)}{" "}
            <button
              className="btn-minus"
              onClick={() => decreaseQuantity(product)}
            >
              -
            </button>{" "}
          </div>

          <button className="btn-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <p style={{ textAlign: "justify" }}>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
