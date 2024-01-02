// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './_dashboard.scss'; // Ensure you have a corresponding SCSS file for styling

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Assuming you store your token in localStorage after login
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You must be logged in.');
          setLoading(false);
          return;
        }

        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        // Replace 'user/details' with your actual endpoint that returns user details
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userDetails?.username}!</h1>
      <div className="user-info">
        <p><strong>Email:</strong> {userDetails?.email}</p>
        <p><strong>Last Login:</strong> {userDetails?.lastLogin}</p>
        {/* Display more user info here */}
      </div>
      <div className="user-actions">
        <button>Edit Profile</button>
        <button>View Activity</button>
        {/* Add more action buttons or links here */}
      </div>
      {/* You can add more sections here such as recent activity, messages, etc. */}
    </div>
  );
};

export default Dashboard;

