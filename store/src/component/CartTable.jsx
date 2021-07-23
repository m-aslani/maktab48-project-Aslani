import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useInfoTable } from "../style";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch} from "react-redux";
import { deleteFromCart } from "../redux/actions/cartAction";

const columns = [
  { id: "title", label: "نام کالا", minWidth: 100 },
  { id: "price", label: " قیمت", minWidth: 50 },
  {
    id: "number",
    label: "تعداد ",
    minWidth: 50,
    align: "right",
  },
  {
    id: "buttons",
    label: "",
    minWidth: 20,
    align: "right",
  },
];
const CartTable = ({ cart }) => {
  const classes = useInfoTable();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeletFromCart = (id)=>{
    dispatch(deleteFromCart(id));
  }

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead
              className={classes.tabelHeader}
              style={{ backgroundColor: "yellow" }}
            >
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
              {cart
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={product.code}
                    >
                      <TableCell align={columns[0].align}>
                        {product.title}
                      </TableCell>
                      <TableCell align={columns[1].align}>
                        {product.price}
                      </TableCell>
                      <TableCell align={columns[2].align}></TableCell>
                      <TableCell align={columns[3].align}>
                        <IconButton onClick={()=>handleDeletFromCart(product.id)}>
                          <DeleteIcon/>
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
          count={cart?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
export default CartTable;
