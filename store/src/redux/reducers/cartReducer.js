import { ActionTypeCart } from "../constants/action-type";

const initialState = {
  cartProducts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypeCart.ADD_TO_CART:
      return { ...state.cartProducts , cartProducts: payload };
    case ActionTypeCart.DELETE:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(({id})=> id !== payload)
      }
      default:
      return state;
  }
};
