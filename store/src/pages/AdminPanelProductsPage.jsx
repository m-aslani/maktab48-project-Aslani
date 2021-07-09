import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "../redux/actions/productActions";
import MainModal from "../component/MainModal";
import Button from "@material-ui/core/Button";
import ProductTable from "../component/ProductTable";
import {useProductsPageStyle} from "../style"

const columns = [
  { id: "image", label: "تصویر", minWidth: 150 },
  { id: "name", label: "نام کالا", minWidth: 80 },
  {
    id: "category",
    label: "دسته بندی",
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

const AdminPanelProductsPage = () => {
  const classes = useProductsPageStyle();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteAProduct = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProducts());
  };
  console.log(products);
  
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    // window.location.reload(); 
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>مدیریت کالا ها</h1>
        <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleOpenModal()}>
          افزودن کالا
        </Button>
      </div>
      <div className={classes.tabelContainer}>
        <ProductTable columns={columns} products={products} handleOpenModal={handleOpenModal} handleDeleteAProduct={handleDeleteAProduct} />
      </div>
      <MainModal openModal={openModal} handleClose={handleClose} />
    </div>
  );
};
export default AdminPanelProductsPage;
