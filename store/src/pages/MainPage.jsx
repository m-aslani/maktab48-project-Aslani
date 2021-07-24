import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getProducts} from "../redux/actions/productActions";
import {Link} from "react-router-dom";
import CardProduct from "../component/CardProduct";
import CategoryPreview from "../component/CategoryPreview";
import { getProductsBYCategory , getCellphone , getSmartWatch} from "../redux/actions/productActions";

 const MainPage = () => {
   const products = useSelector((state) => state.allProducts.products);
    let cellPhone = [];
    const smartWatch = [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
      }, []);
      
      products?.map((product,index)=>{
        if(product.category == "گوشی همراه"){
          cellPhone.push(product)
        }
        else if(product.category == "ساعت هوشمند"){
          smartWatch.push(product);
        }
      })

    return (
        <div>
            {/* <Typography  variant="h2" align="center" color="textPrimary">
              Main page
            </Typography> */}
            <CategoryPreview categoryName="گوشی همراه" products={cellPhone}/>
            <CategoryPreview categoryName="ساعت هوشمند" products={smartWatch}/>
            <CategoryPreview categoryName="هنزفری"/>
        </div>
    )
}
export default MainPage;