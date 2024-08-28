// Import environment variables
import dotenv from "dotenv";
dotenv.config();

import productData from "./data/products";
import initializeDatabase from "./config/db";
import Product from "./models/Product";

// Function to initialize and connect to the database and then import data
const importData = async (): Promise<void> => {
  try {
    // Initialize and connect to the database
    await initializeDatabase();

    // Delete all existing products from the database
    await Product.deleteMany();

    // Insert the product data from the products file into the database
    await Product.insertMany(productData);

    console.log("Successful data import.");

    // Exit the process with a success status code
    process.exit();
  } catch (error) {
    // Log errors that occur during the import process
    console.log("An error occured while importing data.", error);

    // Exit the process with a failure status code
    process.exit(1);
  }
};

// Call the importData function to execute the data import process
importData();
