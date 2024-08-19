// Load environment variables from a .env file
require("dotenv").config();

// Import the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Asynchronous function to initialize the database connection
const initializeDatabase = async () => {
  // Check if the MONGO_URI environment variable is set
  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in environment variables.");
    process.exit(1);
  }

  try {
    // Attempt to connect to MongoDB using the provided URI and options
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection established successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Exit the process with a failure code
    process.exit(1);
  }
};

// Export the initializeDatabase function for use in other parts of the application
module.exports = initializeDatabase;
