import React, { useState, useEffect } from "react";
import PriceTable from "../component/PriceTable";
import { useProductsPageStyle } from "../style";
import Button from "@material-ui/core/Button";
import { getAProduct, getProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const AdminPanelAvailablePage = () => {
  const classes = useProductsPageStyle();
  const [option, setOption] = useState(false);
  const dispatch = useDispatch();
//   const selectedProduct = useSelector(
//     (state) => state.allProducts.selectedProduct
//   );

  let productId;

//   useEffect(() => {
//       if(productId){
//     dispatch(getAProduct(productId));
//       }
//   }, [productId])

  const handleSave = (e) => {
    setOption(true);
    productId = e.id;
    console.log(productId);
    dispatch(getAProduct(productId));
    // console.log(selectedProduct);
  };

  return (
    <div>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>مدیریت موجودی و قیمت</h1>
      </div >
      <div className={classes.tabelContainer}>
      <PriceTable handleSave={handleSave} />
      </div>
    </div>
  );
};
export default AdminPanelAvailablePage;
