// App.js 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles/main.scss'; // Ensure this path is correct
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'; // Import Register component
import Dashboard from './components/Dashboard'; // Import Dashboard component

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Add route for register page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add route for dashboard page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;







