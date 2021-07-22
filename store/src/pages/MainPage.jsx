import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getProducts} from "../redux/actions/productActions";
import {Link} from "react-router-dom";
import CardProduct from "../component/CardProduct";
import CategoryPreview from "../component/CategoryPreview";

 const MainPage = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getProducts());
      }, []);
    return (
        <div>
            <Typography  variant="h2" align="center" color="textPrimary">
              Main page
            </Typography>
            <CategoryPreview categoryName="گوشی همراه"/>
        </div>
    )
}
export default MainPage;