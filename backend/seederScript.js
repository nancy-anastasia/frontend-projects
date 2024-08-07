// Import environment variables
require("dotenv").config();

// Necessary imports
const productData = require("./data/products");
const initializeDatabase = require("./config/db");
const Product = require("./models/Product");

// Function to initialize and connect to the database and then import data
const importData = async () => {
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
    console.error("An error occured while importing data", error);

    // Exit the process with a failure status code
    process.exit(1);
  }
};

// Call the importData function to execute the data import process
importData();
