// App.js 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles/main.scss'; // Confirm this path is correct
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Features from './components/Features';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Wrap the Routes in a div with class main-content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








