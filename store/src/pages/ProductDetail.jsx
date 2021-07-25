import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { addToCart } from "../redux/actions/cartAction";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: "50px 20px 0 20px",
    boxShadow: "0px 1px 6px 0px #681811b4",
  },
  media: {
    height: 350,
  },
  productImg: {
    objectFit: "contain",
    width: 350,
    height: 350,
    boxShadow: "0px 1px 6px 0px #681811b4",
  },
  btn: {
    backgroundColor: "#E34234",
    margin: "0px 0px 0 50px",
  },
  myAlert:{
    marginTop:"100px"
  }
});

const ProductDetail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const [number, setNumber] = useState(1);
  const cart = useSelector((state) => state.cart.cartProducts);

  useEffect(() => {
    dispatch(getAProduct(id));
  }, []);

  const handleCountProduct = (e) => {
    setNumber(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart([...cart, { ...selectedProduct, numberOfProduct: number }])
    );
  };

  return (
    <div>
      <div className="card-Container--product-info">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <div
                    className="product-info--image-containar"
                    style={{ gridColumnEnd: "span 8" }}
                  >
                    {selectedProduct?.image?.map((img, index) => (
                      <img src={img.data_url} className={classes.productImg} />
                    ))}
                  </div>
                </CardMedia>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div style={{ gridColumnEnd: "span 4" }}>
              <div>
                <h1 className="product-info--text">{selectedProduct?.title}</h1>
                <h4 className="product-info--text">
                  {selectedProduct?.category}
                </h4>
                <h2 className="product-info--text">
                  {selectedProduct?.price} <small>تومان</small>
                </h2>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                  onClick={() => handleAddToCart()}
                  disabled={selectedProduct?.number ? false : true}
                >
                  <strong>
                  {selectedProduct?.number ? "افزودن به سبد خرید" : "موجودی این محصول تمام شده است"}
                  </strong>
                  <AddIcon />
                </Button>
                <input
                  type="number"
                  className="product-info--input"
                  onChange={(e) => handleCountProduct(e)}
                  min={1}
                  max={selectedProduct?.number}
                  defaultValue={1}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className="card-Container--description">
            <h2 className="description--text">توضیحات بیشتر :</h2>
            <p className="description--text">{selectedProduct?.description}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductDetail;
