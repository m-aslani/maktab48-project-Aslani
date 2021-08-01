import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../component/CardProduct";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const CategoryPreview = ({ categoryName, products }) => {
  const loading = useSelector((state) => state.allProducts.loading);

  return (
    <div>
      <Link to={`/products/category/${categoryName}`} className="link">
        <div className="title-container">
          <h1 className="title-container--title">{categoryName}</h1>
          <ArrowBackIosIcon className="title-container--icon" />
        </div>
      </Link>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="card-Container">
          {products?.map((product, index) => {
            if (index < 6) {
              return (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`} className="link">
                    <CardProduct product={product} />
                  </Link>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryPreview;
