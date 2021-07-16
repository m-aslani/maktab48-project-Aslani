import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  orders: orderReducer,
});
