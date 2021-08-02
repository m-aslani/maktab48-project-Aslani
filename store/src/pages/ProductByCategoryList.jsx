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
import Pagination from "../component/Pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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
    } else if ((e.target.value = "newest")) {
      setProductsByCategory(products);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setProductsByCategory(currentPosts);
  }, [currentPage]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(productsByCategory);
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
            <option aria-label="newest" value="newest" >جدید ترین</option>
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
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductByCategoryList;
