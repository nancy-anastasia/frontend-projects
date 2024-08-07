// Express server

// Import necessary modules
require("dotenv").config();
const express = require("express");

// Create an instance of an Express app
const app = express();

// Define the port, defaulting to 5001 if not specified in environment variables
const PORT = process.env.PORT || 5001;

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
