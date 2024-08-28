// Express server

// Import necessary modules
import dotenv from "dotenv";
import express, { Application } from "express";
import initializeDatabase from "./config/db";
import productRoutes from "./routes/productRoutes";

// Load environment variables from .env file
dotenv.config();

// Call the function to initialize the database connection
initializeDatabase();

// Create an instance of an Express app
const app: Application = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route all requests to /api/products through the productRoutes module
app.use("/api/products", productRoutes);

// Define the port, defaulting to 5001 if not specified in environment variables
const PORT: number = parseInt(process.env.PORT || "5001", 10);

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
