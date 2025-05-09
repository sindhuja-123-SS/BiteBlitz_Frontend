import React from 'react';
import '../styles/OrderHistory.css'
const OrderHistory = ({ setCurrentPage }) => {
  const orders = [
    { id: 1, date: '2025-05-08', items: ['Pizza', 'Burger'], total: 230 },
    { id: 2, date: '2025-05-07', items: ['Sandwich'], total: 60 },
  ];

  return (
    <div className="history-container">
      <h1 className="history-title">Order History</h1>
      {orders.length === 0 ? (
        <p className="empty-history">No orders yet</p>
      ) : (
        <div className="history-items">
          {orders.map((order) => (
            <div key={order.id} className="history-item">
              <h3>Order #{order.id}</h3>
              <p>Date: {order.date}</p>
              <p>Items: {order.items.join(', ')}</p>
              <p>Total: ₹{order.total}</p>
              <button className="reorder-button">Reorder</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setCurrentPage('home')} className="back-button">Back to Home</button>
    </div>
  );
};

export default OrderHistory;