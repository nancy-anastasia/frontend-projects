// Express server

// Import necessary modules
require("dotenv").config();
const express = require("express");
const initializeDatabase = require("./config/db");
const productRoutes = require("./routes/productRoutes");

// Call the function to initialize the database connection
initializeDatabase();

// Create an instance of an Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
// Route all requests to /api/products through the productRoutes module
app.use("/api/products", productRoutes);

// Define the port, defaulting to 5001 if not specified in environment variables
const PORT = process.env.PORT || 5001;

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
