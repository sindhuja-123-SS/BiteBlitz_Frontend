import React, { useState } from 'react';
import '../styles/Profile.css'
const Profile = ({ setCurrentPage }) => {
  const [name, setName] = useState('John Doe');
  const [address, setAddress] = useState();
  const [contact, setContact] = useState('1234567890');
  const [accommodation, setAccommodation] = useState('hosteller');

  const handleSave = () => {
    alert('Profile updated successfully');
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>
      <form className="profile-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="profile-input"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="profile-input"
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="profile-input"
          />
        </label>
        <label>
          Accommodation Status:
          <select
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            className="profile-input"
          >
            <option value="hosteller">Hosteller</option>
            <option value="dayScholar">Day Scholar</option>
          </select>
        </label>
        <button type="button" onClick={handleSave} className="save-button">Save Changes</button>
      </form>
      <button onClick={() => setCurrentPage('home')} className="back-button">Back to Home</button>
    </div>
  );
};

export default Profile;