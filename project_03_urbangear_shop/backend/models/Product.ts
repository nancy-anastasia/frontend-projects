// Import the mongoose library for MongoDB interaction
import mongoose, { Document, Schema, Model } from "mongoose";

// Defin an interface representing a product document in MongoDB
interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  countInStock: number;
  imageUrl: string;
}

// Define the Schema for the product collection
const productSchema: Schema<IProduct> = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// Create a model for the product schema
const Product: Model<IProduct> = mongoose.model<IProduct>(
  "Product",
  productSchema
);

// Export the Product model and IProduct interface for use in other parts of the application
export default Product;
export { IProduct };
