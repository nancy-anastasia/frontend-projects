// All necessary imports
import express, { Request, Response, Router } from "express"; // Import Express types
import {
  getAllProducts,
  getProductById,
} from "../controllers/productControllers"; // Import controller functions

const router: Router = express.Router(); // Create a new router object

// Define a route to get all products from the database
// Route: GET /api/products
router.get("/", (req: Request, res: Response) => {
  getAllProducts(req, res);
});

// Define a route to get a product by its id from the database
// Route: GET /api/products/:id
router.get("/:id", (req: Request, res: Response) => {
  getProductById(req, res);
});

// Export the router to be used in other parts of the application
export default router;
