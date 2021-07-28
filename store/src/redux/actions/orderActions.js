import { ActionTypesOrder } from "../constants/action-type";
import {
  getDeliveredOrdersList,
  getNotDeliveredOrdersList,
  deliveredOrder,
  getOrders,
  addOrder
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

export const setOrders = (orders)=>{
  return{
    type: ActionTypesOrder.GET_ORDERS,
    payload:orders
  }
}

export const addAnOrder = (order)=>{
  return{
    type:ActionTypesOrder.ADD_ORDER,
    payload:order
  }
}

export const getAllOrders = ()=> async (dispatch)=>{
  let res = await getOrders();
  dispatch(setOrders(res.data));
}

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
  await deliveredOrder(order);
  dispatch(deliveryOrder(order));
}

export const addNewOrder = (order)=> async(dispatch)=>{
  console.log(order);
  let res = await addOrder(order);
  dispatch(addAnOrder(res.data));
}