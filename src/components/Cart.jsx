import React, { useState } from 'react';
import '../styles/Cart.css'
const Cart = ({ cart, setCart, setCurrentPage }) => {
  const [isParcel, setIsParcel] = useState(false);
  const parcelFee = 10;

  const totalPrice = cart.reduce((total, item) => total + item.price, 0) + (isParcel ? parcelFee : 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>{item.customization || 'No customization'}</p>
            </div>
          ))}
          <label className="parcel-option">
            <input
              type="checkbox"
              checked={isParcel}
              onChange={() => setIsParcel(!isParcel)}
            />
            Parcel (₹{parcelFee} extra)
          </label>
          <p className="total-price">Total: ₹{totalPrice}</p>
          <button
            onClick={() => setCurrentPage('checkout')}
            className="checkout-button"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
      <button onClick={() => setCurrentPage('home')} className="back-button">Back to Home</button>
    </div>
  );
};

export default Cart;