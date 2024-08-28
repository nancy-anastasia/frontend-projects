// Imports
import Product from "../models/Product";
import { Request, Response } from "express";

// Controller function to get all products
const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch all products from the database
    const products = await Product.find({});

    // Respond with the fetched products in JSON format
    res.json(products);
  } catch (error) {
    // Log the error to the console and respond with a server error message
    console.error("An error has occured", error);

    // Respond with a 500 status code and a server error message
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller function to get a product by its ID
const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch a product by its ID from the request parameters
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    // Respond with the fetched product in JSON format
    res.json(product);
  } catch (error) {
    // Log the error to the console and respond with a server error message
    console.error("An error has occured.", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions to be used in other parts of the application
export { getAllProducts, getProductById };
