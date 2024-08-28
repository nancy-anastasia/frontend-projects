// Define the base interface for cart items
export interface CartItemBase {
  cartItemId: string;
  cartItemName: string;
  cartItemImage: string;
  cartItemPrice: number;
  cartItemCountInStock: number;
  cartItemProductQuantity: number;
}

// Interface for a product
export interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  countInStock: number;
}

// Interface for the state managed by getProductsReducer
export interface ProductsState {
  products: Product[];
  loading: boolean;
  error?: string;
}

// Interface for the state managed by getProductDetailsReducer
export interface ProductDetailsState {
  product: Product | null;
  loading: boolean;
  error?: string;
}
