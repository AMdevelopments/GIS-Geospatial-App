// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mysql = require('mysql2/promise');

// MySQL connection setup
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootroot', // Replace with your MySQL root password
  database: 'gis_app', // Ensure this is your correct database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const app = express();
const port = 5001;
const secretKey = '571822e124821b79389b985bfe40e83144ce2686dd030cc7f0364471dd18232097f5d4922a46e85ae01eaf33e96c1ca624b633abe35d2a0b8ba62b80c77d7702'; // Replace with your actual secret key for JWT

// Middleware
app.use(express.json());
app.use(cors());

// Helper function to execute MySQL queries
async function executeQuery(query, params) {
  const [results] = await pool.query(query, params);
  return results;
}

// User Registration Route
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await executeQuery(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error registering new user: " + error.message);
  }
});

// User Login Route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await executeQuery('SELECT * FROM users WHERE email = ?', [email]);
    const user = users[0];
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
      res.json({ token: token, userId: user.id }); // Added userId to response for frontend use
    } else {
      res.status(400).send("Invalid email or password");
    }
  } catch (error) {
    res.status(500).send("Error logging in user: " + error.message);
  }
});

// Authentication Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// User Details Route
app.get('/user/details', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const userDetails = await executeQuery('SELECT username, email FROM users WHERE id = ?', [userId]);

    if (userDetails.length > 0) {
      res.json(userDetails[0]);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).send("An error occurred while fetching user details");
  }
});

// Protected Route
app.get('/protected', authenticateToken, (req, res) => {
  res.send('This route is protected and you are authenticated');
});

// Features Route
app.get('/api/features', async (req, res) => {
  try {
    const features = await executeQuery('SELECT * FROM features');
    res.json(features);
  } catch (error) {
    console.error('Error fetching features:', error);
    res.status(500).json({ message: "Error fetching features" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});









