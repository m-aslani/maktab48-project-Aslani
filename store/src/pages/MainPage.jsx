import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts} from "../redux/actions/productActions";
import CategoryPreview from "../component/CategoryPreview";

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
            <CategoryPreview categoryName="گوشی همراه" products={cellPhone}/>
            <CategoryPreview categoryName="ساعت هوشمند" products={smartWatch}/>
            <CategoryPreview categoryName="هنزفری"/>
        </div>
    )
}
export default MainPage;