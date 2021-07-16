import { ActionTypesOrder } from "../constants/action-type";
import {
  getDeliveredOrdersList,
  getNotDeliveredOrdersList,
  deliveredOrder
} from "../../api/orders";

export const setDeliveredOrders = (deliveredOrders) => {
  return {
    type: ActionTypesOrder.SET_DELIVERED_ORDERS,
    payload: deliveredOrders,
  };
};
export const setNotDeliveredOrders = (notDeliveredOrders) => {
  return {
    type: ActionTypesOrder.SET_NOTDELIVERED_ORDERS,
    payload: notDeliveredOrders,
  };
};

export const deliveryOrder = (order) => {
  return {
    type: ActionTypesOrder.DELIVERED_ORDER,
    payload: order,
  };
};

export const getDeliveredOrders = () => async (dispatch) => {
  let res = await getDeliveredOrdersList();
  console.log(res);
  dispatch(setDeliveredOrders(res.data));
};

export const getNotDeliveredOrders = () => async (dispatch) => {
  let res = await getNotDeliveredOrdersList();
  console.log(res);
  dispatch(setDeliveredOrders(res.data));
};

export const delivery = (order) => async(dispatch)=>{
  console.log(order);
  await deliveredOrder(order);
  dispatch(deliveryOrder(order));
}