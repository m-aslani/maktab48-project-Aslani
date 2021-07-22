import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";
import { cartReducer } from "./cartReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  orders: orderReducer,
  cart:cartReducer,
});
