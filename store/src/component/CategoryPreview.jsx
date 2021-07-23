import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsBYCategory } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import CardProduct from "../component/CardProduct";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const CategoryPreview = ({ categoryName , products }) => {

  return (
    <div>
          <Link to={`/products/category/${categoryName}`}>
      <div className="title-container">
        <h1 className="title-container--title">{categoryName}</h1>
        <ArrowBackIosIcon className="title-container--icon"/>
      </div>
          </Link>
      <div className="card-Container">
        {products?.map((product, index) => {
          if (index < 6) {
            return (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <CardProduct product={product} />
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
