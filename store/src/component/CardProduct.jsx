import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 300,
    padding: "20px 10px 10px 10px",
    margin: 10,
  },
  media: {
    height: 150,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  img:{
    objectFit: "cover",
    width:150,
    height:150
  }
});

const CardProduct = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} title={product.title}>
          <img className={classes.img} src={product.image[0].data_url} alt="" />
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            قیمت : {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button> */}
      </CardActions>
    </Card>
  );
};
export default CardProduct;
