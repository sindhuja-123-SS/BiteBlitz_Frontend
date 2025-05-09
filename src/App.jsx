import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Profile from './components/Profile';
import OrderHistory from './components/OrderHistory';
import Checkout from './components/Checkout';
import './App.css';
const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedCanteen, setSelectedCanteen] = useState(null);
  const [cart, setCart] = useState([]);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'home':
        return <Home setCurrentPage={setCurrentPage} setSelectedCanteen={setSelectedCanteen} />;
      case 'menu':
        return <Menu canteen={selectedCanteen} setCurrentPage={setCurrentPage} cart={cart} setCart={setCart} />;
      case 'cart':
        return <Cart cart={cart} setCart={setCart} setCurrentPage={setCurrentPage} />;
      case 'profile':
        return <Profile setCurrentPage={setCurrentPage} />;
      case 'orderHistory':
        return <OrderHistory setCurrentPage={setCurrentPage} />;
      case 'checkout':
        return <Checkout cart={cart} setCurrentPage={setCurrentPage} />;
      default:
        return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
};

export default App;