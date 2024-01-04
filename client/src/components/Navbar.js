// components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './_navbar.scss';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setIsNavExpanded(false); // Close navbar on logout
  };

  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button className="navbar-toggle" onClick={toggleNavbar}>
            {/* Icon for the toggle button */}
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">GIS & Geospatial App</Link>
        </div>
        <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="nav navbar-nav navbar-right">
            {/* Navbar items */}
            <li className="active"><Link to="/" onClick={toggleNavbar}>Home</Link></li>
            <li><Link to="/features" onClick={toggleNavbar}>Features</Link></li>
            <li><Link to="/login" onClick={toggleNavbar}>Login</Link></li>
            <li className="dropdown">
              <a href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Profile</a>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/dashboard" onClick={toggleNavbar}>Dashboard</Link>
                  <a href="#" onClick={handleLogout}>Sign Out</a>
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




