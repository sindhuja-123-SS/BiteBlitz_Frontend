import React, { useState } from 'react';
import '../styles/Menu.css'
const Menu = ({ canteen, setCurrentPage, cart, setCart }) => {
  const menuItems = [
    // Mario Canteen
    { id: 1, name: 'Margherita Pizza', price: 150, canteen: 'mario' },
    { id: 2, name: 'Pepperoni Pizza', price: 180, canteen: 'mario' },
    { id: 3, name: 'Pasta Alfredo', price: 120, canteen: 'mario' },
    { id: 4, name: 'Garlic Bread', price: 50, canteen: 'mario' },
    // Cafe Corner
    { id: 5, name: 'Classic Burger', price: 80, canteen: 'cafe' },
    { id: 6, name: 'French Fries', price: 60, canteen: 'cafe' },
    { id: 7, name: 'Cappuccino', price: 70, canteen: 'cafe' },
    { id: 8, name: 'Chicken Wrap', price: 90, canteen: 'cafe' },
    // Hosteller's Menu
    { id: 9, name: 'Veg Thali', price: 100, canteen: 'hostel' },
    { id: 10, name: 'Chicken Curry', price: 120, canteen: 'hostel' },
    { id: 11, name: 'Dal Rice', price: 80, canteen: 'hostel' },
    { id: 12, name: 'Roti Sabzi', price: 90, canteen: 'hostel' },
    // Amenity Canteen
    { id: 13, name: 'Veg Sandwich', price: 60, canteen: 'amenity' },
    { id: 14, name: 'Caesar Salad', price: 80, canteen: 'amenity' },
    { id: 15, name: 'Fruit Juice', price: 50, canteen: 'amenity' },
    { id: 16, name: 'Grilled Cheese', price: 70, canteen: 'amenity' },
  ];

  const [customization, setCustomization] = useState('');

  const addToCart = (item) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    if (hours < 18 || hours >= 22) {
      alert('Orders can only be placed between 6 PM and 10 PM');
      return;
    }
    setCart([...cart, { ...item, customization }]);
    setCustomization('');
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">{canteen.name} Menu</h1>
      <div className="menu-items">
        {menuItems
          .filter((item) => item.canteen === canteen.id)
          .map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <input
                type="text"
                placeholder="Customization (e.g., extra spicy)"
                value={customization}
                onChange={(e) => setCustomization(e.target.value)}
                className="customization-input"
              />
              <button onClick={() => addToCart(item)} className="add-button">Add to Cart</button>
            </div>
          ))}
      </div>
      <button onClick={() => setCurrentPage('cart')} className="cart-button">Go to Cart</button>
    </div>
  );
};

export default Menu;