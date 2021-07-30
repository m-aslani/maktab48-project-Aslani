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
import Select from "@material-ui/core/Select";

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
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [sort, setSort] = useState("جدید ترین");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    dispatch(getProducts());
    setProductsByCategory(products);
  }, [category]);

  const getValue = ({ price }) => price;

  const handleSort = (e) => {
    setSort(e.target.value);
    if (e.target.value === "expensive") {
      setProductsByCategory(
        productsByCategory.sort((a, b) => getValue(b) - getValue(a))
      );
    } else if (e.target.value === "cheap") {
      setProductsByCategory(
        productsByCategory.sort((a, b) => getValue(a) - getValue(b))
      );
    }
    else if (e.target.value = "newest"){
      setProductsByCategory(products);
    }
  };

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
        <div className="title_listPage">
          <h1 className="title_listPage--title">{category}</h1>
          <Select
            native
            value={sort}
            onChange={(e) => handleSort(e)}
            className="title_listPage--selector"
            label="newest"
          >
            <option aria-label="None" value="" />
            <option value="expensive">گران ترین</option>
            <option value="cheap">ارزان ترین</option>
          </Select>
        </div>
        <div className="card-Container">
          {productsByCategory
            ?.filter((product) => product.category === category)
            .map((product) => {
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
