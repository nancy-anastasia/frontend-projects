// Load environment variables from a .env file
import dotenv from "dotenv";
dotenv.config();

// Import the mongoose library for MongoDB interaction
import mongoose from "mongoose";

// Asynchronous function to initialize the database connection
const initializeDatabase = async (): Promise<void> => {
  // Check if the MONGO_URI variable is set
  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in environment variables.");
    // Exit the process with a failure code
    process.exit(1);
  }

  try {
    // Attempt to connect to MONGO_URI using the provided URI
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connection established successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    // Exit the process with failure code
    process.exit(1);
  }
};

// Export the initializeDatabase function for use in other parts of the application
export default initializeDatabase;
