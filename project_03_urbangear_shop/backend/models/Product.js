// Import the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Define the schema for the product collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// Create a model for the product schema
const Product = mongoose.model("product", productSchema);

// Export the Product model for use in other parts of the application
module.exports = Product;
