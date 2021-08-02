import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct, setProducts } from "../redux/actions/productActions";
import MainModal from "../component/MainModal";
import Button from "@material-ui/core/Button";
import ProductTable from "../component/ProductTable";
import {useProductsPageStyle} from "../style";
import { useSelector, useDispatch } from "react-redux";
// import { getProducts, deleteProduct, setProducts } from "../redux/actions/productActions";

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
  const [openModal, setOpenModal] = useState(false);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({
    title:"",
    category:"",
    description:"",
    image:"",
  });
  const [option, setOption] = useState(false)
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleEditModal = (product)=>{
    setSelectedProduct(product);
    setOption(true);
    setOpenModal(true);
  }

  const handleClose = () => {
    setSelectedProduct({});
    dispatch(getProducts());
    setOpenModal(false);
  };


  return (
    <div>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>مدیریت کالا ها</h1>
        <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleOpenModal()}>
          افزودن کالا
        </Button>
      </div>
      <div className={classes.tabelContainer}>
        <ProductTable columns={columns} handleOpenModal={handleEditModal} products={products} />
      </div>
      {openModal &&
        (<MainModal openModal={openModal} handleClose={handleClose} selectedProduct={selectedProduct} option={option}/>)
        }
    </div>
  );
};
export default AdminPanelProductsPage;
