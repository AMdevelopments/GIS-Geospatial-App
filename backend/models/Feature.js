// backend/models/Feature.js

const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  // Add other fields as needed
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;
