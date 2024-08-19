// All necessary imports
const express = require("express"); // Import the express module
const router = express.Router(); // Create a new router object
// Import controller functions for handling product-related routes
const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

// Define a route to get all products from the database
// Route: GET /api/products
router.get("/", getAllProducts);

// Define a route to get a product by its id from the database
// Route: GET /api/products/:id
router.get("/:id", getProductById);

// Export the router to be used in other parts of the application
module.exports = router;
