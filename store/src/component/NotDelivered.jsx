import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotDeliveredOrders } from "../redux/actions/orderActions";
import OrderTable from "./OrderTable";
import {useOrderTable} from "../style"

const NotDelivered = () => {
  const notDeliverdOrders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const classes = useOrderTable();

  useEffect(() => {
    dispatch(getNotDeliveredOrders());
  }, []);

  return (
    <div className={classes.tableContainer}>
      <OrderTable orders={notDeliverdOrders} />
    </div>
  );
};
export default NotDelivered;
