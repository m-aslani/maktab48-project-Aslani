import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
  cellPhones: [],
  smartWatch: [],
  headPhone:[],
  selectedProduct: {},
  loading: true,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state.products, products: payload };

    case ActionTypes.SET_CELLPHONE_PRODUC:
      return { ...state.cellPhones, cellPhones: payload };

    case ActionTypes.SET_SMARTWATCH_PRODUC:
      return { ...state.smartWatch, smartWatch: payload };
      
    case ActionTypes.SET_HEADPHONE_PRODUC:
      return { ...state.headPhone, headPhone: payload };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== payload),
      };

    case ActionTypes.ADD_PRODUCT:
      return { ...state.products, payload };

    case ActionTypes.LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
