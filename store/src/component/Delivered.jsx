import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDeliveredOrders } from "../redux/actions/orderActions";
import OrderTable from "./OrderTable";
import {useOrderTable} from "../style"

const Delivered = () => {
  const deliveredOrders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const classes = useOrderTable();

  useEffect(() => {
    dispatch(getDeliveredOrders());
  }, []);
  
  return (
    <div className={classes.tableContainer}>
      <OrderTable orders={deliveredOrders} />
    </div>
  );
};
export default Delivered;
