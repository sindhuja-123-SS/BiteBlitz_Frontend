import React, { useState, useEffect } from 'react';
 // Assume qrcode.js is included via CDN
import '../styles/Checkout.css'
const Checkout = ({ cart, setCurrentPage }) => {
  const [qrCode, setQrCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('gpay');
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const generateQR = async () => {
      const qrData = `Payment for order: ₹${totalPrice}`;
      const qrUrl = await QRCode.toDataURL(qrData);
      setQrCode(qrUrl);
    };
    generateQR();
  }, [totalPrice]);

  const handlePayment = () => {
    alert(`Payment processed via ${paymentMethod}. Bill valid for 1 hour.`);
    setCurrentPage('home');
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item, index) => (
          <p key={index}>
            {item.name}: ₹{item.price}
          </p>
        ))}
        <p>Total: ₹{totalPrice}</p>
      </div>
      <div className="qr-code">
        <h3>Scan to Pay</h3>
        {qrCode && <img src={qrCode} alt="QR Code" />}
        <p>Bill valid for 1 hour</p>
      </div>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="gpay"
            checked={paymentMethod === 'gpay'}
            onChange={() => setPaymentMethod('gpay')}
          />
          GPay
        </label>
        <label>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={() => setPaymentMethod('cod')}
          />
          Cash on Delivery
        </label>
      </div>
      <button onClick={handlePayment} className="pay-button">Confirm Payment</button>
      <button onClick={() => setCurrentPage('cart')} className="back-button">Back to Cart</button>
    </div>
  );
};

export default Checkout;