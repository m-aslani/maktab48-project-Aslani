import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useSearchStyle } from "../style/search";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CardProduct from "../component/CardProduct";


const SearchPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const classes = useSearchStyle();
  const [search, setSearch] = useState("");
  const handeSeaech = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className={classes.searchContainer}>
        <Grid container alignItems="flex-end" justify="center">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item className={classes.grid}>
            <TextField
              label="جست و جو"
              className={classes.searchFild}
              value={search}
              onChange={(e) => handeSeaech(e)}
            />
          </Grid>
        </Grid>
      </div>
      <div className="card-Container">
          {products.filter((product)=>{
              if(search === ""){
                  return []
              }
              else if (product.title.includes(search)){
                  return product;
              }
          }).map((product,index)=>{
              return(
                <div key={product.id}>
                <Link to={`/products/${product.id}`} className="link">
                  <CardProduct product={product} />
                </Link>
              </div>
              )
          })}
      </div>
    </div>
  );
};

export default SearchPage;
