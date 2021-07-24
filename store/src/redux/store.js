import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import  reducers  from "./reducers/index";
import {persistStore} from "redux-persist";

// const cartItem = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// const initialState ={
//     cart:{
//         cartItem: cartItem
//     }
// }

const middlewareEnhancer = applyMiddleware(logger, ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(reducers, undefined, composedEnhancers);

export const persistor = persistStore(store);

export default {store , persistor};