import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";
import { cartReducer } from "./cartReducer";
import { userInfoReducer } from "./userInfoReducer";

const persistConfig ={
  key :'root',
  storage,
  whitelist:['cart']
}

 

const reducers = combineReducers({
  allProducts: productReducer,
  orders: orderReducer,
  cart:cartReducer,
  user: userInfoReducer,
});

export default persistReducer(persistConfig , reducers);