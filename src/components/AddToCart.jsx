import React, { useState } from "react";
import "./AddToCart.css";

const AddToCart = ({ cart, setCart, products, setProducts, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleProceedCheckout = () => setShowConfirmation(true);

  const handleConfirmCheckout = () => {
    setCart([]);
    setShowConfirmation(false);
    setOrderPlaced(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (orderPlaced) {
    return (
      <div className="cart-modal">
        <h2>Order Successful!</h2>
        <p>Thank you for your purchase.</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <div className="cart-modal">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₱{item.price}</p>
              <p>Subtotal: ₱{item.price * item.quantity}</p>
            </div>
          ))}
          <h3>Total: ₱{total}</h3>
          {!showConfirmation ? (
            <>
              <button onClick={handleProceedCheckout}>
                Proceed to Checkout
              </button>
              <button onClick={onClose}>Go Back</button>
            </>
          ) : (
            <>
              <p>Are you sure you want to place this order?</p>
              <button onClick={handleConfirmCheckout}>Yes, Proceed</button>
              <button onClick={() => setShowConfirmation(false)}>
                No, Go Back
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AddToCart;
