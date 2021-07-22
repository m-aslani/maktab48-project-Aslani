import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { addToCart } from "../redux/actions/cartAction";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );

  const cart = useSelector((state)=>state.cart.cartProducts);

  useEffect(() => {
    dispatch(getAProduct(id));
  }, []);

  const handleCountProduct = (e) => {
    //   if(e.target.value <)
  };

  const handleAddToCart = () => {
    console.log("hi");
    dispatch(addToCart([...cart,selectedProduct]));
    console.log(cart);
  };

  return (
    <div>
      <div className="card-Container--product-info">
        <div className="product-info--image-containar">
          {selectedProduct.image?.map((img, index) => (
            <img
              src={img.data_url}
              className="product-info--image-containar--product-img"
            />
          ))}
        </div>
        <div>
          <div>
            <h1 className="product-info--text">{selectedProduct.title}</h1>
            <h4 className="product-info--text">{selectedProduct.category}</h4>
            <h2 className="product-info--text">
              {selectedProduct.price} <small>تومان</small>
            </h2>
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              className="product-info--btn"
              onClick={() => handleAddToCart()}
            >
              افزودن به سبد خرید
              <AddIcon />
            </Button>
            <Input
              type="number"
              defaultValue={1}
              onChange={(e) => handleCountProduct(e)}
              className="product-info--input"
            />
          </div>
        </div>
      </div>
      <div className="card-Container--description">
        <h2 className="description--text">توضیحات بیشتر</h2>
        <p className="description--text">{selectedProduct.description}</p>
      </div>
    </div>
  );
};
export default ProductDetail;
