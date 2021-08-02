import React, { useState , useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useOrderTableContainer } from "../style";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import MoreInfoModal from "./MoreInfoModal";

import { useSelector, useDispatch } from "react-redux";
import { getNotDeliveredOrders , getDeliveredOrders} from "../redux/actions/orderActions";

const columns = [
  { id: "name", label: "نام کاربر", minWidth: 150 },
  { id: "sum", label: "مجموع مبلغ", minWidth: 80 },
  {
    id: "orderTime",
    label: "تاریخ سفارش",
    minWidth: 150,
    align: "right",
  },
  {
    id: "buttons",
    label: "",
    minWidth: 150,
    align: "right",
  },
];

const OrderTable = ({ option}) => {
  const classes = useOrderTableContainer();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [choosenOrder, setChoosenOrder] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if(option === 1){
      console.log("1");
      dispatch(getNotDeliveredOrders());
    }
    else if(option === 2){
      console.log("2");
      dispatch(getDeliveredOrders());
    }
  }, [option,openModal])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = (selectedOrder) => {
    setChoosenOrder(selectedOrder);
    setOpenModal(true);
  };

  const handleClose = () => {
    setChoosenOrder({});
    setOpenModal(false);
  };
console.log("#############    ",orders);

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.tabelHeader}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    className={classes.tabelCell}
                  >
                    <h3>{column.label}</h3>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={order.code}
                    >
                      <TableCell align={columns[0].align}>
                        {order.name}
                      </TableCell>
                      <TableCell align={columns[1].align}>
                        {order.sum}
                      </TableCell>
                      <TableCell align={columns[2].align}>
                        {order.orderTime}
                      </TableCell>
                      <TableCell align={columns[3].align}>
                        <IconButton onClick={() => handleOpen(order)}>
                          <InfoIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={orders?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {openModal && (
        <MoreInfoModal
          open={openModal}
          handleClose={handleClose}
          selectedOrder={choosenOrder}
        />
      )}
    </div>
  );
};
export default OrderTable;
