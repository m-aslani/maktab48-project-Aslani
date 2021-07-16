import { ActionTypesOrder } from "../constants/action-type";

const initialState = {
  orders: [{}],
  order:{},
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypesOrder.SET_DELIVERED_ORDERS:
      return { ...state.orders, orders: payload };
    case ActionTypesOrder.SET_NOTDELIVERED_ORDERS:
      return { ...state.orders, orders: payload };
    case ActionTypesOrder.DELIVERED_ORDER:
      return { ...state.orders, order : payload };
    default:
      return state;
  }
};
