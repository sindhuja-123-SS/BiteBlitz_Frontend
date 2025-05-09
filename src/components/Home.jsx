import React from 'react';
import '../styles/Home.css'
const Home = ({ setCurrentPage, setSelectedCanteen }) => {
  const canteens = [
    { name: 'Mario Canteen', id: 'mario' },
    { name: 'Cafe Corner', id: 'cafe' },
    { name: 'Hosteller’s Menu', id: 'hostel', restricted: true },
    { name: 'Amenity Canteen', id: 'amenity' },
  ];

  const isSunday = new Date().getDay() === 0;

  return (
    <div className="home-container">
      <h1 className="home-title">Choose Your Canteen</h1>
      {isSunday && <p className="sunday-warning">No canteen service on Sundays!</p>}
      <div className="canteen-grid">
        {canteens.map((canteen) => (
          <button
            key={canteen.id}
            className="canteen-button"
            onClick={() => {
              if (canteen.restricted) {
                alert('Hosteller’s Menu is only for hostellers');
              } else {
                setSelectedCanteen(canteen);
                setCurrentPage('menu');
              }
            }}
            disabled={isSunday}
          >
            {canteen.name}
          </button>
        ))}
      </div>
      <div className="nav-buttons">
        <button onClick={() => setCurrentPage('profile')} className="nav-button">Profile</button>
        <button onClick={() => setCurrentPage('orderHistory')} className="nav-button">Order History</button>
      </div>
    </div>
  );
};

export default Home;