import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import paymentImg from "../assets/pics/paymentImg.jpg";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, addNewOrder } from "../redux/actions/orderActions";
import { editProduct } from "../redux/actions/productActions";
import { usePaymentStyle } from "../style/payment";

const PaymentPage = () => {
  const classes = usePaymentStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartProducts);
  const user = useSelector((state) => state.user.user);
  const products = useSelector((state)=>state.allProducts.products);
  const [sum, setSum] = useState(0);
  const handleCancel = () => {
    history.replace("/cancelMassage");
  };
  const handleConfirm = () => {
    for(let i=0;i<cart.length;i++){
      for(let j=0;j<products.length;j++){
        if(cart[i].id === products[j].id){
          products[j].number -= cart[i].numberOfProduct
          dispatch(editProduct({...products[j]}))
        }
      }
    }
    dispatch(getAllOrders());
    dispatch(addNewOrder({
        name:user.name,
        address: user.address,
        phoneNumber: user.phoneNumber,
        deliveryTime : user.deliveryTime,
        orderTime: user.orderTime,
        condition:false,
        sum:sum,
        orderedProducts: [...cart]
    }));
    localStorage.clear();
    history.replace("/successfullMassage");
  };

  useEffect(() => {
    cart.map((product, index) => {
      let i = sum + product.price * product.numberOfProduct;
      setSum(i);
    });
  }, []);

  return (
    <div className={classes.paymentContainer}>
      <Container maxWidth="lg">
        <img src={paymentImg} style={{width:"100%"}} />
        <div className={classes.btnContainer}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.confirmBtn}
            onClick={() => handleConfirm()}
          >
            پرداخت
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.cancelBtn}
            onClick={() => handleCancel()}
          >
            انصراف 
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default PaymentPage;
