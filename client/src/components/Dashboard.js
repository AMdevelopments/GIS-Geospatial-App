// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './_dashboard.scss'; // Ensure the SCSS file exists

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You must be logged in.');
          setLoading(false);
          return;
        }

        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const response = await axios.get('http://localhost:5001/user/details', config);
        setUserDetails(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while fetching user details.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userDetails?.username}!</h1>
      <div className="user-info">
        {/* User information */}
      </div>
      <div className="user-actions">
        <button onClick={handleEditProfile}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Dashboard;


