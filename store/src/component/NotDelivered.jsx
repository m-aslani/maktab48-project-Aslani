import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotDeliveredOrders } from "../redux/actions/orderActions";
import OrderTable from "./OrderTable";

const NotDelivered = () => {
  const notDeliverdOrders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotDeliveredOrders());
  }, []);

  return (
    <div>
      <OrderTable orders={notDeliverdOrders} />
    </div>
  );
};
export default NotDelivered;
