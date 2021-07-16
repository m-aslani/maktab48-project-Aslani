import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDeliveredOrders } from "../redux/actions/orderActions";
import OrderTable from "./OrderTable";

const Delivered = () => {
  const deliveredOrders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeliveredOrders());
  }, []);
  
  return (
    <div>
      <OrderTable orders={deliveredOrders} />
    </div>
  );
};
export default Delivered;
