// components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './_navbar.scss';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., remove token from localStorage)
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">GIS & Geospatial App</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Link to login page */}
            <li className="dropdown">
              <a onClick={() => setDropdownOpen(!dropdownOpen)}>Profile</a>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/dashboard">Dashboard</Link>
                  <a onClick={handleLogout}>Sign Out</a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



