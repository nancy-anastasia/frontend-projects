import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./productReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  getProductsData: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

export default rootReducer;
