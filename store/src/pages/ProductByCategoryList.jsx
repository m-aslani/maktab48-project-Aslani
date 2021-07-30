import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CardProduct from "../component/CardProduct";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, withStyles } from "@material-ui/core";
import SideBar from "../component/SideBar";

const sideBarStyle = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const ProductByCategoryList = () => {
  const classes = sideBarStyle();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const { category } = useParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  let productsByCategory = [];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  products.map((product, index) => {
    if (product.category == category) {
      productsByCategory.push(product);
    }
  });

  return (
    <div className="category-page">
      <div style={{ gridColumnEnd: "span 4" }}>
        <IconButton
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </div>
      <div
        className="category-page--product-container"
        style={{ gridColumnEnd: "span 8" }}
      >
        <div className="title-container">
          <h1 className="title-container--title">{category}</h1>
        </div>
        <div className="card-Container">
          {productsByCategory?.map((product, index) => {
            return (
              <div key={product.id}>
                <Link to={`/products/${product.id}`} className="link">
                  <CardProduct product={product} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductByCategoryList;
