import { ActionTypeCart } from "../constants/action-type";

export const setCartProducts = (product) => {
  return {
    type: ActionTypeCart.ADD_TO_CART,
    payload: product,
  };
};

export const deleteAProduct = (id) =>{
  return{
    type: ActionTypeCart.DELETE,
    payload:id,
  }
}

export const setCart = (cart)=>{
  return{
    type:ActionTypeCart.GET_CART,
    payload:cart,
  }
}

export const addToCart = (product) => (dispatch) => {
  dispatch(setCartProducts(product));
};

export const deleteFromCart = (id) => (dispatch) =>{
dispatch(deleteAProduct(id));
}