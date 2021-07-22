import { ActionTypeCart } from "../constants/action-type";

export const setCartProducts = (product) => {
  return {
    type: ActionTypeCart.ADD_TO_CART,
    payload: product,
  };
};

export const addToCart = (product) => (dispatch) => {
    console.log(product);
  dispatch(setCartProducts(product));
};
