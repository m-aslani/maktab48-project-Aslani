import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== payload),
      };

    case ActionTypes.ADD_PRODUCT:
      return { ...state.products, payload };
    default:
      return state;
  }
};
