// Import the Product model
const Product = require("../models/Product");

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find({});

    // Respond with the fetched products in JSON format
    res.json(products);
  } catch (error) {
    // Log the error to the console
    console.error("An error has occured", error);

    // Respond with a 500 status code and a server error message
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller function to get a product by its ID
const getProductById = async (req, res) => {
  try {
    // Fetch a product by its ID from the request parameters
    const product = await Product.findById(req.params.id);

    // Respond with the fetched product in JSON format
    res.json(product);
  } catch (error) {
    // Log the error to the console
    console.error("An error has occured", error);

    // Respond with a 500 status code and a server error message
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions to be used in other parts of the application
module.exports = {
  getAllProducts,
  getProductById,
};
