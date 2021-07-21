import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 300,
    padding: 10,
    margin: 10 ,

  },
  media: {
    height: 140,
    objectFit:"cover"
  },
});

 const CardProduct = ({product}) => {
        const classes = useStyles();

        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image[0].data_url}
                title={product.title}
              />
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
}
export default CardProduct;